import styled from 'styled-components'

export const Header = styled.header`
    position: relative;
    background: rgba(0, 0, 0, .7);
    height: 100vh;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 10% 30% 60%;
    grid-template-areas: "menu menu" "title title" "list list";
    justify-content: center;
    align-items: center;

    & .toggle-menu {
        border: none;
        background-color: blue;
        color: #fff;
        outline: none;
        border: none;
        position: fixed;
        z-index: 6;
        right: 15px;
        padding: 5px 7px;
        border-radius: 50%;
        top: 12px;
        & i {
            user-select: none;
            font-size: 40px;
        }
    }

    @media screen and (min-width: 992px) {
        grid-template-columns: 50% 50%;
        grid-template-rows: auto 1fr;
        grid-template-areas: "menu menu" "title list";
        & .toggle-menu {
            display: none;
        }
    }
`

export const Background = styled.div`
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    box-sizing: content-box;

    & img {
        object-fit: cover;
        max-width: 100%;
        background: #0b0b2a;
    }

    & video {
        object-fit: cover;
        background: #0b0b2a;
        max-width: 100%;
        width: 100%;
    }
`
export const HeaderNav = styled.div`

    /* Estado activado */
    &.active {
        transform: translateX(0);
    }

    /* Estilos default */
    transition: transform ease 0.3s;
    margin-top: 12px;
    display: flex;
    justify-content: flex-start;
    grid-area: menu;
    & .list-nav {
        font-size: 18px;
        display: flex;
        justify-content: flex-start;
        width: 100%;
        padding: 0.27em;
        & li {
            list-style: none;
            background: blue;
            display: flex;
            align-items: center;
            margin-right: 0.66em;
            padding: 0 !important;
            & a {
                padding: 0.833em;
                color: #fff;
                text-decoration: none;
            }
        }
    }

    /* De +Infinity a desktop clásica, reacomodación de fuentes */

    @media screen and (max-width: 1024px) {
        & .list-nav {
            & li {
                    padding: 0.44em;
                & a {
                        font-size: 0.77em;
                }
            }
        }
    }

    /* De +Infinity a tablet large */

    @media screen and (max-width: 992px) {
        position: fixed;
        z-index: 5;
        margin-top: 0;
        top: 0;
        right: 0;
        display: block;
        height: 100vh;
        background: blue;
        width: 45%;
        transform: translateX(500px);
        .list-nav {
            flex-direction: column;
            width: 100%;
            height: 100%;
            background: transparent;
            margin-top: 32px;
            & li {
                word-break: break-all;
                margin-right: 0;
                width: 100%;
                border-bottom: 1px solid #fff;
                & a {
                    padding: 1em;
                    width: 100%;
                    font-size: 0.9em;
                }
            }
        }
    }

    @media screen and (max-width: 405px) {
        width: 60%;

    }

/* De +Infinity a Tablet large */
/* 
    @media screen and (min-width: 992px) {
    } */

    /* De +Infinity a desktop XL */

    @media screen and (min-width: 1440px) {
        & .list-nav {
            display: flex;
            justify-content: space-evenly;
            width: 35%;
            padding: 0;

            & li {
                padding: 15px;
                & a {
                    color: #fff;
                    font-size: initial;
                }
            }
        }
    }

`
export const HeaderTitle = styled.div`
    color: #fff;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    grid-area: title;
    flex-direction: column;
    font-size:21px;
    height: 100%;
    align-items: center;
    & h1 {
        font-size: 1em;
    }

    a {
        margin-top: 20px;
        background-color: #1b1fb0;
        color: #fff;
        width: 50%;
        outline: none;
        border: none;
        border-radius: 12px;
        padding: 12px;
        display: inline-block;
        cursor: pointer;
        font-size: 1em;
        transition: all ease .2s;
        text-align: center;
        text-decoration: none;
        &:hover {
            background-color: #2c2fac;
            transform: scale(.9);
        }
        &:active {
            font-size: .9em;
        }
    }

    /* Media query basado en bootstrap | SMALL SCREEN */

    @media screen and (max-width: 576px) {
        & h1 {
            font-size: 1.4em;
        }
        & p {
            font-size: 0.85em;
        }
    }

    @media screen and (max-width: 400px) {
        & p {
            font-size: 0.65em;
        }
    }

    @media screen and (min-width: 1024px) {
        align-items: initial;
        height: auto;
        & h1 {
            font-family: "Be Vietnam";
            font-size: 2em;
        }
        & p {
            font-family: "Be Vietnam";
            font-size: 1em;
        }
    }

    
`

export const HeaderListCard = styled.div`
        grid-area: list;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: nowrap;
        overflow: hidden;
        max-height: 100%;
`

export const Card = styled.div`

    display: flex;
    justify-content: center;
    overflow: hidden;
        & .card-image {
            display: flex;
            justify-content: center;
            & img {
                border-radius: 12px;
                width: 50%;
                height: auto;
                transition: all ease .2s;
            }
        }

    scroll-behavior: smooth;
    
    &::-webkit-scrollbar {
        display: none;
    }

    /* Media query basado en bootstrap |  SMALL SCREEN */
    
    @media screen and (max-width: 576px) {
        & .card-image {
            & img {
                width: 75%;
            }
        }
    }

    
    /* Responsive design in height || responsive design viewport height */
    @media screen and (max-width: 576px) and (max-height: 726px) {
        & .card-image {
            & img {
                width: 60%;
            }
        }
    }
    

    /* Media query De + INFINITY a 992px */
    @media screen and (min-width: 992px) {
        color: greenyellow;
        flex-direction: column;
        align-items: center;
        width: 62%;
        flex-shrink: 0;
        overflow: hidden;
        clear: both;

        & .card-image {
            & img {
                border-radius: 12px;
                width: 100%;
                height: auto;
            }
        }

    }


`
