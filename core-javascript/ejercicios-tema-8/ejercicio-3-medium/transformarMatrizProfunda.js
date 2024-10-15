// Descripción de la tarea: Escribe un método que devuelva una matriz profunda como [[clave, valor]]
// Resultado esperado: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
// Complejidad de la tarea: 1 de 5
// @param {Object} objeto : cualquier objeto para transformar en una matriz
// @returns {Array} : una matriz profunda
//
// export const makePairs = (object) => {
//     throw new Error (`ponga su solución aquí ${object}`);
//   };
//   constante datos = { a: 1, b: 2 };
//   console.log(makePairs(datos)); // [['a', 1], ['b', 2]]

const makePairs = (object) => {
  if (typeof object !== 'object' || object === null) {
    return object;
  }
  if (Array.isArray(object)) {
    return object.map(makePairs);
  }
  return Object.keys(object).map((key) => [key, makePairs(object[key])]);
};
console.log(makePairs({ a: 1, b: 2 })); // [['a', 1], ['b', 2]]
module.exports = { makePairs };
