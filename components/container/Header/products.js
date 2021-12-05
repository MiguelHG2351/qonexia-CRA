import React, { useState, useContext, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import context from 'components/context/ProductContext'
import styles from './styles/productsStyle'
// import baseContext from 'context/descriptionContext'

// https://github.com/vercel/next.js/blob/canary/examples/with-apollo/lib/apolloClient.js
// https://www.youtube.com/watch?v=RJpevpbC4YY
function Producthead() {
    const [active, setActive] = useState(null)
    const [formActive, setFormActive] = useState('search')
    const [result, setResult] = useState([])
    const { device } = useRouter().query
    const { products } = useContext(context)

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

    function getData() {
        console.log('xd')
    }

    function toggleInput() {
        console.log('click')
        formActive === 'search'
            ? setFormActive('search active')
            : setFormActive('search')
    }

    function searchDevices(e) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        getData(formData)
    }

    function blurInput() {
        setFormActive('search')
    }

    async function onkeyDown(e) {
        const device = e.target.value
        setResult(await products.filter(product => product.name.toLowerCase().includes(device.toLowerCase())))
        if (e.keyCode === 27) {
            setFormActive('search')
        }
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
            <header className="header p-4 flex justify-center items-center">
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
                <form className="form" onSubmit={searchDevices}>
                    <label htmlFor="search" onClick={toggleInput}>
                        <i className="material-icons">search</i>
                    </label>
                    <div className={`${formActive} relative h-10 rounded-md`}>
                        <div className="search-container overflow-hidden w-full flex justify-center items-stretch h-full">
                            <div
                                className="close-attachment bg-blue-900 h-full cursor-pointer flex items-center p-3"
                                onClick={toggleInput}
                            >
                                <i className="material-icons">west</i>
                            </div>
                            <input
                                id="search"
                                name="search"
                                autoCorrect="true"
                                className="text-black rounded-none"
                                autoComplete="off"
                                onChange={onkeyDown}
                                onBlur={blurInput}
                                type="text"
                                placeholder="Buscar"
                                required={true}
                            />
                        </div>
                        <div className="results bg-black absolute w-full overflow-hidden left-0 top-0 transform translate-y-14">
                            <ul>
                                {
                                    result.map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center p-3"
                                        >
                                            <Link href={`/products/${item.brand}/${item.name}`}>
                                                <a className="w-full">
                                                    {item.name}
                                                </a>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </form>
            </header>
            <div className={`overlay ${active}`} onClick={loadSideNav}></div>
            <style jsx>{styles}</style>
        </>
    )
}

export default React.memo(Producthead)
