const btnAnimals = document.querySelector("#animals");
const btnComputers = document.querySelector("#computer");
const btnPeople = document.querySelector("#people");

const listAnimals = ["Pez","jaguar","serpiente","perro","rana","murcielago","delfin","tortuga"];
const listComputers = ["Asus","lenovo","hp","toshiba","huawei","vaio","apple"];
const listPeople = ["Sharon","Carlos","Yanni","Tania","Pedro","Andrea","Sofia","Alex","Marina","Laura"];


const btnAnimals = document.querySelector("#animals");
const btnComputers = document.querySelector("#computer");
const btnPeople = document.querySelector("#people");
const list = document.querySelector("#list");


function displayList(list) {
    list.forEach(L => {
        const item = document.createElement("li");
        item.textContent = L;
        list.appendChild(item);
    });
})




btnAnimals.addEventListener("click", function () {
    listAnimals.forEach(animal => {
        const li = document.createElement("li");
        // <li></li>
        li.textContent = animal;
        //li.classList.add("mi-clase");//
        //<li>Animal<li/>
        list.appendChild(li);
    });
})