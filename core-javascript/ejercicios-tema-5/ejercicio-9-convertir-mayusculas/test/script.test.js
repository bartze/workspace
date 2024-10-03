const titulo = require('../script.js');

test('debería retornar la misma frase sin espacios al principio y al final', () => {
    expect(titulo("  Hola  ")).toBe("Hola");
});

test('debería retornar una cadena', () => {
    expect(typeof titulo("Hola")).toBe("string");
});

test('debería retornar una cadena vacía si se le pasa solo espacios', () => {
    expect(titulo("    ")).toBe("");
});

test('debería retornar una cadena vacía si se le pasa una cadena vacía', () => {
    expect(titulo("")).toBe("");
});