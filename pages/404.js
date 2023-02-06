import React from 'react'
import Link from 'next/link'
import css from 'styled-jsx/css'

const styles = css`
    .container {
        background: linear-gradient(135deg, red, green, blue),
            linear-gradient(45deg, blue, green, red);
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: #fff;
    }
    .container h2 {
        font-family: 'Be Vietnam';
        font-size: 32px;
    }

    .container ul {
        padding: 0;
    }

    .container p {
        font-family: 'Roboto';
        font-size: 28px;
        color: rgba(255, 255, 255, 0.5);
    }

    .container ul li {
        list-style: none;
        font-size: 25px;
    }
    .container ul li a {
        color: #fff;
        text-decoration: none;
        transition: all ease 0.3s;
    }
    .container ul li a:hover {
        color: #fff;
        text-decoration: none;
        font-size: 18px;
    }
`

function NotFound () {
  return (
        <>
            <div className="container">
                <h2>Dirección no encontrada 404 Not found</h2>
                <img
                    src="https://media.giphy.com/media/6uGhT1O4sxpi8/giphy.gif"
                    alt="No encontramos su sitio"
                    title="No encontramos su sitio"
                />
                <p>Lista de rutas del sito: </p>
                <ul>
                    <li>
                        <Link href="/"><a>Home</a></Link>
                    </li>
                    <li>
                        <Link href="/products"><a>Productos</a></Link>
                    </li>
                    <li>
                        <Link href="/trends"><a>Tendencias</a></Link>
                    </li>
                    <li>
                        <Link href="/catalogo"><a>Catalogo</a></Link>
                    </li>
                    <li>
                        <Link href="/social"><a>Social Media</a></Link>
                    </li>
                </ul>
            </div>
            <style jsx>{styles}</style>
        </>
  )
}

export default NotFound
