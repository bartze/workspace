const { isEqual } = require('../isEqual');

describe('isEqual', () => {
  it('should return true for objects with identical properties and values', () => {
    const data = { a: 1, b: 1 };
    const data2 = { a: 1, b: 1 };
    expect(isEqual(data, data2)).toBe(true);
  });

  it('should return false for objects with different properties', () => {
    const data = { a: 1, b: 1 };
    const data2 = { a: 1, c: 1 };
    expect(isEqual(data, data2)).toBe(false);
  });

  it('should return false for objects with different values for the same properties', () => {
    const data = { a: 1, b: 1 };
    const data2 = { a: 1, b: 2 };
    expect(isEqual(data, data2)).toBe(false);
  });

  it('should return true for empty objects', () => {
    const data = {};
    const data2 = {};
    expect(isEqual(data, data2)).toBe(true);
  });

  it('should return false if one object has additional properties', () => {
    const data = { a: 1 };
    const data2 = { a: 1, b: 1 };
    expect(isEqual(data, data2)).toBe(false);
  });

  it('should return false if objects have the same properties but different types of values', () => {
    const data = { a: 1, b: '1' };
    const data2 = { a: 1, b: 1 };
    expect(isEqual(data, data2)).toBe(false);
  });
});
