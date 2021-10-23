import React from 'react'
import styles from './styles/productList'
// assets
import DescriptionPhone from 'components/descriptionPhone'

function ProductList({ data }) {
    return (
        <>
            <div className="productList py-12">
                <div className="w-11/12 mx-auto">
                    <div className="hero-product md:grid md:grid-cols-2">
                        <div className="device text-center mb-16">
                            <div className="card-image" align="center">
                                <img src={data.image} alt={data.name} draggable={false} />
                            </div>
                            <div className="name-product text-xl p-5 text-white rounded-xl cursor-pointer transform hover:scale-95">
                                <h3>{data.name}</h3>
                            </div>
                        </div>
                        <div className="description p-5 rounded-3xl">
                            <DescriptionPhone data={data} />
                        </div>
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
