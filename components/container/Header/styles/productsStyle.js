import css from 'styled-jsx/css'

export default css`
    /* Override styles of algolia */
    .ais-SearchBox-input, .ais-SearchBox-form {
        height: 100%;
    }


    .form-container {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: nowrap;
        flex-direction: row-reverse;
        /* & input[type="checkbox"] {
            display: none;
        } */
    }

    .header {
        background: var(--background-header);
        color: #fff;
        height: 73px;
        box-shadow: var(--shadow);
        position: relative;
    }
    .header-title {
        --font-title: 12px;
        display: flex;
        align-items: center;
        width: 50%;
    }
    .header-title button {
        margin-right: 1.25rem;
        background: transparent;
        font-size: calc(var(--font-title) * 2);
    }

    .header-title button i {
        font-size: calc(var(--font-title) * 2.91);
    }

    .search {
        position: absolute;
        z-index: 10;
        width: 0;
        transition: width 0.3s ease;
    }

    .search.active {
        width: 50%;
    }

    .search input[type='text'] {
        transition: all ease 0.3s;
        outline: none;
        border: none;
        width: 96%;
        padding-left: 0.5rem;
    }

    .form label {
        border: none;
        background: transparent;
        color: #fff;
        width: auto;
        cursor: pointer;
    }

    .form label i {
        font-size: 30px;
        user-select: none;
    }

    @media screen and (max-width: 768px) {
        .header {
            height: 60px;
        }
        .header-title {
            width: 75%;
            font-size: var(--font-title);
        }
        .header-title button {
            margin-right: 0;
        }
        .form {
            width: 25%;
        }
    }

    .sidenav {
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
    }

    .sidenav::-webkit-scrollbar {
        width: 0;
    }

    .sidenav.active {
        transform: translateX(0);
    }
    .profile {
        padding: 12px;
        position: relative;
    }

    .profile img {
        border-radius: 50%;
        padding: 11px;
        width: 30%;
    }

    .profile strong {
        font-size: 25px;
        color: #fff;
    }
    .profile span {
        font-size: 14px;
        color: #fff;
    }

    .background {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
    }
    .background img {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 0;
        padding: 0;
        margin: 0;
    }

    .header-nav {
        margin: 12px 0 0 0;
        color: #000;
        padding: 0;
    }

    .header-nav li {
        list-style: none;
        display: flex;
        padding: 0 12px;
        align-items: center;
        transition: background ease-in 0.2s;
    }

    .header-nav li:hover {
        will-change: background;
        background: var(--background-header);
    }

    .header-nav li:hover a {
        color: #fff;
    }

    .header-nav li:hover i {
        color: #fff;
    }

    .header-nav li a {
        padding: 15px;
        color: #000;
        display: block;
        width: 100%;
        height: 100%;
        margin-left: 22px;
        text-decoration: none;
        background: none;
    }

    @media screen and (min-width: 768px) {
        .sidenav {
            width: 75%;
        }
    }

    .overlay {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        z-index: 4;
        display: none;
    }

    .overlay.active {
        display: block;
    }
    .btn-bezel {
        background: paint(bezel);
        padding: 12px;
        margin-left: 12px;
        border: none;
    }
    .btn-bezel:hover {
        --backgroundV: red;
    }
`
