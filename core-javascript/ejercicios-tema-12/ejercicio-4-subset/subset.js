// 4. Crea una función para ver si un set es un subset de otro.
function isSubset(subset, superset) {
	for (let elem of subset) {
		if (!superset.has(elem)) {
			return false;
		}
	}
	return true;
}

const setA = new Set([1, 2, 3]);
const setB = new Set([1, 2, 3, 4, 5]);

const resultado = isSubset(setA, setB);
console.log(resultado);

const setC = new Set([1, 2, 6]);
const resultado2 = isSubset(setC, setB);
console.log(resultado2);

module.exports = { isSubset };
