# Propiedades `hostname`, `ip`, `params` y `route` en la ruta `/book/:id`

Este documento explica qué valores contienen las propiedades `hostname`, `ip`, `params` y `route` del objeto `req` (request) en Express.js, específicamente en el contexto de la ruta `/book/:id` definida en el router de libros.

## Contexto

El router de libros (`bookRouter`) se monta en la aplicación principal (`app.js`) con el prefijo `/books`:

```javascript
app.use('/books', bookRouter);
```

Por lo tanto, la URL completa para acceder a la ruta que analizamos es /books/:id.

## Ejemplo

Consideremos una petición GET a la URL http://localhost:3000/books/123.

## Análisis de las propiedades

### req.hostname

-   Tipo de valor: Cadena (string).
-   Valor en el ejemplo: 'localhost'.
-   Explicación: req.hostname contiene el nombre de host de la solicitud. En este caso, al estar ejecutando el servidor localmente, el valor es 'localhost'. Si la aplicación estuviera desplegada en un servidor con un nombre de dominio (por ejemplo, www.miaplicacion.com), req.hostname contendría ese nombre de dominio.

### req.ip

-   Tipo de valor: Cadena (string).
-   Valor en el ejemplo: '::1' (en IPv6) o '127.0.0.1' (en IPv4).
-   Explicación: req.ip contiene la dirección IP del cliente que realiza la solicitud. ::1 es la dirección de loopback local en IPv6, equivalente a 127.0.0.1 en IPv4. Si un cliente remoto accediera al servidor, req.ip contendría su dirección IP pública.

### req.params

-   Tipo de valor: Objeto (object).
-   Valor en el ejemplo: { id: '123' }.
-   Explicación: req.params es un objeto que contiene los parámetros de la ruta. En la ruta /book/:id, :id define un parámetro. Express extrae el valor correspondiente de la URL y lo almacena en req.params.id. En nuestro ejemplo, el valor '123' se asigna a req.params.id.

### req.route

-   Tipo de valor: Objeto (object).

-   Valor en el ejemplo: Un objeto que describe la ruta actual.

-   Explicación: req.route proporciona información detallada sobre la ruta que se ha ejecutado. Contiene propiedades como:

    -   path: El path de la ruta dentro del router (en este caso, /:id, sin el prefijo /books).
    -   stack: Un array de middlewares/handlers asociados a la ruta.
    -   methods: Un objeto que indica los métodos HTTP permitidos para esta ruta (en este caso, { get: true }).

Ejemplo de lo que se vería en la consola al hacer console.log(req.route):

```
{
  "path": "/:id",
  "stack": [
    {
      "handle": [Function (anonymous)],
      "name": "<anonymous>",
      "params": {},
      "path": null,
      "keys": [
        {
          "name": "id",
          "optional": false,
          "offset": 1,
          "placeholder": false
        }
      ],
      "regexp": /^\/([^\/]+?)\/?$/i,
      "method": "get"
    }
  ],
  "methods": {
    "get": true
  }
}
```

## Tabla resumen

| Propiedad  | Tipo de valor | Valor en `http://localhost:3000/books/123` | Explicación                                                                                                                                                                                                                                                                                                                     |
| ---------- | ------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hostname` | Cadena        | `'localhost'`                              | El nombre de host del servidor.                                                                                                                                                                                                                                                                                                 |
| `ip`       | Cadena        | `'::1'` o `'127.0.0.1'`                    | La dirección IP del cliente.                                                                                                                                                                                                                                                                                                    |
| `params`   | Objeto        | `{ id: '123' }`                            | Un objeto con los parámetros de la ruta.                                                                                                                                                                                                                                                                                        |
| `route`    | Objeto        | (Objeto complejo, ver ejemplo arriba)      | Un objeto que contiene información sobre la ruta actual, incluyendo el path, los handlers y los métodos HTTP permitidos. Es importante destacar que el `path` dentro de `req.route` es `/:id`, _no_ `/books/:id`. El prefijo `/books` se maneja a nivel del montaje del router en `app.js` con `app.use('/books', bookRouter)`. |
