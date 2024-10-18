// 2. Crea una función que cuando el usuario clique el ratón se imprima un 1.
const esClickado = async () => {
	document.getElementById('resultado').textContent = '1';

	// Simular una operación asíncrona con await
	await new Promise((resolve) => setTimeout(resolve, 2000));

	document.getElementById('resultado').textContent = 'Operación Completada';
};

// Exporta la función para Jest
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = { esClickado };
} else {
	// Hacer la función accesible en el navegador
	window.esClickado = esClickado;
}
