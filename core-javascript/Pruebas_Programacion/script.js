function addTogether(num1, num2) {
    // Validar si el primer argumento no es un número
    if (typeof num1 !== "number") {
        return undefined;
    }

    // Si el segundo argumento está definido
    if (num2 !== undefined) {
        if (typeof num2 !== "number") {
            return undefined;
        }
        return num1 + num2;
    }

    // Si solo hay un argumento (num2 es undefined)
    if (arguments.length === 1) {
        // Devolver una función que espera el segundo argumento
        return function(num2) {
            if (typeof num2 !== "number") {
                return undefined;
            }
            return num1 + num2;
        };
    }

    return undefined; // Para el caso addTogether(5, undefined)
}

// Ejemplos de uso
console.log(addTogether(2, 3)); // Debería devolver 5
const sumTwoAnd = addTogether(2);
console.log(sumTwoAnd(3)); // Debería devolver 5
console.log(addTogether(5, undefined)); // Debería devolver undefined


