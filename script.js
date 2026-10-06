// Este archivo se carga en el <head> con "defer",
// así que el HTML ya existe cuando este código se ejecuta.

const boton = document.getElementById("btn-saludo");
const mensaje = document.getElementById("mensaje");
const anio = document.getElementById("anio");

// Año actual en el pie de página
anio.textContent = new Date().getFullYear();

// Contador de saludos
let saludos = 0;

boton.addEventListener("click", () => {
  saludos++;
  // Práctica: cambia este texto, haz commit y push, y mira el cambio en tu URL
  mensaje.textContent = `¡Gracias por saludar! Llevas ${saludos} saludo(s).`;
});
