// va requerir su propio contexto y un proveedor
import { createContext, useState, useEffect } from "react";
import { getStorage, saveStorage } from "../utils/localStorage";


//muy similar a una instanciación para crear el contexto de React;
const CartContext = createContext();

//Proveedor
const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addProductToCart = (product) => {
    const existsIndex = cart.findIndex((prod) => prod.id === product.id);
    //console.log("existsIndex", existsIndex);
    //comprobar si es que no existe
    if(existsIndex === -1){
      product.cantidad = 1;
      const newCart = [...cart, product];
      setCart(newCart);
    } else { //si es que ya existe
      const copyCart = [...cart];
      copyCart[existsIndex].cantidad++; //infico la posición de la copia del carrito[] y le aumento +1
      setCart(copyCart);
    }
  }

  const quantityTotal = cart.reduce((acumulator, prod) => acumulator + prod.cantidad, 0);
  //console.log("quantityTotal: ", quantityTotal);
  //mediante value el contexto podrá proveer lo que desee
  
  useEffect(() => {
    const dataStorage = getStorage('cart');
    if(dataStorage){
      setCart(dataStorage);
    }
  }, [])

  //useEffect deberia ser lo ultimo antes del componente
  useEffect(() => {
    if(cart.length > 0){
      saveStorage('cart', cart);
    }
  }, [cart]);
  
  return <CartContext.Provider value={{cart, addProductToCart, quantityTotal}}>
    {props.children}
  </CartContext.Provider>
}

export { 
  CartContext,
  CartContextProvider
}