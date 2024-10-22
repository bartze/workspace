const { descargarPaginaGoogle } = require('../asyncFunction');
const fetch = require('node-fetch');
jest.mock('node-fetch');

describe('descargarPaginaGoogle', () => {
	it('debería descargar la página principal de Google correctamente', async () => {
		// Mock de la respuesta de fetch
		const mockResponse = '<html><body>Google Home Page</body></html>';
		fetch.mockResolvedValueOnce({
			ok: true,
			text: async () => mockResponse,
		});

		const data = await descargarPaginaGoogle();
		expect(data).toBe(mockResponse);
	});

	it('debería manejar un error durante la descarga', async () => {
		// Mock de un error en fetch
		fetch.mockRejectedValueOnce(new Error('Network error'));

		await expect(descargarPaginaGoogle()).rejects.toThrow(
			'Error al descargar la página: Network error',
		);
	});
});
