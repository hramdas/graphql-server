# graphql-server

## Schema
```
const typeDefs = #graphql
  type User{
    id:ID!
    name: String!
    age: Int
  }

  type Query{
    getUsers : [User]
  }
```

## Resolvers

```
const resolvers = {
  Query: {
    getUsers: async () => {
      return data
    }
  }
}


```