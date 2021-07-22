import { resolvers as demandResolvers } from "./Demand/Demand";
import { resolvers as clientResolvers } from "./Client/Client";
import { resolvers as listResolvers } from "./List/List";
import { resolvers as nodeResolvers } from './Node/Node';

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

export default resolvers;