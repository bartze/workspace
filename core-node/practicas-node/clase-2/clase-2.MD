## Huevo de pascua

el enlace https://u.top.ia es ficticio

## Enlaces interesantes

Loop de enventos:
https://developer.mozilla.org/es/docs/Web/JavaScript/Event_loop

Ideas para monetizar:
https://opencollective.com/babel

## nvm.sh qué es y cómo instalar

Es un script de bash que permite gestionar múltiples versiones de Node.jsen tu sistema. Es una herramienta muy útil para desarrolladores que necesitan trabajar con diferentes versiones de Node.js

página oficial:
https://github.com/nvm-sh/nvm

Si tienes curl instalado:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh

## "type":"module"

Los archivos JavaScript en tu proyecto deben ser tratados como módulos ES6 en lugar de módulos CommonJS.
permite usar la sintaxis de importación/exportación de ES6:
// Importación de un módulo ES6
import express from 'express';

// Exportación de una función o variable
export function myFunction() {
// ...
}

### Ventajas de Utilizar "type": "module":

Sintaxis Moderna: Permite usar import y export, que son más intuitivos y se alinean con el estándar de ES6.

Compatibilidad: Facilita la interoperabilidad con código de navegador y otros entornos de JavaScript.

Mantenimiento: Mejora la legibilidad y el mantenimiento del código gracias a una sintaxis más clara.

### Archivos.mjs

También es cierto que puedes usar la extensión .mjs para tus archivos de módulos ES6. Node.jsreconoce automáticamente los archivos con extensión .mjs como módulos ES6, independientemente de la configuración en tu package.json.

¿Cuándo Usar .mjs?
Compatibilidad: Si estás trabajando en un proyecto que mezcla CommonJS y ES6, o si el proyecto no tiene un package.json con "type": "module".

Claridad: Para indicar explícitamente que un archivo es un módulo ES6.
