import React from 'react'
import styles from './devices'

export default function Device ({ data }) {
    return (
        <>
            <section className="container-description text-white flex flex-col gap-y-10">
                <div className="description text-center">
                    <strong className="font-bold text-2xl">Características</strong>
                </div>
                <div className="info flex flex-col gap-y-5">
                    <div className="flex align-center gap-x-5">
                        <i>
                            <img src="/static/icons/screen-icon.svg" alt="icono de telefono" />
                        </i>
                        <p>{data.screen} pulgadas</p>
                    </div>
                    <div className="flex align-center gap-x-5">
                        <i>
                            <img src="/static/icons/camera-icon.svg" alt="icono de camara" />
                        </i>
                        <p>{data.camera_back.map(quality => `${quality}MP`).join(' + ')}</p>
                    </div>
                    <div className="flex align-center gap-x-5">
                        <i>
                            <img src="/static/icons/camera-icon.svg" alt="icono de camara" />
                        </i>
                        <p>{data.camera_front.map(quality => `${quality}MP`).join(' + ')}</p>
                    </div>
                    <div className="flex align-center gap-x-5">
                        <i>
                            <img src="/static/icons/microchip-icon.svg" alt="icono de procesador" />
                        </i>
                        <p>{data.cpu}</p>
                    </div>
                    <div className="flex align-center gap-x-5">
                        <i>
                            <img src="/static/icons/battery-full-icon.svg" alt="icono de bateria" />
                        </i>
                        <p>{data.battery}mAh</p>
                    </div>
                </div>
            </section>
            <style jsx>
                {styles}
            </style>
        </>
    )
}
