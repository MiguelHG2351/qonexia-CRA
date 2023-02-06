import { useRef } from 'react'
import classNames from 'classnames'
import ProductQR from './ProductQR'

export default function ProductModal({ isShowQRcode, changeState, token }) {
  const ref = useRef(null)

  const downloadCode = (e) => {
    if (ref.current.children[0]) {
      console.log(ref.current.children[0])
      const getURL = ref.current.children[0].toDataURL('image/png')
      const link = document.createElement('a')
      link.setAttribute('download', 'qrcode.png')
      link.setAttribute('href', getURL)
      link.setAttribute('target', '_blank')
      link.click()
    }
  }

  return (
    <div
      className={classNames(
        'modal2 fixed z-40 bg-black/[.88] top-0 left-0 w-screen h-screen flex justify-center items-center',
        { 'pointer-events-auto opacity-1': isShowQRcode },
        { 'pointer-events-none opacity-0': !isShowQRcode }
      )}
      onClick={(e) => changeState(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal-container"
      >
        {token && (
          <div className="modal-info w-screen md:w-fit md:p-8 bg-slate-900 py-4 text-center">
            <div ref={ref} className="inline-block">
              <ProductQR token={token} />
            </div>
            <h2 className="text-white py-8 font-semibold text-lg">
                            El código tiene validez de 24hrs
            </h2>
            <div className="button-action py-8 flex justify-center gap-x-4">
              <button
                onClick={downloadCode}
                className="py-2 px-8 text-black font-bold text-lg rounded-md bg-white "
              >
                                Descargar
              </button>
              <button className="py-2 px-8 text-white font-bold text-lg rounded-md bg-red-500">
                                Eliminar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
