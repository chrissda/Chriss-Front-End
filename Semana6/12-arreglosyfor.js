// let ingredientes = ["Papa seca", "Chancho", "Cebolla", "Ají", "Sal"];

// console.log(ingredientes[2]);
// for(let i = 0; i<= ingredientes.length; i++){
/*for(let i = 0; i < ingredientes.length; i++){
    console.log(ingredientes[i]);
}
console.log("Fin!");
*/

//Ejercicio01
// let nroPar = ["14", "28", "42", "56", "70"];
/*let nro = 1;

for(let i = 1; i <= 12; i++){
    nro = i*7;
    if(nro%2 === 0){
        console.log(nro)
    }
}   
*/



//Ejercicio02
/*let numero = parseFloat(prompt("Ingrese número: "));
let suma = 0;
for(let i = 1; i < numero; i++){
    suma += i;
}
console.log(`La suma de los valores menores es: ${suma}`);
*/

//Ejercicio03

let precios = [50, 20, 10, 100, 30, 10];
let presupuesto = parseFloat(prompt("Ingrese su presupuesto: "));
let sumaPresupuesto  = 0;

for(let i = 0; i < precios.length; i++){
    if(sumaPresupuesto < presupuesto){
        sumaPresupuesto += precios[i];
        console.log(`Precios ${precios[i]}`);
        break;
    }
    
}

console.log(sumaPresupuesto);


/*
for(let i = 0; i < precios.length; i++){
    sumaPresupuesto = sumaPresupuesto +  precios[i];
}
console.log(sumaPresupuesto);*/