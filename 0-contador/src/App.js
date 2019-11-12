import React from 'react';
import './App.css';   

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };
  }

  adicionarUm = () => {
    this.setState((prevState) => {
      return {
        contador: prevState.contador + 1
      }
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.contador}</p>
        <button className="btnMaisUm" onClick={this.adicionarUm}>+1</button>
        <button className="btnMenosUm">-1</button>
        <button className="btnResetar">resetar</button>
      </div>
    );
  }
}

function App(props) {
  return (
    <div className="App">
      <h2>Contador</h2>
      <Contador />
    </div>
  );
}
export default App;
