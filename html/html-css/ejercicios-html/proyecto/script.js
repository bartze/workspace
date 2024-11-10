document.addEventListener('DOMContentLoaded', () => {
	const menuToggle = document.getElementById('menu-toggle');
	const nav = document.querySelector('#main-header ul');

	menuToggle.addEventListener('click', () => {
		nav.classList.toggle('active');
	});
});
