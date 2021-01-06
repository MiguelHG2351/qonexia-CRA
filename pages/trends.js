import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
// import { Route } from 'react-router-dom'
import { Chart } from 'chart.js'
import styles from '../components/container/Header/trends'

function Trends() {
    const ref = useRef(null)
    useEffect(() => {
        const ctx = ref.current.getContext('2d')
        const myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: [
                    'Xiaomi',
                    'SAMSUNG',
                    'Consolas',
                    'Huawei',
                    'Apple',
                    'Accesorios',
                    'Camaras',
                ],
                datasets: [
                    {
                        label: 'comprados en %',
                        data: [30, 38, 20, 5, 2, 3, 2],
                        backgroundColor: [
                            'rgba(226, 202, 36, .2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 255, 255, 0.7)',
                        ],
                        borderColor: [
                            'rgba(226, 202, 36, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 255, 255, 1)',
                        ],
                        borderWidth: 1,
                        // maxBarThickness: 8,
                        // barPercentage: 0.5,
                    },
                ],
            },
            options: {
                legend: {
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Más comprados, por precio',
                    fontSize: 20,
                    fontFamily: "'Roboto'",
                    fontColor: '#fff',
                },
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                    ],
                },
                layout: {
                    color: '#fff',
                },
                tooltips: {
                    enabled: true,
                    footerFontColor: '#fff',
                },
            }
        })
        console.log(myChart)
    }, [])

    return (
        <>
            <Head>
                <title>Tendencias | Qonexia Tecnología que une</title>
            </Head>
            <div className="chart">
                <canvas ref={ref}></canvas>
            </div>
            <style jsx>
                {styles}
            </style>
        </>
    )
}

export default React.memo(Trends)
