import React from 'react'
import Device from 'components/device'

export default function DescriptionPhone({ data }) {
  return (
    <div className="description rounded-3xl bg-white/[0.07] p-6 text-sm md:order-1 md:p-12">
      <Device data={data} />
    </div>
  )
}
