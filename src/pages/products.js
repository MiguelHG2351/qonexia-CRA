import React from 'react';
import Header from '../container/Header/products'
import ProductList from '../components/productList'

function Product() {
    return <>
        <Header />
        <ProductList nombers="hola Mundo" password="holamundo"/>
    </> 
}

export default Product