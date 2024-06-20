/*const ejecutar = () => {
    return new Promise((resolve, reject) => {
        //resolve("Exito!!!")
        reject("Algo salio mal")
    })
}*/


//async await tmb me permite trabajar con tareas asincronas
//async function ejecutar()
const ejecutar = async() => {
//me va indicar que hay una tarea asincrona adentro
    //return "Exito!!!"; //resolve
    throw "Algo salio mal";
}
/*
ejecutar()
.then((resultado) => {//van bien
    console.log(resultado)
})
.catch((error) => {
    console.log(error)
})*/

const ejecuto = async() => {
    try{//NO ES SOLO PARA PROMESAS, PERMITE CAPTURAR ERRORES
        //si un codigo no les funciona y no ven errores prueben con 
        //trycatch
        //intenta prueba
        const resultado = await ejecutar(); //espere
        console.log(resultado);
    }catch(error){
        console.log(error);
    }
    
}
ejecuto();