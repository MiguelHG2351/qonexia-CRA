import React from 'react'

function Usb ({ data }) {
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
                    <td>Utilidad</td>
                    <td>{data.utilidad}</td>
                </tr>
            </tbody>
        </table>
    </>
}

export default Usb
