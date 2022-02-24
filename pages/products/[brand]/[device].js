/* eslint-disable multiline-ternary */
import { useEffect, useState } from 'react'
import styles from 'styles/devices'
import { gql, useLazyQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import mockDevice from 'mocks/mockDevice'

import ProductList from 'components/productList/'

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

function Product() {
    const router = useRouter()
    const [device, setDevice] = useState({
        device: {
            ...mockDevice,
        },
        products: [],
        loading: false
    })

    // eslint-disable-next-line no-unused-vars
    const [loadingProduct, { called, loading, data }] = useLazyQuery(
        query(router.query.device),
        {
            ssr: false,
        }
    )

    useEffect(() => {
        if (router.query?.device && !device.loading) {
            loadingProduct()
        }
    }, [router.query.device])

    useEffect(() => {
        if (typeof data !== 'undefined') {
            console.log(data)
            setDevice({
                device: data.getProduct,
                products: data.getProducts,
                loading: true
            })
        }
    }, [loading])

    return (
        <>
            <Head>
                <title>{router.query.device || 'Loading'} | Qonexia</title>
            </Head>
                    <div className="container-devices py-12 flex flex-col gap-y-10">
                        {/* Información de cada producto */}
                        <ProductList data={device.device} />
                        <section className="similarities overflow-hidden w-11/12 mx-auto text-white">
                            <h3 className="text-xl font-bold">Similares</h3>
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
            <style jsx>{styles}</style>
        </>
    )
}

/* Que el Header almacene todo el sitio y que */
export default Product
