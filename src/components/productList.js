import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import huawei from 'static/images/icon-huawei.svg'
import xiaomi from 'static/images/icon-xiaomi.svg'
import apple from 'static/images/icon-apple.svg'
import gopro from 'static/images/icon-gopro.svg'
import amazfit from 'static/images/icon-amazfit.svg'
import realme from 'static/images/icon-realme.svg'
import nintendo from 'static/images/icon-nintendo.svg'
import { opacityAnimation, backExpand } from 'GlobalStyle'
import DescriptionPhone from 'components/descriptionPhone'
import DescriptionData from 'context/descriptionContext'
import processData from 'data/'

const ProductSection = styled.section`
    /* background: linear-gradient(to right ,#11b5e1, #1bd6d2, rgba(36, 100, 179, 0.7)); */
    /* --color-text: #00558f; */
    --color-text: rgba(255, 255, 255, 0.85);
    /* background: linear-gradient(to right ,#1cd0b3,#54ddd5,#29c7ca); */
    /* background: linear-gradient(to right ,#190009,#020104,#10051f); */
    background: linear-gradient(to right ,#002239,#002043,#10051f);
    & .container {
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
            color: #665863;
            margin: auto;
            text-align: center;
            margin: 12px;
        }

        .recommendations {
            &::selection {
                color: #fff;
            }
            color: var(--color-text);
            width: 90%;
            margin: auto;
            grid-column: 1 / span 2;
            width: 100%;
            & .recomendationDevice {
                display: grid;
                grid-template-columns: 1fr;
                & a {
                    background: #051838;
                    color: rgba(255,255,255,0.7);
                    border-radius: 16px;
                    &:focus {
                        color: #fff;
                    }
                    &:hover {
                        animation: ${backExpand} 0.3s ease-in;
                        transition: all ease 0.3s;
                        color: #fff;
                        animation-fill-mode: forwards;
                    }
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-decoration: none;
                    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.15);
                    padding: 8px;
                    margin: 20px;
                }
                vertical-align: middle;
                font-weight: 700;
                font-size: 18px;
                & img {
                    width: 20%;
                }
                & p {
                }
            }
        }
    }

    & .catalogo {
        grid-column: 1 / span 2;
        margin: 30px 0;
        & h3 {
            color: #fff;
            margin-left: 4px;
            border-left: 4px solid red;
        }

        & .category {
            margin: 20px 0;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 25px;
            justify-content: center;
            align-items: center;
            font-size: 18px;
        }
    }

    @media screen and (max-width: 411px) {
        & .catalogo {
            & .category {
                a {
                    width: 50%;
                }
            }
        }
    }

    @media screen and (max-width: 595px) {
        & .catalogo {
            & .category {
                width: 95%;
                margin: auto;
                a {
                    display: inline-block;
                    margin: 25px 0;
                    text-align: center;
                    width: 100%;
                }
            }
        }
    }

    @media screen and (max-width: 767px) {
        & .container {
            & .summary {
                font-size: 15px;
            }
        }
    }

    @media screen and (min-width: 768px) {
        .container {
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
            & .recommendations {
                .recomendationDevice {
                    grid-template-columns: 1fr 1fr 1fr;
                    & a {
                        font-size: 14px;
                    }
                }
            }
        }
    }

    @media screen and (min-width: 768px) {
        .container {
            width: 85%;
            margin: auto;
            & .recommendations {
                width: 85%;
                margin: 30px auto;
                .recomendationDevice {
                    & a {
                        font-size: 18px;
                    }
                }
            }
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

    let similars = [];
    console.log(data.img)
    context.all.forEach((e) => {
                     if (e.name.indexOf(params.devices.slice(0, 8)) <= 8 && e.name.indexOf(params.devices.slice(0, 8)) >= 0) {
                           similars.push(e)
                       }
                   });
                   if(typeof similars !== "object") {
                     similars = ""
                   }

    return <ProductSection className="productList">
        <div className="container">
            <div className="card-image">
                <img src={data.img} alt={data.name} draggable={false} />
            </div>
            <div className="name">
                <h3>{data.name}</h3>
            </div>
            <div className="option">
                <DescriptionPhone data={data} />
                <div className="precios">
                    <h2>{data.precio}$</h2>
                    <p>Pagos con CREDEX, tajeta de crédito y efectivos</p>
                </div>
            </div>
            <div className="recommendations">
                <h2>Dispositivos Similares</h2>
                <div className="recomendationDevice">
                    {
                        similars.map((id, index) => (
                            id.name !== data.name &&
                            <Link to={`${id.name}`} key={index}>
                                <img loading="lazy" src={id.img} alt={id.name} />
                                <p>{id.name}</p>
                            </Link>
                        )) 
                    }
                </div>
            </div>
            <div className="catalogo">
                <h3>Catalogo</h3>
                <div className="category">
                    <Link to="/catalogo#xiaomi" className="btn-xiaomi"><img src={xiaomi}  alt="huawei"/>Xiaomi</Link>
                    <Link to="/catalogo#huawei" className="btn-huawei"><img src={huawei} alt="huawei"/>Huawei</Link>
                    <Link to="/catalogo#realem" className="btn-realme"><img src={realme}  alt="huawei"/>Realme</Link>
                    <Link to="/catalogo#appple" className="btn-apple"><img src={apple}  alt="huawei"/>Apple</Link>
                    <Link to="/catalogo#nintendo" className="btn-nintendo"><img src={nintendo} width="12%" alt="huawei"/>Nintendo</Link>
                    <Link to="/catalogo#gopro" className="btn-apple"><img src={gopro} width="12%" alt="huawei"/>gopro</Link>
                    <Link to="/catalogo#amazfit" className="btn-apple"><img src={amazfit} width="12%" alt="huawei"/>amazfit</Link>
                </div>
            </div>
        </div>
    </ProductSection>
}

export default React.memo(ProductList);

/* Idea: Añadir recomendaciones los dispositivos
por los que paso el ciclo añadiendolos con Array.prototype.push(element)  */
/* Según el tipo de disposivo anidar las recomendaciones */
/*          ^ */
/*          | */
/*         type, description */

/* utilizar rem para determinar el tamaño de los botones, cambio el font-size atravez de la clase */