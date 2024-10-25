// 1. Crea una función que sea capaz de coger dos sets y ver qué valores están
// en ambos.
function valoresComunesSets(set1, set2) {
	const interseccion = new Set([...set1].filter((valor) => set2.has(valor)));
	return interseccion;
}

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

const resultado = valoresComunesSets(setA, setB);
console.log(resultado);

module.exports = { valoresComunesSets };
