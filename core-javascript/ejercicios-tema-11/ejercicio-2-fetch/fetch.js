// 2. Realiza una función que haga un fetch de la página de Google y gestione
// diferentes errores (prueba a desconectarte de internet cuando lanzas la
// aplicación, por ejemplo)

// const fetch = require('node-fetch');

async function obtenerDatos() {
	try {
		const response = await fetch(`https://google.com`);
		if (!response.ok) {
			throw new Error('Error en la red');
		}
		const data = await response.text();
		console.log(data);
	} catch (error) {
		console.log('Hubo un problema con la solicitud Fetch:', error);
		return null;
	}
}

obtenerDatos();

// const jsdom = require('jsdom');
// const { JSDOM } = jsdom;

// async function print_google_page() {
// 	const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
// 	console.log('Dan Farrik');
// 	let google_page = await fetch(corsAnywhere + 'https://www.google.es', {
// 		method: 'GET',
// 		headers: new Headers({
// 			'content-Type': 'application/json',
// 			'Access-Control-Allow-Origin': '*',
// 		}),
// 	})
// 		.then(async function (response) {
// 			console.log('inside here!');
// 			let response_text = await response.text();
// 			console.log(response_text);
// 			return response_text;
// 		})
// 		.then(function (string) {
// 			document.writeln(string);
// 		})
// 		.catch((error) => {
// 			console.log(error);
// 			if (error.name === 'TypeError') {
// 				window.alert('Please connect to internet');
// 			} else {
// 				throw error;
// 			}
// 		});
// }
// print_google_page();

// module.exports = { print_google_page };
