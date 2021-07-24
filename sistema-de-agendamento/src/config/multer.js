import multer from 'multer'
import crypto from 'crypto' //gera caracteres aleatorios
import { extname, resolve } from 'path'

export default {
    storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'), //informa onde os arquivos serao salvos
        filename: (req, file, cb) => { //ccntrole sobre os nomes
            crypto.randomBytes(10, (err, res) => {
                if (err) return cb(err);
                //afhusbfibasd.jpg
                return cb(null, res.toString('hex') + extname(file.originalname)); //retorna um ome criptografado e a extensao da imagem
            })
        }
    })
}