import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

// styled Components
import ProductSection from 'components/styles/productList'

// assets
import huawei from 'static/images/huawei.png'
import xiaomi from 'static/images/xiaomi.png'
import apple from 'static/images/apple.png'
import gopro from 'static/images/gopro.png'
import amazfit from 'static/images/amazfit.png'
import realme from 'static/images/realme.png'
import nintendo from 'static/images/nintendo.png'
import DescriptionPhone from 'components/descriptionPhone'
import useSEO from 'hooks/useSEO'
import processData from 'data/'

function ProductList () {
  const dispatch = useDispatch()
  const dataList = useSelector(state => state.data)
  const similars = [] // Busca las coincidencias de productos, Especificamente de la submarca
  const params = useParams()
  const data = processData(dataList, params) || []
  useEffect(() => {
    /* eslint-disable */
    fetch('https://vercel-node-app-miguel23.miguelhg2351.vercel.app/api/')
    .then(response => response.json())
    .then(list => dispatch({type: 'SET_DEVICE_INFO', payload: list}))
}, [])

    useEffect(() => {
        if(dataList.length != 0) {
        dataList.all.forEach((element) => {
          if (element.name.indexOf(params.devices.slice(0, 8)) <= 8 && element.name.indexOf(params.devices.slice(0, 8)) >= 0) {
            similars.push(element)
          }
        })
        if (typeof similars !== 'object') {
            similars = ''
        }
        }
    }, [dataList])

    useSEO({ description: 'Productos y servicios del sitio de Qonexia.', title: data.length > 0 ? data.name : '' })

  return ( 
      <>
    { dataList.length != 0 && data.length != 0 ?
    <ProductSection className="productList">
            <div className="container">
                <div className="card-image">
                    <img src={data.img} alt={data.name} draggable={false} />
                </div>
                <div className="name">
                    <h3>{data.name}</h3>
                </div>
                <div className="option">
                    <DescriptionPhone data={data} />
                    <div className="precios">
                        <h2>{data.precio}$</h2>
                        <p>Pagos con CREDEX, tajeta de crédito y efectivos</p>
                    </div>
                </div>
                <div className="recommendations">
                    <h2>Dispositivos Similares</h2>
                    <div className="recomendationDevice">
                        {
                            similars.map((id, index) => (
                            id.name !== data.name &&
                                <Link to={`${id.name}`} key={index}>
                                    <img loading="lazy" src={id.img} alt={id.name} />
                                    <p>{id.name}</p>
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className="catalogo">
                    <h3>Catalogo</h3>
                    <div className="container-card">
                        <Link to="/catalogo#xiaomi" className="card">
                            <div className="header-card xiaomi">
                                <img src={xiaomi} alt="Descripción del producto Xiaomi" title="Xiaomi"/>
                            </div>
                            <div className="description-card">
                                <span className="description-title">
                                    <h3>Xioami</h3>
                                    <p>Cantidad: {dataList.category.brand[params.brand].length}</p>
                                </span>
                            </div>
                        </Link>
                        <Link to="/catalogo#huawei" className="card">
                            <div className="header-card huawei">
                                <img src={huawei} alt="Descripción del producto Huawei" title="Huawei"/>
                            </div>
                            <div className="description-card">
                                <span className="description-title">
                                    <h3>Huawei</h3>
                                    <p>Cantidad: 23</p>
                                </span>
                            </div>
                        </Link>
                        <Link to="/catalogo#realem" className="card">
                            <div className="header-card realme">
                                <img src={realme} alt="Descriptción de los productos Realem" title="Realme" />
                            </div>
                            <div className="description-card">
                                <span className="description-title">
                                    <h3>Realme</h3>
                                    <p>Cantidad: 23</p>
                                </span>
                            </div>
                        </Link>
                        <Link to="/catalogo#appple" className="card">
                            <div className="header-card apple">
                                <img src={apple} alt="Descriptción de los productos Apple" title="Apple" />
                            </div>
                            <div className="description-card">
                                <span className="description-title">
                                    <h3>Apple</h3>
                                    <p>Cantidad: 23</p>
                                </span>
                            </div>
                        </Link>
                        <Link to="/catalogo#nintendo" className="card">
                            <div className="header-card nintendo">
                                <img src={nintendo} alt="descripciòn de los productos de nintendo" title="nintendo"/>
                            </div>
                            <div className="description-card">
                                <span className="description-title">
                                    <h3>Nintendo</h3>
                                    <p>Cantidad: 23</p>
                                </span>
                            </div>
                        </Link>
                        <Link to="/catalogo#gopro" className="card">
                        <div className="header-card gopro">
                                <img src={gopro} alt="gopro" title="gopro"/>
                            </div>
                            <div className="description-card">
                                <span className="description-title">
                                    <h3>Gopro</h3>
                                    <p>Cantidad: 23</p>
                                </span>
                            </div>
                        </Link>
                        <Link to="/catalogo#amazfit" className="card">
                            <div className="header-card amazfit">
                                <img src={amazfit} alt="amazfit" title="amazfit"/>
                            </div>
                            <div className="description-card">
                                <span className="header-title">
                                    <h3>amazfit</h3>
                                    <p>Cantidad: 13</p>
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </ProductSection>
        : null
    }
    </>
  )
}

export default React.memo(ProductList)

/* Idea: Añadir recomendaciones los dispositivos
por los que paso el ciclo añadiendolos con Array.prototype.push(element)  */
/* Según el tipo de disposivo anidar las recomendaciones */
/*          ^ */
/*          | */
/*         type, description */

/* utilizar rem para determinar el tamaño de los botones, cambio el font-size atravez de la clase */
