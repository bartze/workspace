import {
	obtenerArticulo,
	obtenerTodosLosArticulos,
	contarArticulos,
	listarTitulos,
	crearTabla,
} from '../articulosDOM';

global.fetch = jest.fn();

beforeEach(() => {
	fetch.mockClear();
	document.body.innerHTML = `
        <div id="total-articulos"></div>
        <div id="lista-titulos"></div>
        <table id="articles-table"><tbody></tbody></table>
    `;
});

describe('contarArticulos', () => {
	it('debe mostrar el número total de artículos en el DOM', async () => {
		const mockData = Array(5).fill({ title: 'Sample' });

		// Simulamos que obtenerTodosLosArticulos retorna mockData
		fetch.mockResolvedValueOnce({
			ok: true,
			json: async () => mockData,
		});

		await contarArticulos();

		// Comprobamos el contenido de total-articulos
		const totalArticulosElem = document.getElementById('total-articulos');
		console.log('Contenido total-articulos:', totalArticulosElem.innerText);

		expect(totalArticulosElem.innerText).toBe(`Número total de artículos: ${mockData.length}`);
	});
});
describe('contarArticulos', () => {
	it('debe mostrar un mensaje adecuado cuando no hay artículos', async () => {
		// Simulamos que obtenerTodosLosArticulos retorna un array vacío
		fetch.mockResolvedValueOnce({
			ok: true,
			json: async () => [],
		});

		await contarArticulos();

		const totalArticulosElem = document.getElementById('total-articulos');
		expect(totalArticulosElem.innerText).toBe(`Número total de artículos: 0`);
	});
});

describe('listarTitulos', () => {
	it('debe manejar el caso en que no hay títulos', async () => {
		// Simulamos que obtenerTodosLosArticulos retorna un array vacío
		fetch.mockResolvedValueOnce({
			ok: true,
			json: async () => [],
		});

		await listarTitulos();

		const listaTitulosDiv = document.getElementById('lista-titulos');
		expect(listaTitulosDiv.innerHTML).toBe('');
	});
});

describe('crearTabla', () => {
	it('debe crear una tabla con los artículos en el DOM', async () => {
		const mockData = [
			{ id: 1, title: 'Title 1', body: 'Body 1' },
			{ id: 2, title: 'Title 2', body: 'Body 2' },
		];
		fetch.mockResolvedValueOnce({
			ok: true,
			json: async () => mockData,
		});

		await crearTabla();
		const tableRows = document
			.getElementById('articles-table')
			.getElementsByTagName('tbody')[0].rows;
		expect(tableRows.length).toBe(mockData.length);
		expect(tableRows[0].cells[0].textContent).toBe('Title 1');
		expect(tableRows[0].cells[1].textContent).toBe('Body 1');
	});
});
describe('crearTabla', () => {
	it('debe manejar el caso en que no hay artículos', async () => {
		// Simulamos que obtenerTodosLosArticulos retorna un array vacío
		fetch.mockResolvedValueOnce({
			ok: true,
			json: async () => [],
		});

		await crearTabla();

		const tableRows = document
			.getElementById('articles-table')
			.getElementsByTagName('tbody')[0].rows;
		expect(tableRows.length).toBe(0);
	});
});
describe('contarArticulos', () => {
	it('debe manejar errores al obtener artículos', async () => {
		// Simulamos que fetch falla
		fetch.mockRejectedValueOnce(new Error('Network error'));

		await contarArticulos();

		const totalArticulosElem = document.getElementById('total-articulos');
		expect(totalArticulosElem.innerText).toBe('');
	});
});
