import React from "react";
import styled from "styled-components";

const ContainerDescription = styled.div`
  height: 80%;
  & .nameProduct {
      color: #fff;
    text-align: center;
    height: 10%;
    padding: 12px;
  }
  & .info {
    height: 90%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    align-items: center;
      color: #fff;
    /* & div {
    } */
    & div:not(.colors) {
      padding: 8px;
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-wrap: wrap;
    }
    & .colors {
      grid-column: 1 / 3;
      & button {
        border-radius: 12px;
        padding: 12px;
        border: 1px solid #fff;
        background-origin: content-box;
        margin: 8px;
      }
    }
  }
`;

export default function Device({ data }) {
  return (
    <ContainerDescription>
      <div className="nameProduct">
        <strong>{data.name}</strong>
      </div>
      <div className="info">
        <div>
          <p>{data.procesador}</p>
          <p>{data.GPU}</p>
        </div>
        <div>
          <p>{data.storage}</p>
          <p>{data.expandible}</p>
        </div>
        <div>
          <p>{data.bateria}</p>
          <p>{data.carga}</p>
        </div>
        <div>
          <p>{data.screen} pulgadas</p>
          <p>{data.quality}</p>
        </div>
        <div>
          <p>{data.camara2} camaras</p>
          <p>{data.camara2_quality}</p>
        </div>
        <div>
          <p>
            {data.camara1}, {data.notch_type}
          </p>
          <p>{data.camara1_quality}MP</p>
        </div>
        <div>
          <p>{data.huella}</p>
          <p>{data.huella_position}</p>
        </div>
        <div>
          <p>{data.USB}</p>
        </div>
        <div className="colors">
          {data.colores.map((colors, index) => (
            <button
              aria-hidden="true"
              style={{ background: colors }}
              key={index}
            ></button>
          ))}
        </div>
      </div>
    </ContainerDescription>
  );
}
