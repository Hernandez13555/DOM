import { esValido } from "./modulo.js";
//Variables
const formulario = document.querySelector("form");
const nombre = document.querySelector("[name=nombre]");
const apellido = document.querySelector("[name=apellido]");
const telefono = document.querySelector("[name=telefono]");
const documento = document.querySelector("[name=documento]");
const usuario = document.querySelector("[name=usuario]");
const contrasena = document.querySelector("[name=contrasena]");
const politicas = document.querySelector("[name=politicas]");
const boton = document.querySelector("#btn_validar");

const usuarios = document.querySelector("#usuarios");

const acepta = (e) => {
  if (!politicas.checked) {
    boton.setAttribute("disabled", "");
  } else {
    boton.removeAttribute("disabled");
  }
};

// const isValid = (e) => {
//   let data = esValido(e);
//   console.log(data);
// };

//Eventos

addEventListener("DOMContentLoaded", acepta);
politicas.addEventListener("change", acepta);
formulario.addEventListener("submit", esValido);
// formulario.addEventListener("submit", validar);
// nombre.addEventListener("keydown", letras);
// apellido.addEventListener("keydown", letras);
// telefono.addEventListener("keydown", numeros);
// documento.addEventListener("keydown", numeros);
// nombre.addEventListener("blur", limpiar);
// apellido.addEventListener("blur", limpiar);
// telefono.addEventListener("blur", limpiar);
// documento.addEventListener("blur", limpiar);
// usuario.addEventListener("blur", limpiar);
// contrasena.addEventListener("blur", limpiar);
