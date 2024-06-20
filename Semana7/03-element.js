//createElement me permite crear objetos que representen elementos de HTML
/**
 * A) Si ya existe elemento a ulitizar
 * 1. utilizar el selector adecuado
 * 2. cambiar o ajustar propiedades
 */

/**
 * Podemos crear elementos directamente
 */

//document.createElement("La etiqueta del elemento a crearse");
let imagen = document.createElement("img");
console.log(imagen);

let novedades = document.querySelector('#novedades');
novedades.appendChild(imagen);

//element.setAtributo
imagen.setAttribute("src", "https://i.pinimg.com/originals/c4/11/d2/c411d20c92d62c9d7b4c70ffe4190b5b.jpg");

imagen.setAttribute("alt", "kyubi bb");
imagen.style.width = "400px";

//PROS: al ser un objeto element ya tengo la referencia incluso antes de que se agregue, es como a prueba de errores
//DESVENTAJA: ABSTRACTO

//Crear 1 solo elementoy y a ese elemento aniadirle HTML

let deportes = document.getElementById("deportes");

let divDeportes = document.createElement('div');

divDeportes.innerHTML = `
    <p id="parrafo1">Lorem ipsum</p>
    <p id="parrafo2">Lorem ipsum2</p>
    <button id="btn">Hazme click!!!</button>
`

//algo que podemos aplicar es querySelector, pero en el elemento
let boton = divDeportes.querySelector("#btn");
console.log(boton);

deportes.appendChild(divDeportes);

