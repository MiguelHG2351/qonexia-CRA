import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../src/libs/apollo-client'
import Layout from '../components/layout/layout'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
    const apolloClient = useApollo(pageProps.initialApolloState)

    return (
        <ApolloProvider client={apolloClient}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ApolloProvider>
    )
}
