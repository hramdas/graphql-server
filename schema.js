const typeDefs = `#graphql
  type User{
    id:ID!
    name: String!
    age: Int
  }

  type Query{
    getUsers(limit:Int=2, page:Int=1) : [User]!
  }

  type Mutation{
    deleteUser(id:ID): String
    updateUser(user:userInput):User
  }

  input userInput {
    id:ID!
    name:String!
    age:Int
  }


`
module.exports = typeDefs