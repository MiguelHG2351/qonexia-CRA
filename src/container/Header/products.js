import React, { Fragment, useState, useContext } from 'react'
import { Header, Sidenav, Overlay } from 'container/Header/productsStyle'
import { Link, useHistory } from 'react-router-dom'
import baseContext from 'context/descriptionContext'

function Head() {

    const [active, setActive] = useState(null)
    const [formActive, setFormActive] = useState("search");


    const history = useHistory()

    const context = useContext(baseContext)

    function loadSideNav() {
        setActive(null)
    }

    // Ordenar por potencia, precio, camara, Más comprado, Marca en especifico, 
    
    function openMenu() {
        setActive("active")
    }

    function getData(formData) {
    const search = formData.get("search");
    //console.log(search);
    //console.log(context);

    // Que use un custom hooks le envie los datos y devulva un objeto con la url
    //let coincide =
    let brand;
    let name;
    context.all.forEach((e, index) => {
      if (e.name.indexOf(search) <= 8 && e.name.indexOf(search) >= 0) {
        brand =
          index <= 23
            ? "Xiaomi"
            : index <= 46
            ? "Samsung"
            : index <= 57
            ? "Apple"
            : index <= 65
            ? "Huawei"
            : index <= 70
            ? "Realme"
            : index <= 74
            ? "Nintendo"
            : index <= 75
            ? "GoPro"
            : index <= 75
            ? "Amazfit"
            : "default";
            name = e.name
        }
    });
    history.push(`/Products/${brand}/${name}`);

    }

    function searchDevices(e) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        getData(formData)
    }

    function toggleMenu() {
        if (formActive === "search active") setFormActive("search");
        else setFormActive("search active");
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
            <form className="form" onSubmit={searchDevices}>
                <button type="button" onClick={toggleMenu}><i className="material-icons">search</i></button>
                <div className={formActive}>
                    <input name="search" type="text" placeholder="Buscar"/>
                </div>
            </form>
        </Header>
        <Overlay className={active} onClick={loadSideNav} />
    </Fragment>
}

export default React.memo(Head);