# Mi Aplicación Express

Este es un proyecto básico de Express.js que utiliza el motor de plantillas Mustache y partials para estructurar y reutilizar vistas. La aplicación incluye varias rutas y vistas dinámicas.

## Características

-   **Express.js**: Framework web para Node.js.
-   **Mustache**: Motor de plantillas para renderizar vistas.
-   **Partials**: Componentes reutilizables para encabezados y pies de página.
-   **CSS**: Archivos de estilo para mejorar la apariencia de la aplicación.

## Estructura del Proyecto

project_root/
├── public/
│
├── css/
│
│
└── styles.css
├── views/
│
├── partials/
│
│
├── header.html
│  
│
└── footer.html
│
├── home.html
│
├── student.html
│
└── user.html
├── index.js
└── package.json

## Instalación

1. Clona el repositorio en tu máquina local.
2. Navega al directorio del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:

```sh
npm install
```

## Uso

1. Para iniciar la aplicación en modo desarrollo, ejecuta

```
npm start
```

2. Abre tu navegador web y visita http://localhost:3000 para ver la página principal.

## Rutas

-   /: Página principal que incluye el header y el footer.

-   /student/:id: Muestra la vista de estudiante con el ID proporcionado.

-   /user/:name: Muestra la vista de usuario con el nombre proporcionado.

## Partials

-   header.html: Contiene el encabezado común con enlaces de navegación.

-   footer.html: Contiene el pie de página común.

## CSS

Los estilos están definidos en el archivo public/css/styles.css. Puedes personalizar los estilos según tus necesidades.

## Licencia

Este proyecto está bajo la licencia ISC.

## Autor

Iñaki Barceló
