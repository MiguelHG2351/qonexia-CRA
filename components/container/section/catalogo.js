import React, { useContext } from 'react'
import img from 'static/images/image-representacion.png'
import contextData from 'context/descriptionContext'
import css from 'styled-jsx/css'

const styles = css`
    .container {
        background: #0c071e;
        display: grid;
        grid-template-columns: 35% 65%;
    }

    .comtainer div img {
        width: 100%;
        height: auto;
    }

    .name-brand {
        color: #eee;
    }

    .product-card {
        display: flex;
        overflow: auto;
    }

    @media screen and (max-width: 768px) {
        .container {
            grid-template-columns: 100%;
        }
    }
`

export default function CatalogoSection () {
    const context = useContext(contextData)
    console.log(context)

    return (
        <>
            <div className="container">
                <div>
                    <h1>Catalago de productos</h1>
                </div>
                <div>
                    <img src={img} alt="catalogo" />
                </div>
                <section className="product-list">
                    <section className="section-brand">
                        <article>
                            <div className="name-brand">Xiaomi</div>
                            <div className="product-brand">
                                <div className="product-card">
                                    {context.category.brand.Xiaomi.map(
                                        (e, index) => (
                                            <div
                                                className="container-card"
                                                key={index}
                                            >
                                                <div className="product-card-image">
                                                    <img
                                                        src={e.img}
                                                        alt={e.name}
                                                        title={`El ${e.name}`}
                                                    />
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </article>
                        <article>
                            <div className="name-brand">Samsung</div>
                        </article>
                        <article>
                            <div className="name-brand">Huawei</div>
                            <div className="product-brand"></div>
                        </article>
                        <article>
                            <div className="name-brand">Realme</div>
                            <div className="product-brand"></div>
                        </article>
                        <article>
                            <div className="name-brand">Nintendo</div>
                            <div className="product-brand"></div>
                        </article>
                        <article>
                            <div className="name-brand">Go pro</div>
                            <div className="product-brand"></div>
                        </article>
                        <article>
                            <div className="name-brand">Amazfit</div>
                            <div className="product-brand"></div>
                        </article>
                    </section>
                </section>
            </div>
            <style jsx>
                { styles }
            </style>
        </>
    )
}
