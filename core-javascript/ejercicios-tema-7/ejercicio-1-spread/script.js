// 1. Cuando defines un array copiándolo con el método spread en otro array,
// ¿modificar el segundo modifica el primero? ¿modificar el primero
// modifica el segundo?

let array = [1, 2, 3, 4, 5];
let newArray = [...array];

// console.log(`array sin modificar ${array}`);
// console.log(`newArray sin modificar ${newArray}`);

// newArray.push(6, 7);

// console.log(`array después de modificar newArray ${array}`);
// console.log(`newArray después de modificar newArray ${newArray}`);

// array.push(8, 9, 10);

// console.log(`array después de modificar array ${array}`);
// console.log(`newArray después de modificar array ${newArray}`);

module.exports = { array, newArray };
