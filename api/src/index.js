const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const AuthPayload = require('./resolvers/Auth')
const Subscription = require('./resolvers/Subscription')
const Feed = require('./resolvers/Feed')
const { PRISMA_ENDPOINT, APP_SECRET } = require('../env')

const resolvers = {
  Query,
  Mutation,
  AuthPayload,
  Subscription,
  Feed
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: PRISMA_ENDPOINT,
      secret: APP_SECRET,
      debug: true,
    }),
  }),
})

const options = {
  port: 4000,
}

server.start(options, ({ port }) =>
  console.log(`Server started on port ${port}.`)
)
