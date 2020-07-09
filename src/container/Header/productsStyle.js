import styled from 'styled-components'

export const Header = styled.header`
    background: var(--background-header);
    color: #fff;
    padding: 15px;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    box-shadow: var(--shadow);
    align-items: center;
    position: relative;
    & .header-title {
        display: flex;
        align-items: center;
        & button {
            margin-right: 33px;
            border: none;
            background: transparent;
            color: #fff;
            & i {
                font-size: 35px;
            }
        }
        
    }
    & .form {
        & button {
            border: none;
            background: none;
            color: #fff;
            & i {
                font-size: 30px;
                user-select: none;
            }
        }
        & input {
            display: none;
        }
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
    overflow: hidden;
    transition: all ease 0.3s;
    z-index: 5;
    transform: translateX(-3000px);

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
            transition: background ease 0.2s;
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