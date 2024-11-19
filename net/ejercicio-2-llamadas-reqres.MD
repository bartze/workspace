### 1. LIST USERS

-   **HTTPie**: `http https://reqres.in/api/users?page=2 'Accept: application/json' 'User-Agent: My User Agent'`
-   **cURL**: `curl -v -X GET -H 'Accept: application/json' -H 'User-Agent: My User Agent' https://reqres.in/api/users?page=2`

**Comentario**: Realiza una solicitud GET para listar usuarios en la segunda página. La respuesta es un JSON con los detalles de los usuarios.

### 2. SINGLE USER

-   **HTTPie**: `http https://reqres.in/api/users/2 'Accept: application/json' 'User-Agent: My User Agent'`
-   **cURL**: `curl -v -X GET -H 'Accept: application/json' -H 'User-Agent: My User Agent' https://reqres.in/api/users/2`

**Comentario**: Realiza una solicitud GET para obtener los detalles del usuario con ID 2. La respuesta es un JSON con la información del usuario.

### 3. SINGLE USER NOT FOUND

-   **HTTPie**: `http https://reqres.in/api/users/23 'Accept: application/json' 'User-Agent: My User Agent'`
-   **cURL**: `curl -v -X GET -H 'Accept: application/json' -H 'User-Agent: My User Agent' https://reqres.in/api/users/23`

**Comentario**: Realiza una solicitud GET para un usuario que no existe (ID 23). La respuesta es un código 404 indicando que el usuario no se encontró.

### 4. LIST <RESOURCE>

-   **HTTPie**: `http https://reqres.in/api/unknown 'Accept: application/json' 'User-Agent: My User Agent'`
-   **cURL**: `curl -v -X GET -H 'Accept: application/json' -H 'User-Agent: My User Agent' https://reqres.in/api/unknown`

**Comentario**: Realiza una solicitud GET para listar recursos. La respuesta es un JSON con los detalles de los recursos.

### 5. SINGLE <RESOURCE>

-   **HTTPie**: `http https://reqres.in/api/unknown/2 'Accept: application/json' 'User-Agent: My User Agent'`
-   **cURL**: `curl -v -X GET -H 'Accept: application/json' -H 'User-Agent: My User Agent' https://reqres.in/api/unknown/2`

**Comentario**: Realiza una solicitud GET para obtener los detalles del recurso con ID 2. La respuesta es un JSON con la información del recurso.

### 6. SINGLE <RESOURCE> NOT FOUND

-   **HTTPie**: `http https://reqres.in/api/unknown/23`
-   **cURL**: `curl -v -X GET https://reqres.in/api/unknown/23`

**Comentario**: Realiza una solicitud GET para un recurso que no existe (ID 23). La respuesta es un código 404 indicando que el recurso no se encontró.

### 7. CREATE

-   **HTTPie**: `http POST https://reqres.in/api/users name="Iñaki" job="Developer" age=51`
-   **cURL**: `curl -X POST https://reqres.in/api/users -H "Content-Type: application/json" -d '{"name": "John Doe", "job": "Developer"}' -v`

**Comentario**: Realiza una solicitud POST para crear un nuevo usuario con los datos proporcionados. La respuesta es un JSON con los detalles del usuario creado.

### 8. UPDATE

-   **HTTPie**: `http PUT https://reqres.in/api/users/2 name="Iñaki" job="Engineer"`
-   **cURL**: `curl -v -X PUT https://reqres.in/api/users/2 -H "Content-Type: application/json" -d '{"name": "Iñaki", "job": "Engineer"}'`

**Comentario**: Realiza una solicitud PUT para actualizar los detalles del usuario con ID 2. La respuesta es un JSON con los detalles actualizados del usuario.

### 9. UPDATE (Patch)

-   **HTTPie**: `http PATCH https://reqres.in/api/users/2 name="Iñaki" job="Computer engineer"`
-   **cURL**: `curl -v -X PATCH https://reqres.in/api/users/2 -H "Content-Type: application/json" -d '{"name": "Iñaki", "job": "Computer engineer"}'`

**Comentario**: Realiza una solicitud PATCH para actualizar parcialmente los detalles del usuario con ID 2. La respuesta es un JSON con los detalles actualizados del usuario.

### 10. DELETE

-   **HTTPie**: `http DELETE https://reqres.in/api/users/2`
-   **cURL**: `curl -v -X DELETE https://reqres.in/api/users/2`

**Comentario**: Realiza una solicitud DELETE para eliminar el usuario con ID 2. La respuesta es un código 204 indicando que la eliminación fue exitosa.

### 11. REGISTER-SUCCESSFUL

