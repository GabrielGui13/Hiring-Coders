import * as Yup from "yup"
import Appointment from "../models/Appointment"
import User from "../models/User"
import File from "../models/File"
import { startOfHour, parseISO, isBefore } from 'date-fns'

class AppointmentController {
    async index(req, res) {

        const { page = 1 } = req.query;

        const appointments = await Appointment.findAll({
            where: { user_id: req.userId, cancelled_at: null },
            order: ['date'],
            attributes: ['id', 'date'],
            limit: 2,
            offset: (page - 1) * 2,
            include: [
                {
                    model: User,
                    as: 'collaborator',
                    attributes: ['id', 'name'],
                    include: [
                        {
                            model: File,
                            as: 'photo',
                            attributes: ['id', 'path', 'url']
                        }
                    ]
                }
            ]
        })

        return res.json({
            appointments
        })
    }

    async store(req, res) {

        const schema = Yup.object().shape({
            collaborator_id: Yup.number().required(),
            date: Yup.date().required(),
        })

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Invalido' })
        }

        const { collaborator_id, date } = req.body

        const isCollaborator = await User.findOne({ //encontra o collaborator de relacionamento
            where: { id: collaborator_id, provider: true }
        })

        if (!isCollaborator) {
            return res.status(401).json({ 
                error: 'Colaborador nao localizado'
            })
        }

        const startHour = startOfHour(parseISO(date))

        if (isBefore(startHour, new Date())) { //se o horario do compromisso for antes da data atual
            return res.status(400).json({ 
                error: 'Horario nao disponivel'
            })
        }

        const checkAvailability = await Appointment.findOne({
            where: { 
                collaborator_id,
                cancelled_at: null,
                date: startHour
            }
        })

        if (checkAvailability) { //se o colaborador ja tem um compromisso
            return res.status(400).json({ 
                error: 'Horario nao disponivel para este colaborador'
            })
        }

        const appointment = await Appointment.create({
            user_id: req.userId,
            collaborator_id,
            date: startHour
        })

        return res.json({appointment})
    }
}

export default new AppointmentController();