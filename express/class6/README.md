# Express Sessions, Cookies y JWT

Este proyecto de ejemplo demuestra cómo manejar sesiones, cookies y JSON Web Tokens (JWT) en una aplicación de Express.

## Descripción

El proyecto incluye ejemplos de cómo:

-   Configurar y manejar sesiones utilizando `express-session`.
-   Configurar y manejar cookies, incluyendo cookies firmadas.
-   Generar y verificar JWTs para autenticación.

## Requisitos

Para ejecutar este proyecto, necesitas tener instalado:

-   [Node.js](https://nodejs.org/)
-   [Docker](https://www.docker.com/) (para los servicios adicionales)

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu_usuario/express-sessions.git
    cd express-sessions
    ```
2. Instala las dependencias:
    ```
    npm install
    ```

## Scripts

-   **start**: Inicia la aplicación con `node --watch app.js`.
-   **start-dev**: Inicia la aplicación en modo desarrollo.
-   **start-services**: Inicia los servicios definidos en `docker-compose.yml`.
-   **stop-services**: Detiene los servicios definidos en `docker-compose.yml`.

## Uso

### Iniciar la aplicación

Para iniciar la aplicación, usa el comando:

```bash
npm start
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Endpoints

### Cookies

-   `GET /cookies/set`: Asigna las cookies.
-   `GET /cookies`: Obtiene los valores de las cookies.
-   `GET /protected`: Ruta protegida que necesita que la cookie esté configurada.
-   `GET /cookies/delete`: Elimina las cookies.

### Sesiones

-   `GET /sessions/set`: Asigna una variable de sesión.
-   `GET /sessions`: Obtiene los valores de la sesión.
-   `GET /protected-by-session`: Ruta protegida que necesita que la variable de sesión esté configurada.
-   `GET /sessions/delete`: Elimina la variable de sesión.

### JWT

-   `GET /jwt/set`: Genera un token JWT.
-   `GET /jwt`: Obtiene los valores del token JWT (requiere autenticación JWT).
-   `GET /protected-by-jwt`: Ruta protegida que necesita un token JWT válido.
-   `GET /jwt/delete`: Invalida el token JWT.

### Ejercicio clase 6

-   `GET /login`: Renderiza la vista de login.
-   `POST /login`: Verifica las credenciales y establece una variable de sesión de login.
-   `GET /home`: Renderiza la vista de home si el usuario ha hecho login.
-   `POST /logout`: Elimina la variable de sesión de login y redirige a /login.
-   `POST /api/token`: Genera un token JWT con una validez de 5 minutos.
-   `GET /api/protected`: Valida el token JWT y devuelve el username si es válido.

## Estructura del proyecto

```bash
.
├── views
│   ├── login.html
│   └── home.html
├── app.js
└── package.json
```

## Autor

Iñaki Barceló
