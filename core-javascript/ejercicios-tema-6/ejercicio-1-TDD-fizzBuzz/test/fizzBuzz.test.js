const { fizzBuzz } = require('../fizzBuzz');

describe('fizzBuzz', () => {
  it('debería devolver 1 cuando se pasa 1', () => {
    const result = fizzBuzz(1);
    expect(result).toBe('1');
  });
  it('debería devolver 0 cuando se pasa 0', () => {
    const result = fizzBuzz(0);
    expect(result).toBe('0');
  });
  it('debería devolver un error cuando se le pasa un string', () => {
    expect(() => fizzBuzz('a')).toThrow('El valor debe ser un número');
  });
  it('debería devolver Fizz cuando se le pasa 3', () => {
    const result = fizzBuzz(3);
    expect(result).toBe('Fizz');
  });
  it('debería devolver Buzz cuando se le pasa 5', () => {
    const result = fizzBuzz(5);
    expect(result).toBe('Buzz');
  });
  it('debería devolver Fizz cuando se le pasan multiplos de 3', () => {
    const result = fizzBuzz(6);
    expect(result).toBe('Fizz');
  });
  it('debería devolver Buzz cuando se le pasan multiplos de 5', () => {
    const result = fizzBuzz(10);
    expect(result).toBe('Buzz');
  });
  it('debería devolver FizzBuzz cuando se le pasan multiplos de 3 y de 5', () => {
    const result = fizzBuzz(15);
    expect(result).toBe('FizzBuzz');
  });
});
