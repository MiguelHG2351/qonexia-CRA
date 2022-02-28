import React from 'react'
import styles from './productList'

// components
import ProductHero from 'components/product/ProductHero'
import DescriptionPhone from 'components/product/ProductFeatures'
import ProductAction from 'components/product/ProductAction'
function ProductList({ data }) {
    return (
        <>
            <section className="productList">
                <div className="hero-product flex flex-col gap-y-4 md:grid md:grid-cols-3 md:place-items-center">
                    <ProductHero image={data.image} name={data.name} />
                    <DescriptionPhone data={data} />
                    <ProductAction price={data.price} colors={data.colors} />
                </div>
            </section>
            <style jsx>{styles}</style>
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
