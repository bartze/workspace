const { borrarNoDeseados } = require('../borrar');

test('deberia borrar los elementos no deseados', () => {
  expect(borrarNoDeseados([5, 4, 3, null, 2, '', 1])).toEqual([5, 4, 3, 2, 1]);
  expect(borrarNoDeseados(['', false, undefined])).toEqual([]);
  expect(borrarNoDeseados([5, 4, 1, undefined])).toEqual([5, 4, 1]);
});
