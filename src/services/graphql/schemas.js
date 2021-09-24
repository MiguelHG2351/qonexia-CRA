import { gql } from 'apollo-server-micro'

export default gql`
    type Phone {
        name: String!
        price: Int!
        image: String!
        brand: String!
        nfc: Boolean
        camera: [Int]!
        cpu: String!
        ram: Int!
        storage: Int!
        battery: Int!
        so: String!
        ui: String!
    }

    type Query {
        getProducts: [Phone]
        getProduct(name: String!): Phone
        findProducts(name: String!): [Phone]
    }
`
