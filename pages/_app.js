import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../apollo-client'
import Layout from '../components/layout/layout'
import Footer from '../components/container/footer/'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
    const apolloClient = useApollo(pageProps.initialApolloState)

    return (
        <ApolloProvider client={apolloClient}>
            <Layout>
                <Component {...pageProps} />
                <Footer />
            </Layout>
        </ApolloProvider>
    )
}
