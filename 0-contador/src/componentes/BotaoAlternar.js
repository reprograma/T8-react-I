import React from 'react';

const BotaoAlternar = props => {
  return (
    <div>
      <button onClick={props.onClickMetodo}>
        {props.visibilidade === true
          ? "Fechar Contador"
          : "Abrir Contador"}
      </button>
    </div>
  )
}

export default BotaoAlternar;
