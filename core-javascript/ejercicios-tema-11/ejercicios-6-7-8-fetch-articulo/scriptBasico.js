async function obtenerArticulo(num) {
	try {
		const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${num}`);
		console.log(`Status: ${response.status}`);
		if (!response.ok) {
			throw new Error('Error en la red');
		}
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.error('Hubo un problema con la solicitud Fetch:', error);
	}
}

// Llamada inicial para el artículo 1
obtenerArticulo(1);

async function obtenerArticulo(num) {
	try {
		const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${num}`);
		console.log(`Status: ${response.status}`);
		if (!response.ok) {
			throw new Error('Error en la red');
		}
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.error('Hubo un problema con la solicitud Fetch:', error);
	}
}

// Llamada con un número de artículo variable
const numeroDeArticulo = 5; // Cambia este número para obtener diferentes artículos
obtenerArticulo(numeroDeArticulo);

async function obtenerTodosLosArticulos() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts');
		console.log(`Status: ${response.status}`);
		if (!response.ok) {
			throw new Error('Error en la red');
		}
		const data = await response.json();
		console.log(`Número total de artículos: ${data.length}`);
		data.forEach((articulo) => {
			console.log(`Título: ${articulo.title}`);
			console.log(`Contenido: ${articulo.body}`);
		});
	} catch (error) {
		console.error('Hubo un problema con la solicitud Fetch:', error);
	}
}

// Llamada para obtener todos los artículos
obtenerTodosLosArticulos();

async function obtenerTodosLosArticulosYMostrarEnTabla() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts');
		console.log(`Status: ${response.status}`);
		if (!response.ok) {
			throw new Error('Error en la red');
		}
		const data = await response.json();
		console.log(`Número total de artículos: ${data.length}`);

		// Crear la tabla
		const tabla = document.createElement('table');
		const encabezado = tabla.insertRow();
		encabezado.insertCell(0).innerText = 'Título';
		encabezado.insertCell(1).innerText = 'Contenido';

		// Llenar la tabla con los datos
		data.forEach((articulo) => {
			const fila = tabla.insertRow();
			fila.insertCell(0).innerText = articulo.title;
			fila.insertCell(1).innerText = articulo.body;
		});

		// Añadir la tabla al cuerpo del documento
		document.body.appendChild(tabla);
	} catch (error) {
		console.error('Hubo un problema con la solicitud Fetch:', error);
	}
}

// Llamada para obtener todos los artículos y mostrarlos en una tabla
obtenerTodosLosArticulosYMostrarEnTabla();
