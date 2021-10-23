import { gql } from 'apollo-server-micro'

export default gql`
    type Phone {
        name: String!
        screen: Float!
        price: Int!
        image: String!
        brand: String!
        nfc: Boolean
        camera_back: [Int]!
        camera_front: [Int]!
        cpu: String!
        ram: Int!
        storage: Int!
        battery: Int!
        so: String!
        ui: String!
        colors: [String]!
    }

    type Query {
        getProducts: [Phone]
        getProduct(name: String!): Phone
        findProducts(name: String!): [Phone]
    }
`
