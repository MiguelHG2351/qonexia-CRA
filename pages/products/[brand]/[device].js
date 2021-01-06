import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import { withRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import Head from 'next/head'
import Header from 'components/container/Header/products'
// import ProductList from

const ProductList = dynamic(() => import('components/productList'), {
    // eslint-disable-next-line react/display-name
    loading: () => <p>...</p>,
})

function Product({ router }) {
    const deviceList = useSelector((state) => state.device)
    const dispatch = useDispatch()
    console.log(deviceList)

    useEffect(() => {
        const parameters = router.query
        console.log(router.query)
        const lengthParams = Object.keys(parameters).length
        // eslint-disable-next-line no-trailing-spaces

        if (lengthParams > 1) {
            dispatch({
                type: 'GET_DEVICE',
                payload: parameters,
            })
        }
    }, [router])

    return (
        <>
            <Head>
                <title>{router.query.device} | Qonexia</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Header />
            {
                Object.keys(deviceList).length &&
                <ProductList data={deviceList}/>
            }
        </>
    )
}

/* Que el Header almacene todo el sitio y que */
export default withRouter(Product)
