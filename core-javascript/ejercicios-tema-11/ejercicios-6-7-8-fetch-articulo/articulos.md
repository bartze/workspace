# Proyecto: Fetch y DOM

He disfrutado y aprendido mucho con esta aplicación. Empezó siendo un ejercicio usando `fetch` y manipulando el DOM. Luego evolucionó a tener varios archivos HTML, para gestionar cada petición en su propia página.

### Dificultades y Soluciones

Programar los tests resultó ser complicado, ya que Jest no se enlazaba bien con el DOM y `fetch`. Investigando documentación, aprendí a usar `module.exports` y a configurar Jest para manejar `fetch` y el DOM.

### Ejecución

Al exportar `node-fetch`, la página deja de funcionar si se ejecuta en local. Para que la página y los tests funcionen correctamente, es necesario ejecutar `index.html` con Live Server.

### Script sin live server ni test

También incluyo el fichero inicial en JavaScript, donde funciona todo correctamente y sin Live Server, pero al que no conseguía configurar los test en jest.
