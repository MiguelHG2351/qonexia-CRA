import Image from 'next/image'

export default function BrandSlide({ src, alt, url }) {
  return (
    <div className="slide relative">
      <Image
        width={340}
        height={532}
        className="inline-block h-auto w-64 flex-shrink-0 overflow-hidden rounded-xl align-middle md:min-h-[16.625rem] md:w-80 md:cursor-pointer"
        src={src}
        alt={alt}
      />
      <div className="absolute"></div>
    </div>
  )
}
