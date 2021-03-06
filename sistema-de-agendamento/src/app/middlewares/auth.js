import jwt from "jsonwebtoken"
import { promisify } from 'util'
import authConfig from "../../config/auth"

export default async (req, res, next) => {
    const authHeaders = req.headers.authorization

    if(!authHeaders) {
        return res.status(401).json({
            message: 'Para acessar esse servico eh necessario estar logado'
        })
    }

    const [ , token ] = authHeaders.split(' ')

    try {
        const decoded = await promisify(jwt.verify)(token, authConfig.secret)
        // console.log(decoded) imprime o id, iat, e o exp, inicio e expiracao
        req.userId = decoded.id
        next()
    }
    catch (err) {
        return res.status(401).json({
            message: 'Token invalido'
        })
    }
}