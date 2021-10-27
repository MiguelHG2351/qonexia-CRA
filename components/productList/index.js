import React from 'react'
import styles from './productList'
import { gql, useQuery } from '@apollo/client'
// assets
import DescriptionPhone from 'components/descriptionPhone'

export const ALL_PLAYERS_QUERY = gql`
    query {
        getProducts {
            name
        }
    }
`

function ProductList({ data }) {
    const { data: xD, loading } = useQuery(ALL_PLAYERS_QUERY)
    console.log(xD, loading)

    return (
        <>
            <div className="productList">
                <div className="w-11/12 mx-auto">
                    <div className="hero-product md:grid md:grid-cols-2">
                        <div className="device text-center mb-16">
                            <div className="card-image flex justify-center md:justify-start">
                                <div className="image" align="center">
                                    <img src={data.image} alt={data.name} draggable={false} />
                                    <div className="name-product text-xl p-5 text-white rounded-xl cursor-pointer transform hover:scale-95">
                                        <h3>{data.name}</h3>
                                    </div>
                                </div>
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
