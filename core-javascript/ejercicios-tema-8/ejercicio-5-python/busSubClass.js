// 1.5 Suponiendo que tienes esta clase (escrita en Python, la tienes que
//     convertir a javascript):
//     class Vehicle:
//      def __init__(self, name, max_speed, capacity):
//      self.name = name
//      self.max_speed = max_speed
//      self.mileage = mileage
//      def seating_capacity(self, capacity):
//      return f"The seating capacity of a {self.name} is {capacity} passengers"
//     Crea una clase llamada Bus que hereda de esta y que:
//     - Tenga como valor por defecto de la propiedad seating_capacity a 50.
//     - También debe tener un método que sirva para imprimir todas las
//     direcciones que tiene en su itinerario (mínimo 10 direcciones)
//     - Si ahora quisiéramos instanciar varios objetos Bus con las direcciones de
//     pamplona de la 16 y la 4, por ejemplo, ¿Cómo harías para meterle las
//     direcciones? Recrea el ejemplo
class Vehicle {
	constructor(name, max_speed, capacity) {
		this.name = name;
		this.max_speed = max_speed;
		this.capacity = capacity;
	}

	seatingCapacity() {
		return `The seating capacity of a ${this.name} is ${this.capacity} passengers`;
	}
	showInfo() {
		console.log(`Name: ${this.name}`);
		console.log(`Max Speed: ${this.max_speed} km/h`);
		console.log(`Vehicle Capacity: ${this.capacity} passengers`);
	}
}
const myVehicle = new Vehicle('Ibiza', 160, 4);
console.log(myVehicle.seatingCapacity());
myVehicle.showInfo();
const myFamilyVehicle = new Vehicle('Touran', 200, 5);
console.log(myFamilyVehicle.seatingCapacity);
myFamilyVehicle.showInfo();

class Bus extends Vehicle {
	constructor(name, max_speed, capacity = 50) {
		super(name, max_speed, capacity);
		this.itinerary = [];
	}
	addStreetStop(address) {
		this.itinerary.push(address);
	}
	showItinerary() {
		this.itinerary.forEach((address, index) => {
			console.log(`${index + 1}. ${address}`);
		});
	}
}
const bus1 = new Bus('Pamplona Bus 1', 120);
bus1.addStreetStop('Universidad de Navarra');
bus1.addStreetStop('Esquiroz');
bus1.addStreetStop('Sancho el Fuerte');
bus1.addStreetStop('Avda Zaragoza');
bus1.addStreetStop('Principe de Viana');
bus1.addStreetStop('Baja Navarra');
bus1.addStreetStop('Merindades');
bus1.addStreetStop('Cortes de Navarra');
bus1.addStreetStop('Plaza de Toros');
bus1.addStreetStop('Sangüesa');

const bus2 = new Bus('Pamplona Bus 2', 100);
bus2.addStreetStop('Cortes de Navarra');
bus2.addStreetStop('Sangüesa');
bus2.addStreetStop('Merindades');
bus2.addStreetStop('Baja Navarra');
bus2.addStreetStop('Principe de Viana');
bus2.addStreetStop('Zaragoza');
bus2.addStreetStop('Plaza de los fueros');
bus2.addStreetStop('Sancho el Fuerte');
bus2.addStreetStop('Iturrama');
bus2.addStreetStop('Barañain');

bus1.showItinerary();
bus2.showItinerary();

module.exports = { Vehicle, Bus };
