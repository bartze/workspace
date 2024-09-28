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

//   7. Write a JavaScript program that iterates integers from 1 to 100. 
//But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". 
//For numbers multiples of both three and five print "FizzBuzz".

for(let i=1; i<101; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0){
        console.log("Fizz");
    } else if(i % 5 === 0) {
        console.log("Buzz")
    } else console.log(i);
};

// 8. According to Wikipedia a happy number is defined by the following process :
// "Starting with any positive integer, replace the number by the sum of the squares of its digits, 
//and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. 
//Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".
// Write a JavaScript program to find and print the first 5 happy numbers.

const esNumeroFeliz = (num)=> {
    while (num !== 1) {
      let sumaCuadrados = 0;
      while (num > 0) {
        const digito = num % 10;
        sumaCuadrados += digito ** 2;
        num = Math.floor(num / 10);
      }
      num = sumaCuadrados;
      if (num === 4) { // Si llega a 4, entra en un ciclo infinito
        return false;
      }
    }
    return true;
  }
  
  function encontrarPrimerosNumerosFelices(cantidad) {
    let contador = 0;
    let num = 1;
  
    while (contador < cantidad) {
      if (esNumeroFeliz(num)) {
        console.log("Happy " + num);
        contador++;
      }
      num++;
    }
  }
  
  encontrarPrimerosNumerosFelices(5);

//9. Write a JavaScript program to find the Armstrong numbers of 3 digits.
//An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself.
//For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.

const esNumeroArmstrong =(num) => {
    // Convertimos el número a una cadena para manipular los dígitos
    const numStr = num.toString();
    
    // Inicializamos la suma de los cubos
    let sumaCubos = 0;
  
    // Iteramos sobre cada dígito del número
    for (let i = 0; i < numStr.length; i++) {
      const digito = parseInt(numStr[i]);
      sumaCubos += digito ** 3;
    }
  
    // Comparamos la suma de los cubos con el número original
    return sumaCubos === num;
  }
  
  // Encontramos y mostramos los números de Armstrong de 3 dígitos
  for (let i = 100; i <= 999; i++) {
    if (esNumeroArmstrong(i)) {
      console.log("Amstrong " + i);
    }
  }

//10. Write a JavaScript program to construct the following pattern, using a nested for loop.

for (let i = 1; i<=5; i++) {
    for (let j = 1; j<=i; j++){
        console.log("*");
    }
    console.log("\n");//Salto de línea
}

// 11. Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.

const calcularMCD = (num1, num2)=>{
    // Algoritmo de Euclides
    while (num2 !== 0) {
      const temp = num2;
      num2 = num1 % num2;
      num1 = temp;
    }
    return num1;
  }
  
  // Ejemplo de uso:
  const numero1 = 24;
  const numero2 = 36;
  
  const mcd = calcularMCD(numero1, numero2);
  console.log(`El MCD de ${numero1} y ${numero2} es: ${mcd}`);

  //12. Write a JavaScript program to sum 3 and 5 multiples under 1000.
  const sumarMultiplos = (limite) => {
    let suma = 0;
  
    for (let i = 0; i < limite; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        suma += i;
      }
    }
  
    return suma;
  }
  
  const resultado = sumarMultiplos(1000);
  console.log("La suma de los múltiplos de 3 y 5 menores de 1000 es:", resultado);