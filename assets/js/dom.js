// Se hace referencia al elemento dentro de un HTML
// Para seleccionar una clase se usa .
// Para seleccionar un id usamos #
let subtitle = document.querySelector(#"Subtitle");
let parrafo = document.querySelector("#parrafo");

console.log(subtitle);

// Con textContent podemos acceder al valor del elemento HTML
//Tambien podemos cambiar el valor asignado a un nuevo valor
console.log(subtitle.textContent);

subtitle.textContent = "Nuevo valor";

//classList.add("mi-clase") lo utilizamos para agregar clases al elemento
subtitle.classList.add("red");

subtitle.classList.add("red");

suubtitle.classList.remove("red");

// subtitle.textContent = "Subtitulo";

const animales = ["perro", "gato", "iguana", "murcielago", "ballena", "raton", "serpiente"];
const list = document.querySelectos("#list");

animales.forEach(funcion(animal) {
       let item = document.createElement("li");
       item.textContent = animal;

       list.appendChild(item);

} );
