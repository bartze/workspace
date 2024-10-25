// 6. Crea una función para obtener todos los valores de un set que estén
// entre dos rangos (numéricos)
const valoresEntreRangos = (set, max, min) => {
	const valoresFiltrados = new Set([...set].filter((valor) => valor <= max && valor >= min));
	return valoresFiltrados;
};

const setA = new Set([3, 1, 4, 7, 5, 9, 2, 6, 8]);
const max = 6;
const min = 2;

const resultado = valoresEntreRangos(setA, max, min);
console.log(resultado);

module.exports = { valoresEntreRangos };
