const { is_array, cloneArray } = require('../script');

test('is_array correctly identifies arrays', () => {
	expect(is_array([1, 2, 3])).toBe(true);
	expect(is_array('hello')).toBe(false);
	expect(is_array({ key: 'value' })).toBe(false);
	expect(is_array(123)).toBe(false);
	expect(is_array(null)).toBe(false);
	expect(is_array(undefined)).toBe(false);
	expect(is_array([])).toBe(true);
});

test('array clone correctly', () => {
	expect(cloneArray([1, 2, 4, 0])).toEqual([1, 2, 4, 0]);
	expect(cloneArray([1, 2, [4, 0]])).toEqual([1, 2, [4, 0]]);
});
