import Image from 'next/image'
import css from 'styled-jsx/css'

export const Similarities = (props) => {
  const { data } = props

  return (
        <>
            <section className="overflow-hidden text-white">
                <h3 className="text-xl font-bold">Similares</h3>
                <div className="similarities-list scroll-smooth snap-x snap-start snap-mandatory flex overflow-x-auto whitespace-nowrap gap-4 rounded-xl">
                    {data.map((_, index) => (
                        <div
                            key={index}
                            className="w-full shrink-0 md:shrink"
                        >
                            <div
                                className="flex items-stretch gap-x-4 bg-white/[.09] p-6 cursor-pointer rounded-xl"
                                title="redmi note 8"
                            >
                                <div className="image relative w-28">
                                    <Image
                                        src="/static/images/poco-x3-gris.png"
                                        id="poco"
                                        layout="fill"
                                        className="object-contain"
                                    />
                                </div>
                                <div className="productDetails flex flex-col justify-center gap-y-6">
                                    <div className="product-info">
                                        <h6 className='m-0 text-sm'>Poco X3 Pro</h6>
                                        <p className="text-gray-400 m-0 text-[0.67em]">
                                            Xiaomi - Poco
                                        </p>
                                    </div>
                                    <button className="bg-sky-500 text-black py-2 border-none px-8 rounded-md">
                                        Más info
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <style jsx>
                {styles}
            </style>
        </>
  )
}

const styles = css`
    .container-card {
        width: calc(100vw - 8.3333333333%);
    }

    .similarities-list::-webkit-scrollbar {
        width: 4px;
        height: 4px;
        background-color: #fff;
        border-radius: 0.75rem;
    }

    .similarities-list::-webkit-scrollbar-thumb {
        background-color: #20D2C6;
        border-radius: 0.75rem;
    }
`
