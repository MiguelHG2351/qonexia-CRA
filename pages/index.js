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
              className="md:h-16 max-w-full"
              alt="logos"
            />
          </div>
          <section
            className="explorer w-5/6 mx-auto md:flex md:items-center md:gap-x-16"
            align="center"
          >
            <div className="explorer-description md:flex-1">
              <h2 className="dark:text-white text-left font-medium text-4xl mb-4 bg-clip-text text-fill-transparent dark:bg-white-gradient">
                                Explora nuestro catálogo de productos
              </h2>
              <p className="dark:text-gray-400 text-left hidden md:inline-block">
                                Tenemos un amplio catalogo de productos a los
                                que puedes acceder facilmente para ahorrate
                                tiempo y obtengas tu dispositivo sin ningún
                                problema
              </p>
            </div>
            <div className="info-explorer_container md:flex-1 flex justify-end">
              <div className="info-explorer box-border bg-gradient-to-r from-blue-600 bg-blue-900 rounded-3xl py-12 flex w-full md:w-4/6 md:inline-flex flex-col gap-8 items-center md:px-16">
                <div className="images-explorer flex flex-col items-end justify-center w-full">
                  <img
                    className="md:w-32"
                    src="/static/images/examples/macbook.png"
                    alt="Macbook"
                  />
                  <img
                    className="md:w-32 self-start"
                    src="/static/images/examples/samsung.png"
                    alt="Samsung S20 series"
                  />
                  <img
                    className="md:w-32"
                    src="/static/images/examples/ps5.png"
                    alt="Play Station 5 / PS5"
                  />
                </div>
                <button className="bg-white text-blue-600 font-medium text-xl w-5/6 py-4 border-none rounded-md">
                                    Ver catálogo
                </button>
              </div>
            </div>
          </section>
          <section className="catalogo-sections">
            <h2 className="text-4xl font-bold text-center bg-clip-text text-fill-transparent dark:bg-white-gradient">
                            Explora las secciones de nuestro catálogo
            </h2>
            <nav className="w-5/6 m-auto">
              <ul className="grid grid-cols-2 gap-3">
                <li className="text-slate-200 bg-soft-blue rounded-lg list-none">
                  <Link href="/catalogo/smartphone">
                    <a className="text-white no-underline inline-flex flex-col md:flex-row md:items-center gap-2 items-start px-2 py-3 w-full">
                      <picture className="inline-block shrink-0 bg-blue-500 rounded-full w-10 h-10">
                        <Image
                          src="/static/icons/smartphone.svg"
                          layout="responsive"
                          width={40}
                          height={40}
                        />
                      </picture>
                      <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                                                Telefonos y Tablets
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="text-slate-200 bg-soft-blue rounded-lg list-none">
                  <Link href="/">
                    <a className="text-white no-underline inline-flex flex-col md:flex-row md:items-center gap-2 items-start px-2 py-3 w-full">
                      <picture className="inline-block shrink-0 bg-red-500 rounded-full w-10 h-10">
                        <Image
                          src="/static/icons/tablet.svg"
                          layout="responsive"
                          width={40}
                          height={40}
                        />
                      </picture>
                      <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                                                Laptops
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="text-slate-200 bg-soft-blue rounded-lg list-none">
                  <Link href="/">
                    <a className="text-white no-underline inline-flex flex-col md:flex-row md:items-center gap-2 items-start px-2 py-3 w-full">
                      <picture className="inline-block shrink-0 bg-green-500 rounded-full w-10 h-10">
                        <Image
                          src="/static/icons/console.svg"
                          layout="responsive"
                          width={40}
                          height={40}
                        />
                      </picture>
                      <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                                                Consolas
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="text-slate-200 bg-soft-blue rounded-lg list-none">
                  <Link href="/">
                    <a className="text-white no-underline inline-flex flex-col md:flex-row md:items-center gap-2 items-start px-2 py-3 w-full">
                      <picture className="inline-block shrink-0 bg-green-500 rounded-full w-10 h-10">
                        <Image
                          src="/static/icons/console.svg"
                          layout="responsive"
                          width={40}
                          height={40}
                        />
                      </picture>
                      <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                                                Accesorios
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="text-slate-200 bg-soft-blue rounded-lg list-none">
                  <Link href="/">
                    <a className="text-white no-underline inline-flex flex-col md:flex-row md:items-center gap-2 items-start px-2 py-3 w-full">
                      <picture className="inline-block shrink-0 bg-cyan-500 rounded-full w-10 h-10">
                        <Image
                          src="/static/icons/smartwatch.svg"
                          layout="responsive"
                          width={40}
                          height={40}
                        />
                      </picture>
                      <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                                                SmartWatch
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="text-slate-200 bg-soft-blue rounded-lg list-none">
                  <Link href="/">
                    <a className="text-white no-underline inline-flex flex-col md:flex-row md:items-center gap-2 items-start px-2 py-3 w-full">
                      <picture className="inline-block shrink-0 bg-purple-600 rounded-full w-10 h-10">
                        <Image
                          src="/static/icons/camera.svg"
                          layout="responsive"
                          width={40}
                          height={40}
                        />
                      </picture>
                      <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                                                Camaras
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="text-slate-200 bg-soft-blue rounded-lg list-none">
                  <Link href="/">
                    <a className="text-white no-underline inline-flex flex-col md:flex-row md:items-center gap-x-2 items-start px-2 py-3 w-full">
                      <picture className="inline-block shrink-0 bg-yellow-500 rounded-full w-10 h-10">
                        <Image
                          src="/static/icons/camera.svg"
                          layout="responsive"
                          width={40}
                          height={40}
                        />
                      </picture>
                      <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap">
                                                Headphones
                      </span>
                    </a>
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
              <h2 className="text-white text-3xl font-bold">
                                Elije tu estilo favorito
              </h2>
            </div>
            <div
              className="preferences-example py-4 md:flex"
              align="center"
            >
              <div className="preference-description">
                <h2>Juega</h2>
                <p className="text-white">
                                    Un dispositivo con el hardware más potente
                                    para poder jugar a tus juegos favoritos sin
                                    ningún problema
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
