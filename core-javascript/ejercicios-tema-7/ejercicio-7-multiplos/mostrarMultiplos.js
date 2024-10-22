const multiplos = require('./multiplos'); // Importar la función obtenerMultiplos

const mostrarMultiplos = () => {
	console.log('here I am');
	const cantidad = parseInt(document.getElementById('cantidad').value);
	const numero = parseInt(document.getElementById('numero').value);
	console.log(document.getElementById('numero').value);
	console.log(document.getElementById('cantidad').value);
	const result = multiplos.obtenerMultiplos(cantidad, numero);
	document.getElementById('Resultado').textContent = JSON.stringify(result);
};

// Hacer la función accesible en el navegador
window.mostrarMultiplos = mostrarMultiplos;
