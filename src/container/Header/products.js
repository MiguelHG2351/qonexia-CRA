import React, { useState, useContext, useEffect } from 'react'
import { Header, Sidenav, Overlay } from 'container/Header/productsStyle'
import { Link, useHistory } from 'react-router-dom'
import baseContext from 'context/descriptionContext'

function Head () {
  const [active, setActive] = useState(null)
  const [formActive, setFormActive] = useState('search')
  const [title, setTitle] = useState('productos')
  const history = useHistory()

  const context = useContext(baseContext)

  useEffect(() => {
    setTitle(document.title)
    // eslint-disable-next-line
    }, [document.title]) 
  function loadSideNav () {
    setActive(null)
  }

  // Ordenar por potencia, precio, camara, Más comprado, Marca en especifico,

  function openMenu () {
    setActive('active')
  }

  function checkbrand (search) {
    /*eslint-disable */
    let brandInfo;
    let brands = ['Xiaomi', 'Samsung', 'Apple', 'Huawei', 'Realme', 'Nintendo', 'GoPro', 'Amazfit', 'default']
    let brand;
    let name;

    brandInfo = context.all.find((brand) => brand.name.indexOf(search) <= 8 && brand.name.indexOf(search) >= 0) || undefined
    name = brandInfo != undefined ? brandInfo.name : undefined 
    brand = name !== undefined ? brands.find((brand => brandInfo.name.includes(brand))) : undefined // get brand

    /* eslint-enable */
    return [brand, name]
  }

  function getData (formData) {
    const search = formData.get('search')

    const [brand, name] = checkbrand(search)
    if (brand === undefined || name === undefined) {
      history.push('/notFound')
    } else if (brand !== 'default') {
      history.push(`/Products/${brand}/${name}`)
    }
  }

  function toggleInput () {
    console.log('click')
    formActive === 'search' ? setFormActive('search active') : setFormActive('search')
  }

  function searchDevices (e) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    getData(formData)
  }

  function blurInput () {
    setFormActive('search')
  }

  function onkeyDown (e) {
    if (e.keyCode === 27) {
      setFormActive('search')
    }
  }

  return <>
        <Header>
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
            <div className="header-title">
                <button onClick={openMenu}>
                    <i className="material-icons">menu</i>
                </button>
                <h2>{title}</h2>
            </div>
            <form className="form" onSubmit={searchDevices}>
                <label htmlFor="search" onClick={toggleInput}><i className="material-icons">search</i></label>
                <div className={formActive}>
                    <div className="close-attachment" onClick={toggleInput}>
                        <i className="material-icons">west</i>
                    </div>
                    <input id="search" name="search" autoCorrect='true' onKeyDown={onkeyDown} onBlur={blurInput} type="text" placeholder="Buscar" required={true} />
                </div>
            </form>
        </Header>
        <Overlay className={active} onClick={loadSideNav} />
    </>
}

export default React.memo(Head)
