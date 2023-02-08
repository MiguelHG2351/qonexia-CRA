import ProductImage from 'components/product/ProductImage'

export default function ProductHero({ image, name }) {
  return (
    <>
      <div className="device text-center md:order-2">
        <div className="container-image flex justify-center">
          <div className="image" align="center">
            <ProductImage src={image} alt={name} draggable={false} />
            <div
              title={name}
              className="w-fit transform cursor-pointer rounded-xl bg-white/[0.29] p-5 text-xl text-white hover:scale-95"
            >
              <h3
                title={name}
                className="m-0 max-w-[18ch] select-none overflow-hidden text-ellipsis whitespace-nowrap"
              >
                {name}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
