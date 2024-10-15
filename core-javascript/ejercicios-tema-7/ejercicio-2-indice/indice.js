// 2. Cuando defines un array de tamaño 4, ¿puedes asignar un valor al índice 26?

const ejercicios = ['Sentadillas', 'Core', 'Flexiones', 'Dominadas'];

const modificarEjercicios = () => {
  ejercicios[26] = 'Salir a correr';
  return ejercicios;
};

module.exports = { ejercicios, modificarEjercicios };
