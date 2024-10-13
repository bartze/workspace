const { Transformador } = require('../transformarRomanos');

describe('Transformador Class', () => {
	const transformador = new Transformador();

	it('debería transformar 5 a V', () => {
		expect(transformador.transformarARomano(5)).toBe('V');
	});

	it('debería transformar 1 a I', () => {
		expect(transformador.transformarARomano(1)).toBe('I');
	});

	it('debería transformar 10 a X', () => {
		expect(transformador.transformarARomano(10)).toBe('X');
	});

	it('debería transformar 50 a L', () => {
		expect(transformador.transformarARomano(50)).toBe('L');
	});

	it('debería transformar 100 a C', () => {
		expect(transformador.transformarARomano(100)).toBe('C');
	});

	it('debería transformar 500 a D', () => {
		expect(transformador.transformarARomano(500)).toBe('D');
	});

	it('debería transformar 1000 a M', () => {
		expect(transformador.transformarARomano(1000)).toBe('M');
	});

	it('debería lanzar un error para números mayores que 1000', () => {
		expect(() => transformador.transformarARomano(1001)).toThrow(
			'Número demasiado grande. El máximo es 1000.',
		);
	});

	it('debería transformar V a 5', () => {
		expect(transformador.transformarANatural('V')).toBe(5);
	});

	it('debería transformar I a 1', () => {
		expect(transformador.transformarANatural('I')).toBe(1);
	});

	it('debería transformar X a 10', () => {
		expect(transformador.transformarANatural('X')).toBe(10);
	});

	it('debería transformar L a 50', () => {
		expect(transformador.transformarANatural('L')).toBe(50);
	});

	it('debería transformar C a 100', () => {
		expect(transformador.transformarANatural('C')).toBe(100);
	});

	it('debería transformar D a 500', () => {
		expect(transformador.transformarANatural('D')).toBe(500);
	});

	it('debería transformar M a 1000', () => {
		expect(transformador.transformarANatural('M')).toBe(1000);
	});

	it('debería lanzar un error para números romanos que representen valores mayores que 1000', () => {
		expect(() => transformador.transformarANatural('MMMM')).toThrow(
			'Número demasiado grande. El máximo es 1000.',
		);
	});
});
