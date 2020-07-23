import React, { Suspense, lazy,  } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { GlobalStyles } from 'GlobalStyle'
import API from 'API/products.json'

// Component
const Home = lazy(() => import('../pages/index'))
const Products = lazy(() => import('../pages/products'))
const Trends = lazy(() => import('../pages/trends'))
const NotFound = lazy(() => import('../pages/notFound'))

const APIProducts = React.createContext("HolaMundo")

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Suspense fallback={<div><h2>Loading</h2></div>}>
      <Switch>
        <Redirect from="/hola" to="/" />
        <Route exact path="/" component={Home} />
        <Route exact path="/trends" component={Trends} />
        <APIProducts.Provider value={API}>
          <Route exact path="/products" component={Products} />
        </APIProducts.Provider>
        <Route component={NotFound} />
      </Switch>
    </Suspense> 
    </Router>
  );
}

export default App;
