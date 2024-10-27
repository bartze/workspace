// 6. Pide información con fetch a la url: https://jsonplaceholder.typicode.com/posts/1.
// Loguea el status de la petición e imprime por pantalla el contenido del artículo que has recibido.
// 7. Modifica el ejercicio anterior o crea uno nuevo que permita cambiar el número del artículo que se recibe.
// 8. Modifica el ejercicio anterior y recibe la lista de todos los artículos.
// ¿Cuántos hay? ¿Podrías listar los títulos? ¿Y hacer una tabla con los títulos y los contenidos?

document.addEventListener('DOMContentLoaded', () => {
	async function obtenerArticulo(num) {
		try {
			const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${num}`);

			console.log(`Status: ${response.status}`);

			if (!response.ok) {
				throw new Error('Error en la red');
			}

			const data = await response.json();

			console.log(data);

			mostrarArticulo(data);
		} catch (error) {
			console.error('Hubo un problema con la solicitud Fetch:', error);
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
			console.error('Hubo un problema con la solicitud Fetch:', error);

			return null;
		}
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

	if (document.getElementById('fetch-article')) {
		document.getElementById('fetch-article').addEventListener('click', () => {
			const num = document.getElementById('article-number').value;

			obtenerArticulo(num);
		});
	} // Llamar a las funciones necesarias según la página actual

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
