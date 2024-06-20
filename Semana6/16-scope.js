'use strict';
//Javascript scope, que ya existe dentro de JS... window
console.log("de la nada!!. ya existe!");
//ámbito/scope global, esta directamente en el DOC
let IGV = 1.18;

function calcularPrecio(costo){
    //ganancia solo existe dentro de la función
    let ganancia = 1.15;
    let costoTotal = costo * ganancia * IGV;
    console.log(ganancia);
    if(costoTotal > 100){
        //ámbito de bloque, if, for, function acá adentro
        let descuento = 0.95;
        costoTotal = costoTotal * descuento;
    }
    //descuento = 0.9;
    return costoTotal.toFixed(2);
}

//Sin el use strict la linea de abajo es equivalente a una declaración de variable... let ganancia = 1.20
//ganancia = 1.20;
//console.log(ganancia);

console.log(calcularPrecio(1000));



 //Ejercicios parte 2 function 

 /*
 Ejercicio 1
 Crea una función que reciba como parámetro un nombre, la función debe retornar un saludo amigable como resultado. Ej:

 Daniel ----> Hola Daniel
*/
/*
let user = prompt('Escriba su nombre:');

function persona(nombre){
    nombre = user;
    return nombre;    
}
console.log('Hola ', persona(user));
*/

/*Ejercicio02
Cree una función que permita calcular el área de un círculo, considere que la formula es A = Pi * r * r.

Pi =3.14;
R = radio

La función debe recibir el radio como parámetro y el usuario debe ingresar el radio para calcular.
*/
/*
let radio = prompt("Ingrese radio del círculo: ");
let cradio = parseFloat(radio);
//let Pi = 3.14;

function areaCirculo(Pi){
    Pi = 3.14;
    let area = Pi*cradio*cradio;
    return area;
}
console.log(`El área del círculo es: ${areaCirculo(radio)}`);
*/

/*
Ejercicio03
Escribe una función que reciba un array de números y retorne la cantidad de números pares que contiene.
*/
/*
let numeros = [4, 7, 25, 49, 16, 100, 67, 44, 15];

function numPares(pares){
    for(i = 0; i < numeros.length; i++){
        if(numeros[i]%2 === 0){
            pares++;
            
        }
        continue;
    }
    return pares;
}
console.log(numPares(pares));
*/

/*
function contarPares(arreglo){
    let cantidad = 0;
    for(let i = 0; i < arreglo.length; i++){
        if(arreglo[i]%2 == 0){
            cantidad++;
            //console.log(cantidad);
        }
    }
    return cantidad
}
let resultado = contarPares([10, 5, 7, 40, 2, 4, 8]);
console.log(resultado);
*/

/*Ejercicio05
Escribe una función que reciba un array de números enteros y retorne el número más grande
*/

function encontrarNumeroGrande(arreglo){
    //let numeroMasGrande = 0;
    let numeroMasGrande = arreglo[0];
    for(let i = 1; i < arreglo.length; i++){
        if(numeros[i] > numeroMasGrande){
            numeroMasGrande = numeros[i];
        }
    }
    return numeroMasGrande
}
let numeros = [10, 5, 7, 40, 2, 4, 80];
let resultado = encontrarNumeroGrande(numeros);
console.log(resultado);