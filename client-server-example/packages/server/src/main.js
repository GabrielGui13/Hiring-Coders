import express from 'express'
import cors from 'cors'

import { ApolloServer } from 'apollo-server-express'
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

const app = express();

// '/graphql' abre uma rota da doc do graphql

const server = new ApolloServer({
    typeDefs, 
    resolvers
})  

server.applyMiddleware({ //para fazer o apollo server funcionar com express
    app,
    cors: {
        origin: 'http://localhost:3000'
    },
    bodyParserConfig: true
})

//app.use(cors()); //roda para todas as requisicoes
const enableCors = cors({ origin: 'http://localhost:3000' }) //apenas ter cors do client origin

/* app.get('/status', (_, res) => { //forma de sinalizar que nao vai usar
    res.send({
        status: 'Okay'
    })
}) */

/* app
    .options('/authenticate', enableCors) //antes de qualquer requuisicao, o browser faz um req options, para validar o origin/metodo
    .post('/authenticate', express.json(), enableCors, (req, res) => { //usa json e usa o cors
    console.log(req.body);
    res.send({
        Okay: true
    })
}) */

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';

app.listen(PORT, HOSTNAME, () => {
    console.log(`Server is listening at http://${HOSTNAME}:${PORT}`);
})