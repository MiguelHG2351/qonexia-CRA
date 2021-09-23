import Layout from '../components/layout/layout'
import Footer from '../components/container/footer/'

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
            <Footer />
        </Layout>
    )
}
