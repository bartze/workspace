const calcularLongitudUltimaPalabra = require('../script.js');

test('debería retornar la longitud de una sola palabra', () => {
    expect(calcularLongitudUltimaPalabra("Hola")).toBe(4);
});

test('debería retornar la longitud de una palabra ignorando espacios', () => {
    expect(calcularLongitudUltimaPalabra("   Hola   ")).toBe(4);
});

test('debería retornar la longitud de la última palabra en una frase', () => {
    expect(calcularLongitudUltimaPalabra("   JavaScript es genial ")).toBe(6);
});

test('debería retornar 0 para cadena vacía o solo espacios', () => {
    expect(calcularLongitudUltimaPalabra(" ")).toBe(0);
});

