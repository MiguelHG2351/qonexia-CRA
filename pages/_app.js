import { ApolloProvider } from '@apollo/client'
import client from '../apollo-client'
import Layout from '../components/layout/layout'
import Footer from '../components/container/footer/'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
    return (
        <ApolloProvider client={client}>
            <Layout>
                <Component {...pageProps} />
                <Footer />
            </Layout>
        </ApolloProvider>
    )
}
