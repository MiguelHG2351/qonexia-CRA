import React, { Fragment, useState } from 'react'
import { Header, Sidenav, Overlay } from 'container/Header/productsStyle'
import { Link } from 'react-router-dom'

function Head() {

    const [active, setActive] = useState(null)

    function loadSideNav() {
        setActive(null)
    }

    // Ordenar por potencia, precio, camara, Más comprado, Marca en especifico, 
    
    function openMenu() {
        setActive("active")
    }

    return <Fragment>
        <Header>
            <div className="header-title">
                <button onClick={openMenu}>
                    <i className="material-icons">menu</i>
                </button>
                <h2>Productos</h2>
            </div>
            <Sidenav className={active}>
                <div className="profile">
                    <div className="background">
                        <img loading="lazy" src="https://miguelhg2351.github.io/API/logos/fondo.webp" alt="Fondo del usuario"/>
                    </div>
                    <img loading="lazy" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRq2emGoCKeB70zadZbAJxwIxVJpRujbn4qvg&usqp=CAU" alt="user-logo"/>
                    <div>
                        <strong>Miguel Hernández</strong>
                        <br/>
                        <span>qonexia@qonexia.com</span>
                    </div>
                </div>
                <hr/>
                <ul className="header-nav">
                    <li><i className="material-icons">home</i><Link to="/">Inicio</Link></li>
                    <li><i className="material-icons">smartphone</i><Link to="/products">Productos</Link></li>
                    <li><i className="material-icons">trending_up</i><Link to="/trends">Tendencias</Link></li>
                    <li><i className="material-icons">shopping_cart</i><Link to="/catalogo">Catalogo</Link></li>
                    <li><i className="material-icons">contact_phone</i><Link to="/contact">Contactanos</Link></li>
                    <li><i className="material-icons">support_agent</i><Link to="/support">Soporte Técnico</Link></li>
                    <hr/>
                    <li><i className="material-icons">smartphone</i><Link to="/catalogo#phone">Telefonos</Link></li>
                    <hr/>
                    <li><Link to="/catalogo#samsung">Samsung</Link></li>
                    <li><Link to="/catalogo#xiaomi">Xiaomi</Link></li>
                    <li><Link to="/catalogo#huawei">Huawei</Link></li>
                    <li><Link to="/catalogo#apple">Apple</Link></li>
                    <hr/>
                    <li><i className="material-icons">coronavirus</i><Link to="/support">Coronavirus</Link></li>
                    <hr/>
                    <li><i className="material-icons">laptop</i><Link to="/catalogo#laptop">Laptop</Link></li>
                    <hr/>
                    <li><i className="material-icons">laptop</i><Link to="/catalogo#laptop">Mac MacOS Catalina</Link></li>
                </ul>
            </Sidenav>
            <form className="form" onSubmit={e => e.preventDefault()}>
                <button><i className="material-icons">search</i></button>
                <input placeholder="Buscar"/>
            </form>
        </Header>
        <Overlay className={active} onClick={loadSideNav} />
    </Fragment>
}

export default React.memo(Head);