# Index as a key is an anti-pattern

## Problema principal

Usar el índice como clave puede causar errores en la aplicación y mostrar datos incorrectos. React utiliza las claves para identificar elementos del DOM, y si se modifica la lista (añadiendo o eliminando elementos), las claves basadas en índices ya no corresponderán a los componentes correctos.

## Solución recomendada

Usar un identificador único y permanente para cada elemento de la lista. Idealmente, este identificador debería asignarse cuando se crea el elemento. Algunas opciones son:

1. Usar una propiedad existente del elemento que sea única.
2. Crear un contador global para asignar IDs únicos.
3. Utilizar una biblioteca como "shortid" para generar IDs únicos y robustos.

## Excepción a la regla

Se puede usar el índice como clave de manera segura solo cuando se cumplen todas estas condiciones:

1. La lista y sus elementos son estáticos (no cambian).
2. Los elementos no tienen IDs.
3. La lista nunca se reordena ni se filtra.

## Conclusión

Es importante generar un ID único para cada elemento y usarlo como clave al renderizar listas en React, para evitar problemas potenciales en el comportamiento de la aplicación.
