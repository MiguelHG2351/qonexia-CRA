import Link from 'next/link'
import css from 'styled-jsx/css'

const styles = css`
    .footer-site {
        background: #1e252b;
        height: auto;
        color: #fff;
    }
    .container {
        width: 90%;
        margin: auto;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        gap: 20px;
    }

    .logo {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .section-site {
        display: grid;
        /* margin: 20px 0; */
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 16px;
        padding: 0;
    }

    .section-site li {
        margin-left: 40%;
        list-style: none;
    }

    .section-site li a {
        font-size: 20px;
        text-decoration: none;
        color: #fafafa;
    }

    .section-site li a:hover {
        color: #09f;
    }

    .social-media {
        margin-bottom: 30px;
        display: flex;
    }

    .form-footer {
        --padding: 12px;
        --font: 14px;
        margin: 30px 0 !important;
        width: 100%;
    }

    .form-footer-container {
        box-shadow: 0 0 5px 5px #09f;
    }

    .form-footer-container input {
        /* padding: 8px; */
        font-size: var(--font);
        padding: var(--padding);
        border: none;
        background: transparent;
        outline: blue;
        color: #fff;
        width: 80%;
    }

    .form-footer-container button {
        width: 20%;
        padding: calc(var(--padding) + 1.7px);
        text-align: center;
        outline: none;
        margin: 0;
        border: none;
        background: #1f27b2;
        color: #fff;
    }

    @media screen and (min-width: 992px) {
        .container {
            width: auto;
            grid-template-columns: 20% 40% 40%;
            grid-template-rows: repeat(2, 1fr);
            align-items: center;
            justify-content: center;
            grid-template-areas: 'logo navigation form' 'social navigation form';
            gap: 5px;
        }
        .logo {
            grid-area: logo;
            padding: 18px;
            max-width: 100%;
        }
        .section-site {
            grid-area: navigation;
        }
        .form-footer {
            grid-area: form;
            width: calc(100% - (var(--padding) * 4));
        }

        .social-media {
            margin: 0;
            grid-area: social;
            justify-content: space-evenly;
            align-items: flex-start;
            height: 100%;
        }

        .social-media a img {
            width: 150%;
        }

        .form-footer-container input {
            width: 80%;
        }
        .form-footer-container button {
            width: 20%;
        }
    }

    @media screen and (max-width: 576px) {
        .container {
            gap: 20px;
        }

        .logo {
            margin: 12px 0;
        }

        .social-media {
            justify-content: center;
            grid-row: 4;
        }
        .section-site li {
            margin-left: 20%;
        }
        .section-site li a {
            font-size: 18px;
        }

        .social-media img {
            width: 70%;
            margin: 0 12px;
        }

        .form-footer {
            --padding: 10px;
            --font: 16px;

            /* width: fit-content; */
        }
    }
`

function Footer () {
  return (
    <>
      <footer className="footer-site">
        <div className="container">
          <div className="logo">
            <img src="/static/images/logo.jpg" loading="lazy" alt="Logo de nuestra empresa" />
          </div>
          <div className="social-media">
            <a
              href="https://facebook.com/Qonexia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/static/images/icon-facebook.svg" loading="lazy" alt="Visitanos en Facebook" />
            </a>
            <a
              href="https://instagram.com/Qonexia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/static/images/icon-instagram.svg" loading="lazy" alt="Visitanos en Instagram" />
            </a>
          </div>
          <ul className="section-site">
            <li>
              <Link href="/">
                <a>Inicio</a>
              </Link>
            </li>
            <li>
              <Link href="/catalogo">
                <a>Catálogo</a>
              </Link>
            </li>
            <li>
              <Link href="/products/">
                <a>Productos</a>
              </Link>
            </li>
            <li>
              <Link href="/agenda">
                <a>Ágenda</a>
              </Link>
            </li>
            <li>
              <Link href="/trends">
                <a>Tendencias</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>contacto</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>Acerca de</a>
              </Link>
            </li>
            <li>
              <Link href="/support">
                <a>Soporte</a>
              </Link>
            </li>
          </ul>
          <form
            className="form-footer"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="form-footer-container">
              <input
                type="text"
                name="email"
                className='box-border'
                placeholder="Subscribete para recibir novedades por correo"
                required
              />
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </footer>
      <style jsx>{styles}</style>
    </>
  )
}

export default Footer
