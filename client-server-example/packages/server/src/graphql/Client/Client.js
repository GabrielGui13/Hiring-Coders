import { gql } from 'apollo-server-express'

export const typeDefs = gql`
    type Client {
        id: ID!
        name: String!
        email: String!
        disabled: Boolean!
    }

    extend type Query {
        client(id: ID!): Client,
        clients: [Client!]
    }
`

export const resolvers = {
    Query: {
        client: async () => {
            
        }
    }
}