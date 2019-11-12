import React from 'react';

/*
1. Declarar Componentes DetalhesAutor e ComentarioTexto
2. Cada um desses componentes retorna o respectivo JSX elemento
3. Elas tambem recebem PROPS
4. Chamar componentes criados dentro do ComentarioDetalhes
*/

const DetalhesAutor = (props) => {
  return (
    <div>
      <h3 className="comentario__nome">{props.nome}</h3>
      <p className="comentario__subtitulo">{props.subtitulo}</p>
    </div>
  );
}

const ComentarioTexto = props => <p>{props.comentario}</p>

const ComentarioDetalhes = props => {
  return (
    <div>
      <DetalhesAutor
        nome={props.nome}
        subtitulo={props.subtitulo}
      />
      <hr />
      <ComentarioTexto
        comentario={props.comentario}
      />
    </div>
  )
}

const Comentario = props => {
  return (
    <div className="comentario">
      <img className="comentario__perfil" src={props.img} />
      <ComentarioDetalhes
        nome={props.nome}
        subtitulo={props.subtitulo}
        comentario={props.comentario}
      />
    </div>
  )
}

export default Comentario;