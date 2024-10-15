// 5. Crea una función que borre todos los elementos no deseados de un
// array (undefined, false, strings vacías y nulls)
// i. Al menos prueba con estas tres listas:
// let list_test_1 = [5, 4, 3, null, 2, "", 1];
// let list_test_2 = ["", false, undefined];
// let list_test_3 = [5, 4, 1, undefined];

const borrarNoDeseados = (array) => {
  const arraySinNoDeseados = array.filter(
    (item) => item !== undefined && item !== false && item !== '' && item !== null,
  );
  return arraySinNoDeseados;
};

module.exports = { borrarNoDeseados };
