import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "static/images/logo.jpg";
import instagram from "static/images/icon-instagram.svg";
import facebook from "static/images/icon-facebook.svg";

const FooterSite = styled.footer`
  background: #1e252b;
  height: auto;
  color: #fff;
  & .container {
    .logo {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    gap: 20px;
    & .section-site {
        display: grid;
        /* margin: 20px 0; */
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 16px;
        padding: 0;
        & li {
            margin-left:40%;
            list-style: none;
            & a {
                font-size: 20px;
                text-decoration: none;
                color: #fafafa;
                &:hover {
                    color: #09f;
                }
            }
        }
    }
    & .social-media {
      margin-bottom: 30px;
      display: flex;
    }
    & .form-footer {
      --padding: 12px;
      --font: 14px;
        margin: 30px 0 !important;
        width: 100%;
        & .form-footer-container {
          box-shadow: 0 0 5px 5px #09f;
          & input {
            /* padding: 8px; */
            font-size: var(--font);
            padding: var(--padding);
            border: none;
            background: transparent;
            outline: blue;
            color: #fff;
            width: 80%;
          }
          & button {
            width: 20%;
            padding: var(--padding);
            text-align: center;
            outline: none;
            margin: 0;
            border: none;
            background: #1f27b2;
            color: #fff;
          }
        }
    }
  }

  @media screen and (min-width: 992px) {
    & .container {
      width: auto;
      grid-template-columns: 20% 40% 40%;
      grid-template-rows: repeat(2, 1fr);
      align-items: center;
      justify-content: center;
      grid-template-areas: "logo navigation form" "social navigation form";
      gap: 5px;
      & .logo {
        grid-area: logo;
        padding: 18px;
        max-width: 100%;
      }

      & .section-site {
        grid-area: navigation;
      }
      & .form-footer {
        grid-area: form;
        width: calc(100% - (var(--padding) * 4));
        & .form-footer-container {
          & input {
            width: 80%;
          }
          & button {
            width: 20%;
          }
        }
      }

      & .social-media {
        margin: 0;
        grid-area: social;
        justify-content: space-evenly;
        align-items: flex-start;
        height: 100%;
        & a {
          & img {
            width: 150%;
          }
        }
      }
    
    }
  }

  @media screen and (max-width: 576px) {
    & .container {
    gap: 20px;

    .logo {
      margin: 12px 0;  
    }

      & .social-media {
          justify-content: center;
          grid-row: 4;
          & img {
              width: 70%;
              margin: 0 12px;
          }
      }
      & .section-site {
          & li {
          margin-left: 20%;
              & a {
              font-size: 18px;
              }
          }
      }
      & .form-footer {
        --padding: 10px;
        --font: 18px;

        /* width: fit-content; */

      }
    }
  }

`;

function Footer() {
  return (
    <FooterSite>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo de nuestra empresa" />
        </div>
        <div className="social-media">
          <a href="https://facebook.com/Qonexia" target="_blank" rel="noopener noreferrer" >
            <img src={facebook} alt="Visitanos en Facebook" />
          </a>
          <a href="https://instagram.com/Qonexia" target="_blank" rel="noopener noreferrer" >
            <img src={instagram} alt="Visitanos en Instagram" />
          </a>
        </div>
        <ul className="section-site">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/catalogo">Catálogo</Link>
          </li>
          <li>
            <Link to="/products/">Productos</Link>
          </li>
          <li>
            <Link to="/agenda">Ágenda</Link>
          </li>
          <li>
            <Link to="/trends">Tendencias</Link>
          </li>
          <li>
            <Link to="/contact">contacto</Link>
          </li>
          <li>
            <Link to="/about">Acerca de</Link>
          </li>
          <li>
          <Link to="/support">Soporte</Link>
          </li>
        </ul>
        <form className="form-footer" onSubmit={e => e.preventDefault()}>
          <div className="form-footer-container">
            <input
              type="text"
              name="email"
              placeholder="Subscribete para recibir novedades por correo"
              required
            />
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </FooterSite>
  );
}

export default Footer;
