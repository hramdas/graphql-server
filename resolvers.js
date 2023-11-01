const data = require("./db")

const resolvers = {
  Query: {
    getUsers: async (_, { limit, page }) => {
      const offset = limit * (page - 1)

      let result = data.slice(offset)
      result.splice(limit, data.length)
      return result
    }
  },
  Mutation: {
    deleteUser: async (_, { id }) => {
      return id
    },
    updateUser: async (_, { user }) => {
      console.log("user", user)
      return user
    }
  }
}

module.exports = resolvers
