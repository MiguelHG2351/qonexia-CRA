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
        'modal2 fixed top-0 left-0 z-40 flex h-screen w-screen items-center justify-center bg-black/[.88]',
        { 'opacity-1 pointer-events-auto': isShowQRcode },
        { 'pointer-events-none opacity-0': !isShowQRcode }
      )}
      onClick={(e) => changeState(false)}
    >
      <div onClick={(e) => e.stopPropagation()} className="modal-container">
        {token && (
          <div className="modal-info w-screen bg-slate-900 py-4 text-center md:w-fit md:p-8">
            <div ref={ref} className="inline-block">
              <ProductQR token={token} />
            </div>
            <h2 className="py-8 text-lg font-semibold text-white">
              El código tiene validez de 24hrs
            </h2>
            <div className="button-action flex justify-center gap-x-4 py-8">
              <button
                onClick={downloadCode}
                className="rounded-md bg-white py-2 px-8 text-lg font-bold text-black "
              >
                Descargar
              </button>
              <button className="rounded-md bg-red-500 py-2 px-8 text-lg font-bold text-white">
                Eliminar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
