const { valoresEntreRangos } = require('../rangos');

describe('valoresEntreRangos', () => {
	it('should return values within the specified range', () => {
		const set = new Set([3, 1, 4, 7, 5, 9, 2, 6, 8]);
		const min = 2;
		const max = 6;
		const expected = new Set([3, 4, 5, 2, 6]);

		const result = valoresEntreRangos(set, max, min);
		expect(result).toEqual(expected);
	});

	it('should return an empty set if no values are within the range', () => {
		const set = new Set([1, 2, 3]);
		const min = 4;
		const max = 6;
		const expected = new Set();

		const result = valoresEntreRangos(set, max, min);
		expect(result).toEqual(expected);
	});

	it('should return the entire set if all values are within the range', () => {
		const set = new Set([3, 4, 5]);
		const min = 1;
		const max = 6;
		const expected = new Set([3, 4, 5]);

		const result = valoresEntreRangos(set, max, min);
		expect(result).toEqual(expected);
	});

	it('should handle an empty set correctly', () => {
		const set = new Set();
		const min = 2;
		const max = 6;
		const expected = new Set();

		const result = valoresEntreRangos(set, min, max);
		expect(result).toEqual(expected);
	});

	it('should handle sets with negative values', () => {
		const set = new Set([-3, -1, 0, 1, 2, 3, 4]);
		const min = -1;
		const max = 2;
		const expected = new Set([-1, 0, 1, 2]);

		const result = valoresEntreRangos(set, max, min);
		expect(result).toEqual(expected);
	});
});
