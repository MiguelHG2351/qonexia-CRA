import Layout from '../components/layout/layout'
import Footer from '../components/container/footer/'

import { Provider } from 'react-redux'
import { useStore } from '../store'

export default function App ({ Component, pageProps }) {
    const store = useStore(pageProps.initialReduxState)

    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
                <Footer />
            </Layout>
        </Provider>
    )
}
