import React, { useRef, useState } from 'react'
import Link from 'next/link'

import styles from './styles/style'
import useCarrousel from '../../../hooks/useCarrousel'

function HeaderIndex() {
    // Hooks
    const scrollCard = useRef(null)

    // Custom Hooks
    useCarrousel(scrollCard)
    const [menu, setMenu] = useState(undefined)

    // JSX
    return <>
        <header className="header">
            <div className="background">
                <video src="https://miguelhg2351.github.io/API/videos/video.webm" muted autoPlay={true} loop={true} />
            </div>
            <button className="toggle-menu" onClick={() => menu === undefined ? setMenu('active') : setMenu(undefined)}><i className="material-icons">menu</i></button>
            <div className={`header-nav ${menu}`}>
                <ul className="list-nav">
                    <li><Link href="/"><a> Home</a></Link></li>
                    <li><Link href="/products/Xiaomi/Xiaomi Redmi Note 8 Pro"><a>Products</a></Link></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://facebook.com/QONEXIA">Social Media</a></li>
                    <li><Link href="/trends"><a>Tendencias</a></Link></li>
                </ul>
            </div>
            <div className="header-title">
                <h1>Bienvenidos a Qonexia</h1>
                <p>Visita la gran variedad de dispositivos moviles</p>
                <Link href="/catalogo">
                    <a>
                        Catálogo
                    </a>
                </Link>
            </div>
            <div className="header-list-card">
                <div className="card">
                    <div className="card-image">
                        <img src="/static/images/loading.gif" ref={scrollCard} alt="Telefonos" title="Carrousel de imagenes" />
                    </div>
                </div>
            </div>
        </header>
        <style jsx>
            { styles }
        </style>
    </>
}

export default React.memo(HeaderIndex)
