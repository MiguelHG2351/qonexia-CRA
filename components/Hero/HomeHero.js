import React from 'react'
import Link from 'next/link'
import styles from './styles/style'
// import useCarrousel from 'hooks/useCarrousel'

function HomeHero() {
    // Hooks
    // const scrollCard = useRef(null)
    // const [menu, setMenu] = useState(undefined)

    // Custom Hooks
    // useCarrousel(scrollCard)

    // JSX
    return <>
        <section className="hero-container relative min-h-screen">
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
            <div className="hero grid justify-center items-center min-h-screen relative bg-black/[.7]">
                <div className="header-title relative">
                    <img
                        className='md:h-8 md:w-fit'
                        src="/static/images/logo-hd.png"
                        alt="qonexia-logo" />
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
                            <img src="/static/images/album/albumEnero.webp" alt="Telefonos" title="Carrousel de imagenes" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <style jsx>
            { styles }
        </style>
    </>
}

function ResponsiveBackground() {
    return (
        <>
            <div
                className="background bg-[url('/static/images/qonexia.webp')] bg-cover bg-right absolute z-0 inset-0 flex justify-center"
            >
            </div>
        </>
    )
}

export default React.memo(HomeHero)
