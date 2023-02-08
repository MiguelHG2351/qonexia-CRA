import Image from 'next/image'
import css from 'styled-jsx/css'

export const Similarities = (props) => {
  const { data } = props

  return (
    <>
      <section className="overflow-hidden text-white">
        <h3 className="text-xl font-bold">Similares</h3>
        <div className="similarities-list flex snap-x snap-mandatory snap-start gap-4 overflow-x-auto scroll-smooth whitespace-nowrap rounded-xl">
          {data.map((_, index) => (
            <div key={index} className="w-full shrink-0 md:shrink">
              <div
                className="flex cursor-pointer items-stretch gap-x-4 rounded-xl bg-white/[.09] p-6"
                title="redmi note 8"
              >
                <div className="image relative w-28">
                  <Image
                    src="/static/images/poco-x3-gris.png"
                    id="poco"
                    className="object-contain"
                  />
                </div>
                <div className="productDetails flex flex-col justify-center gap-y-6">
                  <div className="product-info">
                    <h6 className="m-0 text-sm">Poco X3 Pro</h6>
                    <p className="m-0 text-[0.67em] text-gray-400">
                      Xiaomi - Poco
                    </p>
                  </div>
                  <button className="rounded-md border-none bg-sky-500 py-2 px-8 text-black">
                    Más info
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <style jsx>{styles}</style>
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
    background-color: #20d2c6;
    border-radius: 0.75rem;
  }
`
