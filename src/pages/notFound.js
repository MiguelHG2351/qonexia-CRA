import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    background: linear-gradient(135deg, red, green, blue), linear-gradient(45deg, blue, green, red);
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;
    & h2 {
        font-family: "Be Vietnam";
        font-size: 32px;
    }

    & ul {
        padding: 0;
    }

    & p {
        font-family: "Roboto";
        font-size: 28px;
        color: rgba(255, 255, 255, 0.5);
    }

    & ul li {
        list-style: none;
        font-size: 25px;
    }
    & ul li a {
        color: #fff;
        text-decoration: none;
        transition: all ease 0.3s;
    }
    & ul li a:hover {
        color: #fff;
        text-decoration: none;
        font-size: 18px;
    }
`

function NotFound () {
  return <Container>
        <h2>Dirección no encontrada 404 Not found</h2>
        <img src="https://media.giphy.com/media/6uGhT1O4sxpi8/giphy.gif" alt="No encontramos su sitio" title="No encontramos su sitio" />
        <p>Lista de rutas del sito: </p>
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/products">Productos</Link></li>
            <li><Link to="/trends">Tendencias</Link></li>
            <li><Link to="/catalogo">Catalogo</Link></li>
            <li><Link to="/social">Social Media</Link></li>
        </ul>
    </Container>
}

export default NotFound
