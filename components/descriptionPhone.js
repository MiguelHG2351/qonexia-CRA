import React from 'react'
import Device from 'components/device'

function Description ({ data }) {
    return <>
        {
            <Device data={ data } />
        }
    </>
}

export default function DescriptionPhone ({ data }) {
    return (
        <Description data={data} />
    )
}
