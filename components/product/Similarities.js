import Image from 'next/image'

export const Similarities = () => {
    return (
        <section className="overflow-hidden w-11/12 mx-auto text-white">
            <h3 className="text-xl font-bold">Similares</h3>
            <div className="similarities-list flex overflow-x-auto whitespace-nowrap gap-4 rounded-xl">
                <div className="flex items-stretch gap-x-4 bg-white/[.09] p-6 cursor-pointer rounded-xl" title="redmi note 8">
                    <div className="image">
                        <Image
                            src="/static/images/poco-x3-gris.png"
                            id="poco"
                            width={90}
                            height={90}
                            layout="fixed"
                        />
                    </div>
                    <div className="productDetails flex flex-col justify-center gap-y-6">
                        <div className="product-info">
                            <h6>Poco X3 Pro</h6>
                            <p className='text-gray-400'>Xiaomi - Poco</p>
                        </div>
                        <button className='bg-sky-500 py-2 px-8 rounded-md'>Más info</button>
                    </div>
                </div>
                <div className="flex items-stretch gap-x-4 bg-white/[.09] p-6 cursor-pointer rounded-xl" title="redmi note 8">
                    <div className="image">
                        <Image
                            src="/static/images/poco-x3-gris.png"
                            id="poco"
                            width={90}
                            height={90}
                            layout="fixed"
                        />
                    </div>
                    <div className="productDetails flex flex-col justify-center gap-y-6">
                        <div className="product-info">
                            <h6>Poco X3 Pro</h6>
                            <p className='text-gray-400'>Xiaomi - Poco</p>
                        </div>
                        <button className='bg-sky-500 py-2 px-8 rounded-md'>Más info</button>
                    </div>
                </div>
                <div className="flex items-stretch gap-x-4 bg-white/[.09] p-6 cursor-pointer rounded-xl" title="redmi note 8">
                    <div className="image">
                        <Image
                            src="/static/images/poco-x3-gris.png"
                            id="poco"
                            width={90}
                            layout="fixed"
                            height={90}
                        />
                    </div>
                    <div className="productDetails flex flex-col justify-center gap-y-6">
                        <div className="product-info">
                            <h6>Poco X3 Pro</h6>
                            <p className='text-gray-400'>Xiaomi - Poco</p>
                        </div>
                        <button className='bg-sky-500 py-2 px-8 rounded-md'>Más info</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
