const { maxMinSet } = require('../maxMin');

describe('maxMinSet', () => {
	it('should return the minimum and maximum values of a non-empty set', () => {
		const set = new Set([3, 1, 4, 8, 5, 9, 2, 6, 7]);
		const expected = { max: 9, min: 1 };

		const result = maxMinSet(set);
		expect(result).toEqual(expected);
	});

	it('should return null for both min and max if the set is empty', () => {
		const set = new Set();
		const expected = { max: null, min: null };

		const result = maxMinSet(set);
		expect(result).toEqual(expected);
	});

	it('should return the same value for both min and max if the set has one element', () => {
		const set = new Set([42]);
		const expected = { max: 42, min: 42 };

		const result = maxMinSet(set);
		expect(result).toEqual(expected);
	});

	it('should handle sets with negative values', () => {
		const set = new Set([-3, -1, -4, -8, -5, -9, -2, -6, -7]);
		const expected = { max: -1, min: -9 };

		const result = maxMinSet(set);
		expect(result).toEqual(expected);
	});

	it('should handle sets with identical elements', () => {
		const set = new Set([1, 1, 1, 1]);
		const expected = { max: 1, min: 1 };

		const result = maxMinSet(set);
		expect(result).toEqual(expected);
	});
});
