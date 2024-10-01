//Matriz de decisiones:
//Edad          Años trabajados   Dias de vacaciones
//---------------------------------------------------------------
//<18 o >60 o   30                  22+5
// >60      o   30                  22+3 Acumula
//>45       o   15                  22+2 No acumula                     
function calcularDiasVacaciones(edad, anios) {
    let diasVacaciones = 22;
    if (edad < 18 || edad >= 60 || anios >= 30) {
        diasVacaciones += 5;
    } 
    if (edad > 60 || anios >= 30) {
        diasVacaciones += 3;
    } else if (edad > 45 || anios >=15) {
        diasVacaciones += 2;
    }

    return diasVacaciones;
  }
  
  module.exports = { calcularDiasVacaciones };