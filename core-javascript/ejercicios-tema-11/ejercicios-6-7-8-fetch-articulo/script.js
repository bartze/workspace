async function fetchData(url) {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Error en la red: ${response.status}`);
		}
		return await response.json();
	} catch (error) {
		console.error('Hubo un problema con la solicitud Fetch:', error);
		return null;
	}
}

async function obtenerArticulo(num) {
	const data = await fetchData(`https://jsonplaceholder.typicode.com/posts/${num}`);
	if (data && typeof document !== 'undefined') {
		mostrarArticulo(data);
	}
	return data;
}

async function obtenerTodosLosArticulos() {
	return await fetchData('https://jsonplaceholder.typicode.com/posts');
}

async function contarArticulos() {
	const data = await obtenerTodosLosArticulos();
	if (data) {
		document.getElementById(
			'total-articulos',
		).innerText = `Número total de artículos: ${data.length}`;
	}
}

async function listarTitulos() {
	const data = await obtenerTodosLosArticulos();
	if (data) {
		const listaTitulosDiv = document.getElementById('lista-titulos');
		listaTitulosDiv.innerHTML = '<h2>Listado de Títulos</h2>';
		data.forEach((articulo) => {
			listaTitulosDiv.innerHTML += `<p>${articulo.title}</p>`;
		});
	}
}

async function crearTabla() {
	const data = await obtenerTodosLosArticulos();
	if (data) {
		const tableBody = document
			.getElementById('articles-table')
			.getElementsByTagName('tbody')[0];
		data.forEach((articulo) => {
			const row = tableBody.insertRow();
			row.insertCell(0).textContent = articulo.title;
			row.insertCell(1).textContent = articulo.body;
		});
	}
}

function mostrarArticulo(data) {
	const singleArticleDiv = document.getElementById('single-article');
	singleArticleDiv.innerHTML = `<h2>${data.title}</h2><p>${data.body}</p>`;
}

function addClickListener(selector, handler) {
	const element = document.querySelector(selector);
	if (element) {
		element.addEventListener('click', handler);
	}
}

module.exports = {
	obtenerArticulo,
	obtenerTodosLosArticulos,
	contarArticulos,
	listarTitulos,
	crearTabla,
	mostrarArticulo,
	fetchData,
};

// Código para ejecutar solo en el navegador
if (typeof document !== 'undefined') {
	document.addEventListener('DOMContentLoaded', () => {
		addClickListener('#fetch-article', () => {
			const num = document.getElementById('article-number').value;
			obtenerArticulo(num);
		});

		if (document.getElementById('total-articulos')) {
			contarArticulos();
		}

		if (document.getElementById('lista-titulos')) {
			listarTitulos();
		}

		if (document.getElementById('articles-table')) {
			crearTabla();
		}
	});
}
