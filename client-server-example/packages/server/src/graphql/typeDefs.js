import { typeDefs as clientTypeDefs } from "./Client/Client";
import { typeDefs as demandTypeDefs } from "./Demand/Demand";
import { gql } from "apollo-server-express"

const typeDefs = gql`
    type Query {
        _root: String
    }

    ${clientTypeDefs}
    ${demandTypeDefs}
`

export default typeDefs;