//otra manera de usar condicionales, con otra sintaxis
//Combo de un cine, hay combo 1 combo 2 y combo 3

let opcion = prompt("Ingresa tu opción de combo, 1, 2, 3");
opcion = parseFloat(opcion);

switch(opcion){
    case 1:
        console.log("Elegiste el combo personal.");
        break;//vaya al final de cada bloque de codigo de cada caso
    case 2:
        console.log("Elegiste la opción duo.");
        break;
    case 3:
        console.log("Elegiste el MegaCombo.");
        break;
    default://else
        console.log("Te equivocaste. Verifica que combo elegiste.");
}

let pelicula = prompt("Que género deseas ver: Comedia, Acción y Ciencia/Ficción.");

switch(true){
    case(pelicula === "Comedia" && opcion === 1):
        console.log("Elegiste el combo personal y película Depredador.");
        break;
    case(pelicula === "Accion" && opcion === 2):
        console.log("Elegiste el combo personal y película Guerra Civil.");
        break;
    case(pelicula === "Ciencia/Ficción" && opcion === 3):
        console.log("Elegiste el combo personal y película Ready Player One.");
        break;
    default:
        console.log("Elegiste una opción inválida.");
}