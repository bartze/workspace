//Matriz de decisiones:
//Ejercicio de pizarra(BE)  Ejercicios de laboratorio(LE)   Ejercicios escritos(WB) TotalEjercicios
//-------------------------------------------------------------------------------------------------
//< 25                      < 25                             < 25
//                                                                                  >=76 <=100
function calcularNotas(BE, LE, WB, totalEjercicios) {
    let notaFinal;
    totalEjercicios = (BE + LE + WB)
    if (BE < 25 || LE < 25 || WB < 25){
        notaFinal = "Suspendido";
    }
    if (totalEjercicios < 76 ) {
        notaFinal = "Suspendido";
    } else if (totalEjercicios <=100 && totalEjercicios >= 76) {
        notaFinal = "Aprobado";
    } else if (totalEjercicios <=125 && totalEjercicios >= 101) {
        notaFinal = "Bien";
    } else if (totalEjercicios > 125) { 
        notaFinal = "Muy Bien";
    }
    return notaFinal;
  }
  
  module.exports = { calcularNotas };