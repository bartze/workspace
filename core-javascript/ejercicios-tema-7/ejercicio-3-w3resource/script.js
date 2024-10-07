// 1. Write a JavaScript function to check whether an `input` is an array or not.
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true

const is_array = (check) => {
	return Array.isArray(check);
};

// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));

// 2. Write a JavaScript function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

const cloneArray = (array) => {
	return [...array];
};

module.exports = { is_array, cloneArray };
