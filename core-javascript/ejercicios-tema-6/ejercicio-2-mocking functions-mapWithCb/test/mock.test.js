const { mapWithCb } = require('../mock');

describe('mapWithCb', () => {
	it('debería llamar a la función de callback el número correcto de veces', () => {
		const mockCallback = jest.fn();
		const array = [1, 2, 3];

		mapWithCb(array, mockCallback);

		expect(mockCallback).toHaveBeenCalledTimes(3);
	});

	it('debería llamar a la función de callback con los argumentos correctos', () => {
		const mockCallback = jest.fn();
		const array = [1, 2, 3];

		mapWithCb(array, mockCallback);

		expect(mockCallback).toHaveBeenCalledWith(1, 0, array);
		expect(mockCallback).toHaveBeenCalledWith(2, 1, array);
		expect(mockCallback).toHaveBeenCalledWith(3, 2, array);
	});
});
