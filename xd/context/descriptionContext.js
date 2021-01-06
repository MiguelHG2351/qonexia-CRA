import React from 'react'
import API from 'API/products.json'

const DescriptionData = React.createContext({})

export function ContextProducts ({ children }) {
    /*eslint-disable */
  return(
      <DescriptionData.Provider value={API}>{children}</DescriptionData.Provider>
  )
}

export default DescriptionData
