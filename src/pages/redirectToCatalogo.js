import React from 'react'
import { Redirect } from 'react-router-dom'

function RedirectToCatalogo () {
  return <Redirect from="/products" to="/catalogo" />
}

export default RedirectToCatalogo
