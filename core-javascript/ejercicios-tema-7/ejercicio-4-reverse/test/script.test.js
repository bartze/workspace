const { obtenerArrayInverso } = require('../script');

test('invierte un array de números', () => {
	expect(obtenerArrayInverso([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
});

test('invierte un array de strings', () => {
	expect(obtenerArrayInverso(['a', 'b', 'c'])).toEqual(['c', 'b', 'a']);
});

test('invierte un array vacío', () => {
	expect(obtenerArrayInverso([])).toEqual([]);
});

test('invierte un array con un solo elemento', () => {
	expect(obtenerArrayInverso([1])).toEqual([1]);
});
