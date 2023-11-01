const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4')
const bodyParser = require('body-parser');
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const app = express();
const port = 3060
app.use(bodyParser.json())
const server = new ApolloServer({
  typeDefs,
  resolvers
})
const graphqlServer = async () => {
  await server.start()
  app.use('/graphql', expressMiddleware(server))
}

app.listen(port, () => {
  graphqlServer()
  console.log('listening on port ' + port)
});