import React, { useState, useContext }  from 'react'
import styled from 'styled-components'
// import img from '../static/images/MIA3.webp'
import { borderAnimation } from 'GlobalStyle'
import DescriptionPhone from 'components/descriptionPhone'
import DescriptionData from 'context/descriptionContext'

const ProductSection = styled.section`
    background: linear-gradient(to right ,#11b5e1, #1bd6d2, rgba(36, 100, 179, 0.7));
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

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

    & .colors button {
        border-radius: 12px;
        padding: 12px;
        border: 1px solid #fff;
        background-origin: content-box;
        margin: 8px;
    }

    & .btn-primary {
        background: #01579B;
    }

    & .btn-secondary {
        background: #E8EAF6;
    }

    & .btn-warining {
        background: #000;
    }

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

    & .summary {
        background-color: rgba(36, 100, 179, 0.7);
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        font-size: 16.5px;
        padding: 12px;
        & button {
        position: relative;
            color: #fff;
            background-color: transparent;
            font-size: 1em;
            transition: all ease 0.2s;
            user-select: none;
        }

        & button:hover {
            &::after {
                content: '';
                animation: ${borderAnimation} 0.2s forwards;
                padding: 2px;
                bottom: -10px;
                left: 0;
                background-image: linear-gradient(to right, green, aqua);
                position: absolute;
            }
        }

    }

    & .colors {
        display: flex;
        margin-top: 20px;
        justify-content: center;
    }

    & table {
        max-width: 100%;
        width: 100%;
        overflow-x: auto;
    }

    & table, td, tr {
        border: 1px solid #2196f3;
        border-collapse: collapse;
    }

    & td {
        padding: 8px;
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
        & table {
            font-size: 20px;
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

    const [option, setOption] = useState(Number(localStorage.getItem("position")) || 1)

    return <ProductSection className="productList">
        <div className="card-image">
            <img src="https://miguelhg2351.github.io/API/XIAOMI/MI9.webp" alt="Xiaomi MI A3" draggable={false} />
        </div>
        <div className="name">
            <h3>Xiaomi MI A3</h3>
        </div>
        <div className="option">
            <div className="summary">
                <button onClick={() => { setOption(1); localStorage.setItem("position", option) }} className="color">Colores</button>
                <button onClick={() => { setOption(2); localStorage.setItem("position", option) }} className="description">Caracteristicas</button>
                <button onClick={() => { setOption(3); localStorage.setItem("position", option) }} className="precio">Precio</button>
            </div>
            {
                option === 1 ? 
                    <div className="colors">
                        <button aria-hidden="true" className="btn-primary"></button>
                        <button aria-hidden="true" className="btn-secondary"></button>
                        <button aria-hidden="true" className="btn-warining"></button>
                    </div>
                :
                option === 2 ? 
                    <DescriptionPhone /> 
                :
                option === 3 ? 
                <div className="precios">
                    <h2>256$</h2>
                    <p>Pagos con CREDEX, tajeta de crédito y efectivo</p>
                </div>
                :
                console.log("Error")
            }
            
        </div>
    </ProductSection>
}

export default React.memo(ProductList);