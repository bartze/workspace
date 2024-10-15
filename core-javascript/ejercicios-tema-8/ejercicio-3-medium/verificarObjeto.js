// Descripción de la tarea: Escribe un método que verifique que un argumento sea un objeto simple, no una matriz o nulo
// Resultado esperado: Verdadero si el objeto es simple, falso en caso contrario.
//    ({ a: 1 }) => verdadero,
//    ([1, 2, 3]) => falso
// Complejidad de la tarea: 1 de 5
// @param element - elemento a verificar
// @returns {boolean}
//
// export const isPlainObject = (element) => {
//     throw new Error (`ponga su solución aquí ${element}`);
//   };
//   constante datos = { a: 1 };
//   console.log(isPlainObject(datos)); // verdadero

const isPlainObject = (element) => {
  if (typeof element === 'object' && !Array.isArray(element) && element !== null) {
    return true;
  }
  return false;
};
// console.log(isPlainObject({ a: 1 }));
// console.log(isPlainObject([1, 2, 3]));
// console.log(isPlainObject(null));
module.exports = { isPlainObject };
