# Proyecto Final de Express con Sequelize

Este proyecto es el resultado final del curso de Express y Sequelize, que implementa una aplicación completa con autenticación, manejo de sesiones, tokens JWT y vistas renderizadas con Mustache.

## Tabla de Contenidos

-   Descripción

-   Características

-   Requisitos Previos

-   Instalación

-   Configuración

-   Uso

-   Scripts Disponibles

-   Estructura del Proyecto

-   API Endpoints

-   Dependencias

## Descripción

Este proyecto es una aplicación Node.js que utiliza Express como framework web y Sequelize como ORM para interactuar con una base de datos PostgreSQL. La aplicación implementa autenticación de usuarios, gestión de profesores y estudiantes, y sirve vistas dinámicas utilizando Mustache como motor de plantillas.

## Características

-   Usuarios, Profesores y Estudiantes: CRUD completo para cada uno de los modelos.

-   Autenticación:

    -   Sesiones: Uso de express-session para manejar sesiones de usuario.

    -   Contraseñas Encriptadas: Uso de bcrypt para encriptar y comparar contraseñas.

    -   JWT: Generación y validación de tokens JWT para proteger rutas de la API.

-   Vistas Dinámicas:

    -   Uso de Mustache como motor de plantillas.

    -   Implementación de partials para reutilizar componentes comunes como encabezados y pies de página.

-   Protección de Rutas:

    -   Acceso restringido a ciertas rutas según el tipo de usuario (admin o user).

-   Validaciones:

    -   Uso de express-validator para validar datos de entrada.

## Requisitos Previos

-   Node.js versión 20 o superior.

-   npm versión 10 o superior.

-   Docker y Docker Compose (opcional, si deseas ejecutar la base de datos y pgAdmin en contenedores).

-   PostgreSQL (si no utilizas Docker para la base de datos).

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
```

2. Instalar las dependencias:

```bash
npm install
```

## Configuración

### Base de Datos

Si utilizas Docker, puedes levantar la base de datos y pgAdmin con el siguiente comando:

```bash
npm run start-services
```

Esto ejecutará el archivo docker-compose.services.yml ubicado en docker/dev/.

### Migraciones y Seeders

Ejecuta las migraciones para crear las tablas en la base de datos:

```bash
npx sequelize-cli db:migrate
```

Ejecuta los seeders para poblar la base de datos con datos iniciales:

```bash
sequelize-cli db:seed:all
```

## Uso

### Iniciar la Aplicación

Para iniciar la aplicación en modo de desarrollo:

```bash
npm start
```

La aplicación estará corriendo en http://localhost:3000.

### Scripts Disponibles

-   Iniciar la aplicación:

    ```bash
    npm start
    ```

-   Iniciar los servicios de Docker (base de datos y pgAdmin):

    ```bash
    npm run start-services
    ```

-   Detener los servicios de Docker:

    ```bash
    npm run stop-services
    ```

-   Ejecutar migraciones:

    ```bash
    sequelize-cli db:migrate
    ```

-   Revertir migraciones:

    ```bash
    npx sequelize-cli db:migrate:undo
    ```

-   Ejecutar seeders:

    ```bash
    equelize-cli db:seed:all
    ```

## Estructura del Proyecto

proyectoFinal/
├── index.js
├── package.json
├── config/
│ └── config.json
├── models/
│ ├── index.js
│ ├── user.js
│ ├── teacher.js
│ └── student.js
├── migrations/
├── seeders/
├── repositories/
│ ├── users.js
│ ├── teachers.js
│ └── students.js
├── routes/
│ ├── users.js
│ ├── teachers.js
│ ├── students.js
│ ├── login.js
│ └── api.js
├── views/
│ ├── login.mustache
│ ├── home.mustache
│ ├── users.mustache
│ └── partials/
│ ├── header.mustache
│ └── footer.mustache
├── docker/
│ └── dev/
│ └── docker-compose.services.yml
└── .env

## API Endpoints

### Usuarios

-   GET /api/users - Obtener todos los usuarios.

-   GET /api/users/:id - Obtener un usuario por ID.

-   POST /api/users - Crear un nuevo usuario.

-   PUT /api/users/:id - Actualizar un usuario.

-   DELETE /api/users/:id - Eliminar un usuario (con restricciones).

### Teachers

-   GET /api/teachers - Obtener todos los profesores.

-   GET /api/teachers/:id - Obtener un profesor por ID.

-   POST /api/teachers - Crear un nuevo profesor.

-   PUT /api/teachers/:id - Actualizar un profesor.

-   DELETE /api/teachers/:id - Eliminar un profesor (con restricciones).

-   GET /api/teachers/:teacher_id/students - Obtener estudiantes de un profesor (con validaciones).

### Students

-   GET /api/students - Obtener todos los estudiantes.

-   GET /api/students/:id - Obtener un estudiante por ID.

-   POST /api/students - Crear un nuevo estudiante.

-   PUT /api/students/:id - Actualizar un estudiante.

-   DELETE /api/students/:id - Eliminar un estudiante.

### Autenticación y Sesiones

-   GET /login - Mostrar el formulario de login.

-   POST /login - Procesar login y crear sesión.

-   GET /home - Página de inicio después de login (redirecciona según tipo de usuario).

-   GET /users - Mostrar lista de usuarios (solo para admins).

-   POST /logout - Cerrar sesión.

### JWT

-   POST /api/token - Generar un token JWT.

-   GET /api/protected - Ruta protegida que requiere un token JWT válido.

## Dependencias

-   express - Framework web.

-   express-session - Gestión de sesiones.

-   bcrypt - Encriptación de contraseñas.

-   jsonwebtoken - Generación y validación de tokens JWT.

-   mustache-express - Motor de plantillas Mustache para Express.

-   sequelize - ORM para Node.js.

-   pg y pg-hstore - Conectores para PostgreSQL.

-   express-validator - Validación de datos.

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

## Autor: Iñaki Barceló
