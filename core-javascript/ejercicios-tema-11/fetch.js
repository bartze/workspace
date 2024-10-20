// Fetch de usuarios de GitHub
// Crear una función async llamada getUsers(names), que tome como parámetro un arreglo de logins de GitHub,
// obtenga el listado de usuarios de GitHub indicado y devuelva un arreglo de usuarios de GitHub.

// La url de GitHub con la información de usuario especifica USERNAME es:
// https://api.github.com/users/USERNAME.

// Detalles a tener en cuenta:

// Debe realizarse una única petición fetch por cada usuario.
// Para que la información esté disponible lo antes posible las peticiones no deben ejecutarse de una por vez.
// Si alguna de las peticiones fallara o si el usuario no existiese,
// la función debe devolver null en el resultado del arreglo.

async function getUsers(names) {
	const promises = names.map(async (name) => {
		try {
			const response = await fetch(`https://api.github.com/users/${name}`);
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return await response.json();
		} catch (error) {
			console.error('Hubo un problema con la solicitud:', error);
			return null;
		}
	});

	const results = await Promise.all(promises);
	return results;
}

getUsers(['Bartze', 'octocat']).then((users) => {
	console.log(users);
});
