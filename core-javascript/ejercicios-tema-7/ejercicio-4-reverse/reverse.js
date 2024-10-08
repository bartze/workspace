// 4. Realiza la función reverse de un array sin utilizar .reverse.

const obtenerArrayInverso = (array) => {
	let arrayInverso = [];
	for (let i = array.length - 1; i >= 0; i--) {
		arrayInverso.push(array[i]);
	}
	return arrayInverso;
};

module.exports = { obtenerArrayInverso };
