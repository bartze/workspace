const {
	actualizarCronometro,
	obtenerTiempo,
	reiniciarCronometro,
	toggleCronometro,
	init,
} = require('../cronometro');

jest.useFakeTimers();

describe('Cronómetro', () => {
	beforeEach(() => {
		document.body.innerHTML =
			'<div id="cronometro">00:00</div><button id="toggle-button">Pausar/Reanudar</button>';
		reiniciarCronometro();
	});

	it('debería iniciar en 00:00', () => {
		expect(document.getElementById('cronometro').textContent).toBe('00:00');
	});

	it('debería actualizar a 00:01 después de un segundo', () => {
		toggleCronometro();
		jest.advanceTimersByTime(1000);
		expect(document.getElementById('cronometro').textContent).toBe('00:01');
	});

	it('debería actualizar a 01:00 después de 60 segundos', () => {
		toggleCronometro();
		jest.advanceTimersByTime(60000);
		expect(document.getElementById('cronometro').textContent).toBe('01:00');
	});

	it('debería actualizar correctamente minutos y segundos', () => {
		toggleCronometro();
		jest.advanceTimersByTime(70000);
		expect(document.getElementById('cronometro').textContent).toBe('01:10');
	});

	it('debería pausar y reanudar correctamente', () => {
		toggleCronometro();
		jest.advanceTimersByTime(5000);
		toggleCronometro();
		expect(document.getElementById('cronometro').textContent).toBe('00:05');
		jest.advanceTimersByTime(5000);
		expect(document.getElementById('cronometro').textContent).toBe('00:05');
		toggleCronometro();
		jest.advanceTimersByTime(5000);
		expect(document.getElementById('cronometro').textContent).toBe('00:10');
	});
	it('debería reiniciar correctamente', () => {
		toggleCronometro();
		jest.advanceTimersByTime(10000);
		reiniciarCronometro();
		expect(document.getElementById('cronometro').textContent).toBe('00:00');
		expect(obtenerTiempo()).toEqual({ segundos: 0, minutos: 0 });
	});
	it('debería manejar el cronómetro correctamente cuando no está iniciado', () => {
		reiniciarCronometro();
		expect(obtenerTiempo()).toEqual({ segundos: 0, minutos: 0 });
		expect(document.getElementById('cronometro').textContent).toBe('00:00');
	});
	it('debería añadir un event listener al botón', () => {
		const button = document.getElementById('toggle-button');
		jest.spyOn(button, 'addEventListener');
		init();
		expect(button.addEventListener).toHaveBeenCalledWith('click', toggleCronometro);
	});
});
