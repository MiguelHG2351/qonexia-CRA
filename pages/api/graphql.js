import { ApolloServer } from 'apollo-server-micro'
import {
    ApolloServerPluginLandingPageGraphQLPlayground,
    ApolloServerPluginLandingPageDisabled,
} from 'apollo-server-core'
import typeDefs from 'src/services/graphql/schemas'
import resolvers from 'src/services/graphql/resolvers'

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    introspection: true,
    plugins: [
        process.env.NODE_ENV === 'production'
            ? ApolloServerPluginLandingPageDisabled()
            : ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
})

const startServer = apolloServer.start()

export default async function (req, res) {
    await startServer
    await apolloServer.createHandler({
        path: '/api/graphql',
    })(req, res)
}

export const config = {
    api: {
        bodyParser: false,
    },
}
