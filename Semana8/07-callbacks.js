//ciudadano de primera clase, que tenga una referencia a cualquier cosa

const saludar = () => "Hola";
const adios = () => "Adiós";

//Podre pasar como parámetro una función a otra función
const socializar = (funcion) => {
    return funcion()
}
console.log(socializar(saludar));

console.log(socializar(adios));

//Tarea Asincrona
//Pedir a alguien tomar un café, que nmos diga no lo se dejame revisar mi agenda y no ostros esperarle el telefono sin colgfarle, la tarea asincrona es revisar la agenda.

console.log("1. Hola");

//setTimeout(funcion, tiempo en ms)
/*setTimeout(() => {
    console.log("2. Como estas?");
}, 2000)

console.log("3. Bye");
*/

const terminaSaludo = (callback) => {
    setTimeout(() => {
        console.log("2. Como estas?");
        //después va a ejecutar el parámetro que reciba
        callback();
    }, 2000)
    
}

terminaSaludo(() =>{
    console.log("3. Bye");
})
//Eventos, es una tarea asincrona, cuando podemos un evento no se queda colgado, congelado, podemos seguir usando la aplicacion
//Yo no se cuando va a ocurrir el evento
//el ejemplo del café
//addEventListener('click', function(){ })
