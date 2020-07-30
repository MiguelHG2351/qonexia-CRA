import React from "react";

export default function DescriptionPhone({ data }) {
  return (
    <>
      <div className="descriptions">
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
              <td>Procesador</td>
              <td>{data.procesador}</td>
              <td>{data.GPU}</td>
            </tr>
            <tr>
              <td>Almacanamiento</td>
              <td>{data.storage}</td>
              <td>{data.expandible}</td>
            </tr>
            <tr>
              <td>Bateria</td>
              <td>{data.bateria}</td>
              <td>{data.carga}</td>
            </tr>
            <tr>
              <td>Patanlla</td>
              <td>{data.pantalla} pulgadas</td>
              <td>{data.quality}</td>
            </tr>
            <tr>
              <td>Camara trasera</td>
              <td>{data.camara2} camaras</td>
              <td>{data.camara2_quality}</td>
            </tr>
            <tr>
              <td>Camara frontal</td>
              <td>{data.camara1}, {data.notch_type}</td>
              <td>{data.camara1_quality}MP</td>
            </tr>
            <tr>
              <td>Sensor de huella</td>
              <td>{data.huella}</td>
              <td>{data.huella_position}</td>
            </tr>
            <tr>
              <td>USB</td>
              <td>{data.USB}</td>
              <td>18 watts</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
