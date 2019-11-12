import React from 'react';
import SolImg from './img/sol.png';
import NuvensImg from './img/nuvens.png';
import PrevisaoTempo from './componentes/PrevisaoTempo';
import './App.css';

function App() {
  return (
    <div className="previsao-container">
      <PrevisaoTempo
        data="31/05/2019"
        resumo="Ensolarado"
        img={SolImg}
        temperatura={{
          max: 31,
          min: 20
        }}
      />

      <PrevisaoTempo
        data="01/06/2019"
        resumo="Nublado"
        img={NuvensImg}
        temperatura={{
          max: 25,
          min: 18
        }}
      />
    </div>
  );
}

export default App;
