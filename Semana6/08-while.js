// while - mientras, mientras tanto

//while(expresion){
// mientras esa expresión sea válida, se ejecutará lo que esta dentro de las llaves
//}

/*let count = 0;

while(count < 10){
    console.log(`Contando!! ${count}`);
    //count = count + 1;
    count++;
}

console.log("Fin!");
*/

let logueado = true;
while(logueado === true){
    console.log("Trabajando...");
    logueado = confirm("Desea cerrar sesión??");
}
