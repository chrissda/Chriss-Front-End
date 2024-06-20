//Es un restobar que da un premio según la edad y contexto del cliente

//Si es menor de 18, no puede entrar al restobar
//Si es menor de 18 y esta acompaniado de un adulto, puede ingresar al restobar
//Si es mayor o igual de 18 hasta 29 puede ingresar pero no recibe ningun premio
//Si es mayor o igual de 30 y menor o igual que 60, tiene derecho a una bebida
//Si es mayor de 60 tiene descuento en tequenios

//Los rango de edades
//Los menores de 18 no pasan - Claro

//Que dificultades tenemos???
//el flujo
//restricciones
//cantidad

//&& - Y -> que ambas expresiones sean verdaderas
//|| - Ó -> al menos una expresión tiene que ser verdadera -> para que se considere vedadera
//! not -> Negación -> No era yo, seguro parecía

let edad = prompt("Indica tu edad");
let edadNum = parseFloat(edad);
//confirm, abrirá una ventanita para el resultado será booleano
let estaAcompaniado = confirm("Esta acompaniad@ por un adulto?");
// console.log(estaAcompaniado);
// console.log(typeof estaAcompaniado);

/*if(edadNum < 18 || estaAcompaniado == true){
    console.log("Pueden pasar al restobar!");
}else if(edadNum >= 18 && edadNum < 30){
    console.log("Pueden pasar al restobar! pero no tienen ningún premio/bono");
}*/

if(edadNum > 60){
    console.log("Tiene descuentos en tequenios.");
    //}else if(edadNum >= 30){
}else if(edadNum >= 30 && edadNum <= 60){
    console.log("Tiene derecho a una bebida.");
}else if(edadNum >= 18 && edadNum <=60){
    console.log("Pueden pasar al restobar! pero no tienen ningun premio/bono.");
}else if(edadNum < 18 && estaAcompaniado === true){
    console.log("Pueden pasar al restobar!");

}else if(edadNum>=18){
    console.log("Puede pasar al restobar.")
}else{
    console.log("No puede pasar al restobar.")
}
    