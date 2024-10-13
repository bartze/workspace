const { Vehicle, Bus } = require('../busSubClass');

describe('Vehicle Class', () => {
	it('debería inicializar con los valores proporcionados', () => {
		const vehicle = new Vehicle('Ibiza', 160, 4);
		expect(vehicle.name).toBe('Ibiza');
		expect(vehicle.max_speed).toBe(160);
		expect(vehicle.capacity).toBe(4);
	});

	it('debería devolver la capacidad de asientos correctamente', () => {
		const vehicle = new Vehicle('Touran', 200, 5);
		expect(vehicle.seatingCapacity()).toBe('The seating capacity of a Touran is 5 passengers');
	});

	it('debería mostrar la información correctamente', () => {
		const vehicle = new Vehicle('Ibiza', 160, 4);
		console.log = jest.fn(); // Mockear console.log
		vehicle.showInfo();
		expect(console.log).toHaveBeenCalledWith('Name: Ibiza');
		expect(console.log).toHaveBeenCalledWith('Max Speed: 160 km/h');
		expect(console.log).toHaveBeenCalledWith('Vehicle Capacity: 4 passengers');
	});
});

describe('Bus Class', () => {
	it('debería inicializar con la capacidad por defecto si no se proporciona', () => {
		const bus = new Bus('Pamplona Bus 1', 120);
		expect(bus.capacity).toBe(50);
	});

	it('debería inicializar con los valores proporcionados', () => {
		const bus = new Bus('Pamplona Bus 2', 100, 60);
		expect(bus.name).toBe('Pamplona Bus 2');
		expect(bus.max_speed).toBe(100);
		expect(bus.capacity).toBe(60);
	});

	it('debería añadir paradas al itinerario', () => {
		const bus = new Bus('Pamplona Bus 1', 120);
		bus.addStreetStop('Universidad de Navarra');
		bus.addStreetStop('Esquiroz');
		expect(bus.itinerary.length).toBe(2);
		expect(bus.itinerary).toContain('Universidad de Navarra');
		expect(bus.itinerary).toContain('Esquiroz');
	});

	it('debería imprimir el itinerario correctamente', () => {
		const bus = new Bus('Pamplona Bus 1', 120);
		bus.addStreetStop('Universidad de Navarra');
		bus.addStreetStop('Esquiroz');
		console.log = jest.fn(); // Mockear console.log
		bus.showItinerary();
		expect(console.log).toHaveBeenCalledWith('1. Universidad de Navarra');
		expect(console.log).toHaveBeenCalledWith('2. Esquiroz');
	});

	it('debería devolver la capacidad de asientos correctamente', () => {
		const bus = new Bus('Pamplona Bus 1', 120, 75);
		expect(bus.seatingCapacity()).toBe(
			'The seating capacity of a Pamplona Bus 1 is 75 passengers',
		);
	});
});
