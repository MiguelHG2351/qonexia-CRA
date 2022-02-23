import React, { useRef } from 'react'
import Link from 'next/link'
import styles from './styles/style'
import useCarrousel from '../../../hooks/useCarrousel'
import ResponsiveBackground from './responsiveBack'

function HeaderIndex() {
    // Hooks
    const scrollCard = useRef(null)
    // const [menu, setMenu] = useState(undefined)

    // Custom Hooks
    useCarrousel(scrollCard)

    // JSX
    return <>
        <section className="hero relative bg-black/[.7] min-h-screen">
            <ResponsiveBackground />
            {/* <button className="toggle-menu" onClick={() => menu === undefined ? setMenu('active') : setMenu(undefined)}><i className="material-icons">menu</i></button>
            <div className={`header-nav ${menu}`}>
                <ul className="list-nav">
                    <li><Link href="/"><a> Home</a></Link></li>
                    <li><Link href="/products/Xiaomi/Poco X3 NFC"><a>Products</a></Link></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://facebook.com/QONEXIA">Social Media</a></li>
                    <li><Link href="/trends"><a>Tendencias</a></Link></li>
                </ul>
            </div> */}
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
        </section>
        <style jsx>
            { styles }
        </style>
    </>
}

export default React.memo(HeaderIndex)
