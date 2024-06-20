let gato = {
    nombre: "Michi"
}

gato.nombre;

//let apellido = "Miagusuku";
let apellido = new String('Miagusuku');

apellido.length;

let notas = [15, 20, 17];

notas.length;

//Cuando tenemos un valor primitivo, este pasa por una especie de encapsulamiento, que añade propiedades a la variable

//JS para crear todo lo que usa, usa algo llamado prototipos prototypes
/*console.log(gato);

console.log(apellido);

console.log(notas);
*/

let productos = [
    {
        nombre: "Flores",
        precio: 40
    },
    {
        nombre: 'Chocolates',
        precio: 35
    },
    {
        nombre: 'Rolex',
        precio: 10000
    },
    {
        nombre: 'Cartera',
        precio: 1000
    }
];

//for <--- se considera programación imperativa - instrucciones claras

//los objetos de JS y sus propiedades y metodos
//programación declarativa, indicamos el resultado que esperamos

let productosCaros = productos.filter(function(regalo){
    return regalo.precio > 500;
})
console.log(productosCaros);

//map, forEach, reduce.