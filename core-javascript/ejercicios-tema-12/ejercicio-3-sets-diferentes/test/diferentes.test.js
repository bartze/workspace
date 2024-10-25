const { diferenciaSets } = require('../diferentes');

describe('diferenciaSets', () => {
	it('should return the difference of two sets', () => {
		const setA = new Set([1, 2, 3, 4]);
		const setB = new Set([3, 4, 5, 6]);
		const expected = new Set([1, 2, 5, 6]);

		const result = diferenciaSets(setA, setB);
		expect(result).toEqual(expected);
	});

	it('should return an empty set when there are no differences', () => {
		const setA = new Set([1, 2, 3]);
		const setB = new Set([1, 2, 3]);
		const expected = new Set();

		const result = diferenciaSets(setA, setB);
		expect(result).toEqual(expected);
	});

	it('should handle empty sets correctly', () => {
		const setA = new Set();
		const setB = new Set();
		const expected = new Set();

		const result = diferenciaSets(setA, setB);
		expect(result).toEqual(expected);
	});

	it('should return the difference when one set is empty', () => {
		const setA = new Set([1, 2, 3]);
		const setB = new Set();
		const expected = new Set([1, 2, 3]);

		const result = diferenciaSets(setA, setB);
		expect(result).toEqual(expected);
	});

	it('should return all elements when one set has all unique elements', () => {
		const setA = new Set([1, 2, 3]);
		const setB = new Set([4, 5, 6]);
		const expected = new Set([1, 2, 3, 4, 5, 6]);

		const result = diferenciaSets(setA, setB);
		expect(result).toEqual(expected);
	});
});
