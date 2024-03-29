import css from 'styled-jsx/css'

export default css`
  .hero {
    grid-template-columns: 50% 50%;
    grid-template-rows: 10% 30% 60%;
    grid-template-areas: 'menu menu' 'title title' 'list list';
  }

  .toggle-menu {
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
  }
  .toggle-menu i {
    user-select: none;
    font-size: 40px;
  }

  @media screen and (min-width: 992px) {
    .hero {
      grid-template-columns: 50% 50%;
      grid-template-rows: auto 1fr;
      grid-template-areas: 'menu menu' 'title list';
    }
    .toggle-menu {
      display: none;
    }
  }

  /* HEADER NAV */

  .header-nav {
    /* Estilos default */
    transition: transform ease 0.3s;
    margin-top: 12px;
    display: flex;
    justify-content: flex-start;
    grid-area: menu;
  }

  /* Estado activado */
  .header-nav.active {
    transform: translateX(0);
  }

  .list-nav {
    font-size: 18px;
    display: flex;
    justify-content: flex-start;
    width: 100%;
    padding: 0.27em;
  }

  .list-nav li {
    list-style: none;
    background: blue;
    display: flex;
    align-items: center;
    margin-right: 0.66em;
    padding: 0 !important;
  }

  .list-nav li a {
    padding: 0.833em;
    color: #fff;
    text-decoration: none;
  }

  /* De +Infinity a desktop clásica, reacomodación de fuentes */

  @media screen and (max-width: 1024px) {
    .list-nav li {
      padding: 0.44em;
    }
    .list-nav li a {
      font-size: 0.77em;
    }
  }

  /* De +Infinity a tablet large */

  @media screen and (max-width: 992px) {
    .header-nav {
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
    }

    .list-nav {
      flex-direction: column;
      width: 100%;
      height: 100%;
      background: transparent;
      margin-top: 32px;
    }

    .list-nav li {
      word-break: break-all;
      margin-right: 0;
      width: 100%;
      border-bottom: 1px solid #fff;
    }

    .list-nav li {
      padding: 1em;
      width: 100%;
      font-size: 0.9em;
    }
  }

  @media screen and (max-width: 405px) {
    .header-nav {
      width: 60%;
    }
  }

  /* De +Infinity a Tablet large */
  /* 
    @media screen and (min-width: 992px) {
    } */

  /* De +Infinity a desktop XL */

  @media screen and (min-width: 1440px) {
    .list-nav {
      display: flex;
      justify-content: space-evenly;
      width: 35%;
      padding: 0;
    }
    .list-nav li {
      padding: 15px;
    }

    .list-nav li a {
      color: #fff;
      font-size: initial;
    }
  }

  .header-title {
    color: #fff;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    grid-area: title;
    flex-direction: column;
    font-size: 21px;
    height: 100%;
    align-items: center;
  }

  .header-title h1 {
    font-size: 1em;
  }

  .header-title > a {
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
    transition: all ease 0.2s;
    text-align: center;
    text-decoration: none;
  }

  .header-title a:hover {
    background-color: #2c2fac;
    transform: scale(0.9);
  }

  .header-title a:active {
    font-size: 0.9em;
  }

  /* Media query basado en bootstrap | SMALL SCREEN */

  @media screen and (max-width: 576px) {
    .header-title h1 {
      font-size: 1.4em;
    }
    .header-title p {
      font-size: 0.85em;
    }
  }

  @media screen and (max-width: 400px) {
    .header-title p {
      font-size: 0.65em;
    }
  }

  @media screen and (min-width: 1024px) {
    .header-title {
      align-items: initial;
      height: auto;
    }

    .header-title h1 {
      font-family: 'Be Vietnam';
      font-size: 2em;
    }

    .header-title p {
      font-family: 'Be Vietnam';
      font-size: 1em;
    }
  }

  .header-list-card {
    grid-area: list;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    overflow: hidden;
    max-height: 100%;
  }

  .card {
    display: flex;
    justify-content: center;
    overflow: hidden;
    scroll-behavior: smooth;
  }

  .card-image {
    display: flex;
    justify-content: center;
  }

  .card-image img {
    border-radius: 12px;
    width: 50%;
    height: auto;
    transition: all ease 0.2s;
  }

  .card::-webkit-scrollbar {
    display: none;
  }

  /* Media query basado en bootstrap |  SMALL SCREEN */

  @media screen and (max-width: 576px) {
    .card-image img {
      width: 75%;
    }
  }

  /* Responsive design in height || responsive design viewport height */
  @media screen and (max-width: 576px) and (max-height: 726px) {
    .card-image img {
      width: 60%;
    }
  }

  /* Media query De + INFINITY a 992px */
  @media screen and (min-width: 992px) {
    .card {
      color: greenyellow;
      flex-direction: column;
      align-items: center;
      width: 62%;
      flex-shrink: 0;
      overflow: hidden;
      clear: both;
    }

    .card-image img {
      border-radius: 12px;
      width: 100%;
      height: auto;
    }
  }
`
