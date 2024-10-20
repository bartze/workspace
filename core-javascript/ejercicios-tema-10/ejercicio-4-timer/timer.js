// 4. Crea un timer que cada dos segundos vaya mostrando por pantalla una
// lista de animales.
const animals = ['Perro', 'Gato', 'Ratón', 'Conejo', 'Leon', 'Tigre', 'Elefante', 'Jirafa'];
const showAnimals = async () => {
	let index = 0;
	const interval = setInterval(() => {
		if (index >= animals.length) {
			clearInterval(interval);
		} else {
			console.log(animals[index]);
			index++;
		}
	}, 2000);
};
// showAnimals();

module.exports = { showAnimals, animals };
