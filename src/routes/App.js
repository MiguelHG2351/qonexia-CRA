import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { GlobalStyles } from '../GlobalStyle'

// Component
const Home = lazy(() => import('../pages/index'))
const Products = lazy(() => import('../pages/products'))
const Trends = lazy(() => import('../pages/trends'))
const NotFound = lazy(() => import('../pages/notFound'))

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Redirect from="/hola" to="/" />
        <Route exact path="/products" component={Products} />
        <Route exact path="/" component={Home} />
        <Route exact path="/trends" component={Trends} />
        <Route component={NotFound} />
      </Switch>
    </Suspense> 
    </Router>
  );
}

export default App;
