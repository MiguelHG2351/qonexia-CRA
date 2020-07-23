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

    :root {
        --width: 1440px;
        --bezel-colors: #e62427;
        --backgroundV: #000;
        --bezel-width: 2;
        --shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.15);
        --background-header: #6200ee;
    }

`