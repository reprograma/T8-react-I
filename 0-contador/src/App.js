import React from 'react';
import './App.css';   

const contador = 7;

const verificaContador = () => {
  if (contador === 0) {
    return <p>Contador não iniciado</p>
  } else {
    return <p>Contador iniciado</p>
  }
}

function App() {
  return (
    <div className="App">
      <h2>Contador</h2>
      <p>{contador}</p>

      {verificaContador()}
      
      <button className="btnMaisUm">+1</button>
      <button className="btnMenosUm">-1</button>
      <button className="btnResetar">resetar</button>
    </div>
  );
}
export default App;
