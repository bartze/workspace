const { TV } = require('../TVClass');

describe('TV Class', () => {
	it('debería inicializar con los valores por defecto', () => {
		const tv = new TV('Sony');
		expect(tv.channel).toBe(1);
		expect(tv.volume).toBe(50);
		expect(tv.brand).toBe('Sony');
	});

	it('debería inicializar con los valores proporcionados', () => {
		const tv = new TV('LG', 10, 30);
		expect(tv.channel).toBe(10);
		expect(tv.volume).toBe(30);
		expect(tv.brand).toBe('LG');
	});

	it('debería incrementar el volumen', () => {
		const tv = new TV('Sony');
		tv.volumePlus();
		expect(tv.volume).toBe(51);
	});

	it('debería decrementar el volumen', () => {
		const tv = new TV('Sony');
		tv.volumeMinus();
		expect(tv.volume).toBe(49);
	});

	it('no debería permitir que el volumen exceda 100', () => {
		const tv = new TV('Sony', 1, 100);
		tv.volumePlus();
		expect(tv.volume).toBe(100);
	});

	it('no debería permitir que el volumen sea menor que 0', () => {
		const tv = new TV('Sony', 1, 0);
		tv.volumeMinus();
		expect(tv.volume).toBe(0);
	});

	it('debería cambiar al canal especificado', () => {
		const tv = new TV('Sony');
		tv.setChannel(10);
		expect(tv.channel).toBe(10);
	});

	it('no debería cambiar a un canal mayor que 50', () => {
		const tv = new TV('Sony');
		tv.setChannel(60);
		expect(tv.channel).toBe(1); // Debería permanecer en el canal por defecto
	});

	it('debería resetear a los valores por defecto', () => {
		const tv = new TV('Sony', 10, 30);
		tv.resetTV();
		expect(tv.channel).toBe(1);
		expect(tv.volume).toBe(50);
	});

	it('debería mostrar el estado correcto', () => {
		const tv = new TV('Sony', 10, 30);
		console.log = jest.fn();
		tv.showStatus();
		expect(console.log).toHaveBeenCalledWith('Sony en el canal 10, volumen 30');
	});
});
