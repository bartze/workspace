let el = document.getElementById('xx');
el.addEventListener('click', myFunc);

function myFunc() {
	let el2 = document.getElementById('resultado');
	el2.innerHTML = 'Ha funcionado!';
}
