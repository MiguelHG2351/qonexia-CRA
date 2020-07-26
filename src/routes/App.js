import React, { Suspense, lazy,  } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { GlobalStyles } from 'GlobalStyle'
import {ContextProducts} from 'context/descriptionContext'
import Catalogo from 'pages/catalogo'

// Component
const Home = lazy(() => import('../pages/index'))
const Products = lazy(() => import('../pages/products'))
const Trends = lazy(() => import('../pages/trends'))
const NotFound = lazy(() => import('../pages/notFound'))

const Preloader = () => {
  return <div style={{width:"100%", height: "100vh", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center"}}>
    <h2>Loading...</h2>
  </div>
}

function RouteProducts() {
  return (
        <ContextProducts>
          <Route exact path="/products" component={Products} />
          <Route exact path="/catalogo" component={Catalogo} />
        </ContextProducts>
  )
}

function App() {
  return (
    <Suspense fallback={ <Preloader/> }>
    <Router>
      <GlobalStyles />
      <Switch>
        <Redirect from="/hola" to="/" />
        <Route exact path="/" component={Home} />
        <Route exact path="/trends" component={Trends} />
        <RouteProducts />
        <Route exact path="/NotFound" component={NotFound} />
        <Redirect to="/NotFound" />
      </Switch>
    </Router>
    </Suspense> 
  );
}

export default App;