-   **HTTPie**: `http POST https://reqres.in/api/register email="eve.holt@reqres.in" password="pistol"`
-   **cURL**: `curl -v -X POST https://reqres.in/api/register -H "Content-Type: application/json" -d '{"email": "eve.holt@reqres.in", "password": "pistol"}'`

**Comentario**: Realiza una solicitud POST para registrar un nuevo usuario con los datos proporcionados. La respuesta es un JSON con un token de registro.

### 12. REGISTER-UNSUCCESSFUL

-   **HTTPie**: `http POST https://reqres.in/api/register email="pepe@viyuela.es"`
-   **cURL**: `curl -v -X POST https://reqres.in/api/register -H "Content-Type: application/json" -d '{"email": "pepe@viyuela.es"}'`

**Comentario**: Realiza una solicitud POST para registrar un usuario con datos incompletos. La respuesta es un código 400 indicando que falta el campo `password`.

### 13. LOGIN-SUCCESSFUL

-   **HTTPie**: `http POST https://reqres.in/api/login email="eve.holt@reqres.in" password="cityslicka"`
-   **cURL**: `curl -v -X POST https://reqres.in/api/login -H "Content-Type: application/json" -d '{"email":"eve.holt@reqres.in","password":"cityslicka"}'`

**Comentario**: Realiza una solicitud POST para iniciar sesión con los datos proporcionados. La respuesta es un JSON con un token de sesión.

### 14. LOGIN-UNSUCCESSFUL

-   **HTTPie**: `http POST https://reqres.in/api/login email="peter@klaven"`
-   **cURL**: `curl -v -X POST https://reqres.in/api/login -H "Content-Type: application/json" -d '{"email":"peter@klaven"}'`

**Comentario**: Realiza una solicitud POST para iniciar sesión con datos incompletos. La respuesta es un código 400 indicando que falta el campo `password`.

### 15. DELAYED RESPONSE

-   **HTTPie**: `http https://reqres.in/api/users?delay=3`
-   **cURL**: `curl -v -X GET https://reqres.in/api/users?delay=3`

**Comentario**: Realiza una solicitud GET para listar usuarios con una respuesta retardada de 3 segundos. La respuesta es un JSON con los detalles de los usuarios.

### Informe del Ejercicio de Networking

#### Resumen del Ejercicio

El objetivo del ejercicio era interactuar con la API de Reqres.in utilizando herramientas como HTTPie y cURL para realizar 15 llamadas diferentes y documentar cada una de ellas. A continuación, se presenta el análisis de cada llamada:

### 1. LIST USERS

-   **HTTPie**: `http https://reqres.in/api/users?page=2 'Accept: application/json' 'User-Agent: My User Agent'`
-   **cURL**: `curl -v -X GET -H 'Accept: application/json' -H 'User-Agent: My User Agent' https://reqres.in/api/users?page=2`

**Comentario**: Realiza una solicitud GET para listar usuarios en la segunda página. La respuesta es un JSON con los detalles de los usuarios.

### 2. SINGLE USER

-   **HTTPie**: `http https://reqres.in/api/users/2 'Accept: application/json' 'User-Agent: My User Agent'`
-   **cURL**: `curl -v -X GET -H 'Accept: application/json' -H 'User-Agent: My User Agent' https://reqres.in/api/users/2`

**Comentario**: Realiza una solicitud GET para obtener los detalles del usuario con ID 2. La respuesta es un JSON con la información del usuario.

### 3. SINGLE USER NOT FOUND

-   **HTTPie**: `http https://reqres.in/api/users/23 'Accept: application/json' 'User-Agent: My User Agent'`
-   **cURL**: `curl -v -X GET -H 'Accept: application/json' -H 'User-Agent: My User Agent' https://reqres.in/api/users/23`

**Comentario**: Realiza una solicitud GET para un usuario que no existe (ID 23). La respuesta es un código 404 indicando que el usuario no se encontró.

### 4. LIST <RESOURCE>

-   **HTTPie**: `http https://reqres.in/api/unknown 'Accept: application/json' 'User-Agent: My User Agent'`
-   **cURL**: `curl -v -X GET -H 'Accept: application/json' -H 'User-Agent: My User Agent' https://reqres.in/api/unknown`

**Comentario**: Realiza una solicitud GET para listar recursos. La respuesta es un JSON con los detalles de los recursos.

### 5. SINGLE <RESOURCE>

-   **HTTPie**: `http https://reqres.in/api/unknown/2 'Accept: application/json' 'User-Agent: My User Agent'`
-   **cURL**: `curl -v -X GET -H 'Accept: application/json' -H 'User-Agent: My User Agent' https://reqres.in/api/unknown/2`

