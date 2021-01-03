import React from 'react'
import { Redirect, useParams } from 'react-router-dom'

export default function RedirectToBrand () {
  const params = useParams()
  return <Redirect from={`/catalogo/#${params.brand}`} to={`/catalogo/#${params.brand}`} />
}
