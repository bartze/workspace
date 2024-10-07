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

module.exports = { is_array };
