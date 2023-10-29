const express = require('express');
const { ApolloServer } = require('@apollo/server')
const { expressMiddleware } = require('@apollo/server/express4')
const bodyParser = require('body-parser');
const resolvers = require('./resolvers');
const typeDefs = require('./schema');
const app = express();
const port = 3030
app.use(bodyParser.json())

const server = new ApolloServer({
  typeDefs,
  resolvers
})

async function startGraphql() {
  await server.start()
  app.use('/graphql', expressMiddleware(server))
}
app.listen(port, async () => {
  startGraphql()
  console.log("Listening on port :", port)
})