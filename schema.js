const typeDefs = `#graphql
  type User{
    id:ID!
    name: String!
    age: Int
  }

  type Query{
    getUsers : [User]
  }

`
module.exports = typeDefs