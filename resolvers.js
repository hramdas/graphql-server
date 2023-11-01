const data = require("./db")

const resolvers = {
  Query: {
    getUsers: async () => {
      return data
    }
  }
}

module.exports = resolvers
