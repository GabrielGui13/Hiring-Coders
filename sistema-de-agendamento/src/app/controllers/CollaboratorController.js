import User from "../models/User";
import File from "../models/File";

class CollaboratorController {
    async index(req, res) {

        const collaborator = await User.findAll({
            where: { provider: true },
            attributes: ['id', 'name', 'email', 'photo_id'], //diz quais informacoes retornar
            include: [{ //retorna toda a table File e o content
                model: File,
                as: 'photo', //troca o nome do retorno da tabela
                attributes: ['name', 'path', 'url'] //retorna o especifico do relacionamento
            }] 
        })

        return res.json(collaborator);

    }
}

export default new CollaboratorController();