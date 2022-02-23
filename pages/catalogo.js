import React from 'react'
import Head from 'next/head'

import ProductCatalogo from '../components/container/section/catalogo'

function Catalogo () {
    return (
        <>
            <Head>
                <title>Catalogo | Qonexia</title>
                <meta
                    name="description"
                    content="Todo el catalogo de los productos de Qonexia"
                />
            </Head>
            <ProductCatalogo />
        </>
    )
}

export default Catalogo
