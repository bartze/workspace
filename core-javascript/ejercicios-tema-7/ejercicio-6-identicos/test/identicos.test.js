const { comprobarArraysIdenticos } = require('../identicos');

test('comprueba si dos arrays son identicos', () => {
  expect(comprobarArraysIdenticos([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])).toBe(true);
});
test('arrays con diferentes longitudes', () => {
  expect(comprobarArraysIdenticos([1, 2, 3], [1, 2, 3, 4])).toBe(false);
});

test('arrays con diferentes elementos', () => {
  expect(comprobarArraysIdenticos([1, 2, 3], [1, 2, 4])).toBe(false);
});

test('arrays vacíos', () => {
  expect(comprobarArraysIdenticos([], [])).toBe(true);
});
