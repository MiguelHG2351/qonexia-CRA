import React from 'react'
import Head from 'next/head'

import HomeHero from 'components/Hero/HomeHero'

function Index() {
    return (
        <>
            <Head>
                <title>Home | Qonexia tecnología (no oficial)</title>
                <meta
                    name="description"
                    content="Página web principal de Qonexia, test"
                />
            </Head>
            <HomeHero />
            <div align="center" className='py-8'>
                <img src="/static/images/logos-products.png" className='md:h-16' alt="logos" />
            </div>
            <section className="explorer">
                <h2 className='dark:text-white text-center font-medium text-3xl'>Explora nuestro catálogo de productos</h2>
                <div className="info-explorer">
                </div>
            </section>
            <section className="choose-preferences">
                <div className="preference-title text-center">
                    <p className='text-slate-400'>Encuentre más de 200 dispositivos</p>
                    <h2 className='text-white text-3xl font-bold'>Elije tu estilo favorito</h2>
                </div>
                <div className="preferences-example py-4 flex" align='center'>
                    <img className='w-1/2' src="/static/images/examples/play.png" alt="Jugando PUBG desde un black shark" />
                    <img className='w-1/2' src="/static/images/examples/photo.png" alt="Camara con un Iphone 11 pro max" />
                </div>
            </section>
            <br />
            <br />
            <br />
        </>
    )
}

export default Index
