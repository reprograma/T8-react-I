import React from 'react';
import Comentario from './componentes/Comentario';
import Cat1 from './img/cat1.jpeg';
import Cat2 from './img/cat2.webp'
import './App.css';

function App() {
  return (
    <div className="App">
      <Comentario
        img={Cat1}
        nome="Mell"
        subtitulo="Ameeeeei, faiz mais"
        comentario="nossa, babado esse video. Melhor youtuber"
      />
      <Comentario
        img={Cat2}
        nome="Larissa Manuela"
        subtitulo="Achei mais ou menos"
        comentario="prefiro o meu videclipe"
      />
    </div>
  );
}

export default App;
