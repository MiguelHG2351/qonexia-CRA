import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { GlobalStyles } from 'GlobalStyle'

// Component
const Home = lazy(() => import('../pages/index'))
const Products = lazy(() => import('../pages/products'))
const Catalogo = lazy(() => import('pages/catalogo'))
const RedirectToCatalogo = lazy(() => import('pages/redirectToCatalogo'))
const RedirectToProducts = lazy(() => import('pages/redirectToProducts'))
const Agenda = lazy(() => import('../pages/agenda'))
const Trends = lazy(() => import('../pages/trends'))
const NotFound = lazy(() => import('../pages/notFound'))
const Footer = lazy(() => import('../container/footer/'))

const Preloader = () => {
  return <div style={ { width: '100%', height: '100vh', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' } }>
    <h2>Loading...</h2>
  </div>
}

function reducer (state, action) {
  /* eslint-disable */
  switch (action.type) {
    case 'SET_DEVICE_INFO': {
      return { ...state, data: action.payload }
    }
    default: {
      return state
    }
  }
}

const initialState = {
  data: []
}

const store = createStore(reducer, initialState)

function App () {
  return (
    <Suspense fallback={ <Preloader/> }>
      <Provider store={store}>
        <Router>
        <GlobalStyles />
          <Switch>
            <Route exact component={ Home } path="/" />
            <Route exact component={ Trends } path="/trends" />
            <Route exact component={ Agenda } path="/agenda" />
            <Route exact component={ RedirectToCatalogo } path="/products/" />
            <Route exact component={ RedirectToProducts } path="/products/:brand/" />
            <Route exact component={ Products } path="/products/:brand/:devices/" />
            <Route exact component={ Catalogo } path="/catalogo" />
            <Route component={ NotFound } path="*" />
          </Switch>
          <Footer/>
        </Router>
      </Provider>
    </Suspense>
  )
}

export default App
