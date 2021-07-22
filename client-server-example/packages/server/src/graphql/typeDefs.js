import { typeDefs as clientTypeDefs } from "./Client/Client";
import { typeDefs as demandTypeDefs } from "./Demand/Demand";
import { typeDefs as listTypeDefs } from "./List/List";
import { typeDefs as nodeTypeDef } from './Node/Node';
import { gql } from "apollo-server-express"

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

export default typeDefs;