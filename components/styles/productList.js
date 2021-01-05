import css from 'styled-jsx/css'

export default css`
    :root {
        /* background: linear-gradient(to right ,#11b5e1, #1bd6d2, rgba(36, 100, 179, 0.7)); */
        /* --color-text: #00558f; */
        --color-text: rgba(255, 255, 255, 0.85);
        /* background: linear-gradient(to right ,#1cd0b3,#54ddd5,#29c7ca); */
        /* background: linear-gradient(to right ,#190009,#020104,#10051f); */
    }

    .productList {
        background: linear-gradient(to right, #002239, #002043, #10051f);
    }

    @keyframes opacityAnimation {
        from {
            width: 0;
        }

        to {
            width: 80%;
        }
    }

    @keyframes backExpand {
        25% {
            background-image: linear-gradient(to right, blue 25%, transparent);
        }
        100% {
            background-image: linear-gradient(to right, blue 30%, blue 70%);
        }

        /* 100% {
            background-image: linear-gradient(to right, blue 50%, blue 50%);
        } */
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        animation: opacityAnimation 0.4s;
    }

    .card-image {
        display: flex;
        flex-wrap: wrap;
    }

    .card-image img {
        width: 100%;
        height: auto;
        user-select: none;
    }

    .name {
        color: rgba(255, 255, 255, 0.8);
        text-align: center;
        background-image: linear-gradient(to right, #1ebcff, blue);
        padding: 22px;
    }

    .option {
        margin-top: 10px;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .colors {
        display: flex;
        margin-top: 20px;
        justify-content: center;
    }

    .precios {
        color: #665863;
        margin: auto;
        text-align: center;
        margin: 12px;
    }

    .recommendations {
        color: var(--color-text);
        width: 90%;
        margin: auto;
        grid-column: 1 / span 2;
        width: 100%;
    }

    .recommendations::selection {
        color: #fff;
    }

    .recomendationDevice {
        display: grid;
        grid-template-columns: 1fr;
        vertical-align: middle;
        font-weight: 400;
        font-size: 14px;
    }

    .recomendationDevice a {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.15);
        padding: 8px;
        margin: 20px;
        background: #051838;
        color: rgba(255, 255, 255, 0.7);
        border-radius: 16px;
    }

    .recomendationDevice a:focus {
        color: #fff;
    }

    .recomendationDevice a:hover {
        animation: backExpand 0.3s ease-in;
        transition: all ease 0.3s;
        color: #fff;
        animation-fill-mode: forwards;
    }

    .recomendationDevice img {
        width: 20%;
    }

    .catalogo {
        grid-column: 1 / span 2;
        margin: 30px 0;
    }

    .catalogo > h3 {
        color: #fff;
        margin-left: 4px;
    }

    .container-card {
        margin: 20px 0;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 25px;
        justify-content: center;
        align-items: center;
        font-size: 18px;
    }

    .card {
        border: 1px solid #fff;
        display: grid;
        grid-template-columns: 64px auto;
        align-items: center;
        overflow: hidden;
        font-size: 14px;
        border-radius: 12px;
    }

    .header-card img {
        width: 100%;
    }

    .description-card {
        color: var(--color-text);
        padding: 8px;
        text-align: left;
    }

    .description-card span {
        margin: 8px 0;
    }

    .description-card span h3 {
        font-size: 1.1rem;
    }

    .description-card span p {
        color: rgba(0, 0, 0, 0.65);
        font-size: 0.75rem;
        color: rgba(250, 250, 250, 0.65);
    }

    @media screen and (max-width: 1200px) {
        .container-card {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media screen and (max-width: 411px) {
        .container-card {
            grid-template-columns: 1fr;
        }
    }

    @media screen and (max-width: 595px) {
        .container-card {
            width: 95%;
            margin: auto;
            grid-template-columns: 1fr;
        }
        .card {
            border-radius: 12px;
            width: 85%;
            margin: 8px auto;
            text-align: center;
        }
        .description-card {
            padding: 8px;
        }
    }

    @media screen and (max-width: 767px) {
        .summary {
            font-size: 15px;
        }
    }

    @media screen and (min-width: 768px) {
        .container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto auto;
            grid-template-areas:
                'images Menu'
                'name Menu';

            align-items: start;
            width: 85%;
            margin: auto;
        }

        .card-image {
            grid-area: images;
            height: 100%;
        }
        .card-image img {
            max-width: 100%;
            height: auto;
        }

        .name {
            grid-area: name;
        }

        .option {
            margin: 0;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            grid-column: 2 / span 3;
            grid-area: Menu;
            height: 100%;
        }

        .recommendations {
            width: 85%;
            margin: 30px auto;
        }

        .recomendationDevice {
            grid-template-columns: 1fr 1fr 1fr;
            vertical-align: middle;
            font-size: 18px;
        }

        .recomendationDevice a {
            font-size: 18px;
        }
    }

    @media screen and (min-width: 1200px) {
        .container-card {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    /* Detecta el modo oscuro en el navegador o en el sistema operativo (Windows es más usado) */

    /* 
@media (prefers-color-scheme: dark) {
        background: red;
} */

    /*
@media (prefers-color-scheme: light) {
        background: orange;
} */
`
