import { gql } from 'apollo-server-micro'

export default gql`
    type User {
        id: ID
        login: String
        avatar_url: String
    }

    type Query {
        getUsers: [User]
        getUser(name: String!): User!
    }
`
