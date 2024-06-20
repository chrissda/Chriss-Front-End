// expresiones vs setencias
// expresión algo que me va dar resultado por si solo;
let b = 10; //NO me da un resultado, sentencia, orden, aseignación

console.log(b);//b por si solo me da un resultado, ya me da un resultado, ya me da un valor, es una Expresión

console.log(10 > 5);

/**
 * < menor que
 * <= menor igual que
 * >= mayor igual que
 * == igual que
 * === estrictamente igual que
 */


if(5 > 5){//Evalua esto y si es verdadero
    //... ejecuta lo que esta dentro de estas llaves
    console.log("Es verdadero");
}else{//pero si no es verdadero entonces...
    //...ejecutas lo que esta dentro de estas otras llaves
    console.log("Es falso");
}


console.log("a: ", 9 == 9);

//que sucede? el == compara valores nmo el tipo de dato
console.log("b: ", 10 == "10");
//compara, estrictamente igual, tanto valor, como tipo de dato
//Siempre comprar de forma estricta
console.log("c: ", 20 === "20");

let nombre = "";
//length === longitud
console.log(nombre.length);
console.log(typeof nombre.length);
if(nombre.length > 0){
    console.log("Es un nombre válido");
}else{
    console.log("Es un nombre inválido");
}
