// 8. Escribir una función que, dado un string, retorne la longitud de la última
// palabra. Se considera que las palabras están separadas por uno o más
// espacios. También podría haber espacios al principio o al final del string
// pasado por parámetro

// Lógica de negocio: función pura que calcula la longitud de la última palabra
const calcularLongitudUltimaPalabra = (frase) => {
  frase = frase.trim();
  const palabras = frase.split(/\s+/);
  return palabras.length > 0 ? palabras[palabras.length - 1].length : 0;
};

// Función que interactúa con el DOM
const mostrarResultado = () => {
  const frase = document.getElementById('frase').value; // Obtener la frase del input
  const resultado = calcularLongitudUltimaPalabra(frase); // Llamar a la función de cálculo

  // Mostrar resultado en el HTML
  document.getElementById('resultado').textContent = resultado;
};

// Hacer que la función sea accesible globalmente
window.mostrarResultado = mostrarResultado;
module.exports = calcularLongitudUltimaPalabra;
