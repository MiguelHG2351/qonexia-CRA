import {createGlobalStyle, keyframes} from 'styled-components';

export const borderAnimation = keyframes`
    from {
        width: 0;
    }

    to {
        width: 100%;
        transform: translate(45deg);
        left: 0;
    }
`

export const inputForm = keyframes`
    from {
        width: 0;
    }

    to {
        width: 100%;
    }

`

export const opacityAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const backExpand = keyframes`
    25% {
        background-image: linear-gradient(to right, blue 25%, transparent);
    }

    100% {
        background-image: linear-gradient(to right, blue 30%, blue 70%);
    }

    /* 100% {
        background-image: linear-gradient(to right, blue 50%, blue 50%);
    } */
`

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif, Arial;
    }

    -webkit-appearance: none;

    ::-webkit-progress-bar {
        background: red;    
    }

    button {
        outline: none;
        border: none;
        cursor: pointer;
    }

    a {
        text-decoration: none !important;
    }

    [class*="btn-"] {
        padding: 0.756em 1.25em;
        color: #fff;
        border-radius: 22px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        & img {
            width: 8%;
        }

        &:hover {
            opacity: 0.75;
            transform: scale(0.85);
            transition: transform 0.35s ease;
        }
    }

    .btn-xiaomi:not(.disabled) {
        background: #f57921 !important;
    }

    .btn-huawei:not(.disabled) {
        background: #c9191c !important;
    }

    .btn-realme:not(.disabled) {
        background: #ffc107 !important;
    }

    .btn-apple:not(.disabled) {
        background: #1cc7da !important;
    }

    .btn-nintendo:not(.disabled) {
        background: #fff !important;
        color: #000;
    }

    :root {
        --width: 1440px;
        --bezel-colors: #e62427;
        --backgroundV: #000;
        --bezel-width: 2;
        --shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.15);
        --background-header: #6200ee;
    }

`