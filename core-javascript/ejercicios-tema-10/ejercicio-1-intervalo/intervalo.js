// 1. Crea un intervalo que vaya imprimiendo un 1 cada segundo
const intervalo = setInterval(() => {
	console.log(1);
}, 1000);

setTimeout(() => {
	clearInterval(intervalo);
	console.log('Intervalo detenido');
}, 10000);

module.exports = { setInterval };
