import React from 'react'

function Band({data}) {
    return <>
    <table>
          <thead>
            <tr>
              <th />
              <th>{data.name}</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Batería</td>
              <td>{data.bateria}</td>
            </tr>
            <tr>
              <td>Pantalla</td>
              <td>{data.screen} pulgadas</td>
              <td>{data.quality}</td>
            </tr>
            <tr>
              <td>Resistencia</td>
              <td>{data.resistencia}</td>
            </tr>
            <tr>
              <td>Sensores</td>
              {
                data.sensores.map(e => <td key={e.id}>{e}</td>)
              }
            </tr>
            <tr>
              <td>SO</td>
              <td>{data.OS}</td>
            </tr>
          </tbody>
    </table>
</>
}

export default Band