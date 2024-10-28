const {
	obtenerArticulo,
	obtenerTodosLosArticulos,
	contarArticulos,
	listarTitulos,
	crearTabla,
} = require('../articulosDOM');

// Mocks de DOM y fetch
global.fetch = jest.fn();
document.body.innerHTML = `
  <div id="total-articulos"></div>
  <div id="lista-titulos"></div>
  <table id="articles-table"><tbody></tbody></table>
  <div id="single-article"></div>
`;

describe('obtenerArticulo', () => {
	it('debe devolver un artículo válido con un ID existente', async () => {
		const mockData = { id: 1, title: 'Test Title', body: 'Test Body' };
		fetch.mockResolvedValueOnce({
			ok: true,
			json: async () => mockData,
		});

		const result = await obtenerArticulo(1);
		expect(result).toEqual(mockData);
	});

	it('debe manejar el caso de un error en la red', async () => {
		fetch.mockResolvedValueOnce({ ok: false });
		const result = await obtenerArticulo(1);
		expect(result).toBeUndefined();
	});
});

describe('obtenerTodosLosArticulos', () => {
	it('debe devolver todos los artículos cuando la respuesta es exitosa', async () => {
		const mockData = [{ id: 1, title: 'Test Title', body: 'Test Body' }];
		fetch.mockResolvedValueOnce({
			ok: true,
			json: async () => mockData,
		});

		const result = await obtenerTodosLosArticulos();
		expect(result).toEqual(mockData);
	});

	it('debe manejar el caso de un error en la red', async () => {
		fetch.mockResolvedValueOnce({ ok: false });
		const result = await obtenerTodosLosArticulos();
		expect(result).toBeUndefined();
	});
});

describe('contarArticulos', () => {
	it('debe mostrar el número total de artículos en el DOM', async () => {
		const mockData = Array(5).fill({ title: 'Test Title', body: 'Test Body' });
		fetch.mockResolvedValueOnce({
			ok: true,
			json: async () => mockData,
		});

		await contarArticulos();
		expect(document.getElementById('total-articulos').innerText).toBe(
			'Número total de artículos: 5',
		);
	});

	it('debe mostrar "Número total de artículos: 0" cuando no hay artículos', async () => {
		fetch.mockResolvedValueOnce({
			ok: true,
			json: async () => [],
		});

		await contarArticulos();
		expect(document.getElementById('total-articulos').innerText).toBe(
			'Número total de artículos: 0',
		);
	});

	it('debe manejar errores al obtener artículos', async () => {
		fetch.mockResolvedValueOnce({ ok: false });

		await contarArticulos();
		expect(document.getElementById('total-articulos').innerText).toBe('');
	});
});

describe('listarTitulos', () => {
	it('debe manejar el caso en que no hay títulos', async () => {
		fetch.mockResolvedValueOnce({
			ok: true,
			json: async () => [],
		});

		await listarTitulos();
		expect(document.getElementById('lista-titulos').innerHTML).toBe('');
	});

	it('debe mostrar un mensaje en caso de error en la red', async () => {
		fetch.mockResolvedValueOnce({ ok: false });

		await listarTitulos();
		expect(document.getElementById('lista-titulos').innerHTML).toBe('');
	});
});

describe('crearTabla', () => {
	it('debe crear una tabla con los artículos en el DOM', async () => {
		const mockData = [{ title: 'Test Title', body: 'Test Body' }];
		fetch.mockResolvedValueOnce({
			ok: true,
			json: async () => mockData,
		});

		await crearTabla();
		expect(document.querySelector('#articles-table tbody').children.length).toBe(1);
		expect(document.querySelector('#articles-table tbody').textContent).toContain('Test Title');
	});

	it('debe manejar el caso en que no hay artículos', async () => {
		fetch.mockResolvedValueOnce({
			ok: true,
			json: async () => [],
		});

		await crearTabla();
		expect(document.querySelector('#articles-table tbody').children.length).toBe(0);
	});

	it('debe manejar el caso de un error en la red al crear la tabla', async () => {
		fetch.mockResolvedValueOnce({ ok: false });

		await crearTabla();
		expect(document.querySelector('#articles-table tbody').children.length).toBe(0);
	});
});
