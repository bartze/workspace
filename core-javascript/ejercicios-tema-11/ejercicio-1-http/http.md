# 1. ¿Qué es HTTP? ¿Qué son los errores HTTP? ¿Cuántos hay? ¿Cuáles son los más importantes?

HTTP, o Protocolo de Transferencia de Hipertexto, es la base de cualquier intercambio de datos en la web. Es el protocolo que permite que los navegadores se comuniquen con los servidores para cargar páginas web.

## Errores HTTP

Los errores HTTP son códigos de estado que indican si una solicitud HTTP se ha completado con éxito o si ha habido un problema.

## Categorías de Códigos de Estado

### 1xx - Informativos:

Indican que la solicitud ha sido recibida y está siendo procesada.

### 2xx - Éxito:

Indican que la solicitud se ha completado exitosamente.

-   Ejemplo: 200 OK.

### 3xx - Redirecciones:

Indican que es necesario realizar más acciones para completar la solicitud.

-   Ejemplo: 301 Moved Permanently.

### 4xx - Errores del Cliente:

Indican que hubo un error en la solicitud del cliente.

-   Ejemplo: 404 Not Found.

### 5xx - Errores del Servidor:

Indican que el servidor no ha podido procesar una solicitud válida.

-   Ejemplo: 500 Internal Server Error.

## Los Más Importantes

-   **200 OK**: Solicitud exitosa.
-   **301 Moved Permanently**: El recurso solicitado ha sido movido permanentemente a una nueva URL.
-   **404 Not Found**: El recurso solicitado no se ha encontrado en el servidor.
-   **500 Internal Server Error**: Error genérico del servidor.
