import Image from 'next/image'
import Link from 'next/link'

export default function BrandSlide({ src, alt, url }) {
  return (
    <div className="slide group relative">
      <Image
        width={340}
        height={532}
        unoptimized={true}
        className="inline-block h-auto w-64 flex-shrink-0 overflow-hidden rounded-xl align-middle md:min-h-[16.625rem] md:w-80 md:cursor-pointer"
        src={src}
        alt={alt}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 opacity-0 transition-opacity group-hover:bg-black-gradient-desk group-hover:opacity-100">
        <Link
          href="/catalogo/samsung"
          className="inline-block bg-primary px-6 py-2 font-bold text-black no-underline"
        >
          Entrar
        </Link>
        <p className="mx-auto w-5/6 text-xs text-white">
          Encuentra dispositivos moviles, tablets, smartwatch, audifonos y una
          gran variedad de productos de la marca Samsung
        </p>
      </div>
    </div>
  )
}
