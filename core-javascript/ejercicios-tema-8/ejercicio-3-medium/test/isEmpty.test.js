const { isEmpty } = require('../isEmpty');

describe('isEmpty', () => {
	it('should return true for an empty object', () => {
		expect(isEmpty({})).toBe(true);
	});
	it('should return true for an object with all empty values', () => {
		expect(isEmpty({ a: undefined, b: null, c: NaN, d: '' })).toBe(true);
	});
	it('should return false for an object with at least one non-empty value', () => {
		expect(isEmpty({ a: 1, b: undefined })).toBe(false);
	});
	it('should return false for an object with only one non-empty value', () => {
		expect(isEmpty({ a: 1 })).toBe(false);
	});
	it('should return true for an object with all properties set to undefined', () => {
		expect(isEmpty({ a: undefined, b: undefined })).toBe(true);
	});
	it('should return false for an object with an empty string and a non-empty value', () => {
		expect(isEmpty({ a: '', b: 'text' })).toBe(false);
	});
	it('should return false for an object with NaN and a non-empty value', () => {
		expect(isEmpty({ a: NaN, b: 123 })).toBe(false);
	});
	it('should return true for an object with all values set to false', () => {
		expect(isEmpty({ a: false, b: false })).toBe(false);
	});
});
