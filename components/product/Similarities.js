import Image from 'next/image'

export const Similarities = () => {
    return (
        <section className="bg-white/[.09] overflow-hidden w-11/12 mx-auto text-white">
            <h3 className="text-xl font-bold">Similares</h3>
            <div className="similarities-list flex flex-grow flex-shrink overflow-x-auto whitespace-nowrap gap-2 rounded-xl">
                <div className="product cursor-pointer" title="redmi note 8">
                    <div className="image">
                        <Image
                            src="/static/images/product/xiaomi/pocox3nfc.png"
                            id="poco"
                            width={80}
                            height={80}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
