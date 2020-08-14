import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
// import img from 'static/images/pocof2pro.png'
import { opacityAnimation, backExpand } from 'GlobalStyle'
import DescriptionPhone from 'components/descriptionPhone'
import DescriptionData from 'context/descriptionContext'
import processData from 'data/'

const ProductSection = styled.section`
    /* background: linear-gradient(to right ,#11b5e1, #1bd6d2, rgba(36, 100, 179, 0.7)); */
    /* --color-text: #00558f; */
    --color-text: rgba(255, 255, 255, 0.9);
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
    /* background: linear-gradient(to right ,#1cd0b3,#54ddd5,#29c7ca); */
    /* background: linear-gradient(to right ,#190009,#020104,#10051f); */
    background: linear-gradient(to right ,#002239,#002043,#10051f);

    @media screen and (max-width: 300px) {
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
        </div>
    </ProductSection>
}

export default React.memo(ProductList);

/* Idea: Añadir recomendaciones los dispositivos
por los que paso el ciclo añadiendolos con Array.prototype.push(element)  */