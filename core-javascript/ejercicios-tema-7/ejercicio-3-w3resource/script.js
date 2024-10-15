// 1. Write a JavaScript function to check whether an `input` is an array or not.
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true

const is_array = (check) => Array.isArray(check);

// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));

// 2. Write a JavaScript function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

const cloneArray = (array) => [...array];

// 3. Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []
const getFirstElement = (array, n = 1) => {
  if (n < 0) {
    return [];
  }
  return n === 1 ? array[0] : array.slice(0, n);
};

// 4. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]

const getLastElement = (array, n = 1) => {
  if (n <= 0) {
    return [];
  }
  return n === 1 ? array[array.length - 1] : array.slice(-n);
};
// console.log(getLastElement([7, 9, 0, -2]));
// console.log(getLastElement([7, 9, 0, -2], 3));
// console.log(getLastElement([7, 9, 0, -2], 6));

module.exports = {
  is_array,
  cloneArray,
  getFirstElement,
  getLastElement,
};
