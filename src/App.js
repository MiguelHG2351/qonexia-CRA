import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { GlobalStyles } from './GlobalStyle'

// Component
import Home from './pages/index'
import Products from './pages/products'
import Trends from './pages/trends'
import NotFound from './pages/notFound'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Redirect from="/hola" to="/" />
        <Route exact path="/products" component={Products} />
        <Route exact path="/" component={Home} />
        <Route exact path="/trends" component={Trends} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
