/* eslint-disable multiline-ternary */
import { useEffect, useState } from 'react'
import { useIsomorphicLayoutEffect } from 'hooks/useIsomorphicLayoutEffect'
import styles from 'styles/devices'
import { gql, useLazyQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import Head from 'next/head'
import mockDevice from 'mocks/mockDevice'

import ProductList from 'components/productList/'
import { Similarities } from 'components/product/Similarities'

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
    const suggestions = mockDevice.suggestions
    const router = useRouter()
    const [device, setDevice] = useState({
        device: {
            ...mockDevice,
        },
        products: [],
        loading: false,
    })

    // eslint-disable-next-line no-unused-vars
    const [loadingProduct, { called, loading, data }] = useLazyQuery(
        query(router.query.device),
        {
            ssr: false,
        }
    )

    useIsomorphicLayoutEffect(() => {
        if (router.query?.device && !device.loading) {
            loadingProduct()
        }
    }, [router.query.device])

    useEffect(() => {
        if (typeof data !== 'undefined' && !device.loading) {
            console.log(data)
            setDevice({
                device: data.getProduct,
                products: data.getProducts,
                loading: true,
            })
        }
    }, [loading, device])

    return (
        <>
            <Head>
                <title>{router.query.device || 'Loading'} | Qonexia</title>
            </Head>
            <div className="container-devices w-11/12 mx-auto py-12 flex flex-col gap-y-10">
                {/* Información de cada producto */}
                <ProductList data={device.device} />
                <Similarities data={suggestions} />
            </div>
            <style jsx>{styles}</style>
        </>
    )
}

/* Que el Header almacene todo el sitio y que */
export default Product
