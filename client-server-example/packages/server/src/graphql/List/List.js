import { gql } from 'apollo-server-express'

export const typeDefs = gql`
    interface List { #criou a forma de retorna todos os clientes
        items: [Node!]!
        totalItems: Int!
    }

    enum ListSortmentEnum { # forma de enum pro sort
        ASC
        DESC
    }

    input ListSort { #cria na lista o parametro de sort
        sorter: String!
        sortment: ListSortmentEnum!
    }
`

export const ListSortmentEnum = Object.freeze({
    ASC: 'ASC',
    DESC: 'DESC'
})

export const resolvers = {
    List: {
        __resolveType: () => null
    }
}