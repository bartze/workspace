const { SpaceShip, CrewMember, CrewFunctions } = require('../claseConTresNiveles');

describe('SpaceShip', () => {
	test('should create a spaceship with given properties', () => {
		const ship = new SpaceShip('Explorer', 50000, 5);
		expect(ship.name).toBe('Explorer');
		expect(ship.maxSpeed).toBe(50000);
		expect(ship.crewCapacity).toBe(5);
	});

	test('should take off and land', () => {
		const ship = new SpaceShip('Explorer', 50000, 5);
		console.log = jest.fn();
		ship.takeOff();
		expect(console.log).toHaveBeenCalledWith('Explorer is taking off.');
		ship.land();
		expect(console.log).toHaveBeenCalledWith('Explorer is landing.');
	});

	test('should show info', () => {
		const ship = new SpaceShip('Explorer', 50000, 5);
		console.log = jest.fn();
		ship.showInfo();
		expect(console.log).toHaveBeenCalledWith('Name: Explorer');
		expect(console.log).toHaveBeenCalledWith('Max Speed: 50000 km/h');
		expect(console.log).toHaveBeenCalledWith('Crew Capacity: 5 people');
	});
});

describe('CrewMember', () => {
	test('should create a crew member with given properties', () => {
		const crew = new CrewMember('Explorer', 50000, 5, 'Alice', 'Captain');
		expect(crew.crewName).toBe('Alice');
		expect(crew.crewRole).toBe('Captain');
	});

	test('should show crew info', () => {
		const crew = new CrewMember('Explorer', 50000, 5, 'Alice', 'Captain');
		console.log = jest.fn();
		crew.showCrewInfo();
		expect(console.log).toHaveBeenCalledWith('Name: Alice');
		expect(console.log).toHaveBeenCalledWith('Role: Captain');
	});

	test('should perform duty', () => {
		const crew = new CrewMember('Explorer', 50000, 5, 'Alice', 'Captain');
		console.log = jest.fn();
		crew.performDuty();
		expect(console.log).toHaveBeenCalledWith('Alice is performing their duty as Captain.');
	});
});

describe('CrewFunctions', () => {
	test('should create a crew member with functions', () => {
		const crew = new CrewFunctions(
			'Explorer',
			50000,
			5,
			'Alice',
			'Captain',
			'Pilot',
			'Engineer',
		);
		expect(crew.crewPrincipalFunction).toBe('Pilot');
		expect(crew.crewSecondaryFunction).toBe('Engineer');
	});

	test('should show crew functions info', () => {
		const crew = new CrewFunctions(
			'Explorer',
			50000,
			5,
			'Alice',
			'Captain',
			'Pilot',
			'Engineer',
		);
		console.log = jest.fn();
		crew.showCrewFunctionsInfo();
		expect(console.log).toHaveBeenCalledWith('Function: Pilot');
		expect(console.log).toHaveBeenCalledWith('Secondary function: Engineer');
	});

	test('should pilot ship', () => {
		const crew = new CrewFunctions(
			'Explorer',
			50000,
			5,
			'Alice',
			'Captain',
			'Pilot',
			'Engineer',
		);
		console.log = jest.fn();
		crew.pilotShip();
		expect(console.log).toHaveBeenCalledWith('Alice is piloting the ship.');
	});
});
