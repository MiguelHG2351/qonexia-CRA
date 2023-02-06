import { ApolloServer } from 'apollo-server-micro'
import typeDefs from 'src/services/graphql/schemas'
import resolvers from 'src/services/graphql/resolvers'
import Cors from 'micro-cors'

const cors = Cors({})

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: process.env.NODE_ENV !== 'production'
})

const startServer = apolloServer.start()

export default cors(async function (req, res) {
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }
  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
})

export const config = {
  api: {
    bodyParser: false,
  },
}
