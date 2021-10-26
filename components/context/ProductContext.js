import { useState, useEffect, createContext } from 'react'

const ProductContext = createContext({})

function ProductContextProvider({ children, initialState }) {
    const [products, setProducts] = useState(initialState)

    useEffect(() => {
        if (initialState) {
            setProducts(initialState)
        }
    }, [])

    return (
        <ProductContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductContext.Provider>
    )
}

export { ProductContextProvider }
export default ProductContext
