//Como carlcular el precio de venta de algo, si a uds les cuesta 20
//porcentaje de ganancia
//igv
//costo + 15% + igv (18%)

//function nombreFuncion(recibir parametros)
/*
function calcularPrecio(costo){
    let ganancia = 1.15;
    let igv = 1.18;
    let total = costo * ganancia * igv;
    console.log(`Precio total es: ${total.toFixed(2)}`);
}
*/
//argumentos
//calcularPrecio(100);
//calcularPrecio(45);
/*
let precio = prompt("Ingrese preci: ");
let cprecio = parseFloat(precio);

calcularPrecio(cprecio);
*/

//solamente se encargue de la parte principal del viaje
function calcularViaje(pasaje, comida, estadia, dias){
    let costodiario = comida + estadia;
    let costototalDias = costodiario * dias;
    let costoTotal = costototalDias + pasaje;
    //retornar un valor
    return costoTotal;
}

let resultadoViaje = calcularViaje(100, 60, 50, 5);
console.log(resultadoViaje);

//separar varias cosas en funciones
//Single responsability, una sola responsabilidad...

//Arrox chaufa
//Picar vegetales
//Granear el arroz
//Freir pollo, huevo

function picarVegetales(){
    console.log('...Picar vegetales...');
}

function granearArroz(){
    console.log('...graneando arroz...');
}

function freirPolloHuevo(){
    console.log('...freir pollo huevo...');
}

function prepararArrozChaufa(){
    picarVegetales();
    granearArroz();
    freirPolloHuevo();
}

prepararArrozChaufa();