export async function obtenerArticulo(num) {
	try {
		const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${num}`);

		console.log(`Status: ${response.status}`);

		if (!response.ok) {
			throw new Error('Error en la red');
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Hubo un problema con la solicitud Fetch:', error);
		return null;
	}
}

export async function obtenerTodosLosArticulos() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts');

		if (!response.ok) {
			throw new Error('Error en la red');
		}

		return await response.json();
	} catch (error) {
		console.error('Hubo un problema con la solicitud Fetch:', error);
		return null;
	}
}

export async function contarArticulos() {
	try {
		const data = await obtenerTodosLosArticulos();
		if (data) {
			document.getElementById(
				'total-articulos',
			).innerText = `Número total de artículos: ${data.length}`;
		} else {
			document.getElementById('total-articulos').innerText = ''; // Or some error message
		}
	} catch (error) {
		document.getElementById('total-articulos').innerText = ''; // Handle the error appropriately
	}
}

export async function listarTitulos() {
	const data = await obtenerTodosLosArticulos();
	const listaTitulosDiv = document.getElementById('lista-titulos');
	listaTitulosDiv.innerHTML = ''; // Clear previous content

	if (data && data.length > 0) {
		data.forEach((articulo) => {
			const titleElement = document.createElement('div');
			titleElement.innerText = articulo.title; // Set the title text
			listaTitulosDiv.appendChild(titleElement); // Append the title to the div
		});
	}
}

export async function crearTabla() {
	const data = await obtenerTodosLosArticulos();
	if (data) {
		const tableBody = document
			.getElementById('articles-table')
			.getElementsByTagName('tbody')[0];
		data.forEach((articulo) => {
			const row = tableBody.insertRow();
			const cellTitulo = row.insertCell(0);
			const cellContenido = row.insertCell(1);
			cellTitulo.textContent = articulo.title;
			cellContenido.textContent = articulo.body;
		});
	}
}

export function mostrarArticulo(data) {
	const singleArticleDiv = document.getElementById('single-article');
	singleArticleDiv.innerHTML = `<h2>${data.title}</h2><p>${data.body}</p>`;
}

// Evento DOMContentLoaded para inicializar la página
document.addEventListener('DOMContentLoaded', () => {
	if (document.getElementById('fetch-article')) {
		document.getElementById('fetch-article').addEventListener('click', () => {
			const num = document.getElementById('article-number').value;
			obtenerArticulo(num).then(mostrarArticulo);
		});
	}
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