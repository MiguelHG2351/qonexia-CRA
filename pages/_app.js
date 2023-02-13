import Head from 'next/head'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../src/libs/apollo-client'
import Layout from '../components/layout/layout'
import { Inter } from '@next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
      </Head>
      <ApolloProvider client={apolloClient}>
        <Layout className={`${inter.variable} font-sans`}>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  )
}
