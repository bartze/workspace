// 4. IsEmpty - Write a method that makes a shallow check is object empty
// Task description: Write a method that makes a shallow check is object empty
// Expected Result: ({}) => true, ({ a: undefined }) => true,
//   ({ a: 1 }) => false
// Empty values: '', null, NaN, undefined
// Task complexity: 2 of 5
// @param {Object} object - Object with values of primitive data types
// @returns {boolean}
//
// export const isEmpty = (object) => {
//   throw new Error(`put your solution here ${object}`);
// };
// const data = { a: 1, b: undefined };
// const data2 = { a: undefined };
// console.log(isEmpty(data)); // false
// console.log(isEmpty(data2)); // true

const isEmpty = (object) => {
  for (const prop in object) {
    if (
      object[prop] !== undefined
			&& object[prop] !== null
			&& !Number.isNaN(object[prop])
			&& object[prop] !== ''
    ) {
      return false;
    }
  }
  return true;
};
const data = { a: 1, b: undefined };
const data2 = { a: undefined };
console.log(isEmpty(data)); // false
console.log(isEmpty(data2)); // true

module.exports = { isEmpty };
