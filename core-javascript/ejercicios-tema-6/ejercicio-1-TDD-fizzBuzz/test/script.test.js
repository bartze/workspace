const { fizzBuzz } = require('../script');

describe('fizzBuzz', () => {
  it('debería devolver 1', () => {
    const fizzBuzzFunction = fizzBuzz();
    expect(fizzBuzzFunction).toBe(1);
  });
});