# Proyecto Clase 2 - Express.js

Este proyecto es una práctica de Express.js que cubre los siguientes conceptos:

-   **Middlewares:**
    -   Middlewares de aplicación.
    -   Middlewares incorporados de Express (`express.json`, `express.text`, `express.urlencoded`, `express.static`).
    -   Middlewares de terceros (`cookie-parser`).
    -   Middlewares de manejo de errores.
-   **Enrutamiento con `express.Router()`:**
    -   Creación y uso de routers para modularizar las rutas.
-   **Servir archivos estáticos.**
-   **Manejo de cookies.**
-   **Validación de parámetros en rutas.**

## Estructura del proyecto

class2/
├── app.js # Archivo principal de la aplicación
├── routes/
│ ├── book.js # Rutas relacionadas con libros
│ ├── task.js # Rutas relacionadas con tareas
│ ├── student.js # Rutas relacionadas con estudiantes
│ └── user.js # Rutas relacionadas con usuarios
└── public/ # Archivos estáticos
├── css/
│ └── style.css
├── js/
│ └── alert.js
├── images/
│ └── veridas.png
└── hello.html
└── package.json
└── package-lock.json
└── README.md

## Instalación

1.  Clona el repositorio:

    ```bash
    git clone <url_del_repositorio>
    ```

2.  Navega al directorio del proyecto:

    ```bash
    cd class2
    ```

3.  Instala las dependencias:

    ```bash
    npm install
    ```

## Ejecución

Para iniciar el servidor, ejecuta:

```bash
npm start
```

El servidor estará disponible en http://localhost:3000.

## Rutas y funcionalidades

-   /: Ruta principal.
-   /hello: Sirve el archivo hello.html con estilos, imagen y JavaScript.
-   /books: Rutas relacionadas con libros (definidas en routes/book.js).
-   /books: GET - Lista de libros.
-   /books/:id: GET - Detalle de un libro por ID.
-   /books: POST - Crear un nuevo libro.
-   /books/:id: PUT - Actualizar un libro.
-   /books/:id: DELETE - Eliminar un libro.
-   /task: Rutas relacionadas con tareas (definidas en routes/task.js).
-   /task/:id: GET - Detalle de una tarea por ID.
-   /students: Rutas relacionadas con estudiantes (definidas en routes/student.js).
-   /students/:id: GET - Detalle de un estudiante por ID (con validación: ID numérico y menor o igual a 99).
-   /users: Rutas relacionadas con usuarios (definidas en routes/user.js).
-   /users/:id: GET - Detalle de un usuario por ID.
-   /users: POST - Recibe un body con un campo title y devuelve su valor.
-   /cookie: Establece una cookie llamada customCookie.
-   /check-cookie: Muestra el valor de la cookie customCookie.
-   /error-test: Ruta para probar el middleware de manejo de errores.

## Middlewares

-   Middlewares de parseo: express.json(), express.text(), express.urlencoded().
-   express.static(): Sirve archivos estáticos desde la carpeta public.
-   cookie-parser(): Parsea las cookies.
-   Middleware de manejo de errores: Maneja los errores y envía respuestas de error apropiadas.
-   Middlewares de Aplicación: Middlewares que se ejecutan antes de las rutas. Ejemplo: Middleware del tiempo.

## Pruebas

Para probar las rutas, puedes usar tu navegador o herramientas como curl.

Ejemplos con curl:

```
curl http://localhost:3000/book
curl http://localhost:3000/book/123
curl -X POST http://localhost:3000/books -H "Content-Type: application/json" -d '{"title": "El señor de los anillos"}'
curl http://localhost:3000/students/50
curl http://localhost:3000/students/100 #Provoca un error
curl http://localhost:3000/users/1
curl -X POST -H "Content-Type: application/json" -d '{"title": "Título JSON"}' http://localhost:3000/users
curl -X POST -H "Content-Type: text/plain" -d '{"title": "Título texto plano con JSON válido"}' http://localhost:3000/users
curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -d "title=Título+URL+encoded" http://localhost:3000/users
curl -X POST http://localhost:3000/users
curl -X GET -d "" http://localhost:3000/ #Para ver el middleware del time
```

## Notas

-   El orden de los middlewares y las rutas es importante en Express.
-   Se recomienda usar routers para modularizar las rutas de la aplicación.

## Autor

Iñaki Barceló
