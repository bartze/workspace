// 1. Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno

const student = {
	name: 'David Rey',
	sclass: 'VI',
	rollno: 12,
};
for (let prop in student) {
	console.log(`${prop}: ${student[prop]}`);
}

// 2. Write a JavaScript program to delete the rollno property from the following object.
//Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
delete student.rollno;
console.log(student);
// 3. Write a JavaScript program to get the length of a JavaScript object.
// Sample object :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
student.rollno = 12;
console.log(student);

const length = Object.keys(student).length;
console.log(length);

// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

let library = [
	{
		author: 'Bill Gates',
		title: 'The Road Ahead',
		readingStatus: true,
	},
	{
		author: 'Steve Jobs',
		title: 'Walter Isaacson',
		readingStatus: true,
	},
	{
		author: 'Suzanne Collins',
		title: 'Mockingjay: The Final Book of The Hunger Games',
		readingStatus: false,
	},
];
for (let book of library) {
	console.log(book.author, book.title, book.readingStatus);
}

// 5. Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.

const cylinder = {
	radio: 3,
	height: 5,
	volume: function () {
		const volume = Math.PI * Math.pow(this.radio, 2) * this.height;
		return volume.toFixed(4);
	},
};
console.log(cylinder.volume());
