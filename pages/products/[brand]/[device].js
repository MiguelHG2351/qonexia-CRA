/* eslint-disable multiline-ternary */
import { useState, useEffect } from 'react'
import { gql, useLazyQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import Head from 'next/head'
import mockDevice from 'src/mocks/mockDevice'

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
    })

    // eslint-disable-next-line no-unused-vars
    const [loadingProduct, { called, loading, data }] = useLazyQuery(
        query(router.query.device),
        {
            ssr: false,
            onError: (error) => console.log(error),
            // Estas dos lineas GOD evitan que aparezca con los valores del mock el componente de Similarities
            fetchPolicy: 'cache-and-network',
            nextFetchPolicy: 'cache-first',
            onCompleted: (data) => {
                console.log(data)
                if (data.getProduct === null) {
                    router.push('/')
                } else {
                    setDevice({
                        device: data.getProduct,
                        products: data.getProducts,
                    })
                }
            },
        }
    )

    useEffect(() => {
        console.log('called', called)
        console.log('device', router.query)
        if (router.query?.device && !called) {
            console.log('here')
            ;(() => loadingProduct())()
        }
    }, [router.query.device])

    return (
        <>
            <Head>
                <title>{router.query.device || 'Cargando...'} | Qonexia</title>
                <meta name="description" content='Información sobre un dispositivo de la tienda' />
            </Head>
            <div className="container-devices w-11/12 mx-auto py-12 flex flex-col gap-y-10">
                {/* Información de cada producto */}
                <ProductList data={device.device} />
                <Similarities data={suggestions} />
            </div>
        </>
    )
}

/* Que el Header almacene todo el sitio y que */
export default Product
