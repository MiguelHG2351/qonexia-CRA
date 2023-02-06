import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import typeDefs from 'src/services/graphql/schemas'
import resolvers from 'src/services/graphql/resolvers'

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  // introspection: process.env.NODE_ENV !== 'production'
  // introspection: true
})

export default startServerAndCreateNextHandler(apolloServer)
