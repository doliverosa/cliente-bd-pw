//import logo from './logo.svg';
import './App.css';

function App() {
  function verificarEstado(response) {
    if (!response.ok) {
      throw Error("Ocurrio un error: " + response.statusText)
    }
    return response;
  }
  function procesarDato(data) {
    var res = document.getElementById("resultado");
    res.innerHTML = data;
  }
  function handleError(error) {
    console.log("Ocurrio un error: " + error);
  }

  function handleClick(){
    var codigo = document.getElementById("txtCodigo").value;
    var nombre = document.getElementById("txtNombre").value;
    var profesor = document.getElementById("txtProfe").value;
    var fecha = document.getElementById("txtFecha").value;

    const URL = "https://server-bd-pw-production.up.railway.app/guardar-cita/" + codigo + "/" + nombre + "/" + profesor + "/" + fecha;
    fetch(URL)
      .then(verificarEstado)
      .then(response => response.text())
      .then(procesarDato)
      .catch(handleError);
  }

  return (
    <div>
      <span>Codigo:</span><input id="txtCodigo" type="text"></input><br/>
      <span>Nombre:</span><input id="txtNombre" type="text"></input><br/>
      <span>Profesor:</span><input id="txtProfe" type="text"></input><br/>
      <span>Fecha:</span><input id="txtFecha" type="text"></input><br/>

      <button onClick={handleClick}>Enviar</button>
      <div id='resultado'></div>
    </div>
  );
}

export default App;
