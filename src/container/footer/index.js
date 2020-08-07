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
    .social-media {
      margin-bottom: 30px;
    }
    & .form-footer {
        margin: auto;
        & input {
          color: #fff;
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
          display: flex;
          justify-content: center;
          grid-row: 4;
          & img {
              width: 15%;
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
        box-shadow: 0 0 5px 5px #09f;
        width: fit-content;
        & input {
          padding: 8px;
          border: none;
          background: transparent;
          outline: blue;
        }
        & button {
          padding: 8px;
          outline: none;
          margin: 0;
          border: none;
          background: #1f27b2;
          color: #fff;
        }
      }
    }
  }
`;

function Footer() {
  return (
    <FooterSite>
      <div className="container">
        <div className="logo">
          <h2>Gracias por visitarnos!</h2>
          <img src={logo} alt="Logo de nuestra empresa" />
        </div>
        <div className="social-media">
          <img src={facebook} alt="Visitanos en Facebook" />
          <img src={instagram} alt="Visitanos en Instagram" />
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
        <form className="form-footer">
          <input
            type="text"
            name="email"
            placeholder="Ingresa tu correo electionico"
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </FooterSite>
  );
}

export default Footer;
