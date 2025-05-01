export const esValido = (e) =>
{
  e.preventDefault()
  // console.log(e.target.children);
  const campos = [...e.target].filter((elemento) => {
    return elemento.hasAttribute('required');
  });
  campos.forEach(campo => {
      switch (campo.tagName) {
        case "INPUT":
          console.log(campo.type);
          break;
        case "SELECT":
          console.log(campo.type);
          break;
        default:
          break;
      }
    if (campo.value.trim() === "")
    {
      campo.classList.add("pruebaError");
    }
  })
}
