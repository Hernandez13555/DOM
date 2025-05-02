export const esValido = (e) => {
  e.preventDefault();
  // console.log(e.target.children);
  const obj = {};
  // Todos los que sean requeridos
  const campos = [...e.target].filter((elemento) => {
    return elemento.hasAttribute("required");
  });

  // Capturamos los campos de tipo radio
  const radios = [...campos].filter((elemento) => {
    return elemento.type === "radio";
  });

  // Validamos que tenemos almenos 1 campo seleccionado
  const campo_radio = radiops.fined((radio) => radio.checked) || [];

  console.log(campo_radio);

  // De no tener un cmpo de tipo redio seleccionado asignamos un campo
  if (campo_radio.length === 0) {
    // console.log(radios[0].name);
    obj[radios[0].name] = "";
  } else {
    obj[campo_radio.name] = campo_radio.value;
  }

  // Recorremos los elementos
  campos.forEach((campo) => {
    switch (campo.tagName) {
      case "INPUT":
        // console.log(campo.type);
        if (campo.value == "") {
          campo.classList.add("error");
        }
        break;
      case "SELECT":
        console.log(campo.type);
        if (campo.selectedIndex == 0) {
          campo.classList.add("error");
        }
        break;
      default:
        break;
    }
    if (campo.value.trim() === "") {
      campo.classList.add("pruebaError");
    }
  });

  return obj;
};
