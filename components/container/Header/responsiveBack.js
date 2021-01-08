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
    return (
        <>
            <div className="background">
                <img
                    src="/static/images/qonexia.png"
                    alt="Bienvenidos a qonexia"
                />
            </div>
            <style jsx>
                {styles}
            </style>
        </>
    )
}
