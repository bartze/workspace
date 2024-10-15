const { generadorElementos } = require('../generadorArrays');

describe('generadorElementos', () => {
	it('debería generar los productos acumulativos de los elementos del array correctamente', () => {
		const array = [1, 2, 3, 4];
		const gen = generadorElementos(array);
		const expectedSequence = [1, 2, 6, 24];
		const generatedSequence = [];

		for (let valor of gen) {
			generatedSequence.push(valor);
		}

		expect(generatedSequence).toEqual(expectedSequence);
	});

	it('debería manejar arrays vacíos sin errores', () => {
		const array = [];
		const gen = generadorElementos(array);
		expect(gen.next().done).toBe(true);
	});

	it('debería manejar arrays con un solo elemento correctamente', () => {
		const array = [5];
		const gen = generadorElementos(array);
		expect(gen.next().value).toBe(5);
		expect(gen.next().done).toBe(true);
	});

	it('debería manejar arrays con elementos negativos correctamente', () => {
		const array = [-1, 2, -3, 4];
		const gen = generadorElementos(array);
		const expectedSequence = [-1, -2, 6, 24];
		const generatedSequence = [];

		for (let valor of gen) {
			generatedSequence.push(valor);
		}

		expect(generatedSequence).toEqual(expectedSequence);
	});
});
