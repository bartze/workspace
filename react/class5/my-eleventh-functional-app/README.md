# My Eleventh Functional App

Este proyecto es una aplicación React creada con Vite que demuestra el uso de componentes funcionales, manejo de listas y formularios controlados.

## Estructura del Proyecto

```text
my-eleventh-functional-app/
├── src/
│   ├── components/
│   │   ├── StudentList.jsx
│   │   └── Form.jsx
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

## Componentes

### App.jsx

Componente principal que renderiza StudentList y Form.

### StudentList.jsx

Muestra una lista de estudiantes utilizando un componente funcional.

-   Utiliza un array de objetos para los datos de los estudiantes.
-   Implementa un subcomponente ListItem para renderizar cada estudiante.
-   Usa la propiedad key para optimizar el renderizado de la lista.

### Form.jsx

Implementa un formulario controlado con varios tipos de inputs.

-   Utiliza el hook useState para manejar el estado del formulario.
-   Incluye inputs de texto (editable y no editable), textarea y select.
-   Demuestra el manejo de eventos onChange y onSubmit.

## Funcionalidades

1. Renderizado de Listas: Muestra cómo mapear un array de datos a elementos JSX.
2. Formularios Controlados: Implementa un formulario donde React controla el estado de los inputs.
3. Manejo de Estado: Utiliza el hook useState para gestionar el estado del componente.
4. Manejo de Eventos: Demuestra cómo manejar eventos de cambio y envío en formularios.

## Comparación con Componentes de Clase

Esta aplicación utiliza componentes funcionales y hooks, que ofrecen varias ventajas sobre los componentes de clase:

-   Sintaxis más simple: Los componentes funcionales son más concisos y fáciles de leer.
-   Hooks: Permiten usar estado y otras características de React sin escribir una clase.
-   Mejor rendimiento: Los componentes funcionales tienen una sobrecarga menor que los componentes de clase.

Sin embargo, es importante entender ambos enfoques, ya que aún se pueden encontrar componentes de clase en proyectos existentes.

## Ejemplo de Componente de Clase vs Funcional

-   clase:

```jsx
class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = { input: '' };
	}

	handleChange = (event) => {
		this.setState({ input: event.target.value });
	};

	render() {
		return <input value={this.state.input} onChange={this.handleChange} />;
	}
}
```

-   Funcional:

```jsx
function Form() {
	const [input, setInput] = useState('');

	const handleChange = (event) => {
		setInput(event.target.value);
	};

	return <input value={input} onChange={handleChange} />;
}
```

Este proyecto sirve como una introducción práctica a los conceptos modernos de React, demostrando cómo implementar funcionalidades comunes de manera eficiente y legible.
