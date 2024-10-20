function sayHi() {
	alert('Hola');
}

// Las funciones globales son métodos del objeto global:
window.sayHi();

console.log('Altura interior de la ventana', window.innerHeight);
console.log(
	'Ancho interior de la ventana del navegador (excluyendo las barras de herramientas y marcos)',
	window.innerWidth,
);
console.log(
	'Ancho total de la ventana del navegador, incluyendo las barras de herramientas y marcos.',
	window.outerWidth,
);
console.log(
	'Altura total de la ventana del navegador, incluyendo las barras de herramientas y marcos.',
	window.outerHeight,
);
console.log(
	'Coordenadas X e Y de la ventana del navegador respecto a la pantalla.',
	window.screenX,
	window.screenY,
);
console.log(
	'Cantidad de píxeles que la página se ha desplazado horizontal y verticalmente.',
	window.scrollX,
	window.scrollY,
);
console.log(
	'Objeto Location con información sobre la URL actual de la ventana.',
	window.location.href,
);
// cambiar el color de fondo a rojo
document.body.style.background = 'red';
// deshacer el cambio después de 1 segundo
setTimeout(() => (document.body.style.background = ''), 1000);
alert(location.href); // muestra la URL actual
if (confirm('Ir a wikipedia?')) {
	location.href = 'https://wikipedia.org'; // redirigir el navegador a otra URL
}
