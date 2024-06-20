//Salimos en grupo a comer/ tomar algo

let cantidadGrupo = 19;

//for(inicializador; limite/condicional; actualizador)
/*for(let i = 1; i <= cantidadGrupo; i++){
    console.log(`Amig@ ${i} ya se fue`);
}
*/
/*for(let i = 1; i <= cantidadGrupo; i+=2){
    console.log(`Amig@ ${i} ya se fue`);
}
*/
/*for(let i = cantidadGrupo; i > 0; i--){
    console.log(`Amig@ ${i} ya se fue`);
}

console.log("Fin!");
*/

/**
 * Una clínica da un descuento a sus clientes
 * según el número de citas/consultas que tomen
 * con la clínica
 * 
 * Las 4 primeras costarán 100
 * Las 5 siguientes costarán 80
 * Las posteriores a esas costarán 72
 * 
 * Se requiere saber en base a las consultas que
 * tomo un paciente cuanto tiene que pagar
 */

/**
 * Contar/Enumerar
 * Validar
 */

let nroConsultas = prompt("Ingrese cuantas citas tuvo:");
let costoTotal = 0;

for(let i=1; i<=nroConsultas; i++){
    if(i <= 4){
        // costoTotal = costoTotal + 100;
        costoTotal += 100;
    }else if(i <= 9){
        costoTotal += 80;
    }else{
        costoTotal += 72;
    }
}
console.log(`El total a pagar es: ${costoTotal}`);
