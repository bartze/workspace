// 7. Crea un programa que pida un valor de tamaño de array por input y
// después el número del cuál se van a obtener múltiplos y devuelva un
// array con el tamaño puesto de múltiplos de ese número (2, 4 => [4, 8])

const obtenerMultiplos = (cantidad, numero) => {
	const multiplos = [];
	for (let i = 1; i <= cantidad; i++) {
		multiplos.push(numero * i);
	}
	return multiplos;
};

// Exporta la función para Jest
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = { obtenerMultiplos };
} else {
	// Hacer la función accesible en el navegador
	window.obtenerMultiplos = obtenerMultiplos;
}
