const mostrarMultiplos = () => {
	const cantidad = parseInt(document.getElementById('cantidad').value);
	const numero = parseInt(document.getElementById('numero').value);
	const multiplos = obtenerMultiplos(cantidad, numero);
	document.getElementById('resultado').textContent = JSON.stringify(multiplos);
};

// Hacer la función accesible en el navegador
window.mostrarMultiplos = mostrarMultiplos;
