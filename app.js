let win = window;
let dom = document;

let p = document.querySelector("main p");
let container = document.querySelectorAll(".container");
let api = document.querySelectorAll("#api");

let formulario = dom.forms;
let imagenes = dom.images;
let script = dom.scripts;

let lista = dom.querySelectorAll("ul.list > li.item");
let card = dom.querySelectorAll("div.cards > div.card");
let cards = dom.querySelector("div.cards");

console.log(cards.children);
console.log("padre", cards.parentElement.parentElement.parentElement);
console.log("hermano", cards.previousElementSibling.previousElementSibling);

let body = dom.querySelector("body");

console.log(body.previousElementSibling);
console.clear();

let elementos = document.querySelector("#elementos");

elementos.textContent = "Nuevo texto";
elementos.innerHTML = `<p> textos </p> <p> textos </p>`;

setTimeout(() => {
  body.classList.add("bg-red");
}, 6000);
console.log(body.classList);
