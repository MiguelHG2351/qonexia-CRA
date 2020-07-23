import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { Header, Card, HeaderNav, Background, HeaderTitle, HeaderListCard, BtnPrimary } from './style'
import useCarrousel from "../../hooks/useCarrousel";
import gif from '../../static/images/loading.gif'

function Headers() {

    // Hooks
    const scrollCard = useRef(null)

    // Custom Hooks
    useCarrousel(scrollCard);
    let mediaQuery = matchMedia('(max-width: 576px)').matches
    const [menu, setMenu] = useState(undefined)

    // JSX
    return <Header>
        <Background>
            {
                mediaQuery // Tamaño estandar de la imagen
                ?
                <img src="https://miguelhg2351.github.io/API/imagenes/backgroundMobile.webp" alt="Bienvenidos a qonexia" />
                :
                <video src="https://miguelhg2351.github.io/API/videos/video.webm" muted autoPlay={true} loop={true}></video>

            }
        </Background>
        <button className="toggle-menu" onClick={() => menu===undefined?setMenu("active"):setMenu(undefined)}><i className="material-icons">menu</i></button>
        <HeaderNav className={menu}>
            <ul className="list-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://facebook.com/QONEXIA">Social Media</a></li>
                <li><Link to="/trends">Tendencias</Link></li>
            </ul>
        </HeaderNav>
        <HeaderTitle>
            <h1>Bienvenidos a Qonexia</h1>
            <p>Visita la gran variedad de dispositivos moviles</p>
            <BtnPrimary href="/catalogo">Catalogo</BtnPrimary>
        </HeaderTitle>
        <HeaderListCard>
            <Card>
                <div className="card-image">
                    <img src={ gif } ref={scrollCard} alt="Telefonos" title="Carrousel de imagenes" />
                </div>
            </Card>
        </HeaderListCard>
    </Header>

}

export default React.memo(Headers)