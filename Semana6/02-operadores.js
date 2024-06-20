//aritméticos
// vamos a armar una PC
let monitor = 400;
let cpu = 300;
let memoria = 200;

// suma;
let precioTotal = monitor + cpu + memoria;
console.log("Precio tatol :", precioTotal);

let adicionales = 50 + 10;
console.log("Adicionales: ", adicionales);

//resta
let descuento = 25;
let precioDscto = precioTotal - descuento;
console.log("Con Dscto: ", precioDscto);

// dividir en cuotas
let cuotas = precioDscto / 2;
console.log("C/cuota es: ", cuotas);

//queremos comprar varias, multipicación
let totalPorDos = precioDscto * 2;
console.log("Precio por dos unid: ", totalPorDos);

let gananciaEmpresa = 1.15;
let precioFinal = ((precioDscto * 2) + adicionales) * gananciaEmpresa;
console.log("Precio final: ", precioFinal);

//operador módulo, se refiere al residuo, y usa el símbolo del %
let modulo = 1000 % 300;
console.log("Módulo: ", modulo);

//auto incrementos
let a = 10;
// a = a+ 1;
a++;
console.log("a: ", a);

let b = 20;
// b = b + 5;
b += 5;
console.log("b: ", b);

//decrementar
let c = 30;
// c = c - 1;
c--;
console.log("c: ", c);

let d = 40;
// d = d -7;
d -= 7;
console.log("d: ", d);


// concatenar
let nombre = "José";
let saludo = "Hola " + nombre;
let apellido = 'Guevara';
console.log(saludo);
console.log("hay que tener cuidado con: ", 10 + "5");

// concatenar con template string -> ${JAVASCRIPT, variables, etc}
// backtick, comillas invertidas `` alt+96
let despedida = `Nos vemos 
${nombre} ${apellido}
hasta luego ${10 + 20}` + ", cya";
console.log("Despedida: ", despedida);