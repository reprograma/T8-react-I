import React from 'react';

export default function PrevisaoTempo(props) {
  return (
    <div className="previsao">
      <h2 className="previsao__data">{props.data}</h2>
      <p className="previsao__resumo">{props.resumo}</p>

      <img src={props.img} className="previsao__img" />

      <table className="previsao-temperatura">
        <tr className="previsao-temperatura__linha">
          <td>Máxima</td>
          <td>{props.temperatura.max} oC</td>
        </tr>
        <tr className="previsao-temperatura__linha">
          <td>Mínimo</td>
          <td>{props.temperatura.min} oC</td>
        </tr>
      </table>

    </div>
  )
}