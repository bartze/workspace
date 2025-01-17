# Proyecto Clase 4: Express y Knex

## Descripción

Este proyecto es una aplicación de Express que utiliza Knex como query builder para manejar una base de datos PostgreSQL. La aplicación permite gestionar una lista de estudiantes con sus nombres, apellidos, fechas de nacimiento y correos electrónicos.

### Características

-   Crear y configurar un servidor Express.
-   Conectar a una base de datos PostgreSQL usando Knex.
-   Realizar acciones CRUD (Create, Read, Update, Delete) en la base de datos.
-   Validación de datos usando `express-validator`.

## Requisitos

-   [Node.js](https://nodejs.org) (Versión 14 o superior)
-   [Docker](https://www.docker.com/) (para la base de datos y pgAdmin)
-   [PostgreSQL](https://www.postgresql.org/) (si decides no usar Docker)
-   [Knex.js](https://knexjs.org)

## Instalación

1.  **Clona el repositorio:**
    ```
    git clone <URL_DEL_REPOSITORIO>
    cd <NOMBRE_DEL_REPOSITORIO>
    ```
2.  **Instala las dependencias:**

    ```
    npm install
    ```

3.  **Configura Knex:**

    ```
    knex init
    ```

4.  ** Editar knexfile.js: Configura los detalles de tu base de datos:**

        module.exports = {
            development: {
                client: 'pg',
                connection: {
                    database: 'express-db-knex',
                    user: 'postgres',
                    password: '1234',
                },
                pool: {
                    min: 0,
                    max: 5,
                },
            },
        };

## Uso

1. **Inicia los servicios de Docker:**

    ```
    docker-compose -f docker-compose.yml up -d
    ```

2. **Realiza las migraciones:**

    ```
    knex migrate:latest
    ```

3. **Aplica los seeds:**

    ```
    knex seed:run
    ```

4. **Inicia la aplicación:**

    ```
    npm start
    ```

5. **Abre tu navegadory ve a:**

    http://localhost:3000

## Endpoints

-   **GET /students:** Obtener todos los estudiantes.
-   **GET /students/:id:** Obtener un estudiante por su ID.
-   **POST /students:** Crear un nuevo estudiante. El cuerpo de la solicitud debe incluir `name`, `last_name`, `date_of_birth`, y `email`.

## Validaciones

-   **name:** Requerido.
-   **last_name:** Requerido.
-   **date_of_birth:** Debe ser una fecha en formato ISO8601.
-   **email:** Debe ser un email válido.

## Diagrama de Proyecto

```
RAIZ_DEL_PROYECTO
|-- app.js
|-- package.json
|-- knexfile.js
|-- /migrations
|   |-- <timestamp>students.js
|   |-- <timestamp>_add_email_to_students.js
|-- /seeds
|   |-- students.js
|-- /repositories
    |-- db.js
    |-- students.js
```

## Recursos

-   [Documentación de Express](https://expressjs.com/)
-   [Documentación de Knex](http://knexjs.org/)
-   [Documentación de `express-validator`](https://express-validator.github.io/docs/)
