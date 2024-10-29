async function obtenerArticulo(num) {
	try {
		const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${num}`);

		console.log(`Status: ${response.status}`);

		if (!response.ok) {
			throw new Error('Error en la red');
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.log('Hubo un problema con la solicitud Fetch:', error);
	}
}

async function obtenerTodosLosArticulos() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts');

		if (!response.ok) {
			throw new Error('Error en la red');
		}

		return await response.json();
	} catch (error) {
		console.log('Hubo un problema con la solicitud Fetch:', error);
	}
}

async function contarArticulos() {
	try {
		const data = await obtenerTodosLosArticulos();
		if (data) {
			document.getElementById(
				'total-articulos',
			).innerText = `Número total de artículos: ${data.length}`;
		} else {
			document.getElementById('total-articulos').innerText = '';
		}
	} catch (error) {
		document.getElementById('total-articulos').innerText = '';
	}
}

async function listarTitulos() {
	const data = await obtenerTodosLosArticulos();
	const listaTitulosDiv = document.getElementById('lista-titulos');
	listaTitulosDiv.innerHTML = '';

	if (data && data.length > 0) {
		data.forEach((articulo) => {
			const titleElement = document.createElement('div');
			titleElement.innerText = articulo.title;
			listaTitulosDiv.appendChild(titleElement);
		});
	}
}

async function crearTabla() {
	const data = await obtenerTodosLosArticulos();
	const tableBody = document.getElementById('articles-table').getElementsByTagName('tbody')[0];
	tableBody.innerHTML = ''; // Limpia la tabla antes de llenarla

	if (data && data.length > 0) {
		data.forEach((articulo) => {
			const row = tableBody.insertRow();
			const cellTitulo = row.insertCell(0);
			const cellContenido = row.insertCell(1);
			cellTitulo.textContent = articulo.title;
			cellContenido.textContent = articulo.body;
		});
	}
}

function mostrarArticulo(data) {
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
if (typeof module !== 'undefined' && module.exports) {
	module.exports = {
		obtenerArticulo,
		obtenerTodosLosArticulos,
		contarArticulos,
		listarTitulos,
		crearTabla,
	};
}
