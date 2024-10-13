// 9. Intersection - Write a method that finds shallow intersections of objects
//  Task description: Write a method that finds shallow intersections of objects
//  Expected Result: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }
//  @param {Object<string | number>} firstObj - Object with values of primitive data types
//  @param {Object<string | number>} secondObj - Object with values of primitive data types
//  @returns {Object}
// export const intersection = (firstObject, secondObject) => {
//   throw new Error(`put your solution here ${firstObject}, ${secondObject}`);
// };
// const data = { a: 1, b: 2 };
// const data2 = { c: 1, b: 2 };
// console.log(intersection(data, data2)); // { b: 2 }

const intersection = (firstObject, secondObject) => {
	const result = {};
	for (let prop in firstObject) {
		if (firstObject[prop] === secondObject[prop]) {
			result[prop] = firstObject[prop];
		}
	}
	return result;
};
const data = { a: 1, b: 2 };
const data2 = { c: 1, b: 2 };
console.log(intersection(data, data2)); // { b: 2 }
module.exports = { intersection };
