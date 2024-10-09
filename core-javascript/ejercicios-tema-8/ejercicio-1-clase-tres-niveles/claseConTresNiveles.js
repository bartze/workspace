// 1.1 Crea una jerarquía teórica de tres niveles de clases, la que quieras, sobre
// un caso que podría ser utilizado en un programa. Ejemplo: Animales ->
// Mamíferos -> Perros. Después, impleméntalo de manera práctica.
class SpaceShip {
	constructor(name, maxSpeed, crewCapacity) {
		this.name = name;
		this.maxSpeed = maxSpeed;
		this.crewCapacity = crewCapacity;
	}

	takeOff() {
		console.log(`${this.name} is taking off.`);
	}

	land() {
		console.log(`${this.name} is landing.`);
	}

	showInfo() {
		console.log(`Name: ${this.name}`);
		console.log(`Max Speed: ${this.maxSpeed} km/h`);
		console.log(`Crew Capacity: ${this.crewCapacity} people`);
	}
}

const ship1 = new SpaceShip('Explorer', 50000, 5);
ship1.takeOff();
ship1.showInfo();
ship1.land();

const ship2 = new SpaceShip('Nostromo', 20000, 24);
ship2.takeOff();
ship2.land();
ship2.showInfo();

class CrewMember extends SpaceShip {
	constructor(name, maxSpeed, crewCapacity, crewName, crewRole) {
		super(name, maxSpeed, crewCapacity);
		this.crewName = crewName;
		this.crewRole = crewRole;
	}
	showCrewInfo() {
		console.log(`Name: ${this.crewName}`);
		console.log(`Role: ${this.crewRole}`);
	}
	performDuty() {
		console.log(`${this.crewName} is performing their duty as ${this.crewRole}.`);
	}

	rest() {
		console.log(`${this.crewName} is resting.`);
	}

	reportStatus() {
		console.log(`${this.crewName} is reporting their status.`);
	}

	train() {
		console.log(`${this.crewName} is training for their role as ${this.crewRole}.`);
	}
}
// const crew1 = new CrewMember('Explorer', 50000, 5, 'Alice', 'Captain');
// crew1.showCrewInfo();
// crew1.performDuty();
// crew1.rest();
// crew1.reportStatus();
// crew1.train();

class CrewFunctions extends CrewMember {
	constructor(
		name,
		maxSpeed,
		crewCapacity,
		crewName,
		crewRole,
		crewPrincipalFunction,
		crewSecondaryFunction,
	) {
		super(name, maxSpeed, crewCapacity, crewName, crewRole);
		this.crewPrincipalFunction = crewPrincipalFunction;
		this.crewSecondaryFunction = crewSecondaryFunction;
	}
	showCrewFunctionsInfo() {
		console.log(`Function: ${this.crewPrincipalFunction}`);
		console.log(`Secondary function: ${this.crewSecondaryFunction}`);
	}
	pilotShip() {
		console.log(`${this.crewName} is piloting the ship.`);
	}

	healCrew() {
		console.log(`${this.crewName} is healing a crew member.`);
	}

	organizeMission() {
		console.log(`${this.crewName} is organizing the mission.`);
	}

	cookMeal() {
		console.log(`${this.crewName} is cooking a meal.`);
	}
}
const crew1 = new CrewFunctions('Explorer', 50000, 5, 'Alice', 'Captain', 'Pilot', 'Engineer');
crew1.showCrewInfo();
crew1.showCrewFunctionsInfo();
crew1.pilotShip();
crew1.organizeMission();
const crew2 = new CrewFunctions('Nostromo', 20000, 24, 'Emmet', 'Doctor', 'Health', 'Cook');
crew2.showCrewInfo();
crew2.showCrewFunctionsInfo();
crew2.healCrew();
crew2.cookMeal();
