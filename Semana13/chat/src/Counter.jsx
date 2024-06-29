import { incriment, decrement } from "./app/counter/counterSlice";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);//obtener el estado
  //console.log(count);

  const dispatch = useDispatch();//me va a permitir disparar una accion dentro del store

  const handleIncrement = () => {
    dispatch(incriment());
  }
  const handleDecrement = () => {
    dispatch(decrement());
  }
  

  return (
    <>
      <div>
        Contador: {count}
      </div>
      <button onClick={handleIncrement}>
        Incrementar
      </button>
      <button onClick={handleDecrement}>
        Reducir
      </button>
    </>
  )
}

export default Counter
