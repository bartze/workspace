const { without } = require('../without');

describe('without', () => {
  it('should return a new object without the specified properties', () => {
    const data = { a: 1, b: 2 };
    expect(without(data, 'b')).toEqual({ a: 1 });
  });

  it('should return the same object if no properties are specified', () => {
    const data = { a: 1, b: 2 };
    expect(without(data)).toEqual({ a: 1, b: 2 });
  });

  it('should return an empty object if all properties are removed', () => {
    const data = { a: 1, b: 2 };
    expect(without(data, 'a', 'b')).toEqual({});
  });

  it('should not modify the original object', () => {
    const data = { a: 1, b: 2 };
    const result = without(data, 'b');
    expect(data).toEqual({ a: 1, b: 2 }); // El objeto original no debe cambiar
  });

  it('should handle objects with nested properties correctly', () => {
    const data = { a: 1, b: { c: 2, d: 3 } };
    expect(without(data, 'b')).toEqual({ a: 1 });
  });
});
