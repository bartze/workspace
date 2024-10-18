const { obtenerMultiplos } = require('../multiplos');

describe('obtenerMultiplos', () => {
	it('debería devolver un número cuando se pasa numero', () => {
		const multiplos = obtenerMultiplos(1, 1);
		expect(multiplos).toEqual([1]);
	});

	it('debería devolver un array con los primeros 3 múltiplos de 2', () => {
		const multiplos = obtenerMultiplos(3, 2);
		expect(multiplos).toEqual([2, 4, 6]);
	});

	it('debería devolver un array vacío cuando la cantidad es 0', () => {
		const multiplos = obtenerMultiplos(0, 5);
		expect(multiplos).toEqual([]);
	});

	it('debería devolver un array con los primeros 5 múltiplos de 3', () => {
		const multiplos = obtenerMultiplos(5, 3);
		expect(multiplos).toEqual([3, 6, 9, 12, 15]);
	});

	it('debería devolver un array con los primeros 3 múltiplos de 0 (todos ceros)', () => {
		const multiplos = obtenerMultiplos(3, 0);
		expect(multiplos).toEqual([0, 0, 0]);
	});

	it('debería manejar números negativos correctamente', () => {
		const multiplos = obtenerMultiplos(3, -2);
		expect(multiplos).toEqual([-2, -4, -6]);
	});

	it('debería manejar caso límite con cantidad = 1 y numero = 0', () => {
		const multiplos = obtenerMultiplos(1, 0);
		expect(multiplos).toEqual([0]);
	});
});
