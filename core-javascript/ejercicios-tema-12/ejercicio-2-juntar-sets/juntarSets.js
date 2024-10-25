// 2. Crea una función que sea capaz de coger dos sets y juntarlos en un tercer
// set, ¿habrá valores repetidos?
function juntarSets(set1, set2) {
	const union = new Set([...set1, ...set2]);
	return union;
}
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

const resultado = juntarSets(setA, setB);
console.log(resultado);

module.exports = { juntarSets };
