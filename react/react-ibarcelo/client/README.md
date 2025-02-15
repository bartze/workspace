# Academy App

## Descripción General

Academy App es una aplicación web desarrollada con React para gestionar usuarios, profesores y estudiantes. La aplicación utiliza autenticación basada en tokens JWT para garantizar la seguridad y cuenta con funcionalidades específicas según el tipo de usuario conectado (admin, user). El backend está desarrollado con Express y proporciona los endpoints necesarios para manejar usuarios, profesores y estudiantes.

## Características Principales

- Pantalla de Login: Permite a los usuarios autenticarse con su nombre de usuario y contraseña.
- Gestión de Usuarios: Los administradores pueden listar, crear, editar y eliminar usuarios.
- Gestión de Profesores: Los administradores pueden listar, crear, editar y eliminar profesores.
- Gestión de Estudiantes: Los usuarios pueden listar, crear, editar y eliminar estudiantes asociados.
- Menú dinámico: Opciones específicas según el tipo de usuario conectado (admin, user).
- Autenticación basada en tokens JWT: Seguridad garantizada mediante almacenamiento del token en localStorage.

## Tecnologías Utilizadas

### Frontend

- React
- React Router DOM
- Axios
- CSS (con estilos personalizados)

### Backend

- Node.js
- Express
- JWT (Json Web Token)
- Sequelize (ORM para la base de datos)

## Manejo del Token JWT

### Backend

El manejo del token se realiza en el backend mediante un middleware llamado isAuth. Este middleware verifica si el token enviado desde el frontend es válido y no ha expirado. Además, se utiliza un endpoint específico (/me) para obtener los datos del usuario autenticado.

### Código del endpoint /me:

```javascript
router.get("/me", isAuth, async (req, res) => {
  const userId = req.user.userId;

  try {
    // Obtener información adicional del usuario desde la base de datos
    const user = await usersRepo.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    let teacherId = null;

    const teacher = await teachersRepo.findByUserId(userId);
    if (teacher) {
      teacherId = teacher.id;
    }

    const userData = {
      id: user.id,
      email: user.email,
      type: user.type,
      active: user.active,
      teacherId: teacherId,
    };

    res.json(userData);
  } catch (error) {
    console.error("Error al obtener el usuario:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});
```

### Explicación:

1. Middleware isAuth:

   - Verifica si el token JWT es válido.
   - Decodifica el token para extraer información como userId.
   - Adjunta los datos decodificados al objeto req.user.

2. Endpoint /me:
   - Utiliza el userId decodificado para buscar al usuario en la base de datos.
   - Si el usuario es un profesor, también busca su ID asociado (teacherId).
   - Devuelve los datos completos del usuario al frontend.

### Frontend

En el frontend, después de que un usuario se autentica correctamente, se almacena el token en localStorage. Luego, se utiliza Axios para realizar solicitudes autenticadas al backend enviando el token en las cabeceras HTTP.

### Ejemplo en Login.jsx:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    // Solicitar el token
    const response = await axios.post("/api/token", {
      username,
      password,
    });

    const token = response.data.token;
    localStorage.setItem("token", token);

    // Obtenemos los datos del usuario
    const userResponse = await axios.get("/api/me", {
      headers: { Authorization: `Bearer ${token}` },
    });

    const user = userResponse.data;
    localStorage.setItem("user", JSON.stringify(user));

    navigate("/home/profile");
  } catch (error) {
    console.error("Error en la autenticación:", error);
    alert("Usuario o contraseña incorrectos");
  }
};
```

### Explicación:

1. El token JWT se solicita al backend después de que el usuario ingresa sus credenciales.
2. El token se almacena en localStorage para ser reutilizado en futuras solicitudes.
3. Se realiza una solicitud GET al endpoint /me para obtener los datos del usuario autenticado.

### Decisión: Uso de useEffect en lugar de loaders y actions

En esta aplicación decidimos usar useEffect para manejar las solicitudes asíncronas debido a las siguientes razones:

1. Simplicidad:

- El profesor enfatizó que considera más claro y directo usar useEffect que loaders o actions.

2. Familiaridad:

- useEffect es una herramienta estándar en React que todos los desarrolladores conocen bien.

- No requiere configuraciones adicionales como las que necesitan loaders o actions.

3. Flexibilidad:

- Con useEffect, podemos manejar solicitudes asíncronas directamente dentro de los componentes sin depender del router.

4. Decisión sobre <Form>:

Aunque consideramos usar <Form> de React Router DOM, decidimos mantener formularios tradicionales debido a su simplicidad y porque no vimos ventajas significativas al usar <Form> en esta aplicación.
