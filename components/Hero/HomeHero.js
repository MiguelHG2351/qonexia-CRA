import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function HomeHero() {
  return (
    <>
      <section className="relative flex min-h-[calc(100vh_-_60px)] flex-col px-8 pt-6 md:grid md:h-auto md:min-h-[calc(100vh_-_(60px_+_7.75rem))] md:grid-cols-2 md:grid-rows-1 md:gap-x-8 md:px-24">
        <div className="left-hero md:flex md:flex-col md:justify-center">
          <h1 className="m-0 mx-auto max-w-[16ch] text-center text-3xl text-white md:mx-0 md:text-left md:text-5xl">
            Bienvenidos a Qonexia
          </h1>
          <div className="w-full rounded-md bg-primary py-1 text-3xl md:mt-4 md:w-[12ch]"></div>
          <p className="text-white opacity-75">
            Somos Qonexia, una empresa con más de 7 años en el mercado, que te
            ofrece la mayor variedad de prouctos
          </p>
          <Link
            href="/"
            className="mx-auto block w-max rounded-lg border-none bg-primary px-4 py-2 text-base font-bold text-black no-underline md:mx-0"
          >
            Ir al catálogo
          </Link>
        </div>
        <div className="right-hero mt-8 flex flex-1 bg-blue-gradient md:justify-end md:bg-blue-gradient-desk">
          <div className="w-full rounded-t-full border border-b-0 border-solid border-secondary py-8 px-8 pb-0 md:w-auto">
            <div className="flex h-full flex-col rounded rounded-t-full bg-accent">
              <div className="flex flex-1 justify-center">
                <Image
                  src="/static/images/one-plus-10T.png"
                  width={153}
                  height={153}
                  className="h-full w-auto object-cover md:min-h-[16.625rem]"
                  alt="Imagen temporal"
                />
              </div>
              <div className="flex items-stretch justify-between bg-black/[.3] p-4 md:gap-32">
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
      </section>
    </>
  )
}

export default React.memo(HomeHero)
