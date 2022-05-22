import React from 'react'
import styles from './devices'

export default function Device({ data }) {
    return (
        <>
            <section className="container-description text-white flex flex-col gap-y-10">
                <div className="description text-center">
                    <strong className="font-bold text-2xl">
                        Características
                    </strong>
                </div>
                <div className="info flex flex-col gap-y-5">
                    <div className="flex align-center gap-x-5">
                        <i>
                            <svg
                                width="21"
                                height="28"
                                viewBox="0 0 21 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16.625 0H4.375C2.4418 0 0.875 1.5668 0.875 3.5V24.5C0.875 26.4332 2.4418 28 4.375 28H16.625C18.5582 28 20.125 26.4332 20.125 24.5V3.5C20.125 1.5668 18.5555 0 16.625 0ZM10.5 26.25C9.5293 26.25 8.75 25.4707 8.75 24.5C8.75 23.5293 9.5293 22.75 10.5 22.75C11.4707 22.75 12.25 23.5293 12.25 24.5C12.25 25.4707 11.4734 26.25 10.5 26.25ZM16.625 3.5V21H4.375V3.5H16.625Z"
                                    fill="#20D2C6"
                                />
                            </svg>
                        </i>
                        <p className='m-0'>{data.screen} pulgadas</p>
                    </div>
                    <div className="flex align-center gap-x-5">
                        <i>
                            <svg
                                width="27"
                                height="26"
                                viewBox="0 0 27 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.2621 1.625H16.7379C17.8295 1.625 18.7945 2.29633 19.1373 3.29164L19.6857 4.875H23.625C25.4865 4.875 27 6.33242 27 8.125V21.125C27 22.9176 25.4865 24.375 23.625 24.375H3.375C1.51084 24.375 0 22.9176 0 21.125V8.125C0 6.33242 1.51084 4.875 3.375 4.875H7.31426L7.8627 3.29164C8.20547 2.29633 9.17051 1.625 10.2621 1.625ZM13.5 19.5C16.2949 19.5 18.5625 17.3164 18.5625 14.625C18.5625 11.8879 16.2949 9.75 13.5 9.75C10.6576 9.75 8.4375 11.8879 8.4375 14.625C8.4375 17.3164 10.6576 19.5 13.5 19.5Z"
                                    fill="#20D2C6"
                                />
                            </svg>
                        </i>
                        <p className='m-0'>
                            {data.camera_back
                                .map((quality) => `${quality}MP`)
                                .join(' + ')}
                        </p>
                    </div>
                    <div className="flex align-center gap-x-5">
                        <i>
                            <svg
                                width="27"
                                height="26"
                                viewBox="0 0 27 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.2621 1.625H16.7379C17.8295 1.625 18.7945 2.29633 19.1373 3.29164L19.6857 4.875H23.625C25.4865 4.875 27 6.33242 27 8.125V21.125C27 22.9176 25.4865 24.375 23.625 24.375H3.375C1.51084 24.375 0 22.9176 0 21.125V8.125C0 6.33242 1.51084 4.875 3.375 4.875H7.31426L7.8627 3.29164C8.20547 2.29633 9.17051 1.625 10.2621 1.625ZM13.5 19.5C16.2949 19.5 18.5625 17.3164 18.5625 14.625C18.5625 11.8879 16.2949 9.75 13.5 9.75C10.6576 9.75 8.4375 11.8879 8.4375 14.625C8.4375 17.3164 10.6576 19.5 13.5 19.5Z"
                                    fill="#20D2C6"
                                />
                            </svg>
                        </i>
                        <p className='m-0'>
                            {data.camera_front
                                .map((quality) => `${quality}MP`)
                                .join(' + ')}
                        </p>
                    </div>
                    <div className="flex align-center gap-x-5">
                        <i>
                            <svg
                                width="26"
                                height="25"
                                viewBox="0 0 26 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8.125 17.1875H17.875V7.8125H8.125V17.1875ZM22.75 8.59375H25.1875C25.6344 8.59375 26 8.24219 26 7.8125C26 7.38281 25.6363 7.03125 25.1875 7.03125H22.75V6.25C22.75 4.52393 21.2951 3.125 19.5 3.125H18.6875V0.78125C18.6875 0.349805 18.3219 0 17.875 0C17.4263 0 17.0625 0.349805 17.0625 0.78125V3.125H13.8125V0.78125C13.8125 0.349805 13.4469 0 13 0C12.5531 0 12.1875 0.349805 12.1875 0.78125V3.125H8.9375V0.78125C8.9375 0.349805 8.57187 0 8.125 0C7.67812 0 7.3125 0.349805 7.3125 0.78125V3.125H6.5C4.70488 3.125 3.25 4.52393 3.25 6.25V7.03125H0.8125C0.363797 7.03125 0 7.38281 0 7.8125C0 8.24219 0.363797 8.59375 0.8125 8.59375H3.25V11.7188H0.8125C0.363797 11.7188 0 12.0703 0 12.5C0 12.9297 0.363797 13.2812 0.8125 13.2812H3.25V16.4062H0.8125C0.363797 16.4062 0 16.7578 0 17.1875C0 17.6172 0.363797 17.9688 0.8125 17.9688H3.25V18.75C3.25 20.4761 4.70488 21.875 6.5 21.875H7.3125V24.2188C7.3125 24.6484 7.67812 25 8.125 25C8.5738 25 8.9375 24.6502 8.9375 24.2188V21.875H12.1875V24.2188C12.1875 24.6502 12.5513 25 13 25C13.4488 25 13.8125 24.6502 13.8125 24.2188V21.875H17.0625V24.2188C17.0625 24.6502 17.4263 25 17.875 25C18.3238 25 18.6875 24.6502 18.6875 24.2188V21.875H19.5C21.2951 21.875 22.75 20.4761 22.75 18.75V17.9688H25.1875C25.6363 17.9688 26 17.6189 26 17.1875C26 16.7561 25.6363 16.4062 25.1875 16.4062H22.75V13.2812H25.1875C25.6344 13.2812 26 12.9297 26 12.5C26 12.0703 25.6363 11.7188 25.1875 11.7188H22.75V8.59375ZM19.5 17.9688C19.5 18.4002 19.1363 18.75 18.6875 18.75H7.3125C6.86562 18.75 6.5 18.3984 6.5 17.9688V7.03125C6.5 6.60156 6.86562 6.25 7.3125 6.25H18.6875C19.1344 6.25 19.5 6.60156 19.5 7.03125V17.9688Z"
                                    fill="#20D2C6"
                                />
                            </svg>
                        </i>
                        <p className='m-0'>{data.cpu}</p>
                    </div>
                    <div className="flex align-center gap-x-5">
                        <i>
                            <svg
                                width="38"
                                height="22"
                                viewBox="0 0 38 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M30.3333 6.6H6.5V15.4H30.3333V6.6ZM36.8333 6.6V4.4C36.8333 1.96969 34.8935 0 32.5 0H4.33333C1.93984 0 0 1.97313 0 4.4V17.6C0 20.0303 1.93984 22 4.33333 22H32.5C34.8935 22 36.8333 20.0303 36.8333 17.6V15.4C38.0297 15.4 39 14.4148 39 13.2V8.8C39 7.58313 38.0318 6.6 36.8333 6.6ZM32.5 17.6H4.33333V4.4H32.5V17.6Z"
                                    fill="#20D2C6"
                                />
                            </svg>
                        </i>
                        <p className='m-0'>{data.battery}mAh</p>
                    </div>
                </div>
            </section>
            <style jsx>{styles}</style>
        </>
    )
}
