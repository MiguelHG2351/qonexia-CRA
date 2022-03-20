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
            <section className="container-home flex flex-col gap-y-12">
                <div align="center" className='py-8'>
                    <img src="/static/images/logos-products.png" className='md:h-16' alt="logos" />
                </div>
                <section className="explorer" align='center'>
                    <h2 className='dark:text-white text-center font-medium text-3xl mb-4'>Explora nuestro catálogo de productos</h2>
                    <div className="info-explorer bg-gradient-to-r from-blue-600 bg-blue-900 w-11/12 mx-auto rounded-3xl py-12 flex flex-col gap-8 items-center">
                        <div className="images-explorer flex flex-col items-end w-full">
                            <img src="/static/images/examples/macbook.png" alt="Macbook" />
                            <img className='self-start' src="/static/images/examples/samsung.png" alt="Samsung S20 series" />
                            <img src="/static/images/examples/ps5.png" alt="Play Station 5 / PS5" />
                        </div>
                        <button className='bg-white text-blue-400 font-medium text-lg w-5/6 py-4 rounded-md'>Ver catálogo</button>
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
            </section>
        </>
    )
}

export default Index
