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
                        <div className="bg-white/[0.29] w-fit text-white text-xl p-5 rounded-xl cursor-pointer transform hover:scale-95">
                            <h3 className='select-none'>{name}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
