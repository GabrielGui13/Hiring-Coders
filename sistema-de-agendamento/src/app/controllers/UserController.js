import * as Yup from 'yup'
import User from '../models/User'


class UserController {
    async store(req, res) {

        const schema = Yup.object().shape({ //lib de validacao de dados
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().required().min(6),
        })

        if( !(await schema.isValid(req.body)) ) {
            return res.status(400).json({
                message: "Falha na validacao"
            })
        }

        const userExists = await User.findOne({  //encontra o usuario na db
            where: { email: req.body.email }
        })

        if (userExists) return res.status(400).json({ //checa se realmente recebeu o user
            error: 'Usuario already exists'
        })

        const { id, name, email, provider } = await User.create(req.body) //adiciona um user na db

        return res.json({
            id, 
            name,
            email,
            provider,
        })
    }

    async update(req, res) {
        const schema = Yup.object().shape({ //lib de validacao de dados
            name: Yup.string(),
            email: Yup.string().email(),
            oldPassword: Yup.string().min(6), //se tiver, password e confirmPassword serao required
            password: Yup.string().min(6).when(
                'oldPassword', (oldPassword, field) => //recebe a oldPassword e o field que se refere ao proprio campo
                    oldPassword ? field.required() : field
            ),
            confirmPassword: Yup.string().when( //confirmacao da senha nova
                'password', (password, field) =>
                    password ? field.required().oneOf([Yup.ref('password')]) : field
            )
        })

        if( !(await schema.isValid(req.body)) ) {
            return res.status(400).json({
                message: "Falha na validacao"
            })
        }
        
        const { email, oldPassword} = req.body; //recebe o email e a senha antiga

        const user = await User.findByPk(req.userId) //encontra o usuario pelo id

        if (email && email !== user.email) { //checa se o email eh diferente, so
            const userExists = await User.findOne({ where: { email }})
    
            if (userExists) return res.status(400).json({
                error: 'Usuario already exists'
            })
        }

        if(oldPassword && !(await user.checkPassword(oldPassword))) { //verifica a veracidade das senhas
            return res.status(401).json({
                message: 'Senha nao confere'
            })
        }

        const { id, name, provider } = await user.update(req.body)

        return res.json({
            id, 
            name, 
            email,
            provider,
        })
    }
}

export default new UserController();