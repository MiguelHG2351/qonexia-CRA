import React from 'react'
import styled from "styled-components";

const ContainerDescription = styled.div`
  height: 80%;
  & .nameProduct {
    color: var(--color-text);
    font-weight: 700;
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
    color: var(--color-text);
    font-weight: 700;
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
  @media screen and (min-width: 992px) {
    .nameProduct {
      font-size: 20px;
      /* #00558f */
    }
    .info {
      font-size: 20px;
    }
  }
`;

function Band({data}) {
    return (
      <ContainerDescription>
        <div className="nameProduct">
          <strong>{data.name}</strong>
        </div>
        <div className="info">
          <div>
            <p>{data.bateria}</p>
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
            <p>{data.resistencia}</p>
          </div>
          <div>
            <p>{data.OS}</p>
          </div>
          <div>
            {data.sensores.map((sensores, index) => (
              <p
                key={index * 10}
              >{sensores}</p>
            ))}
          </div>
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
    </ContainerDescription>
    )
}

export default Band