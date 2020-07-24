import React, { Suspense, lazy,  } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { GlobalStyles } from 'GlobalStyle'
import {ContextProducts} from 'context/descriptionContext'

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

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Suspense fallback={ <Preloader/> }>
      <Switch>
        <Redirect from="/hola" to="/" />
        <Route exact path="/" component={Home} />
        <Route exact path="/trends" component={Trends} />
        <ContextProducts>
          <Route exact path="/products" component={Products} />
        </ContextProducts>
        <Route component={NotFound} />
      </Switch>
    </Suspense> 
    </Router>
  );
}

export default App;
