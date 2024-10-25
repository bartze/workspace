// 5. Crea una función para encontrar el valor máximo y el valor mínimo de
// un set

const maxMinSet = (set) => {
	if (set.size === 0) {
		return { max: null, min: null };
	}
	let max = -Infinity;
	let min = Infinity;

	for (let value of set) {
		if (value > max) {
			max = value;
		}
		if (value < min) {
			min = value;
		}
	}
	return { max, min };
};

const setA = new Set([3, 1, 4, 5, 9, 2, 6, 7]);
const result = maxMinSet(setA);
console.log(result);

const setB = new Set([-3, -1, -4, -8, -5, -9, -2, -6, -7]);
const resultTwo = maxMinSet(setB);
console.log(resultTwo);

module.exports = { maxMinSet };
