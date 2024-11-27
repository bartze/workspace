document.getElementById('createUserForm').addEventListener('submit', async (e) => {
	e.preventDefault();
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;

	const response = await fetch('/api/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ name, email }),
	});

	const data = await response.json();
	const createMessage = document.getElementById('createMessage');
	createMessage.textContent = `User created: ID = ${data.id}, Name = ${data.name}, Email = ${data.email}`;

	// Vaciar el formulario
	document.getElementById('createUserForm').reset();
});

document.getElementById('updateUserForm').addEventListener('submit', async (e) => {
	e.preventDefault();
	const id = document.getElementById('updateId').value;
	const name = document.getElementById('updateName').value;
	const email = document.getElementById('updateEmail').value;

	const response = await fetch(`/api/users/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ name, email }),
	});

	const data = await response.json();
	const updateMessage = document.getElementById('updateMessage');
	updateMessage.textContent = `User updated: ID = ${data.id}, Name = ${data.name}, Email = ${data.email}`;

	// Vaciar el formulario
	document.getElementById('updateUserForm').reset();
});

async function getUsers() {
	const response = await fetch('/api/users');
	const users = await response.json();
	const userList = document.getElementById('userList');
	userList.innerHTML = '';

	users.forEach((user) => {
		const li = document.createElement('li');
		li.textContent = `ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`;

		const deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.addEventListener('click', async () => {
			await deleteUser(user.id);
			getUsers(); // Refrescar la lista después de eliminar
		});

		li.appendChild(deleteButton);
		userList.appendChild(li);
	});
}

async function deleteUser(id) {
	const response = await fetch(`/api/users/${id}`, {
		method: 'DELETE',
	});

	if (response.status === 204) {
		const updateMessage = document.getElementById('updateMessage');
		updateMessage.textContent = `User with ID ${id} deleted successfully.`;
	} else {
		const data = await response.json();
		const updateMessage = document.getElementById('updateMessage');
		updateMessage.textContent = `Error: ${data.error}`;
	}
}

async function getApiOptionsDynamic() {
	const response = await fetch('/api/users/1', {
		method: 'OPTIONS',
	});

	const optionsMessage = document.getElementById('optionsMessage');
	const allowMethods = response.headers.get('Allow');

	optionsMessage.textContent = `Allowed methods for /api/users/:id: ${allowMethods}`;
}
