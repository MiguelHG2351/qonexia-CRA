import ProductImage from 'components/product/ProductImage'

export default function ProductHero({ image, name }) {
  return (
        <>
            <div className="device text-center md:order-2">
                <div className="container-image flex justify-center">
                    <div className="image" align="center">
                        <ProductImage
                            src={image}
                            alt={name}
                            draggable={false}
                        />
                        <div title={name} className="bg-white/[0.29] w-fit text-white text-xl p-5 rounded-xl cursor-pointer transform hover:scale-95">
                            <h3 title={name} className='select-none m-0 max-w-[18ch] whitespace-nowrap overflow-hidden text-ellipsis'>{name}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}
