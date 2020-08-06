import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import img from 'static/images/mi10.png'
import { opacityAnimation } from 'GlobalStyle'
import DescriptionPhone from 'components/descriptionPhone'
import DescriptionData from 'context/descriptionContext'
import processData from 'data/'

const ProductSection = styled.section`
    background: linear-gradient(to right ,#11b5e1, #1bd6d2, rgba(36, 100, 179, 0.7));
    display: flex;
    flex-direction: column;
    justify-content: center;
    animation: ${opacityAnimation} 0.4s;


    & .card-image {
        display: flex;
        flex-wrap: wrap;
    }

    & .card-image img {
        width: 100%;
        height: auto;
        user-select: none;
    }

    & .name {
        color: rgba(255, 255, 255, 0.8);
    }

    /* & .colors button {
      
    } */

    & .name {
        text-align: center;
        background-image: linear-gradient(to right, #1ebcff, blue);
        padding: 22px;
    }

    & .option {
        margin-top: 10px;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    & .colors {
        display: flex;
        margin-top: 20px;
        justify-content: center;
    }
    
    .precios {
        color: purple;
        margin: auto;
        text-align: center;
        margin: 12px;
    }

    @media screen and (max-width: 300px) {
        & .summary {
            font-size: 15px;
        }
    }

    @media screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto auto;
        grid-template-areas: "images Menu" 
                              "name Menu";

        align-items: start;
        & .card-image {
            grid-area: images;
            height: 100%;
            & img {
                max-width: 100%;
                height: auto;
            }
        }

        & .name {
            grid-area: name;
        }

        & .option {
            margin: 0;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            grid-column: 2 / span 3;
            grid-area: Menu;
            height: 100%;
        }

    }

    /* Detecta el modo oscuro en el navegador o en el sistema operativo (Windows es más usado) */

    /* 
    @media (prefers-color-scheme: dark) {
            background: red;
    } */

    /*
    @media (prefers-color-scheme: light) {
            background: orange;
    } */


`

function ProductList() {

    const context = useContext(DescriptionData)
    console.log(context)

    const params = useParams()

    const data = processData(context, params)

    return <ProductSection className="productList">
        <div className="card-image">
            <img src={img} alt="Xiaomi MI A3" draggable={false} />
        </div>
        <div className="name">
            <h3>{data.name}</h3>
        </div>
        <div className="option">
        <DescriptionPhone data={data} />
        <div className="precios">
            <h2>{data.precio}$</h2>
            <p>Pagos con CREDEX, tajeta de crédito y efectivo</p>
            </div>
        </div>
    </ProductSection>
}

export default React.memo(ProductList);

/* Idea: Añadir recomendaciones los dispositivos por los que paso el ciclo añadiendolos con Array.prototype.push(element)  */