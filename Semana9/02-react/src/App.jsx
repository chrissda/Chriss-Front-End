//importar el componente
import Titulo from "./titulo";
import Contador from "./contador";

//1. el nombre del componente tiene que comenzar con mayúsculas

const App = () => {
  const titulo = "Ají de gallina";

  const saludo = () => "Hola";

  const adios = () => {
    alert("Byes!!!")
  }


  // 2. tiene que retornar JSX (html)
  return (
    // 2.1 en el return SOLAMENTE se retorna 1 solo elemento
    // <> es un fragment
    <>
      {/* <h2 className="red">{titulo}</h2> */}
      <Titulo texto="Denys" numero={1} accion={adios}/>
      {/* Titulo({texto: "nombre", numero: 1}) */}
      <Titulo texto="Christian" numero={2} accion={adios}/>
      <Titulo texto="Renzo" numero={3} accion={adios}/>
      <Titulo texto={titulo} numero={4} accion={adios}/>
      <p>{saludo()} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores eius error asperiores.{50 + 60}</p>
      <label htmlFor="nombre">Nombre: </label>
      {/* TODO ETIQUETA TIENE QUE TENER SU CIERRE */}
      <input id="nombre"/>
      {/* onClick, onSubmit, onDoubleClick, onChange */}
      <button onClick={(e) => {alert("Hola!!!" + e.target.innetHTML)}}>
        Click!
      </button>
      <button onClick={adios}>
        Byes!
      </button>
      <hr />
      <Contador />
    </>
    
  )
}

// 3. Tiene que exportarse por defecto el componente 
export default App;