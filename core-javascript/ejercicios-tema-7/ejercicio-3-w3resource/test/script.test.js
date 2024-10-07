const { is_array, cloneArray, getFirstElement, getLastElement } = require('../script');

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

test('getFirstElement works correctly', () => {
	expect(getFirstElement([7, 9, 0, -2])).toEqual(7);
	expect(getFirstElement([], 3)).toEqual([]);
	expect(getFirstElement([7, 9, 0, -2], 3)).toEqual([7, 9, 0]);
	expect(getFirstElement([7, 9, 0, -2], 6)).toEqual([7, 9, 0, -2]);
	expect(getFirstElement([7, 9, 0, -2], -3)).toEqual([]);
});

test('getLastElement works correctly', () => {
	expect(getLastElement([7, 9, 0, -2])).toEqual(-2);
	expect(getLastElement([], 3)).toEqual([]);
	expect(getLastElement([7, 9, 0, -2], 3)).toEqual([9, 0, -2]);
	expect(getLastElement([7, 9, 0, -2], 6)).toEqual([7, 9, 0, -2]);
});
