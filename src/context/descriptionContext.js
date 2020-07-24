import React from 'react'
import API from 'API/products.json'

export const DescriptionData = React.createContext({})

export function ContextProducts({children}) {
    return <DescriptionData.Provider value={API}>
        {children}
    </DescriptionData.Provider>
}