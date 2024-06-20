//este es un comentario de una linea
/**
 * este es un comentario de bloque
 * aqui puedo describir el console.logh
 * en varias lineas
 */
console.log("Hola mundo!!!!");

let nombre="Pamela";

console.log('Nombre', nombre);

let edad = 23;

console.log(edad);
// camelcase , aniodeNacimiento
// usualmente tildes o ñ no se van a usar
let precioSmartphone = 900;
// sensible a mayusculas
console.log(precioSmartphone);
//VAR no lo usen
var apellido = "Borjas";
console.log(apellido);
var apellido = "Soles";
console.log(apellido);

//let nombre = "Harold";

//TIPOS DE DATOS
//Texto - string
let nombre2 = "Giancarlo";
//number
let numero = 20;
// string
let nota = "20";

console.log("number", numero);
console.log("typeof number", typeof numero);
console.log("String", nota);
console.log("typeof string", typeof nota);
//tener cuidado al concatenar o sumar
// console.log(numero + nota);

//boolean - booleanos
let meQuiere = true; //false
console.log(meQuiere);
console.log("typeof boolean", typeof meQuiere);

// le podemos dar más de una argumento
// puedo hacer que imprima una cosa detras de otra
console.log("este numero es:", 100);


// undefined
let porDefinir;
console.log("no esta definido", porDefinir);
console.log("tipo undefined:", typeof porDefinir);

//null
let noHayNada = null;
console.log("este es un null:", noHayNada);
console.log("tipo null:", typeof noHayNada);

let anio = 2024;
console.log("año1:", anio);
//podemos darle un nuevo valor
anio = 2025;
console.log("año2:", anio);
//Que una variable al cambiar de valor, puede cambiartambien de tipo de dato
anio = "DOS MIL VEINTICINCO";
console.log("año3:", anio);
