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
	alert(`User created: ${JSON.stringify(data)}`);
});

async function getUsers() {
	const response = await fetch('/api/users');
	const users = await response.json();
	const userList = document.getElementById('userList');
	userList.innerHTML = '';

	users.forEach((user) => {
		const li = document.createElement('li');
		li.textContent = `ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`;
		userList.appendChild(li);
	});
}

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
	alert(`User updated: ${JSON.stringify(data)}`);
});
