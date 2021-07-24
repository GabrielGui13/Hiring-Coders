import express from 'express';
import routes from './router';
import path from 'path';

class App {
    constructor() {
        this.server = express(); //cria o app com o nome server
        this.middlewares(); //insere os middlewares
        this.routes();
    }

    middlewares() {
        this.server.use(express.json()); //para retornar as req, res em JSON
        this.server.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))) //cria uma rota static para passar arquivos
    }

    routes() {
        this.server.use(routes)
    } 
}

export default new App().server; //exporta o que seria o app == express()