import React from 'react'
import Header from 'container/Header/products'
import useSEO from 'hooks/useSEO'

import ProductCatalogo from 'container/section/catalogo'

function Catalogo() {

    useSEO({description: "Todo el catalogo de los productos de Qonexia", title: "Catalogo | Qonexia"})
    return <>
        <Header />
        <ProductCatalogo />
    </>
}

export default Catalogo