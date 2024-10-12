const { isPlainObject } = require('../verificarObjeto');

describe('isPlainObject', () => {
	it('should return true if it is a plain object', () => {
		expect(isPlainObject({ a: 1 })).toBe(true);
	});
	it('should return false if it is an array', () => {
		expect(isPlainObject([1, 2, 3])).toBe(false);
	});
	it('should return false if it is a null', () => {
		expect(isPlainObject(null)).toBe(false);
	});
});
