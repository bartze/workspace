# Propiedades del objeto `request` (req) en Express.js

El objeto `req` representa la solicitud HTTP y tiene propiedades para la cadena de consulta, parámetros, cuerpo, encabezados, etc.

## Propiedades principales:

### `req.app`

-   **Tipo de valor:** Una referencia a la instancia de la aplicación Express.
-   **Ejemplo:** `req.app.get('views')` (devuelve el directorio de vistas configurado).

### `req.baseUrl`

-   **Tipo de valor:** Una cadena que representa la URL base donde se montó un router.
-   **Ejemplo:** Si un router se monta en `/greet`, `req.baseUrl` será `/greet`.

### `req.body`

-   **Tipo de valor:** Un objeto que contiene los datos enviados en el cuerpo de la solicitud.
-   **Importante:** De forma predeterminada es `undefined`. Se completa con middlewares como `express.json()` o `express.urlencoded()`.
-   **Ejemplo:** `{ nombre: 'Juan', edad: 30 }` (después de usar un middleware de body-parsing).

### `req.cookies`

-   **Tipo de valor:** Un objeto que contiene las cookies enviadas por la solicitud.
-   **Importante:** Requiere el middleware `cookie-parser`. Si no hay cookies, es un objeto vacío `{}`.
-   **Ejemplo:** `{ nombre: 'Carlos', idioma: 'es' }`

### `req.fresh`

-   **Tipo de valor:** Un booleano. `true` si la respuesta está fresca en la caché del cliente, `false` si está obsoleta.

### `req.hostname`

-   **Tipo de valor:** Una cadena que contiene el nombre de host de la solicitud (extraído del header `Host`).

### `req.ip`

-   **Tipo de valor:** Una cadena que contiene la dirección IP remota de la solicitud.

### `req.ips`

-   **Tipo de valor:** Un array de cadenas que contiene las direcciones IP del header `X-Forwarded-For` (si se usa un proxy y `trust proxy` está configurado). Si no hay proxies, es un array vacío `[]`.

### `req.method`

-   **Tipo de valor:** Una cadena que representa el método HTTP de la solicitud (ej: `'GET'`, `'POST'`, `'PUT'`, `'DELETE'`).

### `req.originalUrl`

-   **Tipo de valor:** Una cadena que contiene la URL original de la solicitud.

### `req.params`

-   **Tipo de valor:** Un objeto que contiene los parámetros de la ruta.
-   **Ejemplo:** Para la ruta `/user/:id`, `req.params.id` contendrá el valor del parámetro `id`.

### `req.path`

-   **Tipo de valor:** Una cadena que contiene la parte del path de la URL de la solicitud.

### `req.protocol`

-   **Tipo de valor:** Una cadena que contiene el protocolo de la solicitud (`'http'` o `'https'`).

### `req.query`

-   **Tipo de valor:** Un objeto que contiene los parámetros de la query string.
-   **Ejemplo:** Para la URL `/search?q=nodejs&page=2`, `req.query` sería `{ q: 'nodejs', page: '2' }`.

### `req.res`

-   **Tipo de valor:** Una referencia al objeto de respuesta (`res`).

### `req.route`

-   **Tipo de valor:** Un objeto que contiene información sobre la ruta actual.

### `req.secure`

-   **Tipo de valor:** Un booleano. `true` si la conexión es segura (HTTPS), `false` en caso contrario.

### `req.signedCookies`

-   **Tipo de valor:** Un objeto que contiene las cookies firmadas.
-   **Importante:** Requiere el middleware `cookie-parser`.

### `req.stale`

-   **Tipo de valor:** Un booleano. Es el opuesto de `req.fresh`.

### `req.subdomains`

-   **Tipo de valor:** Un array de cadenas que contiene los subdominios del host.

### `req.xhr`

-   **Tipo de valor:** Un booleano. `true` si la solicitud se hizo con XMLHttpRequest (AJAX), `false` en caso contrario.
