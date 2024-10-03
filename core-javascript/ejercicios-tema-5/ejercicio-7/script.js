// def coordenadaZ(x,y):
// x=x+10
// y=y+15
// return x+y

// #programa principal
// x=int(input("Coordenada eje x: "))
// y=int(input("Coordenada eje y: "))
// for i in Range(3):
// z=coordenadaZ(x,y)
// x=x+1
// y=y+1
// print(x," . ",y)
function coordenadaZ(x, y) {
    x = x + 10;
    y = y + 15;
    return x + y;
}

// Programa principal
let x = parseInt(prompt("Coordenada eje x: "));
let y = parseInt(prompt("Coordenada eje y: "));

for (let i = 0; i < 3; i++) {  // Nota: "Range" se cambia por "for" en JavaScript
    const z = coordenadaZ(x, y);
    x = x + 1;
    y = y + 1;
    console.log(`${x} . ${y}`);  // Imprime las coordenadas
};

