const { buildSchema } = require('graphql')

module.exports = buildSchema(`
  type Product {
    name: String!
    price: Float!
  }
  type Address {
    city: String!
    street: String!
    postCode: String!
  }
  type Position {
    lng: Float!
    lat: Float!
  }
  type Location {
    id: String!
    name: String!
    position: Position!
    phone: String!
    address: Address!
    products: [Product]!
  }
  type Query {
    locations(
      lat: Float!
      lng: Float!
      radius: Float!
      search: String
      price: Float
    ): [Location]!
    products: [String]!
  }
`);