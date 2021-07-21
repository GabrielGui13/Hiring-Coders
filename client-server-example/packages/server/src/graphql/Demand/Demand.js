import { gql } from 'apollo-server-express'

export const typeDefs = gql`
    type Demand { 
        id: ID!
        name: String!
        client: Client!
        deadline: String
    }

    extend type Query {
        demands: [Demand]!
    }
`
//ja usa a sintaxe de GraphQL, ! diz que eh obrigatorio. Todos sao grafos/entidades, pequenos dominios da aplicacao com dados, e consegue fazer relacao entre os grafos (Client no Demand)

export const resolvers = { //ja criou a especificacao da api, poderia buscar demandas (Demand), mas nao tem como funcionar, assim sera usado os resolvers, resolvem a query dentro do graphql
    Query: { //qual resolver tem dentro da raiz? Query (problema do root)
        demands: async () => {
            
        } //o que tem dentro de query? Demands. o retorno do demands eh o retorno do backend pro front, etc
    } 
}