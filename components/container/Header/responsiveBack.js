import css from 'styled-jsx/css'

const styles = css`
    .background {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        box-sizing: content-box;
    }

    .background img,
    .background video {
        object-fit: cover;
        max-width: 100%;
        background: #0b0b2a;
        width: 100%;
    }
`

export default function ResponsiveBackground() {
    const responsive = matchMedia('(max-width: 576px)').matches
    return (
        <>
            <div className="background">
                { responsive
                    ? <img
                        src="https://miguelhg2351.github.io/API/imagenes/backgroundMobile.webp"
                        alt="Bienvenidos a qonexia"
                    />
                    : <video
                        src="https://miguelhg2351.github.io/API/videos/video.webm"
                        muted
                        autoPlay={true}
                        loop={true}
                    ></video>
                }
            </div>
            <style jsx>
                {styles}
            </style>
        </>
    )
}
