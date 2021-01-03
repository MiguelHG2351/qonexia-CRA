import styled from 'styled-components'
import { inputForm } from 'GlobalStyle'

export const Header = styled.header`
    background: var(--background-header);
    color: #fff;
    padding: 15px;
    height: 73px;
    display: flex;
    justify-content: space-between;
    box-shadow: var(--shadow);
    align-items: center;
    position: relative;
    & .header-title {
        --font-title: 12px;
        display: flex;
        align-items: center;
        width: 50%;
        & button {
            margin-right: 20px;
            display: flex;
            align-items: center;
            border: none;
            background: transparent;
            color: #fff;
            font-size: calc(var(--font-title) * 2);
            & i {
                font-size: calc(var(--font-title) * 2.91);
            }
        }
        
    }
    & .form {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: nowrap;
        flex-direction: row-reverse;
        & label {
            border: none;
            background: transparent;
            color: #fff;
            width: auto;
            cursor: pointer;
            & i {
                font-size: 30px;
                user-select: none;
            }
        }
        
        & .search {
            position: absolute;
            width: 50%;
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 10;
            & .close-attachment {
                cursor: pointer;
                user-select: none;
                background: #fff;
                & i {
                    color: #000;
                    padding: 4px;
                }
            }
            & input {
            transition: all ease 0.3s;
            animation: ${inputForm} 0.4s forwards;
            outline: none;
            padding: 8px;
            border: none;
            }
        }

        & .search.active {
            display: flex;
        }
        
    }

    @media screen and (max-width: 768px) {
        height: 60px;
        & .header-title {
            width: 75%;
            font-size: var(--font-title);
            & button {
                margin-right: 0;
            }
        }
    }

    & .form {
        width: 25%;
    }


`

export const Sidenav = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    width: 90vw;
    background: #fff;
    overflow-y: auto;
    transition: all ease 0.3s;
    z-index: 5;
    transform: translateX(-3000px);

    &::-webkit-scrollbar {
        width: 0;
    }

    &.active {
        transform: translateX(0);
    }
    & .profile {
        padding: 12px;
        position: relative;
        & .background {
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            & img {
                width: 100%;
                height: 100%;
                border-radius: 0;
                padding: 0;
                margin: 0;
            }
        }

        & img {
            border-radius: 50%;
            padding: 11px;
            width: 30%;
        }

        & strong {
            font-size: 25px;
        color: #fff;
        }
        & span {
            font-size: 14px;
        color: #fff;
        }
    }
    & .header-nav {
        margin: 12px 0 0 0;
        color: #000;
        padding: 0;
    

        & li {
            list-style: none;
            display: flex;
            padding: 0 12px;
            align-items: center;
            transition: background ease-in 0.2s;
            & a {
                padding: 15px;
                color: #000;
                display: block;
                width: 100%;
                height: 100%;
                margin-left: 22px;
                text-decoration: none;
                background: none;
            }
        }

        & li:hover {
            will-change: background;
            background: var(--background-header);
            color: #fff;
            & a {
                color: #fff;
            }
        }

    }

    @media screen and (min-width: 768px) {
        width: 75%;
    }

`

export const Overlay = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 4;
    display: none;
    &.active {
        display: block;
    }
`

export const BtnBezel = styled.button`
background: paint(bezel);
padding: 12px;
margin-left: 12px;
border: none;
&:hover {
    --backgroundV: red;
}

`
