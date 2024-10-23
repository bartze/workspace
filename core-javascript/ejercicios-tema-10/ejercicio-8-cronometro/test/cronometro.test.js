const { actualizarCronometro, obtenerTiempo, reiniciarCronometro } = require('../cronometro');

jest.useFakeTimers();

describe('Cronómetro', () => {
	beforeEach(() => {
		document.body.innerHTML = '<div id="cronometro">00:00</div>';
		reiniciarCronometro();
	});

	it('debería iniciar en 00:00', () => {
		expect(document.getElementById('cronometro').textContent).toBe('00:00');
	});

	it('debería actualizar a 00:01 después de un segundo', () => {
		actualizarCronometro();
		expect(document.getElementById('cronometro').textContent).toBe('00:01');
	});

	it('debería actualizar a 01:00 después de 60 segundos', () => {
		for (let i = 0; i < 60; i++) {
			actualizarCronometro();
		}
		expect(document.getElementById('cronometro').textContent).toBe('01:00');
	});

	it('debería actualizar correctamente minutos y segundos', () => {
		for (let i = 0; i < 70; i++) {
			actualizarCronometro();
		}
		expect(document.getElementById('cronometro').textContent).toBe('01:10');
	});
});
