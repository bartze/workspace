// 10.Crea una función que te devuelva el área de un círculo. 
const calcularAreaCirculo = (radio) => {
    const pi = Math.PI;
    return pi * Math.pow(radio, 2);
}
const radio = 5;
const areaCirculo = calcularAreaCirculo(radio);
console.log(`El área del círculo con radio ${radio} es ${areaCirculo}`);

// 11.Crea una función que te devuelva el área de un rectángulo y de un
// triángulo

const calcularAreaRectangulo = (base, altura) => {
    return base*altura;
};
const base = 10;
const altura = 5;
const areaRectangulo = calcularAreaRectangulo(base, altura);
console.log(`El área del rectángulo con base ${base} y altura ${altura} es ${areaRectangulo}`);

const calcularAreaTriangulo = (base, altura) => {
    return base*altura/2;
};
const areaTriangulo = calcularAreaTriangulo(base, altura);
console.log(`El área del triiángulocon base ${base} y altura ${altura} es ${areaTriangulo}`);
