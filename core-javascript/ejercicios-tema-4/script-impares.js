// 1.8. Preguntar un número por input, después, imprimir todos los
// números impares hasta él
const imprimirImpares = () => {
    const num1 = parseFloat(document.getElementById('numero1').value);
    let resultado = '';
    for (let i = 0; i <= num1; i++) {
        if (i % 2 != 0) {
            resultado += i + '<br>'; 
        }
    }
    document.getElementById('resultado').innerHTML = resultado; 
};
