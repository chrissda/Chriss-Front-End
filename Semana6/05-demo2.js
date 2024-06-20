//Mi farma necesita un módulo para indicar que un cliente tiene descuento.

let edad = prompt("Cual es su edad?");
console.log("Edad: ", edad);

let numEdad = parseFloat(edad);
console.log("numEdad: ", numEdad);

if(numEdad >= 60){
    console.log("Tiene dscto");
    alert(`Su edad es ${edad}. Si tiene dscto.`);
}else{
    console.log("No tiene dscto");
    alert(`Su edad es ${edad}. No tiene dscto.`);
}