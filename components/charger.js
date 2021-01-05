import React from 'react'

function Charger ({ data }) {
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
                    <td>Carga</td>
                    <td>{data.carga}</td>
                </tr>
            </tbody>
        </table>
    </>
}

export default Charger
