import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function HomeHero() {
  return (
    <>
      <section className="hero-container relative h-[calc(100vh_-_60px)] overflow-hidden">
        <div className="hero relative max-h-full px-8">
          <div className="left-hero">
            <h1 className="mx-auto max-w-[16ch] text-center text-3xl text-white">
              Bienvenidos a Qonexia
            </h1>
            <p className="text-white opacity-75">
              Somos Qonexia, una empresa con más de 7 años en el mercado, que te
              ofrece la mayor variedad de prouctos
            </p>
            <Link
              href="/"
              className="mx-auto block w-max rounded-lg border-none bg-primary px-4 py-2 text-base font-bold text-black no-underline"
            >
              Ir al catálogo
            </Link>
          </div>
          <div className="right-hero mt-8 bg-blue-gradient">
            <div className="rounded-t-full border border-b-0 border-solid border-secondary py-8 px-8 pb-0">
              <div className="rounded rounded-t-full bg-accent">
                <div className="flex justify-center">
                  <Image
                    src="/static/images/one-plus-10T.png"
                    width={153}
                    height={153}
                    alt="Imagen temporal"
                  />
                </div>
                <div className="flex items-stretch justify-between bg-black/[.3] p-4">
                  <div className="flex flex-col items-center">
                    <h3 className="text-base text-white opacity-75">Nombre</h3>
                    <span className="text-lg font-bold text-white">
                      One plus 10T
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="text-base text-white opacity-75">Precio</h3>
                    <span className="text-lg font-bold text-white">350$</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default React.memo(HomeHero)
