import { useState } from 'react';
import './App.css';

function App() {

  const [nome, setNome] = useState([""]);

  const [titulo, setTitulo] = useState("Mostrar Nome")

  const handleMostrarNome = () => {

    setNome((nome) => {
      console.log(nome)
      if(nome == ""){
        setTitulo("Ocultar Nome")
        return ["Gustavo Araujo"]   
      }else{
        ocultarNome();
      }
    })
  }

  const ocultarNome = () => {
    setTitulo("Mostrar Nome")
    setNome([""])
  }

  return (
    <div className="App">
        <h1>{nome}</h1>
        <button className='btn' onClick={handleMostrarNome}>{titulo}</button>
    </div>
  );
}

export default App;
