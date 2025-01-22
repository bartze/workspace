# Clase 1 de React - Ejercicios

Este proyecto incluye los ejercicios realizados en la clase 1 del curso de React. Contiene dos aplicaciones: una creada con Create React App y otra con Vite.

## Contenido

1. [Configurar VSCode: Linting y Formatting](#configurar-vscode-linting-y-formatting)
2. [Instalar React Developer Tools](#instalar-react-developer-tools)
3. [Ejercicios de Código](#ejercicios-de-código)
    - [App con método Static HTML file](#app-con-método-static-html-file)
    - [App con create-react-app modificando App.js](#app-con-create-react-app-modificando-appjs)
    - [App con create-react-app replicando el ejemplo “Hello world!” con cambio de estilos](#app-con-create-react-app-replicando-el-ejemplo-hello-world-con-cambio-de-estilos)
    - [App con Vite replicando los ejemplos anteriores](#app-con-vite-replicando-los-ejemplos-anteriores)

## Configurar VSCode: Linting y Formatting y React Developer Tools

Para configurar VSCode con Linting (ESLint) y Formatting (Prettier), sigue estos pasos:

1. **Instalar ESLint:**
    ```bash
    npm install eslint --save-dev
    ```
2. **Instalar React Developer Tools:**
   Para instalar las React Developer Tools en tu navegador:

    1. Chrome:

        - Abre la Chrome Web Store.

        - Busca "React Developer Tools" e instala la extensión.

    2. Firefox:

        - Abre Mozilla Add-ons.

        - Busca "React Developer Tools" e instala la extensión.

## Ejercicios de Código

### App con método Static HTML file

1. Crea un archivo `indexStatic.html` en la carpeta `public`:

```html
<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Static HTML File</title>
	</head>
	<body>
		<div id="root"></div>
		<script src="main.js"></script>
	</body>
</html>
```

2. Crea un archivo `main.js` en la carpeta `public`:

```Javascript
const root = document.getElementById('root');
root.innerHTML = '<h1>Hello, Static!</h1>';
```

### App con create-react-app modificando App.js

1. Modifica el archivo src/app.js:

```Javascript
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color: 'blue' }}>Hello, world!</h1>
        <p>Bienvenido a React</p>
        <button onClick={() => alert('¡Hola!')}>Haz clic aquí</button>
      </header>
    </div>
  );
}

export default App;
```

### App con create-react-app replicando el ejemplo "Hello world!" con cambio de estilos

1. Modifica el archivo src/app.js:

```Javascript
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color: 'blue' }}>Hello, world!</h1>
        <p>Bienvenido a React</p>
        <button onClick={() => alert('¡Hola!')}>Haz clic aquí</button>
      </header>
    </div>
  );
}

export default App;
```

2. Modifica el archivo src/app.css para añadir estilos:

```Css
.App {
  text-align: center;
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-header h1 {
  color: blue;
}
```

### App con Vite replicando los ejemplos anteriores

1. CConfigura el archivo src/App.jsx de manera similar al archivo App.js en create-react-app:

```Javascript
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color: 'blue' }}>Hello, world!</h1>
        <p>Bienvenido a React</p>
        <button onClick={() => alert('¡Hola!')}>Haz clic aquí</button>
      </header>
    </div>
  );
}

export default App;
```

2. Configura el archivo src/app.css de manera similar al archivo app.css en create-react-app

## Cómo ejecutar

### my-app(Create React App):

```
cd my-app
npm install
npm start
```

### my-app-vite:

```
cd my-app-vite
npm install
npm run dev
```

Abre http://localhost:3000 para my-app y http://localhost:5173 para my-app-vite.
