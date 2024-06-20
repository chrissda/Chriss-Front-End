import { useState, useEffect } from "react";

const App = () => {
  const [contador, setContador] = useState(0);
  const [pares, setPares] = useState(2)
  //aqui arriba haya logica del componente y puedo hacer operaciones
  //declarar variables
  //justo antes de return
  console.log("1.lógica de negocio")
  // useEffect(funcion, [deps])
  useEffect(() => {
    console.log("3.Hola!");
    //hace una peticion htt a una APO
    //y cuando tenga la repuesta, los datos, actualizar el estado
    //datos convencionales
  //}, [contador])  
  }, [])

  return (
    <>
    {console.log("2.dentro del return")}
    <h1>App</h1>
    <h2>Contador: {contador}</h2>
    <button onClick={() => {setContador(contador+1)}}>
      Incrementar
    </button>
    <h2>Pares: {pares}</h2>
    <button onClick={() => {setPares(pares+2)}}>
      Incrementar Pares
    </button>
    </>
    
  )
}

export default App;