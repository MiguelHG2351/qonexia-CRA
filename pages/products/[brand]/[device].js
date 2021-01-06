import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import { withRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import Head from 'next/head'
import Header from 'components/container/Header/products'
const ContentLoaded = dynamic(import('react-content-loader'), { ssr: false })

const ProductList = dynamic(() => import('components/productList'), {
    // eslint-disable-next-line react/display-name
    loading: () => <Preloader />,
})

function Preloader() {
    return (
        <ContentLoaded width="1200px" height="1200px">
            <rect x="229" y="78" rx="2" ry="2" width="140" height="10" />
            <rect x="230" y="122" rx="2" ry="2" width="140" height="10" />
            <rect x="5" y="57" rx="2" ry="2" width="202" height="400" />
            <rect x="233" y="164" rx="0" ry="0" width="146" height="9" />
            <rect x="232" y="210" rx="0" ry="0" width="153" height="19" />
        </ContentLoaded>
    )
}

function Product({ router }) {
    const deviceList = useSelector((state) => state.device)
    const dispatch = useDispatch()

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

    useEffect(() => {
        if (Object.keys(deviceList).length === 1 && deviceList.status === null) {
            router.push('/')
        }
    }, [deviceList])

    return (
        <>
            <Head>
                <title>{router.query.device || 'Loading'} | Qonexia</title>
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
            {Object.keys(deviceList).length > 1 && (
                <ProductList data={deviceList} />
            )}
        </>
    )
}

/* Que el Header almacene todo el sitio y que */
export default withRouter(Product)
