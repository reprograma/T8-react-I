import React from 'react';

const BotaoContador = props => {
  return (
    <div>
      <button
        className="btnMaisUm"
        disabled={props.disabled}
        onClick={props.cliqueAddUm}
      >
        +1
      </button>
      <button
        className="btnMenosUm"
        disabled={props.disabled}
        onClick={props.cliqueSubUm}
      >
        -1
      </button>
      <button className="btnResetar" onClick={props.cliqueResetar}>
        resetar
      </button>
    </div>
  );
}

export default BotaoContador;