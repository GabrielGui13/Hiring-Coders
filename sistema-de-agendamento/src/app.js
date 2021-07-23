import express from 'express';
import routes from './router';

class App {
    constructor() {
        this.server = express(); //cria o app com o nome server
        this.middlewares(); //insere os middlewares
        this.routes();
    }

    middlewares() {
        this.server.use(express.json()); //para retornar as req, res em JSON
    }

    routes() {
        this.server.use(routes)
    } 
}

export default new App().server; //exporta o que seria o app == express()