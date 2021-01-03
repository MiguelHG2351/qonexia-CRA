import React from 'react'

function PowerBank ({ data }) {
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
          </tbody>
    </table>
</>
}

export default PowerBank
