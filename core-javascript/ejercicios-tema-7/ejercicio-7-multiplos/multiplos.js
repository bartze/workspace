// 7. Crea un programa que pida un valor de tamaño de array por input y
// después el número del cuál se van a obtener múltiplos y devuelva un
// array con el tamaño puesto de múltiplos de ese número (2, 4 => [4, 8])

const obtenerMultiplos = (cantidad, numero) => {
	let multiplos = [];
	for (let i = 1; i <= cantidad; i++) {
		multiplos.push(numero * i);
	}
	return multiplos;
};
// console.log(obtenerMultiplos(10, 3));
module.exports = { obtenerMultiplos };
