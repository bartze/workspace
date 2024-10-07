test('modifying the copied array does not affect the original array', () => {
	let array = [1, 2, 3, 4, 5];
	let newArray = [...array];

	newArray.push(6, 7);
	expect(array).toEqual([1, 2, 3, 4, 5]);
	expect(newArray).toEqual([1, 2, 3, 4, 5, 6, 7]);

	array.push(8, 9, 10);
	expect(array).toEqual([1, 2, 3, 4, 5, 8, 9, 10]);
	expect(newArray).toEqual([1, 2, 3, 4, 5, 6, 7]);
});
