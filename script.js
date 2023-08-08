const inputNuevoNombre = document.querySelector("input");
const h4NombreUsuario = document.querySelector("#nombre-usuario");

h4NombreUsuario.innerHTML = "Erick";

/**
 * Genera un numero aleatorio entero entre 0 y menor al max
 * @param {Number} max rango maximo del numero aleatorio
 * @returns un numero aleatorio entero
 */
function getNumeroAleatorioEntero(max) {
    return Math.floor(Math.random() * max);
}


/**
 * Genera un numero aleatorio en el rango definido
 * @param {Number} min del rango de numeros aleatorios a generar
 * @param {Number} max del rango de numeros aleatorios a generar
 * @returns un numero aleatorio entre el min y menor al max
 */
function getNumeroEnRangoDefinido(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

function cambiarNombreUsuario() {
    h4NombreUsuario.innerHTML = inputNuevoNombre.value;
    document.querySelector("body").innerHTML += `
        <h1>${getNumeroEnRangoDefinido(3,9)}</h1>
    `;
}


