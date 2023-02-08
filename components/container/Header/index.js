import React, { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import styles from './styles/HeaderStyle'
import CustomHits from 'components/customs/Hits'
import CustomSearchBox from 'components/customs/SearchBox'
// import { InstantSearch } from 'react-instantsearch-dom'

import algoliasearch from 'algoliasearch/lite'
const InstantSearch = dynamic(
  () => import('react-instantsearch-dom').then((mod) => mod.InstantSearch),
  { ssr: false }
)
// import CustomRefinementList from 'components/customs/RefinementList'
// import baseContext from 'context/descriptionContext'

// https://github.com/vercel/next.js/blob/canary/examples/with-apollo/lib/apolloClient.js
// https://www.youtube.com/watch?v=RJpevpbC4YY

const algoliaClient = algoliasearch(
  '5L0EKC0AON',
  '711e3da538f646c399c7618fae6f56c3'
)

const searchClient = {
  ...algoliaClient,
  search: (requests) => {
    if (requests.every(({ params }) => !params.query)) {
      return Promise.resolve({
        results: requests.map(() => ({
          hits: [],
          nbHits: 0,
          nbPages: 0,
          page: 0,
          processingTimeMS: 0,
        })),
      })
    }
    const datas = algoliaClient.search(requests)
    datas.then((res) => {
      console.log(res)
    })

    return datas
  },
}

function Producthead() {
  // hooks
  const [active, setActive] = useState(null)

  // algolia

  function loadSideNav() {
    setActive(null)
  }

  // Ordenar por potencia, precio, camara, Más comprado, Marca en especifico,

  function openMenu() {
    setActive('active')
  }

  return (
    <>
      <InstantSearch
        indexName="qonexia-products-index"
        searchClient={searchClient}
      >
        <header className="header box-border flex items-center justify-between border-b bg-slate-900 p-4 dark:border-slate-50/[0.06]">
          <div className={`sidenav ${active}`}>
            <div className="profile">
              <div className="background">
                <img
                  loading="lazy"
                  src="https://api.miguel2351.me/logos/fondo.webp"
                  alt="Fondo del usuario"
                />
              </div>
              <img
                loading="lazy"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRq2emGoCKeB70zadZbAJxwIxVJpRujbn4qvg&usqp=CAU"
                alt="user-logo"
              />
              <div>
                <strong>Miguel Hernández</strong>
                <br />
                <span>qonexia@qonexia.com</span>
              </div>
            </div>
            <hr />
            <ul className="header-nav">
              <li>
                <i className="material-icons">home</i>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <i className="material-icons">smartphone</i>
                <Link href="/products">Productos</Link>
              </li>
              <li>
                <i className="material-icons">trending_up</i>
                <Link href="/trends">Tendencias</Link>
              </li>
              <li>
                <i className="material-icons">shopping_cart</i>
                <Link href="/catalogo">Catalogo</Link>
              </li>
              <li>
                <i className="material-icons">contact_phone</i>
                <Link href="/contact">Contactanos</Link>
              </li>
              <li>
                <i className="material-icons">support_agent</i>
                <Link href="/support">Soporte Técnico</Link>
              </li>
              <hr />
              <li>
                <i className="material-icons">smartphone</i>
                <Link href="/catalogo#phone">Telefonos</Link>
              </li>
              <hr />
              <li>
                <Link href="/catalogo#samsung">Samsung</Link>
              </li>
              <li>
                <Link href="/catalogo#xiaomi">Xiaomi</Link>
              </li>
              <li>
                <Link href="/catalogo#huawei">Huawei</Link>
              </li>
              <li>
                <Link href="/catalogo#apple">Apple</Link>
              </li>
              <hr />
              <li>
                <i className="material-icons">coronavirus</i>
                <Link href="/support">Coronavirus</Link>
              </li>
              <hr />
              <li>
                <i className="material-icons">laptop</i>
                <Link href="/catalogo#laptop">Laptop</Link>
              </li>
              <hr />
              <li>
                <i className="material-icons">laptop</i>
                <Link href="/catalogo#laptop">Mac MacOS Catalina</Link>
              </li>
            </ul>
          </div>
          <div className="header-title">
            <button
              onClick={openMenu}
              className="flex items-center border-none text-white lg:hidden"
            >
              <i className="material-icons">menu</i>
            </button>
            <Link
              className="logo hidden cursor-pointer items-center lg:inline-flex"
              href="/"
            >
              <Image
                // layout="fixed"
                width={141}
                height={27}
                src={'/static/images/logo-hd.png'}
                alt="Logo de Qonexia"
              />
            </Link>
          </div>
          <div className="form-container hidden md:flex">
            <div className="search h-10 rounded-md">
              {/* <CustomRefinementList attribute="brand" /> */}

              <div className="search-container flex h-full w-full items-stretch justify-center overflow-hidden">
                <CustomSearchBox
                  name="search"
                  styleForm="flex flex-1"
                  styleInput="text-white text-sm bg-dark-blue h-full w-full border-0 rounded-l-sm flex-1 p-3 shadow-inner"
                  placeholder="Buscar"
                >
                  <div className="close-attachment flex h-full cursor-pointer items-center rounded-r-sm bg-blue-900 px-3">
                    <i className="material-icons">search</i>
                  </div>
                </CustomSearchBox>
              </div>
              <div className="absolute left-0 z-10 w-full bg-dark-blue/50">
                <CustomHits hitComponent={HitComponents} />
              </div>
            </div>
          </div>
        </header>
      </InstantSearch>
      <div className={`overlay ${active}`} onClick={loadSideNav}></div>
      <style jsx>{styles}</style>
    </>
  )
}

function HitComponents({ hit }) {
  console.log(hit.type)

  return (
    <div className="results w-full overflow-hidden">
      <Link
        className="inline-block w-full overflow-hidden truncate p-2 text-sm hover:text-gray-400"
        href={`/products/${hit.brand}/${hit.name}`}
      >
        {hit.name}
      </Link>
    </div>
  )
}

export default React.memo(Producthead)
