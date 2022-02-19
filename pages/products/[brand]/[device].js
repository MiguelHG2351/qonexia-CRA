/* eslint-disable multiline-ternary */
import styles from 'styles/devices'
import { gql, useQuery } from '@apollo/client'
import dynamic from 'next/dynamic'
import { withRouter } from 'next/router'
import Head from 'next/head'
import Header from 'components/container/Header/products'
import Image from 'next/image'
import { ProductContextProvider } from 'components/context/ProductContext'
import ClientOnly from 'components/ClientOnly'
const ContentLoaded = dynamic(import('react-content-loader'), { ssr: false })

const ProductList = dynamic(() => import('components/productList'), {
    // eslint-disable-next-line react/display-name
    loading: () => <Preloader />,
})

function Preloader() {
    return (
        <ContentLoaded className="w-full h-screen">
            <rect x="229" y="78" rx="2" ry="2" width="140" height="10" />
            <rect x="230" y="122" rx="2" ry="2" width="140" height="10" />
            <rect x="5" y="57" rx="2" ry="2" width="202" height="400" />
            <rect x="233" y="164" rx="0" ry="0" width="146" height="9" />
            <rect x="232" y="210" rx="0" ry="0" width="153" height="19" />
        </ContentLoaded>
    )
}

const query = (device) => gql`
            query {
                getProduct(name: "${device}") {
                    name
                    screen
                    price
                    image
                    brand
                    nfc
                    camera_back
                    camera_front
                    cpu
                    ram
                    storage
                    battery
                    so
                    ui
                    colors
                    
                }
                getProducts {
                    name,
                    brand
                }
            }
`

function Product({ router }) {
    const { loading, error, data } = useQuery(query(router.query.device))

    let device, products
    if (!loading) {
        device = data.getProduct
        products = data.getProducts
    }

    if (error) return <p>Error</p>

    return (
        <>
            <Head>
                <title>{router.query.device || 'Loading'} | Qonexia</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap"
                    rel="stylesheet"
                />
            </Head>
            {!loading ? (
                <>
                    <Header />
                    <ClientOnly>
                        <ProductContextProvider initialState={products}>
                            <div className="container-devices py-12 flex flex-col gap-y-10">
                                <ProductList data={device} />
                                <section className="similarities overflow-hidden w-11/12 mx-auto text-white">
                                    <h3 className="text-xl font-bold">
                                        Similares
                                    </h3>
                                    <div className="similarities-list flex flex-grow flex-shrink overflow-x-auto whitespace-nowrap gap-2 rounded-xl">
                                        <div
                                            className="product cursor-pointer"
                                            title="redmi note 8"
                                        >
                                            <Image
                                                src="/static/images/product/xiaomi/pocox3nfc.png"
                                                id="poco"
                                                width={80}
                                                height={80}
                                            />
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </ProductContextProvider>
                    </ClientOnly>
                </>
            ) : (
                <div className="w-full h-screen"></div>
            )}
            <style jsx>{styles}</style>
        </>
    )
}

/* Que el Header almacene todo el sitio y que */
export default withRouter(Product)
