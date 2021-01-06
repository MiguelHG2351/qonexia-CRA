import React from 'react'
import Head from 'next/head'

import HeaderIndex from '../components/container/Header/'

function Index () {
    return (
        <>
            <Head>
                <title>Home | Qonexia tecnología</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam:wght@400;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
            </Head>
            <HeaderIndex />
        </>
    )
}

export default Index
