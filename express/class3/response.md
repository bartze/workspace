# Métodos del objeto `response` (res) en Express.js

El objeto `res` representa la respuesta HTTP que una aplicación Express envía cuando recibe una solicitud HTTP.

## Métodos principales:

### `res.download(ruta [, nombre de archivo] [, opciones] [, fn])`

-   **Qué hace:** Transfiere el archivo especificado por `ruta` al cliente para su descarga. El navegador normalmente mostrará un cuadro de diálogo para guardar el archivo.
-   **Qué provoca:**
    -   Establece las cabeceras `Content-Disposition` (a "attachment") y `Content-Type` apropiadas.
    -   Envía el contenido del archivo al cliente.
    -   _Finaliza_ el ciclo de solicitud-respuesta.
-   **Parámetros importantes:**
    -   `ruta`: La ruta al archivo.
    -   `nombre de archivo`: (Opcional) El nombre que se le dará al archivo al descargarlo.
    -   `opciones`: (Opcional) Opciones como `root`, `headers`, etc. (ver la documentación para detalles).
    -   `fn`: (Opcional) Una función de callback que se ejecuta cuando se completa la transferencia o hay un error.

### `res.json([cuerpo])`

-   **Qué hace:** Envía una respuesta JSON al cliente.
-   **Qué provoca:**
    -   Establece la cabecera `Content-Type` a `application/json`.
    -   Convierte el `cuerpo` a una cadena JSON usando `JSON.stringify()`.
    -   Envía la cadena JSON al cliente.
    -   _Finaliza_ el ciclo de solicitud-respuesta.
-   **Parámetros:**
    -   `cuerpo`: (Opcional) Los datos que se convertirán a JSON. Puede ser un objeto, array, string, número, booleano o `null`.

### `res.redirect([estado,] ruta)`

-   **Qué hace:** Redirecciona al cliente a una nueva URL.
-   **Qué provoca:**
    -   Establece la cabecera `Location` con la nueva URL.
    -   Establece el código de estado HTTP a `302 Found` por defecto, o al `estado` especificado (ej: `301 Moved Permanently`).
    -   _Finaliza_ el ciclo de solicitud-respuesta.
-   **Parámetros:**
    -   `estado`: (Opcional) El código de estado de la redirección (ej: 301, 302, 307, 308).
    -   `ruta`: La URL a la que se redirigirá. Puede ser una URL absoluta, relativa a la raíz del host, relativa a la URL actual o relativa a la ruta.

### `res.render(vista [, locales] [, devolución de llamada])`

-   **Qué hace:** Renderiza una vista (usando un motor de plantillas como Handlebars, Pug, EJS, etc.) y la envía al cliente como HTML.
-   **Qué provoca:**
    -   Procesa el archivo de la vista, combinándolo con los datos proporcionados en `locales`.
    -   Establece la cabecera `Content-Type` a `text/html`.
    -   Envía el HTML resultante al cliente.
    -   _Finaliza_ el ciclo de solicitud-respuesta (a menos que se use una función de callback).
-   **Parámetros:**
    -   `vista`: La ruta al archivo de la vista.
    -   `locales`: (Opcional) Un objeto con datos que se pasarán a la vista.
    -   `devolución de llamada`: (Opcional) Una función callback que recibe el error y el HTML renderizado. Si se usa, _no_ finaliza automáticamente el ciclo de solicitud-respuesta; debes usar `res.send(html)` dentro del callback.

### `res.sendStatus(código de estado)`

-   **Qué hace:** Establece el código de estado HTTP de la respuesta y envía el mensaje de estado correspondiente como texto plano en el cuerpo de la respuesta.
-   **Qué provoca:**
    -   Establece el código de estado HTTP (`statusCode`).
    -   Envía el mensaje de estado como texto plano.
    -   _Finaliza_ el ciclo de solicitud-respuesta.
-   **Parámetros:**
    -   `código de estado`: El código de estado HTTP (ej: 200, 400, 404, 500).

### `res.send([cuerpo])`

-   **Qué hace:** Envía la respuesta HTTP al cliente. Es un método muy versátil que puede enviar diferentes tipos de contenido.
-   **Qué provoca:**
    -   Establece automáticamente la cabecera `Content-Type` según el tipo de `cuerpo`:
        -   `Buffer`: `application/octet-stream`
        -   `String`: `text/html`
        -   `Object` o `Array`: `application/json`
    -   Envía el `cuerpo` al cliente.
    -   _Finaliza_ el ciclo de solicitud-respuesta.
-   **Parámetros:**
    -   `cuerpo`: (Opcional) El contenido de la respuesta. Puede ser un `Buffer`, `String`, `Object`, `Array` o un número.
