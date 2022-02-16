import React, { useState, useContext, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import context from 'components/context/ProductContext'
import styles from './styles/productsStyle'

import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, Hits } from 'react-instantsearch-dom'
import CustomSearchBox from 'components/customs/SearchBox'
// import CustomRefinementList from 'components/customs/RefinementList'
// import baseContext from 'context/descriptionContext'

// https://github.com/vercel/next.js/blob/canary/examples/with-apollo/lib/apolloClient.js
// https://www.youtube.com/watch?v=RJpevpbC4YY

const algoliaClient = algoliasearch(
    '5L0EKC0AON',
    '711e3da538f646c399c7618fae6f56c3'
)

const searchClient = {
    ...algoliaClient,
    search: (requests) => {
        if (requests.every(({ params }) => !params.query)) {
            return Promise.resolve({
                results: requests.map(() => ({
                    hits: [],
                    nbHits: 0,
                    nbPages: 0,
                    page: 0,
                    processingTimeMS: 0,
                })),
            })
        }

        return algoliaClient.search(requests)
    },
}

function Producthead() {
    // hooks
    const [active, setActive] = useState(null)
    const [formActive, setFormActive] = useState('search')
    const { device } = useRouter().query
    const { products } = useContext(context)

    // algolia

    useEffect(() => {
        console.log('products', products)
    }, [])

    function loadSideNav() {
        setActive(null)
    }

    // Ordenar por potencia, precio, camara, Más comprado, Marca en especifico,

    function openMenu() {
        setActive('active')
    }

    function toggleInput() {
        console.log('click')
        formActive === 'search'
            ? setFormActive('search active')
            : setFormActive('search')
    }

    function blurInput() {
        setFormActive('search')
    }

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"
                />
            </Head>
            <InstantSearch
                indexName="qonexia-products-index"
                searchClient={searchClient}
            >
                <header className="header p-4 flex justify-between items-center">
                    <div className={`sidenav ${active}`}>
                        <div className="profile">
                            <div className="background">
                                <img
                                    loading="lazy"
                                    src="https://miguelhg2351.github.io/API/logos/fondo.webp"
                                    alt="Fondo del usuario"
                                />
                            </div>
                            <img
                                loading="lazy"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRq2emGoCKeB70zadZbAJxwIxVJpRujbn4qvg&usqp=CAU"
                                alt="user-logo"
                            />
                            <div>
                                <strong>Miguel Hernández</strong>
                                <br />
                                <span>qonexia@qonexia.com</span>
                            </div>
                        </div>
                        <hr />
                        <ul className="header-nav">
                            <li>
                                <i className="material-icons">home</i>
                                <Link href="/">
                                    <a>Inicio</a>
                                </Link>
                            </li>
                            <li>
                                <i className="material-icons">smartphone</i>
                                <Link href="/products">
                                    <a>Productos</a>
                                </Link>
                            </li>
                            <li>
                                <i className="material-icons">trending_up</i>
                                <Link href="/trends">
                                    <a>Tendencias</a>
                                </Link>
                            </li>
                            <li>
                                <i className="material-icons">shopping_cart</i>
                                <Link href="/catalogo">
                                    <a>Catalogo</a>
                                </Link>
                            </li>
                            <li>
                                <i className="material-icons">contact_phone</i>
                                <Link href="/contact">
                                    <a>Contactanos</a>
                                </Link>
                            </li>
                            <li>
                                <i className="material-icons">support_agent</i>
                                <Link href="/support">
                                    <a>Soporte Técnico</a>
                                </Link>
                            </li>
                            <hr />
                            <li>
                                <i className="material-icons">smartphone</i>
                                <Link href="/catalogo#phone">
                                    <a>Telefonos</a>
                                </Link>
                            </li>
                            <hr />
                            <li>
                                <Link href="/catalogo#samsung">
                                    <a>Samsung</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/catalogo#xiaomi">
                                    <a>Xiaomi</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/catalogo#huawei">
                                    <a>Huawei</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/catalogo#apple">
                                    <a>Apple</a>
                                </Link>
                            </li>
                            <hr />
                            <li>
                                <i className="material-icons">coronavirus</i>
                                <Link href="/support">
                                    <a>Coronavirus</a>
                                </Link>
                            </li>
                            <hr />
                            <li>
                                <i className="material-icons">laptop</i>
                                <Link href="/catalogo#laptop">
                                    <a>Laptop</a>
                                </Link>
                            </li>
                            <hr />
                            <li>
                                <i className="material-icons">laptop</i>
                                <Link href="/catalogo#laptop">
                                    <a>Mac MacOS Catalina</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="header-title">
                        <button
                            onClick={openMenu}
                            className="flex items-center border-none text-white"
                        >
                            <i className="material-icons">menu</i>
                        </button>
                        <h2>{device}</h2>
                    </div>
                    <div className="form-container">
                        <label
                            htmlFor="search"
                            className="cursor-pointer"
                            onClick={toggleInput}
                        >
                            <i className="material-icons">search</i>
                        </label>
                        <div
                            className={`${formActive} relative h-10 rounded-md`}
                        >
                            {/* <CustomRefinementList attribute="brand" /> */}

                            <div className="search-container overflow-hidden w-full flex justify-center items-stretch h-full">
                                <CustomSearchBox
                                    name="search"
                                    styleForm="flex flex-1"
                                    className="text-black h-full w-full rounded-l-sm flex-1 p-3 outline-transparent"
                                    onBlur={blurInput}
                                    placeholder="Buscar"
                                >
                                    <div
                                        className="close-attachment rounded-r-sm bg-blue-900 h-full cursor-pointer flex items-center p-3"
                                        onClick={toggleInput}
                                    >
                                        <i className="material-icons">west</i>
                                    </div>
                                </CustomSearchBox>
                            </div>
                            <div className="absolute left-0 w-full">
                                Telefonos:
                                <Hits hitComponent={HitComponents} />
                            </div>
                        </div>
                    </div>
                </header>
            </InstantSearch>
            <div className={`overlay ${active}`} onClick={loadSideNav}></div>
            <style jsx>{styles}</style>
        </>
    )
}

function HitComponents({ hit }) {
    // console.log(props)

    return (
        <div className="results bg-black w-full overflow-hidden">
            <Link href={`/products/${hit.brand}/${hit.name}`}>
                <a className="w-full inline-block p-2">{hit.name}</a>
            </Link>
        </div>
    )
}

export default React.memo(Producthead)
