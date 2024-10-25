// 3. Crea una función que saque un set con los valores diferentes entre dos
// sets dados.
function diferenciaSets(set1, set2) {
	const difference = new Set([...set1].filter((value) => !set2.has(value)));
	for (const value of set2) {
		if (!set1.has(value)) {
			difference.add(value);
		}
	}
	return difference;
}

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

const resultado = diferenciaSets(setA, setB);
console.log(resultado);

module.exports = { diferenciaSets };
