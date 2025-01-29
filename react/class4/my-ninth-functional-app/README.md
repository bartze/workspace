# my-ninth-functional-app

-   Importaciones

```jsx
import React, { useState } from 'react';
```

Estamos importando React y el hook useState de la biblioteca React.

useState nos permite agregar estado a componentes funcionales, algo que antes solo era posible con componentes de clase.

-   Definición del Componente Funcional

```jsx
const EventExample = () => {};
```

Definimos EventExample como un componente funcional usando una función flecha.

-   Definición del Estado

```jsx
const [message, setMessage] = useState('');
const [rows, setRows] = useState([1, 2, 3, 4, 5]);
```

Aquí estamos usando el hook useState para definir dos estados locales:

message: Inicialmente es una cadena vacía. setMessage es la función para actualizar este estado.

rows: Inicialmente es una lista de números. setRows es la función para actualizar esta lista.

-   Manejadores de Eventos

```jsx
const handleClick = () => {
	setMessage('Button clicked!');
};
```

handleClick es una función que se llama cuando el botón correspondiente es clicado. Actualiza el estado message para mostrar 'Button clicked!'.

```jsx
const handleChange = (e) => {
	setMessage(e.target.value);
};
```

handleChange se llama cada vez que el valor del campo de entrada cambia. Actualiza el estado message con el valor actual del campo de entrada (e.target.value).

```jsx
const handleBlur = () => {
	setMessage('Input lost focus');
};
```

handleBlur se llama cuando el campo de entrada pierde el foco. Actualiza el estado message para mostrar 'Input lost focus'.

```jsx
const handleKeyPress = (e) => {
	setMessage(`Key pressed: ${e.key}`);
};
```

handleKeyPress se llama cada vez que se presiona una tecla en el campo de entrada. Actualiza el estado message para mostrar cuál tecla fue presionada (e.key).

```jsx
const handleMouseOver = () => {
	setMessage('Mouse over!');
};
```

handleMouseOver se llama cuando el ratón pasa sobre el div correspondiente. Actualiza el estado message para mostrar 'Mouse over!'.

```jsx
const deleteRow = (rowIndex) => {
	setRows(rows.filter((row, index) => index !== rowIndex));
};
```

deleteRow se llama cuando se hace clic en el botón de eliminar de una fila. Actualiza el estado rows para eliminar la fila correspondiente (rowIndex).

-   Renderizado del Componente

```jsx
return (
	<div>
		<h2>Event Example</h2>
		<button onClick={handleClick}>Click me</button>
		<input
			type="text"
			onChange={handleChange}
			onBlur={handleBlur}
			onKeyPress={handleKeyPress}
		/>
		<div onMouseOver={handleMouseOver}>Hover over me</div>
		<p>{message}</p>
		<ul>
			{rows.map((row, index) => (
				<li key={index}>
					Row {row} <button onClick={() => deleteRow(index)}>Delete</button>
				</li>
			))}
		</ul>
	</div>
);
```

<button onClick={handleClick}>Click me</button>: Renderiza un botón que llama a handleClick cuando se clickea.

<input>: Un campo de entrada que maneja varios eventos:

onChange: Llama a handleChange cuando el valor del campo cambia.

onBlur: Llama a handleBlur cuando el campo pierde el foco.

onKeyPress: Llama a handleKeyPress cuando se presiona una tecla.

<div onMouseOver={handleMouseOver}>Hover over me</div>: Un div que llama a handleMouseOver cuando el ratón pasa sobre él.

<p>{message}</p>: Muestra el mensaje actual almacenado en el estado message.

<ul>: Renderiza una lista (ul) de elementos (li), cada uno con un botón que llama a deleteRow para eliminar la fila correspondiente.

-   Exportación del Componente

```jsx
export default EventExample;
```

Exporta el componente EventExample para que pueda ser importado y utilizado en otros archivos.
