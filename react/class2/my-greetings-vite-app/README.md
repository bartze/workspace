# My Greetings App con React y Vite

Bienvenido a My Greetings App, una aplicación sencilla de React construida con Vite. Esta app demuestra cómo renderizar dinámicamente una lista de componentes utilizando props y keys, y proporciona una explicación detallada de cómo funcionan las props y las keys en React.

## Tabla de Contenidos

-   **Introducción**

-   **Prerrequisitos**

-   **Instalación**

-   **Ejecutar la Aplicación**

-   **Estructura del Código**

          - App.jsx

          - Welcome.jsx

-   Entendiendo Props y Keys

    -   ¿Qué son las Props?

    -   ¿Qué son las Keys?

    -   Pasando Props y Keys

    -   Accediendo a Props en Componentes

    -   ¿Por qué no podemos acceder a key en Props?

-   Conclusión

## Introducción

My Greetings App es una aplicación de React que muestra mensajes de saludo personalizados para una lista de estudiantes. Esta aplicación muestra cómo:

-   Utilizar React con Vite para una experiencia de desarrollo rápida.

-   Renderizar componentes dinámicamente basados en arrays de datos.

-   Pasar datos entre componentes usando props.

-   Entender y usar correctamente keys en listas.

## Prerrequisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

-   Node.js

-   npm

## Instalación

Clona el repositorio o crea una nueva aplicación de React usando Vite:

### Crea un nuevo proyecto de React con Vite

```
npm create vite@latest my-greetings-app
```

Sigue las indicaciones:

    - Nombre del proyecto: my-greetings-app

    - Selecciona un framework: React

    - Selecciona una variante: JavaScript

### Navega al directorio del proyecto e instala las dependencias:

```bash
cd my-greetings-app
npm install
```

### Ejecutar la Aplicación

Inicia el servidor de desarrollo:

```bash
npm run dev
```

### Abre tu navegador y navega a http://localhost:5173/ para ver la aplicación en acción.

## Entendiendo Props y Keys

### ¿Qué son las Props?

Props (abreviatura de propiedades) son componentes de solo lectura que deben mantenerse puros e inmutables. Se utilizan para pasar datos de un componente padre a un componente hijo.

En nuestro ejemplo, App pasa props a Welcome:

```jsx
<Welcome key={student.id} id={student.id} name={student.name} course={student.course} />
```

### ¿Qué son las Keys?

Keys son propiedades especiales utilizadas por React para identificar qué elementos en la lista han cambiado, se han agregado o eliminado. Las keys deben asignarse a los elementos dentro de un array para darles una identidad estable:

```jsx
key={student.id}
```

### Pasando Props y Keys

En el componente App, pasamos id, name y course como props a cada componente Welcome:

```jsx
{
	students.map((student) => (
		<Welcome
			key={student.id} // Key para uso interno de React
			id={student.id} // Pasado como prop a Welcome
			name={student.name} // Pasado como prop a Welcome
			course={student.course} // Pasado como prop a Welcome
		/>
	));
}
```

### Accediendo a Props en Componentes

En el componente Welcome, accedemos a estas props para mostrar mensajes personalizados:

```jsx
const Welcome = (props) => {
	return (
		<h2>
			ID {props.id} - Hola {props.name}, bienvenido al curso de {props.course}
		</h2>
	);
};
```

### ¿Por qué no podemos acceder a key en Props?

La prop key está reservada para el uso interno de React y no es accesible dentro del componente:

-   No accesible: No puedes usar props.key dentro de Welcome.

-   Solución: Si necesitas un identificador dentro del componente, pásalo explícitamente como otra prop (por ejemplo, id).

Ejemplo de intentar acceder a key (no funcionará):

```jsx
// Esto NO funcionará como se espera
const Welcome = (props) => {
	return (
		<h2>
			{props.key} - Hola {props.name}, bienvenido al curso de {props.course}
		</h2>
	);
};
```

Forma correcta:

```jsx
// Pasando 'id' explícitamente
<Welcome
key={student.id} // Usado internamente por React
id={student.id} // Disponible en props
...
/>

// Accediendo a 'id' en el componente
const Welcome = (props) => {
return (
<h2>
ID {props.id} - Hola {props.name}, bienvenido al curso de {props.course}
</h2>
);
};
```

## Conclusión

Esta aplicación demuestra cómo:

-   Configurar una aplicación de React utilizando Vite.

-   Usar props para pasar datos entre componentes.

-   Renderizar listas de componentes dinámicamente usando map.

-   Entender el papel de las keys en listas y por qué son importantes.

-   Pasar correctamente identificadores a componentes hijos para utilizarlos en el renderizado.

-   Al comprender estos conceptos, estarás mejor preparado para construir aplicaciones de React dinámicas y eficientes.

### Autor

Iñaki Barceló
