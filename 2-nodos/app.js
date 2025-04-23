let padre = document.querySelector(".container");
let node = document.createElement("h2");
node.textContent = "Titulo de segundo nivel";
let texto = document.createTextNode("Palabra para el nodo de texto");
padre.appendChild(node);
padre.appendChild(texto);

let lista = document.querySelector("#list");

let html = document.createElement("li");
let css = document.createElement("li");
let js = document.createElement("li");

html.classList.add("item");
css.classList.add("item");
js.classList.add("item");

html.textContent = "HTML";
css.textContent = "CSS";
js.textContent = "JS";

lista.append(html, css, js);

let card = document.querySelector(".card");
let lista_card = card.querySelector("#list");
let titulo = document.createElement("h2");
titulo.textContent = "Titulo de card";

card.insertBefore(titulo, lista_card);

let beforebegin = document.createElement("li");
beforebegin.classList.add("item", "before");
beforebegin.textContent = "Nuevo contenido ubicado antes de la lista ordenada";

let affterbegin = document.createElement("li");
affterbegin.classList.add("item");
affterbegin.textContent =
  "Nuevo contenido ubicado al inicio de la lista ordenada";

let beforeend = document.createElement("li");
beforeend.classList.add("item", "before");
beforeend.textContent = "Nuevo contenido ubicado al final de la lista ordenada";

let affterend = document.createElement("li");
affterend.classList.add("item");
affterend.textContent = "Nuevo contenido ubicado despues de la lista ordenada";

lista_card.insertAdjacentElement("beforebegin", beforebegin); //1
lista_card.insertAdjacentElement("beforeend", beforeend); //3
lista_card.insertAdjacentElement("afterbegin", affterbegin); //2
lista_card.insertAdjacentElement("afterend", affterend); //4

let card_dias = document.querySelector("#dias");

const dias = [
  {
    id: 1,
    nombre: "Lunes",
    img: "https://picsum.photos/448/350",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 2,
    nombre: "Martes",
    img: "https://picsum.photos/448/350",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 3,
    nombre: "Miércoles",
    img: "https://picsum.photos/448/350",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 4,
    nombre: "Jueves",
    img: "https://picsum.photos/448/350",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 5,
    nombre: "Viernes",
    img: "https://picsum.photos/448/350",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 6,
    nombre: "Sábado",
    img: "https://picsum.photos/448/350",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    id: 7,
    nombre: "Domingo",
    img: "https://picsum.photos/448/350",
    parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
];

dias.map(({ nombre, img, parrafo }) => {
  // Crear los elementos
  let card = document.createElement("div");
  let card_header = document.createElement("div");
  let card_titulo = document.createElement("h2");
  let card_body = document.createElement("div");
  let imagen = document.createElement("img");
  let p = document.createElement("p");

  // Agregar los estilos
  card.classList.add("card");
  card_header.classList.add("card_header");
  card_titulo.classList.add("card_titulo");
  card_body.classList.add("card_body");
  imagen.classList.add("card_img");
  p.classList.add("card_paragraph");

  // Administra los atributos
  imagen.setAttribute("src", img);
  imagen.setAttribute("alt", nombre);

  // Unir los elementos
  card_titulo.textContent = nombre;
  p.textContent = parrafo;
  card_body.append(imagen);
  card_body.append(p);
  card_header.append(card_titulo);
  card.append(card_header);
  card.append(card_body);
  card_dias.append(card);
});
