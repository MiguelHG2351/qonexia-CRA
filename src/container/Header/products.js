import React, { Fragment, useState } from 'react'
import { Header, Sidenav, Overlay } from './productsStyle'
import { Link } from 'react-router-dom'

function Head() {

    const [active, setActive] = useState(null)

    function loadSideNav() {
        setActive(null)
    }
    
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
                        <img src="https://www.rankiapro.com/wp-content/uploads/2019/08/fondo-tecnologico-preferido-selectores-rankiapro.png" alt="Fondo del usuario"/>
                    </div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRq2emGoCKeB70zadZbAJxwIxVJpRujbn4qvg&usqp=CAU" alt="user-logo"/>
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