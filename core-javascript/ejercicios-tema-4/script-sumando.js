// 1.9. Preguntar un número de números a introducir, después,
// preguntar por esos números, por último, sacar por pantalla la suma de
// los mismos. 
document.getElementById('botonCantidad').onclick = function() {
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const inputContainer = document.getElementById('inputContainer');
    const numerosInputs = document.getElementById('numerosInputs');
    numerosInputs.innerHTML = ''; // Limpiar los inputs anteriores
    
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, introduce un número válido.");
        return;
    }

    inputContainer.style.display = 'block'; // Mostrar el contenedor de entradas
    for (let i = 0; i < cantidad; i++) {
        const input = document.createElement('input');
        input.type = 'number';
        input.placeholder = `Número ${i + 1}`;
        input.id = `numero${i + 1}`;
        numerosInputs.appendChild(input);
    }
};

document.getElementById('botonSumar').onclick = function() {
    const cantidad = parseInt(document.getElementById('cantidad').value);
    let suma = 0;
    let validInput = true;

    for (let i = 0; i < cantidad; i++) {
        const numero = parseFloat(document.getElementById(`numero${i + 1}`).value);
        if (!isNaN(numero)) {
            suma += numero; 
        } else {
            validInput = false;
            break;
        }
    }

    if (validInput) {
        document.getElementById('resultado').textContent = `La suma de los números introducidos es: ${suma}`;
    } else {
        document.getElementById('resultado').textContent = "Por favor, introduce solo números.";
    }
};