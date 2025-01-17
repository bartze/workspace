# Proyecto Clase 5: Express y Sequelize

## Descripción

Este proyecto es una aplicación de **Express** que utiliza **Sequelize** como ORM para manejar una base de datos PostgreSQL. La aplicación permite gestionar una lista de estudiantes con nombres, apellidos, fechas de nacimiento, correos electrónicos y un campo de estado activo.

### Características

-   Crear y configurar un servidor Express.
-   Conectar a una base de datos PostgreSQL utilizando Sequelize.
-   Realizar operaciones CRUD (Create, Read, Update, Delete) en la base de datos.
-   Validación de datos utilizando `express-validator`.

## Requisitos

-   [Node.js](https://nodejs.org) (Versión 14 o superior)
-   [Docker](https://www.docker.com/) (para la base de datos y pgAdmin)
-   [PostgreSQL](https://www.postgresql.org/) (si decides no usar Docker)
-   [Sequelize](https://sequelize.org/)

## Instalación

1. **Clona el repositorio:**
    ```sh
    git clone <URL_DEL_REPOSITORIO>
    cd <NOMBRE_DEL_REPOSITORIO>
    ```
2. **Instala las dependencias:**
    ```
    npm install
    ```
3. **Configura Sequelize:**
    ```
    sequelize init
    ```
4. **Editar config/config.json:**
   {
   "development": {
   "username": "postgres",
   "password": "1234",
   "database": "express-db-seq",
   "host": "127.0.0.1",
   "dialect": "postgres"
   }
   }

## Uso

1. **Inicia los servicios de Docker:**
    ```sh
    docker-compose up -d
    ```
2. **Realiza las migraciones:**
    ```
    sequelize db:migrate
    ```
3. **Aplica los seeds:**
    ```
    sequelize db:seed:all
    ```
4. **Inicia la aplicación:**
    ```
    npm start
    ```
5. **Abre tu navegador y ve a:**
   http://localhost:3000

## Uso de REST Client

1. Crea el archivo api.http en tu editor de texto.
2. Asegúrate de que REST Client esté instalado en Visual Studio Code.
3. Ejecuta las solicitudes HTTP directamente desde el archivo haciendo clic en los botones "Send Request" que aparecen encima de cada solicitud.

### Ejemplos de solicitudes en api.http

    ### Obtener todos los estudiantes
    GET http://localhost:3000/students

    ### Obtener un estudiante por id
    GET http://localhost:3000/students/3

    ### Crear un estudiante con datos válidos
    POST http://localhost:3000/students
    Content-Type: application/json

    {
        "name": "Jane",
        "last_name": "Doe",
        "date_of_birth": "03-02-2001",
        "email": "jane@example.com",
        "active": true
    }

    ### Crear un estudiante con email inválido
    POST http://localhost:3000/students
    Content-Type: application/json

    {
        "name": "David",
        "last_name": "Smith",
        "date_of_birth": "12-06-1999",
        "email": "david.smith",
        "active": true
    }

    ### Crear un estudiante con fecha de nacimiento inválida
    POST http://localhost:3000/students
    Content-Type: application/json

    {
        "name": "Laura",
        "last_name": "Jones",
        "date_of_birth": "12-06-99",
        "email": "laura.jones@example.com",
        "active": true
    }

## Endpoints

-   **GET /students:** Obtener todos los estudiantes.
-   **GET /students/:id:** Obtener un estudiante por su ID.
-   **POST /students:** Crear un nuevo estudiante. El cuerpo de la solicitud debe incluir `name`, `last_name`, `date_of_birth`, `email`, y `active`.

## Validaciones

-   **name:** Requerido y sin espacios excesivos.
-   **last_name:** Requerido y sin espacios excesivos.
-   **date_of_birth:** Debe estar en formato `DD-MM-YYYY` y ser una fecha válida.
-   **email:** Debe ser un email válido y único.
-   **active:** Debe ser un booleano (`true` o `false`).

## Diagrama de Proyecto

```text
RAIZ_DEL_PROYECTO
|-- app.js
|-- package.json
|-- docker-compose.yml
|-- config
| |-- config.json
|-- migrations
| |-- <timestamp>-create-students.js
| |-- <timestamp>-add_email_and_active_to_students.js
|-- models
| |-- index.js
| |-- students.js
|-- repositories
| |-- students.js
|-- seeders
|-- <timestamp>-students.js
```

## Recursos

-   [Documentación de Express](https://expressjs.com/)
-   [Documentación de Sequelize](https://sequelize.org/)
-   [Documentación de `express-validator`](https://express-validator.github.io/docs/)
