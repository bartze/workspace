const { juntarSets } = require('../juntarSets');

describe('juntarSets', () => {
	it('should return the union of two sets without duplicates', () => {
		const setA = new Set([1, 2, 3, 4]);
		const setB = new Set([3, 4, 5, 6]);
		const expected = new Set([1, 2, 3, 4, 5, 6]);

		const result = juntarSets(setA, setB);
		expect(result).toEqual(expected);
	});

	it('should return a set that includes all unique elements', () => {
		const setA = new Set([1, 1, 2, 3]);
		const setB = new Set([2, 3, 3, 4]);
		const expected = new Set([1, 2, 3, 4]);

		const result = juntarSets(setA, setB);
		expect(result).toEqual(expected);
	});

	it('should handle empty sets correctly', () => {
		const setA = new Set();
		const setB = new Set();
		const expected = new Set();

		const result = juntarSets(setA, setB);
		expect(result).toEqual(expected);
	});

	it('should return the non-empty set when one set is empty', () => {
		const setA = new Set([1, 2, 3]);
		const setB = new Set();
		const expected = new Set([1, 2, 3]);

		const result = juntarSets(setA, setB);
		expect(result).toEqual(expected);
	});

	it('should return the union when both sets are equal', () => {
		const setA = new Set([1, 2, 3]);
		const setB = new Set([1, 2, 3]);
		const expected = new Set([1, 2, 3]);

		const result = juntarSets(setA, setB);
		expect(result).toEqual(expected);
	});
});