**Comentario**: Realiza una solicitud GET para obtener los detalles del recurso con ID 2. La respuesta es un JSON con la información del recurso.

### 6. SINGLE <RESOURCE> NOT FOUND

-   **HTTPie**: `http https://reqres.in/api/unknown/23`
-   **cURL**: `curl -v -X GET https://reqres.in/api/unknown/23`

**Comentario**: Realiza una solicitud GET para un recurso que no existe (ID 23). La respuesta es un código 404 indicando que el recurso no se encontró.

### 7. CREATE

-   **HTTPie**: `http POST https://reqres.in/api/users name="Iñaki" job="Developer" age=51`
-   **cURL**: `curl -X POST https://reqres.in/api/users -H "Content-Type: application/json" -d '{"name": "John Doe", "job": "Developer"}' -v`

**Comentario**: Realiza una solicitud POST para crear un nuevo usuario con los datos proporcionados. La respuesta es un JSON con los detalles del usuario creado.

### 8. UPDATE

-   **HTTPie**: `http PUT https://reqres.in/api/users/2 name="Iñaki" job="Engineer"`
-   **cURL**: `curl -v -X PUT https://reqres.in/api/users/2 -H "Content-Type: application/json" -d '{"name": "Iñaki", "job": "Engineer"}'`

**Comentario**: Realiza una solicitud PUT para actualizar los detalles del usuario con ID 2. La respuesta es un JSON con los detalles actualizados del usuario.

### 9. UPDATE (Patch)

-   **HTTPie**: `http PATCH https://reqres.in/api/users/2 name="Iñaki" job="Computer engineer"`
-   **cURL**: `curl -v -X PATCH https://reqres.in/api/users/2 -H "Content-Type: application/json" -d '{"name": "Iñaki", "job": "Computer engineer"}'`

**Comentario**: Realiza una solicitud PATCH para actualizar parcialmente los detalles del usuario con ID 2. La respuesta es un JSON con los detalles actualizados del usuario.

### 10. DELETE

-   **HTTPie**: `http DELETE https://reqres.in/api/users/2`
-   **cURL**: `curl -v -X DELETE https://reqres.in/api/users/2`

**Comentario**: Realiza una solicitud DELETE para eliminar el usuario con ID 2. La respuesta es un código 204 indicando que la eliminación fue exitosa.

### 11. REGISTER-SUCCESSFUL

-   **HTTPie**: `http POST https://reqres.in/api/register email="eve.holt@reqres.in" password="pistol"`
-   **cURL**: `curl -v -X POST https://reqres.in/api/register -H "Content-Type: application/json" -d '{"email": "eve.holt@reqres.in", "password": "pistol"}'`

**Comentario**: Realiza una solicitud POST para registrar un nuevo usuario con los datos proporcionados. La respuesta es un JSON con un token de registro.

### 12. REGISTER-UNSUCCESSFUL

-   **HTTPie**: `http POST https://reqres.in/api/register email="pepe@viyuela.es"`
-   **cURL**: `curl -v -X POST https://reqres.in/api/register -H "Content-Type: application/json" -d '{"email": "pepe@viyuela.es"}'`

**Comentario**: Realiza una solicitud POST para registrar un usuario con datos incompletos. La respuesta es un código 400 indicando que falta el campo `password`.

### 13. LOGIN-SUCCESSFUL

-   **HTTPie**: `http POST https://reqres.in/api/login email="eve.holt@reqres.in" password="cityslicka"`
-   **cURL**: `curl -v -X POST https://reqres.in/api/login -H "Content-Type: application/json" -d '{"email":"eve.holt@reqres.in","password":"cityslicka"}'`

**Comentario**: Realiza una solicitud POST para iniciar sesión con los datos proporcionados. La respuesta es un JSON con un token de sesión.

### 14. LOGIN-UNSUCCESSFUL

-   **HTTPie**: `http POST https://reqres.in/api/login email="peter@klaven"`
-   **cURL**: `curl -v -X POST https://reqres.in/api/login -H "Content-Type: application/json" -d '{"email":"peter@klaven"}'`

**Comentario**: Realiza una solicitud POST para iniciar sesión con datos incompletos. La respuesta es un código 400 indicando que falta el campo `password`.

### 15. DELAYED RESPONSE

-   **HTTPie**: `http https://reqres.in/api/users?delay=3`
-   **cURL**: `curl -v -X GET https://reqres.in/api/users?delay=3`

**Comentario**: Realiza una solicitud GET para listar usuarios con una respuesta retardada de 3 segundos. La respuesta es un JSON con los detalles de los usuarios.
