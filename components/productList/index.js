import React from 'react'
import styles from './productList'
import { gql, useQuery } from '@apollo/client'

// components
import ProductHero from 'components/product/ProductHero'
import DescriptionPhone from 'components/product/ProductFeatures'
import ProductAction from 'components/product/ProductAction'

const ALL_PLAYERS_QUERY = gql`
    query {
        findProducts(name: "Poco x3") {
            name
        }
    }
`

function ProductList({ data }) {
    return (
        <>
            <div className="productList">
                <div className="w-11/12 mx-auto">
                    <div className="hero-product flex flex-col gap-y-4 md:grid md:grid-cols-3 md:place-items-center">
                        <ProductHero image={data.image} name={data.name} />
                        <DescriptionPhone data={data} />
                        <ProductAction price={data.price} colors={data.colors} />
                    </div>
                </div>
            </div>
            <style jsx>
                {styles}
            </style>
        </>
    )
}

export default React.memo(ProductList)

/* Idea: Añadir recomendaciones los dispositivos
por los que paso el ciclo añadiendolos con Array.prototype.push(element)  */
/* Según el tipo de disposivo anidar las recomendaciones */
/*          ^ */
/*          | */
/*         type, description */

/* utilizar rem para determinar el tamaño de los botones, cambio el font-size atravez de la clase */
// https://cdn.dribbble.com/users/8962318/screenshots/16899377/media/07da6aab54198b6450440f8050e3034f.png?compress=1&resize=1200x900&vertical=top
