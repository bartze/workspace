// 5. IsEqual - Write a method that makes a shallow compare of two objects
//  Task description: Write a method that makes a shallow compare of two objects
//  Expected Result: True if objects are identical, false if objects are different ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
//  Task complexity: 2 of 5
//  @param {Object<string | number>} firstObj - Object with values of primitive data types
//  @param {Object<string | number>} secondObj - Object with values of primitive data types
//  @returns {boolean}
//
// export const isEqual = (firstObject, secondObject) => {
//   throw new Error(`put your solution here ${firstObject} ${secondObject}`);
// };
// const data = { a: 1, b: 1 };
// const data2 = { a: 1, b: 1 };
// const data3 = { a: 1, b: 2 };
// console.log(isEqual(data, data2)); // true
// console.log(isEqual(data, data3)); // false

const isEqual = (firstObject, secondObject) => {
	let firstKeys = Object.keys(firstObject);
	let secondKeys = Object.keys(secondObject);
	if (firstKeys.length !== secondKeys.length) {
		return false;
	}
	for (let key of firstKeys) {
		if (firstObject[key] !== secondObject[key]) {
			return false;
		}
	}
	return true;
};
const data = { a: 1, b: 1 };
const data2 = { a: 1, b: 1 };
const data3 = { a: 1, b: 2 };
console.log(isEqual(data, data2)); // true
console.log(isEqual(data, data3)); // false

module.exports = { isEqual };
