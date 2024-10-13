const { intersection } = require('../intersection');

describe('Intersection Function', () => {
	it('should return the correct intersection of two objects', () => {
		const data = { a: 1, b: 2 };
		const data2 = { c: 1, b: 2 };
		const result = intersection(data, data2);
		expect(result).toEqual({ b: 2 });
	});

	it('should return an empty object if there are no intersections', () => {
		const data = { a: 1, b: 2 };
		const data2 = { c: 3, d: 4 };
		const result = intersection(data, data2);
		expect(result).toEqual({});
	});

	it('should handle empty objects', () => {
		const data = {};
		const data2 = { c: 1, b: 2 };
		const result = intersection(data, data2);
		expect(result).toEqual({});
	});

	it('should handle objects with no matching values', () => {
		const data = { a: 1, b: 2, c: 3 };
		const data2 = { d: 4, e: 5, f: 6 };
		const result = intersection(data, data2);
		expect(result).toEqual({});
	});

	it('should return the correct intersection for multiple matches', () => {
		const data = { a: 1, b: 2, c: 3 };
		const data2 = { a: 1, b: 2, d: 4 };
		const result = intersection(data, data2);
		expect(result).toEqual({ a: 1, b: 2 });
	});
});
