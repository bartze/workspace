const { ejercicios, modificarEjercicios } = require('../indice');

test('assigning a value to an out-of-bounds index', () => {
  // Verificamos el valor inicial en el índice 1 y 26
  expect(ejercicios[1]).toBe('Core');
  expect(ejercicios[26]).toBeUndefined();

  // Llamamos a la función para modificar el array
  modificarEjercicios();

  // Verificamos que el array tiene el valor asignado en el índice 26
  expect(ejercicios[26]).toBe('Salir a correr');

  // Verificamos que los índices intermedios son undefined
  for (let i = 4; i < 26; i++) {
    expect(ejercicios[i]).toBeUndefined();
  }
});
