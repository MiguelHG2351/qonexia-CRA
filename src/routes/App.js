import React, { Suspense, lazy,  } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { GlobalStyles } from 'GlobalStyle'
import {ContextProducts} from 'context/descriptionContext'

// Component
const Home = lazy(() => import('../pages/index'))
const Products = lazy(() => import('../pages/products'))
const Catalogo = lazy(() => import('pages/catalogo'))
const RedirectToCatalogo = lazy(() => import('pages/redirectToCatalogo'))
const RedirectToProducts = lazy(() => import('pages/redirectToProducts'))
const Agenda = lazy(() => import('../pages/agenda'))
const Trends = lazy(() => import('../pages/trends'))
const NotFound = lazy(() => import('../pages/notFound'))

const Preloader = () => {
  return <div style={{width:"100%", height: "100vh", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center"}}>
    <h2>Loading...</h2>
  </div>
}

function App() {
  return (
    <Suspense fallback={ <Preloader/> }>
    <Router>
      <GlobalStyles />
      <Switch>
        <Redirect from="/hola" to="/" />
        <Route exact path="/" component={ Home } />
        <Route exact path="/trends" component={ Trends }  />
        <Route exact path="/agenda" component={ Agenda } />
        <ContextProducts>
          <Route exact path="/products/" component={ RedirectToCatalogo } />
          <Route exact path="/products/:brand/" component={ RedirectToProducts } />
          <Route exact path="/products/:brand/:devices/" component={ Products } />
          <Route exact path="/catalogo" component={ Catalogo } />
        </ContextProducts>
        <Route exact path="/NotFound" component={ NotFound } />
        <Redirect to="/NotFound" />
      </Switch>
    </Router>
    </Suspense> 
  );
}

export default App;
