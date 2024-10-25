const {
	obtenerArticulo,
	obtenerTodosLosArticulos,
	contarArticulos,
	listarTitulos,
	crearTabla,
	mostrarArticulo,
	fetchData,
} = require('../script');
const fetch = require('node-fetch');

jest.mock('node-fetch');

describe('fetchData', () => {
	it('fetches data from the given URL', async () => {
		const mockResponse = {
			status: 200,
			ok: true,
			json: async () => ({ test: 'data' }),
		};
		fetch.mockResolvedValueOnce(mockResponse);

		const data = await fetchData('https://example.com');
		expect(fetch).toHaveBeenCalledWith('https://example.com');
		expect(data).toEqual({ test: 'data' });
	});

	it('throws an error for non-200 status codes', async () => {
		const mockResponse = { status: 404, ok: false };
		fetch.mockResolvedValueOnce(mockResponse);

		const data = await fetchData('https://example.com');
		expect(data).toBeNull();
	});

	it('handles network errors', async () => {
		fetch.mockRejectedValueOnce(new Error('Network error'));

		const data = await fetchData('https://example.com');
		expect(data).toBeNull();
	});
});

describe('obtenerArticulo', () => {
	it('fetches and returns a single article by ID', async () => {
		const mockResponse = {
			status: 200,
			ok: true,
			json: async () => ({ id: 1, title: 'Test Article', body: 'This is a test article' }),
		};
		fetch.mockResolvedValueOnce(mockResponse);

		const articulo = await obtenerArticulo(1);
		expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts/1');
		expect(articulo).toEqual({ id: 1, title: 'Test Article', body: 'This is a test article' });
	});

	it('throws error for non-200 status code', async () => {
		const mockResponse = { status: 404, ok: false };
		fetch.mockResolvedValueOnce(mockResponse);

		await expect(obtenerArticulo(1)).rejects.toThrow('Error en la red');
	});

	it('throws error for network issues', async () => {
		fetch.mockRejectedValueOnce(new Error('Network error'));

		await expect(obtenerArticulo(1)).rejects.toThrow('Network error');
	});
});

describe('contarArticulos', () => {
	it('counts the total number of articles', async () => {
		const mockResponse = [
			{ id: 1, title: 'Artículo 1', body: 'Contenido 1' },
			{ id: 2, title: 'Artículo 2', body: 'Contenido 2' },
		];
		fetch.mockResolvedValueOnce({
			ok: true,
			json: async () => mockResponse,
		});

		document.body.innerHTML = '<div id="total-articulos"></div>';
		await contarArticulos();
		expect(document.getElementById('total-articulos').innerText).toBe(
			'Número total de artículos: 2',
		);
	});
});

describe('listarTitulos', () => {
	it('lists all titles', async () => {
		const mockResponse = [
			{ id: 1, title: 'Artículo 1', body: 'Contenido 1' },
			{ id: 2, title: 'Artículo 2', body: 'Contenido 2' },
		];
		fetch.mockResolvedValueOnce({
			ok: true,
			json: async () => mockResponse,
		});

		document.body.innerHTML = '<div id="lista-titulos"></div>';
		await listarTitulos();
		const listaTitulosDiv = document.getElementById('lista-titulos');
		expect(listaTitulosDiv.innerHTML).toContain('<h2>Listado de Títulos</h2>');
		expect(listaTitulosDiv.innerHTML).toContain('<p>Artículo 1</p>');
		expect(listaTitulosDiv.innerHTML).toContain('<p>Artículo 2</p>');
	});
});

describe('crearTabla', () => {
	it('creates a table with titles and contents', async () => {
		const mockResponse = [
			{ id: 1, title: 'Artículo 1', body: 'Contenido 1' },
			{ id: 2, title: 'Artículo 2', body: 'Contenido 2' },
		];
		fetch.mockResolvedValueOnce({
			ok: true,
			json: async () => mockResponse,
		});

		document.body.innerHTML = '<table id="articles-table"><tbody></tbody></table>';
		await crearTabla();
		const tableBody = document
			.getElementById('articles-table')
			.getElementsByTagName('tbody')[0];
		expect(tableBody.rows.length).toBe(2);
		expect(tableBody.rows[0].cells[0].textContent).toBe('Artículo 1');
		expect(tableBody.rows[0].cells[1].textContent).toBe('Contenido 1');
		expect(tableBody.rows[1].cells[0].textContent).toBe('Artículo 2');
		expect(tableBody.rows[1].cells[1].textContent).toBe('Contenido 2');
	});
});
