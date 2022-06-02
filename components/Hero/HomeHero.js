import React from 'react'
import Link from 'next/link'
import styles from './styles/style'

function HomeHero() {
    return (
        <>
            <section className="hero-container relative min-h-screen">
                <div className="background bg-cover bg-right absolute z-0 inset-0 flex justify-center">
                    <img src="/static/images/qonexia.webp" className='w-full h-full object-cover' alt="imagen" />
                </div>
                <div className="hero grid justify-center items-center min-h-screen relative bg-black/[.7]">
                    <div className="header-title relative">
                        <img
                            className="md:h-8 md:w-fit"
                            src="/static/images/logo-hd.png"
                            alt="qonexia-logo"
                        />
                        <h1 className='m-0'>Bienvenidos a Qonexia</h1>
                        <p className='m-0'>Visita la gran variedad de dispositivos moviles</p>
                        <Link href="/catalogo">
                            <a>Catálogo</a>
                        </Link>
                    </div>
                    <div className="header-list-card">
                        <div className="card">
                            <div className="card-image">
                                <img
                                    src="/static/images/album/albumEnero.webp"
                                    alt="Telefonos"
                                    title="Carrousel de imagenes"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{styles}</style>
        </>
    )
}

export default React.memo(HomeHero)
