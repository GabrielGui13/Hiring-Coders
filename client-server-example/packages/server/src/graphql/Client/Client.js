import { gql } from 'apollo-server-express'
import { valueFromASTUntyped } from 'graphql'
import createRepository from '../../io/database/createRepository'
import { ListSortmentEnum } from '../List/List'
import * as uuid from 'uuid'

const clientRepository = createRepository('client')

export const typeDefs = gql`
    type Client implements Node {
        id: ID!
        name: String!
        email: String!
        disabled: Boolean!
    }

    type ClientList implements List {
        items: [Client!]!
        totalItems: Int!
    }

    input ClientListFilter {
        name: String
        email: String
        disabled: Boolean
    }

    input ClientListOptions { # deve ser input pois ele so eh usado como argumento, e nao retorna nada
        take: Int
        skip: Int
        sort: ListSort
        filter: ClientListFilter
    }

    extend type Query {
        client(id: ID!): Client,
        clients(options: ClientListOptions): ClientList,
    }

    input CreateClientInput {
        name: String!
        email: String!
    }

    input UpdateClientInput {
        id: ID!
        name: String!
        email: String!
    }

    extend type Mutation {
        createClient(input: CreateClientInput!): Client!
        updateClient(input: UpdateClientInput!): Client!
        deleteClient(id: ID!): Client!
        enableClient(id: ID!): Client!
        disableClient(id: ID!): Client!
    }
`

export const resolvers = {
    Query: {
        client: async (
            _, //parent
            { id }, //objeto com os argumentos
        ) => {
            const clients = await clientRepository.read();
            return clients.find(client => client.id === id); //procura na array um client com o id passado por parametro
        },
        clients: async (_, args) => {
            const { take = 10, skip = 0, sort, filter } = args.options || {};

            const clients = await clientRepository.read(); //coloca em uma variavel todos os dados da database local

            if (sort) { //se o sort for definido,
                clients.sort((clientA, clientB) => { //todos os return fazem referencia ao .sort()
                    if (!['name', 'email', 'disabled'].includes(sort.sorter)) //checa se o "sorter" da ListSort esta definido
                        throw new Error (`Cannot sort by field "${sort.sorter}.`) //caso nao esteja, lanca um erro

                    const fieldA = clientA[sort.sorter] //resgata todos os clients com o sorter
                    const fieldB = clientB[sort.sorter] // clientB['name']

                    if (typeof fieldA === 'string') { //checa se o field tem uma string, entao pode ser "name" ou "email"
                        if (sort.sortment === ListSortmentEnum.ASC) { //checa no enum qual o tipo de ordenacao, ascendente o decrescente
                            return fieldA.localeCompare(fieldB) //forma de comparar strings
                        }
                        else {
                            return fieldB.localeCompare(fieldA)
                        }
                    }

                    if (sort.sortment === ListSortmentEnum.ASC) { //se for um booleano
                        return Number(fieldA) - Number(fieldB) //utiliza o cast para transformar os booleans em numero
                    }
                    else {
                        return Number(fieldB) - Number(fieldA)
                    }

                })
            }

            const filteredClients = clients.filter((client) => { //forma de filtrar como o SELECT LIKE do SQL, que recebe o 
                if (!filter || Object.keys(filter).length === 0) return true //checa se nao ha filtro, ouu o filtro foi inicializado sem nada, retorna true (lista normal)

                return Object.entries(filter).every(([field, value]) => {
                    if (client[field] === null && client[field] === undefined) return false //checa se o field eh diferente de name, email ou disabled

                    if (typeof value === 'string') {
                        if (value.startsWith('%') && value.endsWith('%')) { //LIKE "%nome%"
                            return client[field].includes(value.substr(1, value.length - 2)) //retorna qualquer valor que tenha "nome" nele
                        }
                        else if (value.startsWith('%')) { //LIKE "%nome"
                            return client[field].endsWith(value.substr(1)); //retorna qualquer valor que finalize com "nome"
                        }
                        else if (value.endsWith('%')) { //LIKE "nome%"
                            return client[field].startsWith(value.substr(0, value.length - 1)) //retorna qualquer valor que inicie com "nome"
                        }
                        return client[field] === value; ///retorna os valores identicos
                    }
                    return client[field] === value; //retorna os booleanos certos
                })

            })

            return { //retorna o List dando slice no array pre ordenado ou nao
                items: filteredClients.slice(skip, skip + take), //para pegar parte especificar da array, 10, 20, controla quantos valores trazer de uma vez
                totalItems: filteredClients.length 
            }
        }
    },

    Mutation: {
        createClient: async (_, { input }) => {
            const clients = await clientRepository.read();

            const client = {
                id: uuid.v4(), 
                name: input.name, 
                email: input.email,
                disabled: false
            }

            await clientRepository.write([...clients, client])

            return client
        },

        updateClient: async (_, { input }) => {
            const clients = await clientRepository.read();

            const currentClient = clients.find(client => client.id === input.id) //procuura no db um cliente com o id passado por parametro

            if (!currentClient) throw new Error(`No client with id ${input.id}`) //checa se ha ou nao

            const updatedClient = { //cria um novo cliente atualizado e sobreescreve seus valores
                ...currentClient,
                name: input.name, 
                email: input.email,
            }

            const updatedClients = clients.map((client) => { //percorre a db
                if (client.id === updatedClient.id) return updatedClient; //troca o unico cliente com id's iguais
                return client //retorna normal o resto
            })

            await clientRepository.write(updatedClients) //reescreve a db com os novos clients

            return updatedClient
        },

        deleteClient: async (_, { id }) => {
            const clients = await clientRepository.read(); 

            const client = clients.find(client => client.id === id)

            if (!client) throw new Error(`Cannot delete client with id ${id}`)

            const updatedClients = clients.filter(client => client.id !== id) //todo mundo passa menos quem tiver id semelhante

            await clientRepository.write(updatedClients) 

            return client;
        },

        enableClient: async (_, { id }) => {
            const clients = await clientRepository.read();

            const currentClient = clients.find(client => client.id === id) //procuura no db um cliente com o id passado por parametro

            if (!currentClient) throw new Error(`No client with id ${id}`) //checa se ha ou nao
            if (!currentClient.disabled) throw new Error(`Client ${id} is already enabled`)


            const updatedClient = { //cria um novo cliente atualizado e sobreescreve seus valores
                ...currentClient,
                disabled: false
            }

            const updatedClients = clients.map((client) => { //percorre a db
                if (client.id === updatedClient.id) return updatedClient; //troca o unico cliente com id's iguais
                return client //retorna normal o resto
            })

            await clientRepository.write(updatedClients) //reescreve a db com os novos clients

            return updatedClient
        },

        disableClient: async (_, { id }) => {
            const clients = await clientRepository.read();

            const currentClient = clients.find(client => client.id === id) //procuura no db um cliente com o id passado por parametro

            if (!currentClient) throw new Error(`No client with id ${id}`) //checa se ha ou nao
            if (currentClient.disabled) throw new Error(`Client ${id} is already disabled`)


            const updatedClient = { //cria um novo cliente atualizado e sobreescreve seus valores
                ...currentClient,
                disabled: true
            }

            const updatedClients = clients.map((client) => { //percorre a db
                if (client.id === updatedClient.id) return updatedClient; //troca o unico cliente com id's iguais
                return client //retorna normal o resto
            })

            await clientRepository.write(updatedClients) //reescreve a db com os novos clients

            return updatedClient
        }
    }
}