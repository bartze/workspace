// 10.Crea una función que te devuelva el área de un círculo.
const calcularAreaCirculo = (radio) => {
  const pi = Math.PI;
  return pi * radio ** 2;
};
const radio = 5;
const areaCirculo = calcularAreaCirculo(radio);
console.log(`El área del círculo con radio ${radio} es ${areaCirculo}`);

// 11.Crea una función que te devuelva el área de un rectángulo y de un
// triángulo

const calcularAreaRectangulo = (base, altura) => base * altura;
const base = 10;
const altura = 5;
const areaRectangulo = calcularAreaRectangulo(base, altura);
console.log(`El área del rectángulo con base ${base} y altura ${altura} es ${areaRectangulo}`);

const calcularAreaTriangulo = (base, altura) => base * altura / 2;
const areaTriangulo = calcularAreaTriangulo(base, altura);
console.log(`El área del triiángulocon base ${base} y altura ${altura} es ${areaTriangulo}`);

// 12.Crea una función que reciba cuatro esquinas (puntos x, y) y devuelva el
// tamaño en píxeles de la imagen

const calcularTamanioPixeles = (x1, y1, x2, y2) => {
  const ancho = Math.abs(x2 - x1);
  const alto = Math.abs(y2 - y1);
  const tamaño = ancho * alto;
  return `El tamaño en píxeles del área rectangular es: ${tamaño}`;
};
console.log(calcularTamanioPixeles(3, 4, 7, 1));

// 13.Crea una función que reciba cuatro esquinas y calcule el área del
// rectángulo

const calcularAreaRectanguloConCuatroPuntos = (x1, x2, x3, x4, y1, y2, y3, y4) => {
  const ancho = Math.abs(x3 - x1);
  const alto = Math.abs(y2 - y1);
  const area = ancho * alto;

  console.log(`El área del rectángulo es: ${area}`);
};
calcularAreaRectanguloConCuatroPuntos(1, 1, 5, 5, 1, 4, 4, 1);

// 14.Crea una función que tenga como entrada un string y una vocal y te
// cambie todas las vocales del string por esa vocal. Después, imprime por
// pantalla “Cuando Fernando Séptimo llevaba pantalón” con las diferentes
// vocales.

const frase = 'Cuando Fernando Séptimo llevaba pantalón';
const cambiarVocales = (palabras, vocal) => palabras.replace(/[aeiou]/gi, vocal);
const nuevaFraseA = cambiarVocales(frase, 'a');
console.log(nuevaFraseA);
const nuevaFraseE = cambiarVocales(frase, 'e');
console.log(nuevaFraseE);
const nuevaFraseI = cambiarVocales(frase, 'i');
console.log(nuevaFraseI);
const nuevaFraseO = cambiarVocales(frase, 'o');
console.log(nuevaFraseO);
const nuevaFraseU = cambiarVocales(frase, 'u');
console.log(nuevaFraseU);

// 15.Crea una función que reciba 2 parámetros, precio e iva, y devuelva el
// precio con iva incluido. Si no recibe el iva, aplicará el 21 por ciento por
// defecto

const calcularIVA = (precio, iva = 0.21) => {
  const ivaCalculado = precio * iva;
  return precio + ivaCalculado;
};

console.log(calcularIVA(100));
console.log(calcularIVA(100, 0.10));

// 16.(Avanzado)Crea una función que reciba un texto y lo devuelva al revés

const invertirTexto = (texto) => {
  texto = texto.trim();
  if (texto === '') {
    return '';
  }
  return texto.split('').reverse().join('');
};
const textoInvertido = invertirTexto('Crea una función que reciba un texto y lo devuelva al revés');
console.log(textoInvertido);

const invertirTextoConFor = (texto) => {
  let textoInvertido = '';
  for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i];
  }
  return textoInvertido;
};

const textoInvertidoConFor = invertirTextoConFor('Crea una función que reciba un texto y lo devuelva al revés');
console.log(textoInvertidoConFor);
