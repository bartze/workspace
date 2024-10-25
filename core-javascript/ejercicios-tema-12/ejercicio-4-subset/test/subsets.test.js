const { isSubset } = require('../subset');

describe('isSubset', () => {
	it('should return true if the first set is a subset of the second set', () => {
		const setA = new Set([1, 2, 3]);
		const setB = new Set([1, 2, 3, 4, 5]);
		const result = isSubset(setA, setB);
		expect(result).toBe(true);
	});

	it('should return false if the first set is not a subset of the second set', () => {
		const setA = new Set([1, 2, 6]);
		const setB = new Set([1, 2, 3, 4, 5]);
		const result = isSubset(setA, setB);
		expect(result).toBe(false);
	});

	it('should return true if both sets are equal', () => {
		const setA = new Set([1, 2, 3]);
		const setB = new Set([1, 2, 3]);
		const result = isSubset(setA, setB);
		expect(result).toBe(true);
	});

	it('should return true if the first set is empty', () => {
		const setA = new Set();
		const setB = new Set([1, 2, 3, 4, 5]);
		const result = isSubset(setA, setB);
		expect(result).toBe(true);
	});

	it('should return false if the second set is empty and the first is not', () => {
		const setA = new Set([1, 2, 3]);
		const setB = new Set();
		const result = isSubset(setA, setB);
		expect(result).toBe(false);
	});
});
