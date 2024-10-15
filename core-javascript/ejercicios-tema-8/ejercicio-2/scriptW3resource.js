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
for (const prop in student) {
  console.log(`${prop}: ${student[prop]}`);
}

// 2. Write a JavaScript program to delete the rollno property from the following object.
// Also print the object before or after deleting the property.
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

const { length } = Object.keys(student);
console.log(length);

// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

const library = [
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
for (const book of library) {
  console.log(book.author, book.title, book.readingStatus);
}

// 5. Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.

const cylinder = {
  radio: 3,
  height: 5,
  volume() {
    const volume = Math.PI * this.radio ** 2 * this.height;
    return volume.toFixed(4);
  },
};
console.log(cylinder.volume());

// 6. Write a bubble sort algorithm in JavaScript.
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
// Sample Data: [6,4,0, 3,-2,1]
// Expected Output : [-2, 0, 1, 3, 4, 6]

const data = [6, 4, 0, 3, -2, 1];
for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data.length - 1; j++) {
    if (data[j] > data[j + 1]) {
      const temp = data[j];
      data[j] = data[j + 1];
      data[j + 1] = temp;
    }
  }
}
console.log(data);

// 7. Write a JavaScript program that returns a subset of a string.
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

const dogData = 'iñaki';
const subsetDog = [];
for (let i = 0; i < dogData.length; i++) {
  for (let j = i; j < dogData.length; j++) {
    subsetDog.push(dogData.substring(i, j + 1));
  }
}
console.log(subsetDog);

// 8. Write a JavaScript program to create a clock.
// Note: The output will come every second.
// Expected Console Output :
// "14:37:42"
// "14:37:43"
// "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"

const reloj = () => {
  const now = new Date(); // Crea una nueva instancia de Date
  const hours = now.getHours(); // Obtiene las horas
  const minutes = now.getMinutes(); // Obtiene los minutos
  const seconds = now.getSeconds(); // Obtiene los segundos

  // Formatea la hora en formato hh:mm:ss
  const time = `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  console.log(time);
};

setInterval(reloj, 1000);
