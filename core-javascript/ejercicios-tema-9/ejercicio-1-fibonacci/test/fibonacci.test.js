const { fibonacciGenerator } = require('../fibonacci');

describe('fibonacciGenerator', () => {
	it('debería generar los primeros 10 números de Fibonacci correctamente', () => {
		const fibGen = fibonacciGenerator();
		const expectedSequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
		const generatedSequence = [];

		for (let i = 0; i < 10; i++) {
			generatedSequence.push(fibGen.next().value);
		}

		expect(generatedSequence).toEqual(expectedSequence);
	});

	it('debería generar el primer número de Fibonacci correctamente', () => {
		const fibGen = fibonacciGenerator();
		expect(fibGen.next().value).toBe(0);
	});

	it('debería generar el segundo número de Fibonacci correctamente', () => {
		const fibGen = fibonacciGenerator();
		fibGen.next(); // skip first
		expect(fibGen.next().value).toBe(1);
	});

	it('debería generar el tercer número de Fibonacci correctamente', () => {
		const fibGen = fibonacciGenerator();
		fibGen.next(); // skip first
		fibGen.next(); // skip second
		expect(fibGen.next().value).toBe(1);
	});

	it('debería generar el cuarto número de Fibonacci correctamente', () => {
		const fibGen = fibonacciGenerator();
		fibGen.next(); // skip first
		fibGen.next(); // skip second
		fibGen.next(); // skip third
		expect(fibGen.next().value).toBe(2);
	});
});
