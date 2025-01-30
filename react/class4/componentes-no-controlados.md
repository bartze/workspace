# Componentes no controlados

Los componentes no controlados son una alternativa a los componentes controlados para implementar formularios en React. En estos componentes, los datos del formulario son manejados por el propio DOM en lugar de por un componente React.

## Implemetación

Para crear un componente no controlado:

1. Se usa una referencia (ref) para obtener los valores del formulario directamente del DOM.
2. En lugar de escribir un controlador de eventos para cada actualización de estado, se accede a los valores cuando se necesitan, generalmente en el envío del formulario.

## Ejemplo

```
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```

## Valores predeterminados

Para especificar valores iniciales en componentes no controlados, se utilizan atributos como:

-   -   defaultValue para inputs de texto y áreas de texto
        defaultChecked para checkboxes y radio buttons.

## Entrada de archivo

Los inputs de tipo "file" son siempre componentes no controlados en React, ya que su valor solo puede ser establecido por el usuario.

## Consideraciones

1. Los componentes no controlados pueden ser más fáciles de integrar con código no React.
2. Pueden requerir menos código para implementaciones rápidas.
3. Sin embargo, en general, se recomienda usar componentes controlados para manejar datos de formularios en React.
