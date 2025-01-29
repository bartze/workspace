# My Tenth Functional App

Esta aplicación React demuestra el uso de componentes funcionales y el manejo de estado para controlar el inicio de sesión de un usuario.

## LoginControl.jsx

El archivo `LoginControl.jsx` es el componente principal de la aplicación. Sus características principales son:

-   Utiliza el hook `useState` para manejar el estado de inicio de sesión (`isLoggedIn`).
-   Renderiza condicionalmente diferentes componentes basados en el estado de inicio de sesión:
    -   `Greeting`: Muestra un saludo personalizado dependiendo de si el usuario ha iniciado sesión o no.
    -   `LoginButton` o `LogoutButton`: Muestra el botón apropiado según el estado de inicio de sesión.
    -   `Warning`: Muestra una advertencia si el usuario no ha iniciado sesión.
-   Contiene funciones para manejar los eventos de inicio y cierre de sesión (`handleLoginClick` y `handleLogoutClick`).

## PropTypes

Hemos instalado y configurado PropTypes en este proyecto por las siguientes razones:

1. **Validación de props**: PropTypes nos permite especificar el tipo de datos esperado para cada prop que recibe un componente. Esto ayuda a detectar errores temprano en el ciclo de desarrollo.

2. **Documentación**: Actúa como una forma de documentación en el código, haciendo más fácil para otros desarrolladores (o para ti mismo en el futuro) entender qué props espera cada componente.

3. **Depuración**: Si se pasa una prop de tipo incorrecto, PropTypes generará una advertencia en la consola durante el desarrollo, facilitando la identificación y corrección de errores.

4. **Mejores prácticas**: El uso de PropTypes es considerado una buena práctica en el desarrollo de React, ya que promueve un código más robusto y auto-documentado.

Para usar PropTypes, primero lo instalamos con:

```
npm install prop-types
```

Luego, en cada componente, importamos PropTypes y definimos las propTypes esperadas:

```
import PropTypes from 'prop-types';
const MyComponent = ({ myProp }) => {
// Código del componente
};
MyComponent.propTypes = {
myProp: PropTypes.string.isRequired,
};
export default MyComponent;
```

Esto asegura que `myProp` sea una cadena y que sea obligatoria para el componente.
