//Empiezo con el 4, los ejercicios 1, 2 y 3 están resueltos en el proyecto practicandoGitconJavaScript también en GitHub
//4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
//Sample numbers : -5, -2, -6, 0, -1
//Output : 0
const obtenerNumeroMayor = (numeroUno, numeroDos, numeroTres, numeroCuatro, numeroCinco) => {
    if (numeroUno>numeroDos && numeroUno>numeroTres && numeroUno>numeroCuatro && numeroUno>numeroCinco) {
        console.log(numeroUno);
    }
    if (numeroDos>numeroUno && numeroDos>numeroTres && numeroDos>numeroCuatro && numeroDos>numeroCinco) {
        console.log(numeroDos);
    }
    if (numeroTres>numeroUno && numeroTres>numeroDos && numeroTres>numeroCuatro && numeroTres>numeroCinco) {
        console.log(numeroTres);
    }
    if (numeroCuatro>numeroUno && numeroCuatro>numeroDos && numeroCuatro>numeroTres && numeroCuatro>numeroCinco) {
        console.log(numeroCuatro);
    }
    if (numeroCinco>numeroUno && numeroCinco>numeroDos && numeroCinco>numeroTres && numeroCinco>numeroCuatro) {
        console.log(numeroCinco);
    }
}
obtenerNumeroMayor(-5, -2, -6, 0, -1);

//Otro manera de resolverlo más fácil y efeciente, pero sin usar condicionales
const obtenerNumeroMayorConMath = (numeroUno, numeroDos, numeroTres, numeroCuatro, numeroCinco) => {
    let numeroMayor = Math.max(numeroUno, numeroDos, numeroTres, numeroCuatro, numeroCinco);
    //alert(numeroMayor);
    console.log(numeroMayor);
    document.write(numeroMayor);
}

obtenerNumeroMayorConMath(-5, -2, -6, 0, -1);

//5. Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
//Sample Output :
//"0 is even"
//"1 is odd"
//"2 is even"

for(let i=0; i<16; i++){
    if (i % 2 ===0){
        console.log(`${i} is even`);
    } else console.log(`${i} is odd`);
}

//6. Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.

//Student Name	Marks
//David	80
//Vinoth	77
// Divya	88
// Ishitha	95
// Thomas	68
// The grades are computed as follows :

// Range	Grade
// <60	F
// <70	D
// <80	C
// <90	B
// <100	A
const students = [
    { name: "David", mark: 80 },
    { name: "Vinoth", mark: 77 },
    { name: "Divya", mark: 88 },
    { name: "Ishitha", mark: 95 },
    { name: "Thomas", mark: 68 },
  ];
  
  function calculateAverageAndGrades() {
    let totalMarks = 0;
  
    for (let i = 0; i < students.length; i++) {
      const student = students[i];
      totalMarks += student.mark;
  
      let grade;
      if (student.mark < 60) {
        grade = "F";
      } else if (student.mark < 70) {
        grade = "D";
      } else if (student.mark < 80) {
        grade = "C";
      } else if (student.mark < 90) {
        grade = "B";
      } else {
        grade = "A";
      }
  
      console.log(`${student.name} with ${student.mark} has grade = ${grade}`);
    }
  
    const averageMarks = totalMarks / students.length;
    console.log("Overall average marks:", averageMarks);
  }
  
  calculateAverageAndGrades();