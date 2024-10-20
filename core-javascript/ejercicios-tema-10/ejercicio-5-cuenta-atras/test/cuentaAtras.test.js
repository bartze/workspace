const { startCountdown } = require('../cuentaAtras');

describe('startCountdown', () => {
	let display;

	beforeEach(() => {
		display = { textContent: '' };
		jest.useFakeTimers();
		jest.spyOn(global, 'clearInterval');
	});

	afterEach(() => {
		jest.useRealTimers();
		jest.restoreAllMocks();
	});

	it('debería mostrar un mensaje de error para valores inválidos', () => {
		startCountdown('invalid', display);
		expect(display.textContent).toBe('Por favor, ingresa un número válido');

		startCountdown(-5, display);
		expect(display.textContent).toBe('Por favor, ingresa un número válido');
	});

	it('debería mostrar la cuenta atrás correctamente', () => {
		startCountdown(5, display);

		for (let i = 5; i > 0; i--) {
			expect(display.textContent).toBe(`${i}`);
			jest.advanceTimersByTime(1000);
		}

		jest.advanceTimersByTime(1000); // Para llegar a "¡Tiempo agotado!"
		expect(display.textContent).toBe('¡Tiempo agotado!');
	});

	it('debería detener el intervalo después de llegar a 0', () => {
		const interval = startCountdown(3, display);

		jest.advanceTimersByTime(3000);
		expect(clearInterval).toHaveBeenCalledWith(interval);
		expect(display.textContent).toBe('¡Tiempo agotado!');
	});
});
