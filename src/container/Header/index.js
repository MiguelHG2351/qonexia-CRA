import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Header, Card, HeaderNav, Background, ListNav, HeaderTitle, HeaderListCard, BtnPrimary } from './style'
import video from '../../static/video/video.mp4'
import API from '../../API/carrousel.json'

function Headers() {

    // Hooks
    const [media, setMedia] = useState(null)
    const [images, setImages] = useState(0)
    const scrollCard = useRef(null)

    function loadElements() {
        setMedia(video)
    }

    // Custom Hooks
    useEffect(()=> {
        let card = scrollCard.current
        let interval = setTimeout(() => {
            switch (images) {
                case 0:
                    card.src=API[1].url
                        card.style.transform = "translate(0, 0)"
                        setImages(1)
                        break;
                case 1:
                    card.src=API[2].url
                    card.style.transform = "translate(0, 0)"
                        setImages(2)
                    break;
                case 2:
                    card.src=API[3].url
                        card.style.transform = "translate(0, 0)"
                        setImages(3)
                        break;
                case 3:
                    card.src=API[4].url
                        card.style.transform = "translate(0, 0)"
                        setImages(4)
                    break;
                case 4:
                    card.src=API[5].url
                        card.style.transform = "translate(0, 0)"
                        setImages(5)
                    break;
                case 5:
                    card.src=API[6].url
                        card.style.transform = "translate(0, 0)"
                        setImages(6)
                    break;
                case 6:
                    card.src=API[7].url
                        card.style.transform = "translate(0, 0)"
                        setImages(7)
                    break;
                case 7:
                    card.src=API[8].url
                        card.style.transform = "translate(0, 0)"
                        setImages(8)
                    break;
                case 8:
                    setImages(1)
                    break;
                default:
                    console.log("Ha ocurrido un error")
            }
        }, 3000);
        setTimeout(()=> {
            card.style.transform = "translate(500px, 0)"
        },2750)
        return (() => clearInterval(interval))
    }, [images])

    // JSX
    return <Header onLoad={loadElements}>
        <Background>
            <video src={media} muted autoPlay={true} loop={true}></video>
        </Background>
        <HeaderNav>
            <ListNav>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://facebook.com/QONEXIA">Social Media</a></li>
                <li><Link to="/trends">Tendencias</Link></li>
            </ListNav>
        </HeaderNav>
        <HeaderTitle>
            <h1>Bienvenidos a Qonexia</h1>
            <p>Visita la gran variedad de dispositivos moviles</p>
            <BtnPrimary href="#">Catalogo</BtnPrimary>
        </HeaderTitle>
        <HeaderListCard>
            <Card>
                <div className="card-image">
                    <img src={API[0].url} ref={scrollCard} alt="Telefonos" title="Carrousel de imagenes" />
                </div>
            </Card>
        </HeaderListCard>
    </Header>

}

export default Headers