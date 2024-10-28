const { fetch_google_page } = require('../fetch');
const jsdom = require('jsdom');

const GOOGLE_PAGE = 'google page';

describe('fetch_google_page', () => {
	it('should fetch google page', async () => {
		global.fetch = jest.fn(() =>
			Promise.resolve({
				text: () => Promise.resolve(GOOGLE_PAGE),
			}),
		);
		const dom = new jsdom.JSDOM();
		global.document = dom.window.document;
		global.window = dom.window;
		await fetch_google_page.print_google_page();
		console.log(global.document.body.innerHTML);
		expect(global.document.body.innerHTML).toBe('google page\n');
	});
});

// const fetch = require('node-fetch');
// jest.mock('node-fetch');

// describe('obtenerDatos', () => {
// 	it('debería manejar una respuesta exitosa', async () => {
// 		const mockResponse = '<html><body>Google Home Page</body></html>';
// 		fetch.mockResolvedValueOnce({
// 			ok: true,
// 			text: async () => mockResponse,
// 		});

// 		console.log = jest.fn();

// 		await obtenerDatos();
// 		expect(console.log).toHaveBeenCalledWith(mockResponse);
// 	});

// 	it('debería manejar un error de red', async () => {
// 		fetch.mockResolvedValueOnce({
// 			ok: false,
// 		});

// 		console.error = jest.fn();

// 		const result = await obtenerDatos();
// 		expect(console.error).toHaveBeenCalledWith(
// 			'Hubo un problema con la solicitud Fetch:',
// 			new Error('Error en la red'),
// 		);
// 		expect(result).toBe(null);
// 	});

// 	it('debería manejar una falla en fetch', async () => {
// 		fetch.mockRejectedValueOnce(new Error('Falló el fetch'));

// 		console.error = jest.fn();

// 		const result = await obtenerDatos();
// 		expect(console.error).toHaveBeenCalledWith(
// 			'Hubo un problema con la solicitud Fetch:',
// 			new Error('Falló el fetch'),
// 		);
// 		expect(result).toBe(null);
// 	});
// });
