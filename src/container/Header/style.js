import styled from 'styled-components';

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
    @media screen and (min-width: 992px) {
        grid-template-columns: 50% 50%;
        grid-template-rows: auto 1fr;
        grid-template-areas: "menu menu" "title list";
    }
`
export const HeaderNav = styled.div`
    margin-top: 12px;
    display: flex;
    justify-content: flex-start;
    grid-area: menu;
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
        background: #0b0b2a;
    }

    & video {
        object-fit: cover;
        background: #0b0b2a;
    }
`

export const ListNav = styled.ul`

    @media screen and (min-width: 275px) {
        display: flex;
        justify-content: flex-start;
        width: 50%;
        padding: 5px;
        & li {
            list-style: none;
            background: blue;
            display: flex;
            align-items: center;
            padding: 15px;
            margin-right: 12px;
            & a {
                color: #fff;
                text-decoration: none;
            }
        }
    }

    @media screen and (max-width: 1024px) {
        & li {
            padding: 8px;
            & a {
                font-size: 14px;
            }
        }
    }


    @media screen and (min-width: 1440px) {
        display: flex;
        justify-content: space-evenly;
        width: 35%;
        padding: 0;

        & li {
            padding: 15px;
            & a {
                color: #fff;
                text-decoration: none;
                font-size: initial;
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
    & h1 {
        font-size: 1em;
    }

    @media screen and (min-width: 1024px) {
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


export const BtnPrimary = styled.a`
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
        /* padding-bottom: calc(12px + 4px); */
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
        & .card-image {
            display: flex;
            justify-content: center;
            & img {
                margin-right: 12px;
                border-radius: 12px;
                width: 50%;
                height: auto;
                transition: all ease .2s;
            }
        }

    @media screen and (min-width: 992px) {
        color: greenyellow;
        flex-direction: column;
        align-items: center;
        width: 62%;
        flex-shrink: 0;
        overflow: hidden;
        clear: both;
        scroll-behavior: smooth;

        &::-webkit-scrollbar {
            display: none;
        }

        & .card-image {
            & img {
                margin-right: 12px;
                border-radius: 12px;
                width: 100%;
                height: auto;
                transition: all ease .2s;
            }
        }

    }
`