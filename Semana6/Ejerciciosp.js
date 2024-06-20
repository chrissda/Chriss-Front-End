

/*Ejercicio 01
let nombre = prompt("Ingrese su nombre:");
console.log("Nombre: ", nombre);
let apellido = prompt("Ingrese su apellido:");
console.log("Apellido: ", apellido);
let edad = prompt("Ingrese su edad:");
console.log("Edad: ", edad);

console.log("Buen día, soy", nombre, apellido, "y tengo", edad, "años.");
alert(`Buen día, soy ${nombre} ${apellido} y tengo ${edad} años.`);
*/

//Ejercicio02
/*let numero = parseFloat(prompt("Ingrese número:"));
console.log("Número: ", numero, typeof numero);


if(numero > 0){
    console.log("El número es positivo.");
    alert(`El número es positivo`);
}else if(numero < 0){
    console.log("El número es negativo.");
    alert(`El número es negativo`);
}else{
    console.log("El número es igual a 0.");
    alert(`El número es igual a 0`);
}*/

//Ejercicio03
/*let nombre = prompt("Ingrese su nombre");
console.log("Su nombre es: ", nombre, typeof nombre);

if(nombre.length > 2){
    console.log("Su nombre es válido");
    alert(`Su nombre es válido`);
}else{
    console.log("Su nombre es inválido");
    alert(`Su nombre es inválido`);
}*/

//Ejercicio04
/*let montoPago = parseFloat(prompt("Ingrese el monto a pagar:"));
console.log("Monto a pagar: ", montoPago);
let montoFinal = parseFloat(montoPago*1.18);
console.log("El monto final a pagar es: ", montoFinal.toFixed(2));
alert(`El monto final a pagar es: ${montoFinal.toFixed(2)}`);
*/

//Ejercicio05
/*let montoTotal = parseFloat(prompt("Ingrese monto total a pagar:"));
console.log("Monto total a pagar: ", montoTotal);

let mEqPagar = parseFloat(montoTotal/3);
console.log("El monto que debe pagar cada uno es:", mEqPagar.toFixed(2));
alert(`El monto que debe pagar cada uno es: ${mEqPagar.toFixed(2)}`);
*/

//Ejercicio06
/*let montoTotal = parseFloat(prompt("Ingrese monto a pagar:"));
console.log("Monto total a pagar: ", montoTotal);
let amigo1 = parseFloat(prompt("Ingrese aporte del primer amigo:"));
console.log("Aporte del primer amigo: ", amigo1);
let amigo2 = parseFloat(prompt("Ingrese aporte del segundo amigo:"));
console.log("Aporte del segundo amigo: ", amigo2);
let amigo3 = parseFloat(prompt("Ingrese aporte del tercer tercer:"));
console.log("Aporte del tercer amigo: ", amigo3);
let aportetotal = amigo1 + amigo2 + amigo3;
console.log("El aporte total es: ", aportetotal);

if(aportetotal == montoTotal){
    console.log("Los aportes cubren el monto total, seguimos siendo amigos.");
    alert(`Los aportes cubren el monto total, seguimos siendo amigos.`);
}else if(aportetotal > montoTotal){
    console.log("Los aportes cubren el monto total, queda pa las chelas.");
    alert(`Los aportes cubren el monto total, queda pa las chelas.`);
}else{
    console.log("El aporte no cubre el monto total, nos sacamos la shit.");
    alert(`Los aportes no cubren el monto total, nos sacamos la shit.`);
}*/

//Ejercicio07
/*let numeros = prompt('Ingrese 2 números separados por "," ');
numeros = numeros.split(",");
let num1 = parseInt(numeros[0]);
let num2 = parseInt(numeros[1]);
console.log("Los numeros son: ", num1, num2);
//alert(`Los números son: ${num1} y ${num2}`);

let suma = num1 + num2;

if(suma > 0){
    console.log("La suma de los números es: ", suma);
    alert(`La suma de los números es: ${suma}`);
}else{
    console.log("La suma de los números es negativa.");
    alert(`La suma de los números es negativa.`)
}
*/

//Ejercicio08
/*let num = parseFloat(prompt("Ingrese un número: "));
console.log("El número ingresado es: ", num);

if(num%3 == 0){
    console.log("El número es divisible por 3.");
    alert(`El número es divisible por 3.`);
}else{
    console.log("El numero no es divisible por 3, su residuo es:", num%3);
    alert(`El numero no es divisible por 3, su residuo es: ${num%3}`);
}
*/

//Ejercicio09
/*let numeros = prompt('Ingreso 2 números separados por una ","');
numeros = numeros.split(",");
let num1 = parseInt(numeros[0]);
let num2 = parseInt(numeros[1]);
console.log("Los números ingresados son: ", num1, "y ", num2);

if(num1%num2 == 0){
    console.log("El primer número es divisible por el segundo sin residuo.");
    alert(`El primer número es divisible por el segundo sin residuo.`);
}else{
    console.log("El primer número no es divisible por el segundo, el residuo es: ", num1%num2);
    alert(`El primer número no es divisible por el segundo, el residuo es: ${num1%num2}`);
}*/

/*let num1 = parseFloat(prompt('Ingrese el primero número'));
console.log("El primero número ingresado es: ", num1);
let num2 = parseFloat(prompt('Ingrese el segundo número'));
console.log("El segundo número ingresado es: ", num2);
residuo = num1%num2;

if(num1%num2 == 0){
    console.log('El primer numero es divisible por el segundo sin residuo.');
    alert(`El primer numero es divisible por el segundo sin residuo.`);
}else{
    console.log('El residuo de los números es: ', residuo);
    alert(`El primer número no es divisible por el segundo. El residuo es: ${residuo}`);
}*/

//Ejercicio 10
let numeros = prompt('Ingrese los números separados por una ","');
numeros = numeros.split(',');
let num1 = parseInt(numeros[0]);
let num2 = parseInt(numeros[1]);
console.log('Los números ingresados son:', num1, 'y', num2);


