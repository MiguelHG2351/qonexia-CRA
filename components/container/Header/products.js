import React, { useState, useContext, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import context from 'components/context/ProductContext'
import styles from './styles/productsStyle'

import algoliasearch from 'algoliasearch/lite'
import { InstantSearch } from 'react-instantsearch-dom'
import CustomHits from 'components/customs/Hits'
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
        const datas = algoliaClient.search(requests)
        datas.then((res) => {
            console.log(res)
        })

        return datas
    },
}

function Producthead() {
    // hooks
    const [active, setActive] = useState(null)
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
                <header className="header border-b dark:border-slate-50/[0.06] bg-slate-900 p-4 flex justify-between items-center">
                    <div className={`sidenav ${active}`}>
                        <div className="profile">
                            <div className="background">
                                <img
                                    loading="lazy"
                                    src="https://api.miguel2351.me/logos/fondo.webp"
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
                            className="lg:hidden flex items-center border-none text-white"
                        >
                            <i className="material-icons">menu</i>
                        </button>
                        <Link href="/">
                            <a className="logo hidden lg:inline-block cursor-pointer">
                                <img src="/static/images/logo-hd.png" alt="Logo" />
                            </a>
                        </Link>
                    </div>
                    <div className="form-container">
                        <div
                            className="search h-10 rounded-md"
                        >
                            {/* <CustomRefinementList attribute="brand" /> */}

                            <div className="search-container overflow-hidden w-full flex justify-center items-stretch h-full">
                                <CustomSearchBox
                                    name="search"
                                    styleForm="flex flex-1"
                                    styleInput="text-white text-sm bg-dark-blue h-full w-full rounded-l-sm flex-1 p-3 shadow-inner"
                                    placeholder="Buscar"
                                >
                                    <div
                                        className="close-attachment rounded-r-sm bg-blue-900 h-full cursor-pointer flex items-center p-3"
                                    >
                                        <i className="material-icons">search</i>
                                    </div>
                                </CustomSearchBox>
                            </div>
                            <div className="absolute bg-dark-blue/50 left-0 w-full">
                                <CustomHits hitComponent={HitComponents} />
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
    console.log(hit.type)

    return (
        <div className="results w-full overflow-hidden">
            <Link href={`/products/${hit.brand}/${hit.name}`}>
                <a className="w-full text-sm overflow-hidden truncate inline-block p-2 hover:text-gray-400">{hit.name}</a>
            </Link>
        </div>
    )
}

export default React.memo(Producthead)
