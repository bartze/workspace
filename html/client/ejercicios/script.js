// 1.Cambia el título de la pestaña de la página
document.title = 'Osasuna';

// 2.1 Cambia el color de fondo del body
document.body.style.backgroundColor = '#bdd2ea';

//2.2 Cambia el color de las letras en h1, h2, h3, p y span
document.querySelectorAll('h1, h2, h3, p, span').forEach((element) => {
	element.style.color = 'blue';
});

//2.3 Modifica las imágenes
const images = document.getElementsByClassName('img-responsive');

for (let i = 0; i < images.length; i++) {
	images[i].style.filter = 'hue-rotate(240deg)';
}

// 3.1 Crear párrafo
let nuevoParrafo = document.createElement('p');
nuevoParrafo.textContent = 'Aupa Osasuna!';

//3.2 Añadir párrafo nuevo delante del título principal
let destino = document.querySelector('h1');
destino.prepend(nuevoParrafo);
