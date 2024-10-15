// Crea un generador del producto de los elementos de un array
function* generadorElementos(arr) {
	let producto = 1;
	for (let num of arr) {
		producto *= num;
		yield producto;
	}
}
// const array = [1, 2, 3, 4, 5];
// const gen = generadorElementos(array);

// for (let valor of gen) {
// 	console.log(valor);
// }

module.exports = { generadorElementos };
