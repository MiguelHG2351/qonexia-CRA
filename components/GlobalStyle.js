import css from 'styled-jsx/css'

// export const borderAnimation = keyframes`
//     from {
//         width: 0;
//     }

//     to {
//         width: 100%;
//         transform: translate(45deg);
//         left: 0;
//     }
// `

export default css.global`
    * {
        margin: 0;
        box-sizing: border-box;
    }

    body {
        -webkit-appearance: none;
    }

    a {
        text-decoration: none !important;
    }

    [class*='btn-'] {
        padding: 0.756em 1.25em;
        color: #fff;
        border-radius: 22px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    [class*='btn-'] img {
        width: 8%;
    }

    [class*='btn-']:hover {
        opacity: 0.75;
        transform: scale(0.85);
        transition: transform 0.35s ease;
    }

    .xiaomi {
        background: var(--orange) !important;
    }

    .huawei {
        background-color: var(--red-special) !important;
    }

    .realme {
        background-color: var(--orange) !important;
    }

    .apple {
        background-color: var(--white-special) !important;
    }

    .nintendo {
        background-color: var(--white) !important;
        color: #000;
    }

    .gopro {
        background-color: var(--white-special);
    }

    .amazfit {
        background-color: var(--white);
    }

    :root {
        --width: 1440px;
        --bezel-colors: #e62427;
        --backgroundV: #000;
        --bezel-width: 2;
        --shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.15);
        --background-header: #120038;
        --orange: #ff7b00;
        --white-special: #eae0e0;
        --red-special: #db2525;
        --white: #fff;
    }
`
