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

const Nav = props => {
  return (
    <div className="navContainer">
      <p>{props.nome}</p>
      <p>{props.titulo}</p>
    </div>
  )
}

const elemento = <p> Sou um elemento </p>;

function App() {
  return (
    <div className="App">
      <Nav
        nome="mell"
        titulo="titulo"
        numero="13"
      />

      <Nav
        nome="raissa"
        titulo="titulo"
      />

      <Nav
        nome="larissa"
        titulo="titulo bacanudo"
      />


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
