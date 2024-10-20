const { showAnimals, animals } = require('../timer');

describe('showAnimals', () => {
	beforeEach(() => {
		jest.useFakeTimers();
		console.log = jest.fn(); // Mockea la función console.log
	});

	afterEach(() => {
		jest.clearAllTimers();
	});

	it('debería mostrar cada animal cada 2 segundos', () => {
		showAnimals();

		for (let i = 0; i < animals.length; i++) {
			jest.advanceTimersByTime(2000);
			expect(console.log).toHaveBeenCalledWith(animals[i]);
		}
	});

	it('debería detener el intervalo después de mostrar todos los animales', () => {
		showAnimals();

		jest.advanceTimersByTime(2000 * animals.length);

		// Asegúrate de que clearInterval se haya llamado
		expect(console.log.mock.calls.length).toBe(animals.length);
	});
});
