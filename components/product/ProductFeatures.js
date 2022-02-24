import React from 'react'
import Device from 'components/device'

export default function DescriptionPhone ({ data }) {
    return (
        <div className="description text-sm md:order-1 bg-white/[0.07] p-6 md:p-12 rounded-3xl">
            <Device data={ data } />
        </div>
    )
}
