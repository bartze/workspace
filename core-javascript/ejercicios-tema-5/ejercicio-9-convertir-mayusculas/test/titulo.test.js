const titulo = require('../titulo.js');

test('debería retornar la misma frase sin espacios al principio y al final', () => {
	expect(titulo('  Hola  ')).toBe('Hola');
});

test('debería retornar una cadena', () => {
	expect(typeof titulo('Hola')).toBe('string');
});

test('debería retornar una cadena vacía si se le pasa solo espacios', () => {
	expect(titulo('    ')).toBe('');
});

test('debería retornar una cadena vacía si se le pasa una cadena vacía', () => {
	expect(titulo('')).toBe('');
});

test('debería capitalizar la primera letra de una sola palabra', () => {
	expect(titulo('hola')).toBe('Hola');
});

test('debería capitalizar la primera letra de cada palabra en una frase', () => {
	expect(titulo('hola mundo')).toBe('Hola Mundo');
});

test('debería dejar caracteres no alfabéticos inalterados', () => {
	expect(titulo('hola, mundo!')).toBe('Hola, Mundo!');
});
