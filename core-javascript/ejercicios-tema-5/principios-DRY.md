# El Principio DRY: No Te Repitas

Este principio es fundamental en la programación y se complementa muy bien con SOLID. DRY establece que cualquier pieza de información debe tener una única, inequívoca representación dentro de un sistema. En otras palabras, no debes repetir código.

## ¿Por qué es importante DRY?

- Mantenibilidad: Si tienes un fragmento de código en varios lugares y necesitas hacer un cambio, tendrás que modificarlo en todos esos lugares. Esto aumenta el riesgo de introducir errores y hace que el mantenimiento sea más difícil.
- Legibilidad: Un código con menos duplicaciones es más fácil de entender y seguir, ya que no hay que buscar en múltiples lugares para comprender una determinada funcionalidad.
- Reutilización: Al evitar la duplicación, fomentas la creación de funciones y módulos reutilizables, lo que agiliza el desarrollo.
- Consistencia: Al tener una única fuente de verdad para cada pieza de información, reduces la probabilidad de inconsistencias.

## Ejemplos de violación del principio DRY:

- Códigos duplicados: Tener el mismo bloque de código en diferentes partes de tu programa.
- Cálculos redundantes: Realizar la misma operación matemática en varios lugares.
- Variables con el mismo propósito: Tener múltiples variables que almacenan la misma información.

## Cómo aplicar DRY en JavaScript:

- Funciones: Crea funciones para encapsular bloques de código que se repiten.
- Constantes: Define constantes para valores que no cambian.
- Clases: Utiliza clases para modelar objetos y sus comportamientos.
- Módulos: Organiza tu código en módulos para promover la reutilización.

### Ejemplo:

Imagina que tienes un código donde calculas el área de un círculo en varias partes de tu programa. En lugar de repetir la fórmula cada vez, puedes crear una función:

```JavaScript
function calcularAreaCirculo(radio) {
return Math.PI _ radio _ radio;
}
Usa el código con precaución.

Y luego usar esta función en cualquier lugar donde necesites el área:

JavaScript
const radio1 = 5;
const area1 = calcularAreaCirculo(radio1);

const radio2 = 10;
const area2 = calcularAreaCirculo(radio2);
```

Usa el código con precaución.

## Combinando DRY con SOLID:

El principio DRY trabaja en conjunto con SOLID. Por ejemplo, el SRP nos ayuda a identificar las responsabilidades individuales de una clase, lo que a su vez facilita la aplicación de DRY al evitar que una clase tenga múltiples responsabilidades que puedan llevar a la duplicación de código.

## En resumen:

DRY es un principio fundamental que te ayudará a escribir código más limpio, mantenible y eficiente. Al evitar la duplicación de código, estarás construyendo aplicaciones más robustas y escalables.
