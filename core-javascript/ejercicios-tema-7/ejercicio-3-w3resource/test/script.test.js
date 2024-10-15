// const { is_array, cloneArray, getFirstElement, getLastElement } = require('../script');
const script = require('../script');

test('is_array correctly identifies arrays', () => {
  expect(script.is_array([1, 2, 3])).toBe(true);
  expect(script.is_array('hello')).toBe(false);
  expect(script.is_array({ key: 'value' })).toBe(false);
  expect(script.is_array(123)).toBe(false);
  expect(script.is_array(null)).toBe(false);
  expect(script.is_array(undefined)).toBe(false);
  expect(script.is_array([])).toBe(true);
});

test('array clone correctly', () => {
  expect(script.cloneArray([1, 2, 4, 0])).toEqual([1, 2, 4, 0]);
  expect(script.cloneArray([1, 2, [4, 0]])).toEqual([1, 2, [4, 0]]);
});

test('getFirstElement works correctly', () => {
  expect(script.getFirstElement([7, 9, 0, -2])).toEqual(7);
  expect(script.getFirstElement([], 3)).toEqual([]);
  expect(script.getFirstElement([7, 9, 0, -2], 3)).toEqual([7, 9, 0]);
  expect(script.getFirstElement([7, 9, 0, -2], 6)).toEqual([7, 9, 0, -2]);
  expect(script.getFirstElement([7, 9, 0, -2], -3)).toEqual([]);
});

test('getLastElement works correctly', () => {
  expect(script.getLastElement([7, 9, 0, -2])).toEqual(-2);
  expect(script.getLastElement([], 3)).toEqual([]);
  expect(script.getLastElement([7, 9, 0, -2], 3)).toEqual([9, 0, -2]);
  expect(script.getLastElement([7, 9, 0, -2], 6)).toEqual([7, 9, 0, -2]);
});
