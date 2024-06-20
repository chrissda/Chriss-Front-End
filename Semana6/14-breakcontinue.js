/*
let nombre = ["Pamela", "Abel", "Giancarlo", "Cleo"];
let busqueda = prompt("Ingrese el nombre a buscar: ");

for(let i = 0; i < nombre.length; i++){
    if(busqueda === nombre[i]){
        console.log(`Se encontro a ${busqueda} en el índice ${i}`);
        break;
    }
    //console.log(nombre[i]);

}
*/

//continue
/*let notas = [11, 13, 20, 17, 19, 20, 9, 14];

for(let i = 0; i < notas.length; i++){
    if(notas[i] < 13){
        continue;
    }
    console.log(`La nota a considerar es: ${notas[i]}`);
}*/

//Ejercicio3 mas condicional y confirm
let precios = [50, 20, 10, 100, 30, 10];
let presupuesto = prompt("Ingrese su presupuesto: ");
let numPresupuesto = parseFloat(presupuesto);

for(let i = 0; i < precios.length; i++){
    //Confirmacion de compra
    let continuar = confirm(`Desea comprar el prodcuto de S/.${precios[i]}
    su presupuesto es: S/${numPresupuesto}`);
    // ! NOT negración
    if(!continuar){
        continue;
    }
    //procesooo
    if(precios[i] <= numPresupuesto){
        console.log(`El producto de S/ ${precios[i]} se compra.`);
        // Si es que el producto se compra
        //numPresupuesto -= precios[i];
        numPresupuesto = numPresupuesto - precios[i];
    }
    //preguntar para finalizar todo
    let finalizar = confirm('Desea seguir comprando????');
    if(!finalizar){
        break;
    }
}
