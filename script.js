const inputNuevoNombre = document.querySelector("input");
const h4NombreUsuario = document.querySelector("#nombre-usuario");

h4NombreUsuario.innerHTML = "Erick";

function cambiarNombreUsuario() {
    h4NombreUsuario.innerHTML =  inputNuevoNombre.value;
}