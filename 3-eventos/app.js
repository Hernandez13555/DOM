//Variables
const formulario = document.querySelector("form");
const nombre = document.querySelector("[name=nombre]");
const apellido = document.querySelector("[name=apellido]");
const telefono = document.querySelector("[name=telefono]");
const documento = document.querySelector("[name=documento]");
const usuario = document.querySelector("[name=usuario]");
const contrasena = document.querySelector("[name=contrasena]");
// const btn = document.querySelector("#btn_validar");
//Funciones

const validar = (event) => {
  const valores = [nombre, apellido, telefono, documento, usuario, contrasena];
  const valoresString = [
    "nombre",
    "apellido",
    "telefono",
    "documento",
    "usuario",
    "contraseña",
  ];
  event.preventDefault();
  let mensaje = "Ingrese correctamente: ";
  for (let x = 0; x < valores.length; x++) {
    if (valores[x].value === "") {
      if (x > 0) mensaje += ", " + valoresString[x];
      else mensaje += " " + valoresString[x];
      valores[x].focus();
    }
  }
  if (mensaje != "Ingrese correctamente: ") alert(mensaje);
};
const letras = (event) => {
  const regexp = /^[a-zA-Z]$/;
  if (!regexp.test(event.key)) {
    event.preventDefault();
  }
};
const numeros = (event) => {
  if (!/^\d$/.test(event.key)) {
    event.preventDefault();
  }
  if (event.target.value.length >= 10) {
    event.preventDefault();
  }
};
//Eventos
formulario.addEventListener("submit", validar);
nombre.addEventListener("keydown", letras);
apellido.addEventListener("keydown", letras);
telefono.addEventListener("keydown", numeros);
documento.addEventListener("keydown", numeros);
