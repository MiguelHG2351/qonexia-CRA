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
        <div className="description text-sm md:order-1 bg-white/[0.07] p-6 md:p-12 rounded-3xl">
            <Description data={data} />
        </div>
    )
}
