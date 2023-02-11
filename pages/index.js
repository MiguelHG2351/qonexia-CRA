import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import HomeHero from 'components/Hero/HomeHero'

const tempSlides = [
  {
    id: 'plysagds',
    image: '/static/images/slides/samsung-1.webp',
    alt: 'Slide de samsung',
  },
  {
    id: 'plysaqfs',
    image: '/static/images/slides/microsoft.webp',
    alt: 'Slide de samsung',
  },
  {
    id: 'prssaqfs',
    image: '/static/images/slides/one-plus.webp',
    alt: 'Slide de samsung',
  },
]

function Homepage() {
  return (
    <>
      <Head>
        <title>Home | Qonexia (NO OFICIAL)</title>
        <meta
          name="description"
          content="Página web principal de Qonexia, test, ESTA NO ES UNA WEB OFICIAL"
        />
      </Head>
      <HomeHero />
      <React.Suspense fallback={<div>Loading...</div>}>
        <section className="container-home flex flex-col gap-y-12">
          <div>
            <section className="flex items-center justify-evenly bg-accent py-6 px-2">
              <div>
                <div className="text-center font-bold">
                  <span className="text-xl text-white md:text-5xl">180K</span>
                  <span className="text-xl text-secondary md:text-5xl">+</span>
                </div>
                <div className="text-xs text-white md:inline-block md:w-full md:text-center md:text-lg">
                  Seguidores
                </div>
              </div>
              <div>
                <div className="text-center font-bold">
                  <span className="text-xl text-white md:text-5xl">290</span>
                  <span className="text-xl text-secondary md:text-5xl">+</span>
                </div>
                <span className="text-xs text-white md:inline-block md:w-full md:text-center md:text-lg">
                  Productos
                </span>
              </div>
              <div>
                <div className="text-center font-bold">
                  <span className="text-xl text-white md:text-5xl">7A</span>
                  <span className="text-xl text-secondary md:text-5xl">+</span>
                </div>
                <span className="text-xs text-white md:inline-block md:w-full md:text-center md:text-lg">
                  Mercado
                </span>
              </div>
              <div>
                <div className="text-center font-bold">
                  <span className="text-xl text-white md:text-5xl">6</span>
                  <span className="text-xl text-secondary md:text-5xl">M</span>
                </div>
                <span className="text-xs text-white md:inline-block md:w-full md:text-center md:text-lg">
                  Garantia
                </span>
              </div>
            </section>
          </div>
          <section>
            <h2 className="gradient-text text-center md:text-5xl">
              Explorar las distintas marcas
            </h2>
            <div className="md:flex md:justify-center">
              <div className="slides flex flex-col items-center gap-y-8 md:inline-flex md:flex-row md:items-center md:justify-evenly md:gap-y-0 md:gap-x-4">
                <div className="slide">
                  <Image
                    width={340}
                    height={532}
                    className="h-auto w-64 overflow-hidden rounded-xl md:min-h-[16.625rem] md:w-80 md:cursor-pointer"
                    src="/static/images/slides/samsung-1.webp"
                    alt="Slide de samsung"
                  />
                </div>
                <div className="slide">
                  <Image
                    width={340}
                    height={532}
                    className="h-auto w-64 overflow-hidden rounded-xl md:w-80 md:cursor-pointer"
                    src="/static/images/slides/microsoft.webp"
                    alt="Slide de samsung"
                  />
                </div>
                <div className="slide">
                  <Image
                    width={340}
                    height={532}
                    className="h-auto w-64 overflow-hidden rounded-xl md:w-80 md:cursor-pointer"
                    src="/static/images/slides/one-plus.webp"
                    alt="Slide de samsung"
                  />
                </div>
              </div>
            </div>
          </section>
        </section>
      </React.Suspense>
    </>
  )
}

export default Homepage
