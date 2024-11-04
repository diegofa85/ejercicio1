import logo from './logo.svg';
import './App.css';
import Saludo from './Saludo.js';
import Despedida from './Despedida.js';

function App() {
  const actitud = true;

  if (actitud) {
    return (
      <div className="App">
        <header className="App-header">
          <Saludo nombre = "Diego" apellido = "Fernández"></Saludo>
        </header>
      </div>
    );
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <Despedida nombre = "Diego" apellido = "Fernández"></Despedida>
        </header>
      </div>
    );
  }
 
}

export default App;
