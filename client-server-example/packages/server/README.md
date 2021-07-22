# Passo a passo para uso de GraphQL e Apollo-Express

## **Backend API**
### **Dependências**
```console
npm install express apollo-server-express graphql cors
```
- Dependências para colocar o servidor graphql no ar

 ```console
npm install -D esm nodemon
```
- Dependências de desenvolvimento

```json
  "scripts": {
    "start": "node -r esm .",
    "dev": "nodemon -r esm ."
  }
```
- Script para rodar o js em type Module


### **Passo a passo**
#### Schemas
- Criar os schemas do GraphQL
- Cada schema terá os types definidos, com o nome e o tipo, sendo uma entidade, são os typeDefs
- Os inputs serão apenas fôrmas para os types, como o type do Typescript
- Dentro das typeDefs, serão definidas as Query, da forma 'nome(variaveis): retorno', onde define como será a comunicação
- Dentro dos typeDefs também deverão ser definidos as Mutations, as Queries retornam os valores, e as Mutations manipulam-os
- As mutations, assim como as queries, deverão ser definidas, com 'nome(variaveis): retorno'
- Após definir as typeDefs, as carcaças, deve-se criar os resolvers
- Os resolvers serão divididos entre Query{ } e Mutation { }
- Dentro das chaves respectivas, deverá ser passado o mesmo nome que foi definido na Query e na Mutation dos typeDefs
- Cada nome será vinculado a uma função que será executada no momento da requisição, em resumo os resolvers serão a lógica por trás da Query e da Mutation
- Entidades sem variáveis serão definidas 'nome: () => { resultado }'
- Entidades com variáveis serão definidas 'nome: (root, args, context, info) => { resultado }'
- A primeira variável deve ser desconsiderada, e utilizar os args com destructuring
- Após criar os typeDefs e resolvers devidamente modularizados, todos devem ser reunidos em typeDefs e resolvers globais

```js
input ClientListOptions {
    take: Int
    skip: Int
    sort: ListSort
    filter: ClientListFilter
}

type Client implements Node {
    id: ID!
    name: String!
    email: String!
    disabled: Boolean!
}

extend type Query {
    client(id: ID!): Client,
    clients(options: ClientListOptions): ClientList,
}

extend type Mutation {
    createClient(input: CreateClientInput!): Client!
    updateClient(input: UpdateClientInput!): Client!
    deleteClient(id: ID!): Client!
    enableClient(id: ID!): Client!
    disableClient(id: ID!): Client!
}



const typeDefs = gql`
    type Query {
        _root: String
    }

    type Mutation {
        _root: String #vazio para extender por fora
    }

    ${nodeTypeDef}
    ${clientTypeDefs}
    ${demandTypeDefs}
    ${listTypeDefs}
`

const resolvers = {
    ...nodeResolvers,
    ...demandResolvers,
    ...clientResolvers,
    ...listResolvers,


    Query: {
        ...demandResolvers.Query,
        ...clientResolvers.Query
    },

    Mutation: {
        ...clientResolvers.Mutation,
    }
}
```

#### Server
- Ao finalizar o schema, um servidor express deve ser iniciado de maneira comum, porém as rotas nao serão definidas por ele
- Após definir o app.listen( ), o ApolloServer deve ser iniciado
- A classe ApolloServer deve ser instanciada com o nome 'server', e será passado por parâmetro um objeto contendo as typeDefs e os resolvers finais do schema
- Após a instância, o método applyMiddleware( ) deverá ser invocado vindo do server, e também receberá alguns atributos
- O 'app' do express deve ser passado como middleware para rodar o ApolloServer
- O 'cors' terá como valor um objeto com o atributo 'origin', passando a url do client, será de onde ele receberá as requisições
- o 'bodyParserConfig' com valor true irá transcrever os dados para da url para algo legível como o JSON
```js
const server = new ApolloServer({
    typeDefs, 
    resolvers
})  

server.applyMiddleware({
    app,
    cors: {
        origin: 'http://localhost:3000'
    },
    bodyParserConfig: true
})
```