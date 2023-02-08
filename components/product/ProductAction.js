import { useState, useCallback } from 'react'
import classNames from 'classnames'
import ProductModal from './ProductModal'
import Modal from 'components/portals/Modal'

export default function ProductAction({ colors = [], price }) {
  const [isShowQRcode, setIsShowQRcode] = useState(false)
  const [token, setToken] = useState(null)
  console.log(token)
  const showQR = useCallback(function () {
    if (!token) {
      console.log('showQR')
      fetch('/api/genHash')
        .then((res) => res.json())
        .then((res) => {
          setToken(res.token)
        })
    }
    setIsShowQRcode(true)
  })

  return (
    <section className="flex w-full flex-col justify-center md:order-3">
      <article className="colors flex justify-center gap-x-3 rounded-xl p-3 dark:bg-very-dark-blue">
        {colors.map((color, index) => (
          <button
            aria-label={`Color número ${index + 1}`}
            // style={{ border: '2px solid red' }}
            className={classNames(
              'relative z-10 overflow-hidden rounded-full p-4 mix-blend-normal'
            )}
            key={`color-${index}`}
          >
            <span
              className="absolute top-0 left-0 z-10 h-full w-full"
              style={{ background: color }}
            ></span>
            <span className="absolute top-1/2 left-1/2 z-20 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-very-dark-blue"></span>
            <span
              className={classNames(
                'absolute top-2 left-2 z-30 h-4 w-4 rounded-full'
              )}
              style={{ background: color }}
            ></span>
          </button>
        ))}
      </article>
      <article className="flex justify-between gap-x-4 py-4">
        <button className="pricing flex-1 rounded-md border-none bg-white/[.29] py-4 text-white">
          {price}$
        </button>
        <button
          onClick={showQR}
          className="flex-1 rounded-md border-none bg-sky-500 py-4 font-medium text-black"
        >
          Reservar
        </button>
      </article>
      <Modal>
        <ProductModal
          isShowQRcode={isShowQRcode}
          changeState={setIsShowQRcode}
          token={token}
        />
      </Modal>
    </section>
  )
}
