//Calcular el área de un triángulo
//Necesitamos
//base
//altura
//let base = parseFloat(prompt("Ingrese la base del triángulo:"));
//let base = +prompt("Ingrese la base del triángulo:");
let base = prompt("Ingrese la base del triángulo:");
console.log(base);
console.log(typeof base);
let altura = prompt("Ingrese la altura de; triángulo:");
console.log(altura);

//parsear lo podemos entender como traducir
//parseFloat convierte el argumento recibido a un number
let numBase = parseFloat(base);
console.log(numBase);
console.log(typeof numBase);
let numAltura = parseFloat(altura);
console.log(numAltura);
console.log(typeof numAltura);

let area = numAltura * numBase / 2;
console.log("El área es: ", area);
alert(`El área es: ${area}`);