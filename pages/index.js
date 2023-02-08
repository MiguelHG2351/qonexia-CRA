import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import HomeHero from 'components/Hero/HomeHero'

function Index() {
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
          <div align="center" className="py-8">
            <img
              src="/static/images/logos-products.png"
              className="max-w-full md:h-16"
              alt="logos"
            />
          </div>
          <section
            className="explorer mx-auto w-5/6 md:flex md:items-center md:gap-x-16"
            align="center"
          >
            <div className="explorer-description md:flex-1">
              <h2 className="text-fill-transparent mb-4 bg-clip-text text-left text-4xl font-medium dark:bg-white-gradient dark:text-white">
                Explora nuestro catálogo de productos
              </h2>
              <p className="hidden text-left dark:text-gray-400 md:inline-block">
                Tenemos un amplio catalogo de productos a los que puedes acceder
                facilmente para ahorrate tiempo y obtengas tu dispositivo sin
                ningún problema
              </p>
            </div>
            <div className="info-explorer_container flex justify-end md:flex-1">
              <div className="info-explorer box-border flex w-full flex-col items-center gap-8 rounded-3xl bg-blue-900 bg-gradient-to-r from-blue-600 py-12 md:inline-flex md:w-4/6 md:px-16">
                <div className="images-explorer flex w-full flex-col items-end justify-center">
                  <img
                    className="md:w-32"
                    src="/static/images/examples/macbook.png"
                    alt="Macbook"
                  />
                  <img
                    className="self-start md:w-32"
                    src="/static/images/examples/samsung.png"
                    alt="Samsung S20 series"
                  />
                  <img
                    className="md:w-32"
                    src="/static/images/examples/ps5.png"
                    alt="Play Station 5 / PS5"
                  />
                </div>
                <button className="w-5/6 rounded-md border-none bg-white py-4 text-xl font-medium text-blue-600">
                  Ver catálogo
                </button>
              </div>
            </div>
          </section>
          <section className="catalogo-sections">
            <h2 className="text-fill-transparent bg-clip-text text-center text-4xl font-bold dark:bg-white-gradient">
              Explora las secciones de nuestro catálogo
            </h2>
            <nav className="m-auto w-5/6">
              <ul className="grid grid-cols-2 gap-3">
                <li className="list-none rounded-lg bg-soft-blue text-slate-200">
                  <Link
                    href="/catalogo/smartphone"
                    className="inline-flex w-full flex-col items-start gap-2 px-2 py-3 text-white no-underline md:flex-row md:items-center"
                  >
                    <picture className="inline-block h-10 w-10 shrink-0 rounded-full bg-blue-500">
                      <Image
                        src="/static/icons/smartphone.svg"
                        width={40}
                        height={40}
                        alt="Un smartphone"
                      />
                    </picture>
                    <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      Telefonos y Tablets
                    </span>
                  </Link>
                </li>
                <li className="list-none rounded-lg bg-soft-blue text-slate-200">
                  <Link
                    href="/"
                    className="inline-flex w-full flex-col items-start gap-2 px-2 py-3 text-white no-underline md:flex-row md:items-center"
                  >
                    <picture className="inline-block h-10 w-10 shrink-0 rounded-full bg-red-500">
                      <Image
                        src="/static/icons/tablet.svg"
                        width={40}
                        height={40}
                        alt="Una tablet"
                      />
                    </picture>
                    <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      Laptops
                    </span>
                  </Link>
                </li>
                <li className="list-none rounded-lg bg-soft-blue text-slate-200">
                  <Link
                    href="/"
                    className="inline-flex w-full flex-col items-start gap-2 px-2 py-3 text-white no-underline md:flex-row md:items-center"
                  >
                    <picture className="inline-block h-10 w-10 shrink-0 rounded-full bg-green-500">
                      <Image
                        src="/static/icons/console.svg"
                        width={40}
                        height={40}
                        alt="Una consola"
                      />
                    </picture>
                    <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      Consolas
                    </span>
                  </Link>
                </li>
                <li className="list-none rounded-lg bg-soft-blue text-slate-200">
                  <Link
                    href="/"
                    className="inline-flex w-full flex-col items-start gap-2 px-2 py-3 text-white no-underline md:flex-row md:items-center"
                  >
                    <picture className="inline-block h-10 w-10 shrink-0 rounded-full bg-green-500">
                      <Image
                        src="/static/icons/console.svg"
                        width={40}
                        height={40}
                        alt="Una consola"
                      />
                    </picture>
                    <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      Accesorios
                    </span>
                  </Link>
                </li>
                <li className="list-none rounded-lg bg-soft-blue text-slate-200">
                  <Link
                    href="/"
                    className="inline-flex w-full flex-col items-start gap-2 px-2 py-3 text-white no-underline md:flex-row md:items-center"
                  >
                    <picture className="inline-block h-10 w-10 shrink-0 rounded-full bg-cyan-500">
                      <Image
                        src="/static/icons/smartwatch.svg"
                        width={40}
                        height={40}
                        alt="Una consola"
                      />
                    </picture>
                    <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      SmartWatch
                    </span>
                  </Link>
                </li>
                <li className="list-none rounded-lg bg-soft-blue text-slate-200">
                  <Link
                    href="/"
                    className="inline-flex w-full flex-col items-start gap-2 px-2 py-3 text-white no-underline md:flex-row md:items-center"
                  >
                    <picture className="inline-block h-10 w-10 shrink-0 rounded-full bg-purple-600">
                      <Image
                        src="/static/icons/camera.svg"
                        width={40}
                        height={40}
                        alt="Una consola"
                      />
                    </picture>
                    <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      Camaras
                    </span>
                  </Link>
                </li>
                <li className="list-none rounded-lg bg-soft-blue text-slate-200">
                  <Link
                    href="/"
                    className="inline-flex w-full flex-col items-start gap-x-2 px-2 py-3 text-white no-underline md:flex-row md:items-center"
                  >
                    <picture className="inline-block h-10 w-10 shrink-0 rounded-full bg-yellow-500">
                      <Image
                        src="/static/icons/camera.svg"
                        width={40}
                        height={40}
                        alt="Una consola"
                      />
                    </picture>
                    <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                      Headphones
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </section>
          <section className="choose-preferences bg-soft-blue-2">
            <div className="preference-title text-center">
              <p className="text-slate-400">
                Encuentre más de 200 dispositivos
              </p>
              <h2 className="text-3xl font-bold text-white">
                Elije tu estilo favorito
              </h2>
            </div>
            <div className="preferences-example py-4 md:flex" align="center">
              <div className="preference-description">
                <h2>Juega</h2>
                <p className="text-white">
                  Un dispositivo con el hardware más potente para poder jugar a
                  tus juegos favoritos sin ningún problema
                </p>
              </div>
              <div className="preference-image">
                <img
                  className="max-w-full"
                  src="/static/images/examples/juega.webp"
                  alt="Juega!!"
                />
              </div>
            </div>
          </section>
        </section>
      </React.Suspense>
    </>
  )
}

export default Index
