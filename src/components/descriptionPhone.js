import React from "react";
import Device from 'components/device'
import Band from 'components/band'
import Charger from 'components/charger'
import PowerBank from 'components/powerBank'
import Usb from 'components/usb'
import NotFound from 'pages/notFound'

function Description({data}) {
  return <>
  {
    data.type === "device"
    ?
      <Device data={ data } />
    : data.type === "band"
    ?
      <Band data={ data } />
    : data.type === "charger"
    ?
      <Charger data={ data } />
    : data.type === "powe_bank"
    ?
      <PowerBank data={ data } />
    :
      data.type === "USB"
    ?
      <Usb data={ data } />
    :
      <NotFound />
  }
  </>
}

export default function DescriptionPhone({ data }) {
  return (
      <Description data={data} />
  );
}
