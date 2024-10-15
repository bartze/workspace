const { convertirTitulo } = require('../convertirTitulo.js');

test('debería retornar la misma frase sin espacios al principio y al final', () => {
  expect(convertirTitulo('  Hola  ')).toBe('Hola');
});

test('debería retornar una cadena', () => {
  expect(typeof convertirTitulo('Hola')).toBe('string');
});

test('debería retornar una cadena vacía si se le pasa solo espacios', () => {
  expect(convertirTitulo('    ')).toBe('');
});

test('debería retornar una cadena vacía si se le pasa una cadena vacía', () => {
  expect(convertirTitulo('')).toBe('');
});

test('debería capitalizar la primera letra de una sola palabra', () => {
  expect(convertirTitulo('hola')).toBe('Hola');
});

test('debería capitalizar la primera letra de cada palabra en una frase', () => {
  expect(convertirTitulo('hola mundo')).toBe('Hola Mundo');
});

test('debería dejar caracteres no alfabéticos inalterados', () => {
  expect(convertirTitulo('hola, mundo!')).toBe('Hola, Mundo!');
});
