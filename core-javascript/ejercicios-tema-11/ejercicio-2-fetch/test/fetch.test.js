const { obtenerDatos } = require('../fetch');
const fetch = require('node-fetch');
jest.mock('node-fetch');

describe('obtenerDatos', () => {
	it('debería manejar una respuesta exitosa', async () => {
		const mockResponse = '<html><body>Google Home Page</body></html>';
		fetch.mockResolvedValueOnce({
			ok: true,
			text: async () => mockResponse,
		});

		console.log = jest.fn();

		await obtenerDatos();
		expect(console.log).toHaveBeenCalledWith(mockResponse);
	});

	it('debería manejar un error de red', async () => {
		fetch.mockResolvedValueOnce({
			ok: false,
		});

		console.error = jest.fn();

		const result = await obtenerDatos();
		expect(console.error).toHaveBeenCalledWith(
			'Hubo un problema con la solicitud Fetch:',
			new Error('Error en la red'),
		);
		expect(result).toBe(null);
	});

	it('debería manejar una falla en fetch', async () => {
		fetch.mockRejectedValueOnce(new Error('Falló el fetch'));

		console.error = jest.fn();

		const result = await obtenerDatos();
		expect(console.error).toHaveBeenCalledWith(
			'Hubo un problema con la solicitud Fetch:',
			new Error('Falló el fetch'),
		);
		expect(result).toBe(null);
	});
});
