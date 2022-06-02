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
        <section className="md:order-3 w-full flex flex-col justify-center">
            <article className="colors dark:bg-very-dark-blue flex justify-center gap-x-3 p-3 rounded-xl">
                {colors.map((color, index) => (
                    <button
                        aria-label={`Color número ${index + 1}`}
                        // style={{ border: '2px solid red' }}
                        className={classNames(
                            'relative p-4 z-10 overflow-hidden mix-blend-normal rounded-full'
                        )}
                        key={`color-${index}`}
                    >
                        <span
                            className="absolute z-10 top-0 left-0 w-full h-full"
                            style={{ background: color }}
                        ></span>
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-very-dark-blue w-7 h-7 rounded-full"></span>
                        <span
                            className={classNames(
                                'absolute z-30 top-2 left-2 w-4 h-4 rounded-full'
                            )}
                            style={{ background: color }}
                        ></span>
                    </button>
                ))}
            </article>
            <article className="flex gap-x-4 py-4 justify-between">
                <button className="pricing text-white border-none rounded-md py-4 flex-1 bg-white/[.29]">
                    {price}$
                </button>
                <button
                    onClick={showQR}
                    className="flex-1 border-none text-black rounded-md py-4 bg-sky-500 font-medium"
                >
                    Reservar
                </button>
            </article>
            <Modal>
                <ProductModal isShowQRcode={isShowQRcode} changeState={setIsShowQRcode} token={token} />
            </Modal>
        </section>
    )
}
