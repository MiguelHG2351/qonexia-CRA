import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import HomeHero from 'components/Hero/HomeHero'
import BrandSlide from 'components/slides/BrandSlide'

const tempSlides = [
  {
    id: 'plysagds',
    image: '/static/images/slides/samsung.png',
    alt: 'Slide de samsung',
  },
  {
    id: 'plysaqfs',
    image: '/static/images/slides/microsoft.png',
    alt: 'Slide de samsung',
  },
  {
    id: 'prssaqfs',
    image: '/static/images/slides/one-plus.png',
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
        <section className="container-home flex flex-col gap-y-12 pb-8">
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
              <div className="slides flex flex-col items-center gap-y-8 md:inline-flex md:flex-row md:items-stretch md:justify-evenly md:gap-y-0 md:gap-x-4">
                {tempSlides.map((slide) => (
                  <BrandSlide
                    key={slide.id}
                    src={slide.image}
                    url={`/brands/${slide.id}`}
                    alt={slide.alt}
                  />
                ))}
              </div>
            </div>
          </section>
          <section>
            <h2 className="gradient-text text-center md:text-5xl">
              Gran variedad de productos
            </h2>
            <section className="grid grid-cols-2 grid-rows-[max-content_max-content] gap-2 px-4">
              <section className="col-span-2 flex flex-col items-center justify-center border border-solid border-white bg-dark-gradient-mobile">
                <Image
                  height={144}
                  width={256}
                  alt="El logo de Qonexia en vertical"
                  className="inline-block aspect-video h-auto w-48 align-middle"
                  src="/static/images/slides/logo-vertical.png"
                  title="logo de la empresa Qonexia"
                />
                <p className="mb-0 hidden text-center text-white opacity-75 md:block">
                  Disfrutá de la gran variedad de productos tecnológicos que
                  tiene para vos.
                </p>
              </section>
              <section className="relative flex flex-col items-center justify-between gap-y-4 border border-solid border-white bg-secondary px-2 pt-4 pb-2">
                <div className="flex flex-col items-center gap-y-2">
                  <Image
                    src="/static/images/logos/logo-blue.png"
                    className="h-auto w-[90%]"
                    width={232}
                    height={39}
                    alt="logo de qonexia en azul"
                    title="logo de la empresa Qonexia"
                  />
                  <div>
                    <h3 className="m-0 text-center">Niños</h3>
                    <span className="block text-center text-white">
                      Dispositivos para niños
                    </span>
                  </div>
                </div>
                <div>
                  <Image
                    src="/static/images/slides/alcatel.png"
                    className="aspect-video h-auto w-[90%]"
                    width={288}
                    height={162}
                    alt="Encuentra tablet para niños :D"
                    title="Una tableta Alcatel para niños"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex h-20 w-full items-center justify-center bg-black-gradient-desk">
                  <Link
                    className="inline-block bg-primary py-2 px-3 font-bold text-dark-primary no-underline"
                    href="/"
                  >
                    Entrar
                  </Link>
                </div>
              </section>
              <section className="relative flex flex-col items-center justify-center gap-y-4 border border-solid border-white bg-primary px-2 pt-4 pb-2">
                <div className="flex flex-col items-center gap-y-2">
                  <Image
                    src="/static/images/logos/logo-blue.png"
                    className="h-auto w-[90%]"
                    width={232}
                    height={39}
                    alt="logo de qonexia en azul"
                    title="logo de la empresa Qonexia"
                  />
                  <div>
                    <h3 className="m-0 text-center">Smartphones</h3>
                    <span className="block text-center text-dark-primary opacity-75">
                      ¡Experimentá una verdadera potencia de juego!
                    </span>
                  </div>
                </div>
                <div>
                  <Image
                    src="/static/images/slides/one-plus-10t.png"
                    className="h-auto w-full"
                    width={288}
                    height={162}
                    alt="Encuentra tablet para niños :D"
                    title="Una tableta Alcatel para niños"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex h-20 w-full items-center justify-center bg-black-gradient-desk">
                  <Link
                    className="inline-block bg-primary py-2 px-3 font-bold text-dark-primary no-underline"
                    href="/"
                  >
                    Entrar
                  </Link>
                </div>
              </section>
              <section className="relative flex flex-col items-center justify-center gap-y-4 border border-solid border-white bg-tertiary px-2 pt-4 pb-2">
                <div className="flex flex-col items-center gap-y-2">
                  <Image
                    src="/static/images/logos/logo-blue.png"
                    className="h-auto w-[90%]"
                    width={232}
                    height={39}
                    alt="logo de qonexia en azul"
                    title="logo de la empresa Qonexia"
                  />
                  <div>
                    <h3 className="m-0 text-center">Consolas</h3>
                    <span className="block text-center text-dark-primary opacity-75">
                      ¡Experimentá una verdadera potencia de juego!
                    </span>
                  </div>
                </div>
                <div>
                  <Image
                    src="/static/images/slides/xbox.png"
                    className="h-auto w-full"
                    width={288}
                    height={162}
                    alt="Encuentra tablet para niños :D"
                    title="Una tableta Alcatel para niños"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex h-20 w-full items-center justify-center bg-black-gradient-desk">
                  <Link
                    className="inline-block bg-primary py-2 px-3 font-bold text-dark-primary no-underline"
                    href="/"
                  >
                    Entrar
                  </Link>
                </div>
              </section>
              <section className="relative flex flex-col items-center justify-center gap-y-4 border border-solid border-white bg-orange-primary px-2 pt-4 pb-2">
                <div className="flex flex-col items-center gap-y-2">
                  <Image
                    src="/static/images/logos/logo-blue.png"
                    className="h-auto w-[90%]"
                    width={232}
                    height={39}
                    alt="logo de qonexia en azul"
                    title="logo de la empresa Qonexia"
                  />
                  <div>
                    <h3 className="m-0 text-center">Smartwatch</h3>
                    <span className="block text-center text-dark-primary opacity-75">
                      ¡Experimentá una verdadera potencia de juego!
                    </span>
                  </div>
                </div>
                <div>
                  <Image
                    src="/static/images/slides/smartwatch.png"
                    className="h-auto w-full"
                    width={288}
                    height={162}
                    alt="Encuentra tablet para niños :D"
                    title="Una tableta Alcatel para niños"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex h-20 w-full items-center justify-center bg-black-gradient-desk">
                  <Link
                    className="inline-block bg-primary py-2 px-3 font-bold text-dark-primary no-underline"
                    href="/"
                  >
                    Entrar
                  </Link>
                </div>
              </section>
            </section>
          </section>
        </section>
      </React.Suspense>
    </>
  )
}

export default Homepage
