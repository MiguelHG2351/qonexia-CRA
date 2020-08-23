import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import huawei from 'static/images/icon-huawei.png'
import xiaomi from 'static/images/icon-xiaomi.png'
import apple from 'static/images/icon-apple.png'
import gopro from 'static/images/icon-gopro.png'
import amazfit from 'static/images/icon-amazfit.png'
import realme from 'static/images/icon-realme.png'
import nintendo from 'static/images/icon-nintendo.png'
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
                vertical-align: middle;
                font-weight: 400;
                font-size: 14px;
                & a {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-decoration: none;
                    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.15);
                    padding: 8px;
                    margin: 20px;
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
                }
                
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
        }

        & .container-card {
            margin: 20px 0;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 25px;
            justify-content: center;
            align-items: center;
            font-size: 18px;

            & a {
                border: 1px solid #fff;
            }

            & .header-card {
                border-bottom: 2px solid rgba(255, 255, 255, 0.5);
                & img {
                        width: 100%;
                    }
            }

            & .description-card {
                color: var(--color-text);
                padding: 36px;
                text-align: left;
                span {
                    margin: 8px 0;
                }
                p {
                margin: 15px 0;
                }
            }

        }
    }

    @media screen and (max-width: 1200px) {
        & .catalogo {
            & .container-card {
                grid-template-columns: repeat(3, 1fr);
            }
        }
    }


    @media screen and (max-width: 411px) {
        & .catalogo {
            & .container-card {
                grid-template-columns: 1fr;
            }
        }
    }

    @media screen and (max-width: 595px) {
        & .catalogo {
            & .container-card {
                width: 95%;
                margin: auto;
                grid-template-columns: 1fr;
                a {
                    overflow: hidden;
                    border-radius: 12px;
                    width: 85%;
                    display: inline-block;
                    margin: 25px auto;
                    text-align: center;
                    & .description {
                        padding: 8px;
                    }
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
        /* & .catalogo {
            & .container-card {
                .header-card {
                    
                }
            }
        } */
    }

    @media screen and (min-width: 768px) {
        .container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto auto;
            grid-template-areas: "images Menu" 
                                  "name Menu";

            align-items: start;
            width: 85%;
            margin: auto;
            & .card-image {
                grid-area: images;
                height: 100%;
                
                & .header-title {
                    & h3 {
                        border-left: none !important;
                    }
                }

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
                width: 85%;
                margin: 30px auto;
                .recomendationDevice {
                    grid-template-columns: 1fr 1fr 1fr;
                    vertical-align: middle;
                    font-size: 18px;
                    & a {
                        font-size: 18px;
                    }
                }
            }
        }
    }

    
    @media screen and (min-width: 1200px) {
        & .catalogo {
            & .container-card {
            grid-template-columns: repeat(4, 1fr);
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
                <div className="container-card">
                    <Link to="/catalogo#xiaomi" className="card">
                        <div className="header-card">
                            <img src={xiaomi} alt="Descripción del producto Xiaomi" title="Xiaomi"/>
                        </div>
                        <div className="description-card">
                            <span className="description-title">
                                <h3>Xioami</h3>
                            </span>
                            <p>Cantidad: 23</p>
                            <p>Submarcas: Redmi, Mi, Note, K</p>
                            <p>Precios: 150$, 650$</p>
                        </div>
                    </Link>
                    <Link to="/catalogo#huawei" className="card">
                        <div className="header-card">
                            <img src={huawei} alt="Descripción del producto Huawei" title="Huawei"/>
                        </div>
                        <div className="description-card">
                            <span className="description-title">
                                <h3>Huawei</h3>
                            </span>
                            <p>Cantidad: 23</p>
                            <p>Submarcas: P, Y, Mate</p>
                            <p>Precios: 150$ - 650$</p>
                        </div>
                    </Link>
                    <Link to="/catalogo#realem" className="card">
                        <div className="header-card">
                            <img src={realme} alt="Descriptción de los productos Realem" title="Realme" />
                        </div>
                        <div className="description-card">
                            <span className="description-title">
                                <h3>Realme</h3>
                            </span>
                            <p>Cantidad: 23</p>
                            <p>Submarcas: P, Y, Mate</p>
                            <p>Precios: 150$ - 650$</p>
                        </div>
                    </Link>
                    <Link to="/catalogo#appple" className="card">
                        <div className="header-card">
                            <img src={apple}  alt="Descriptción de los productos" title="Realem" />
                        </div>
                        <div className="description-card">
                            <span className="description-title">
                                <h3>Apple</h3>
                            </span>
                            <p>Cantidad: 23</p>
                            <p>Submarcas: P, Y, Mate</p>
                            <p>Precios: 150$ - 650$</p>
                        </div>
                    </Link>
                    <Link to="/catalogo#nintendo" className="card">
                        <div className="header-card">
                            <img src={nintendo}  alt="nintendo"/>
                        </div>
                        <div className="description-card">
                            <span className="description-title">
                                <h3>Nintendo</h3>
                            </span>
                            <p>Cantidad: 23</p>
                            <p>Submarcas: P, Y, Mate</p>
                            <p>Precios: 150$ - 650$</p>
                        </div>
                    </Link>
                    <Link to="/catalogo#appple" className="card">
                        <div className="header-card">
                            <img src={apple}  alt="huawei"/>
                        </div>
                        <div className="description-card">
                            <span className="description-title">
                                <h3>Apple</h3>
                            </span>
                            <p>Cantidad: 23</p>
                            <p>Submarcas: P, Y, Mate</p>
                            <p>Precios: 150$ - 650$</p>
                        </div>
                    </Link>
                    <Link to="/catalogo#gopro" className="card">
                    <div className="header-card">
                            <img src={gopro}  alt="gopro"/>
                        </div>
                        <div className="description-card">
                            <span className="description-title">
                                <h3>gopro</h3>
                            </span>
                            <p>Cantidad: 23</p>
                            <p>Submarcas: P, Y, Mate</p>
                            <p>Precios: 150$ - 650$</p>
                        </div>
                    </Link>
                    <Link to="/catalogo#amazfit" className="card">
                        <div className="header-card">
                            <img src={amazfit}  alt="amazfit"/>
                        </div>
                        <div className="description-card">
                            <span className="header-title">
                                <h3>amazfit</h3>
                            </span>
                            <p>Cantidad: 13</p>
                            <p>Submarcas: P, Y, Mate</p>
                            <p>Precios: 150$ - 650$</p>
                        </div>
                    </Link>
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