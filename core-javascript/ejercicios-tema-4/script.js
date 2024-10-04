// 1.1. Imprimir los números del 1 al 100 de uno en uno como alerta
for (let i = 1; i <= 100; i++) {
  // alert(i);
  console.log(i);// La alerta es un peñazo, lo cambio a console.log
}
// 1.2. Imprimir sólo los números pares del 1 al 100 en log de consola
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(`Par ${i}`);// La alerta es un peñazo, lo cambio a console.log
  }
}
// 1.3. Imprimir sólo los números múltiplos de 20 del 1 al 1000 por
// pantalla
for (let i = 1; i <= 1000; i++) {
  if (i % 20 === 0) {
    console.log(`M20 ${i}`);// La alerta es un peñazo, lo cambio a console.log
  }
}
// 1.4. Dibujar un cuadrado por pantalla
for (i = 0; i < 10; i++) {
  document.write('_');
}
document.write('<br>');
for (i = 0; i < 4; i++) {
  document.write('|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br>');
}
for (i = 0; i < 17; i++) {
  document.write('‾');
}
// 1.5. Dibujar un rombo por pantalla
document.write('<br>');
const dibujarRombo = (n) => {
  // Parte superior del rombo
  for (let i = 1; i <= n; i++) {
    // Espacios en blanco
    document.write('&nbsp;'.repeat(n - i));
    // Asteriscos
    document.write('*'.repeat(i));
    document.write('<br>');
  }
  // Parte inferior del rombo
  for (let i = n - 1; i >= 1; i--) {
    // Espacios en blanco
    document.write('&nbsp;'.repeat(n - i));
    // Asteriscos
    document.write('*'.repeat(i));
    document.write('<br>');
  }
};
dibujarRombo(5);

document.write('<br>');
function dibujarRomboConsola(tamano) {
  // La mitad del tamaño del rombo
  const mitad = Math.floor(tamano / 2);
  // Parte superior del rombo
  for (let i = 0; i <= mitad; i++) {
    let linea = ' '.repeat(mitad - i);
    linea += '*'.repeat(2 * i + 1);
    console.log(linea);
  }
  // Parte inferior del rombo
  for (let i = mitad - 1; i >= 0; i--) {
    let linea = ' '.repeat(mitad - i);
    linea += '*'.repeat(2 * i + 1);
    console.log(linea);
  }
}
dibujarRomboConsola(10);

// 1.6. Imprimir por pantalla las tablas de multiplicar del 0 al 9
for (let i = 0; i < 10; i++) {
  console.log(`Tabla de multiplicar del ${i}`);
  for (let j = 0; j <= 10; j++) {
    console.log(`${i} x ${j} = ${j * i}`);
    document.getElementById('resultado').textContent = `${i} x ${j} = ${j * i}`;
  }
}
// 1.7. Página web ejecutada en bucle infinito que pregunta por una
// multiplicación y te responde con la solución mientras te vuelve a
// preguntar de nuevo.
function multiplicarInfinitamente() {
  while (true) {
    const num1 = parseFloat(prompt('Ingresa el primer número a multiplicar:'));
    const num2 = parseFloat(prompt('Ingresa el segundo número a multiplicar:'));

    if (isNaN(num1) || isNaN(num2)) {
      alert('Por favor, introduce solo números.');
      continue; // Vuelve al inicio del bucle
    }

    const resultado = num1 * num2;
    alert(`El resultado de ${num1} * ${num2} es: ${resultado}`);
  }
}
multiplicarInfinitamente();
