const { valoresComunesSets } = require('../valoresSets');

describe('valoresComunesSets', () => {
	it('should return the intersection of two sets', () => {
		const setA = new Set([1, 2, 3, 4]);
		const setB = new Set([3, 4, 5, 6]);
		const expected = new Set([3, 4]);

		const result = valoresComunesSets(setA, setB);
		expect(result).toEqual(expected);
	});

	it('should return an empty set when there is no intersection', () => {
		const setA = new Set([1, 2]);
		const setB = new Set([3, 4]);
		const expected = new Set();

		const result = valoresComunesSets(setA, setB);
		expect(result).toEqual(expected);
	});

	it('should handle empty sets', () => {
		const setA = new Set();
		const setB = new Set();
		const expected = new Set();

		const result = valoresComunesSets(setA, setB);
		expect(result).toEqual(expected);
	});

	it('should return the intersection when one set is empty', () => {
		const setA = new Set([1, 2, 3]);
		const setB = new Set();
		const expected = new Set();

		const result = valoresComunesSets(setA, setB);
		expect(result).toEqual(expected);
	});

	it('should return the intersection when both sets have the same elements', () => {
		const setA = new Set([1, 2, 3]);
		const setB = new Set([1, 2, 3]);
		const expected = new Set([1, 2, 3]);

		const result = valoresComunesSets(setA, setB);
		expect(result).toEqual(expected);
	});
});
