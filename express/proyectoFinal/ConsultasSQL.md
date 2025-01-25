1. Verificar la relación entre users y teachers (1:1)
   Esta consulta muestra los profesores y sus usuarios asociados.

```sql
SELECT
    teachers.id AS teacher_id,
    teachers.dni AS teacher_dni,
    teachers.name AS teacher_name,
    teachers.last_name AS teacher_last_name,
    users.id AS user_id,
    users.email AS user_email,
    users.type AS user_type,
    users.active AS user_active
FROM
    teachers
JOIN
    users ON teachers.user_id = users.id;
```

2. Verificar la relación entre teachers y students (1:N)
   Muestra los estudiantes y los profesores a los que están asociados.

```sql
SELECT
    students.id AS student_id,
    students.dni AS student_dni,
    students.name AS student_name,
    students.last_name AS student_last_name,
    students.date_of_birth AS student_dob,
    teachers.id AS teacher_id,
    teachers.name AS teacher_name,
    teachers.last_name AS teacher_last_name
FROM
    students
JOIN
    teachers ON students.teacher_id = teachers.id
ORDER BY
    teacher_id;
```

3. Verificar usuarios activos e inactivos
   Cuenta el número de usuarios por estado.

```sql
SELECT
    active,
    COUNT(*) AS total
FROM
    users
GROUP BY
    active;
```

4. Verificar profesores con usuarios inactivos
   Identifica profesores con usuarios asociados inactivos.

```sql
SELECT
    teachers.id AS teacher_id,
    teachers.name AS teacher_name,
    users.active AS user_active
FROM
    teachers
JOIN
    users ON teachers.user_id = users.id
WHERE
    users.active = false;
```

5. Verificar estudiantes ordenados por fecha de nacimiento
   Lista todos los estudiantes ordenados desde el más antiguo al más joven.

```sql
SELECT
    id,
    dni,
    name,
    last_name,
    date_of_birth,
    teacher_id
FROM
    students
ORDER BY
    date_of_birth ASC;
```

6. Identificar profesores sin estudiantes asociados
   Muestra profesores que no tienen estudiantes asignados.

```sql
SELECT
    teachers.id AS teacher_id,
    teachers.name AS teacher_name,
    COUNT(students.id) AS student_count
FROM
    teachers
LEFT JOIN
    students ON teachers.id = students.teacher_id
GROUP BY
    teachers.id
HAVING
    COUNT(students.id) = 0;
```

7. Identificar usuarios sin profesor asociado
   Encuentra usuarios que no están asociados a ningún profesor.

```sql
SELECT
    users.id AS user_id,
    users.email AS user_email,
    users.type AS user_type,
    users.active AS user_active
FROM
    users
LEFT JOIN
    teachers ON users.id = teachers.user_id
WHERE
    teachers.id IS NULL;
```

8. Verificar encriptación de contraseñas
   Comprueba que las contraseñas están encriptadas y no en texto plano.

```sql
SELECT
    id,
    email,
    password
FROM
    users;
```

9. Comprobar unicidad de los emails de usuario
   Verifica que no existen correos electrónicos duplicados.

```sql
SELECT
    email,
    COUNT(*) AS occurrences
FROM
    users
GROUP BY
    email
HAVING
    COUNT(*) > 1;
```

10. Verificar que el campo active se actualiza correctamente
    Comprueba el estado de activo de un usuario específico.

```sql
SELECT
    id,
    email,
    active
FROM
    users
WHERE
    id = [ID_DEL_USUARIO];
```

11. Simular el endpoint /api/teachers/:teacher_id/students
    Obtiene los estudiantes de un profesor si el usuario asociado está activo.

```sql
SELECT
    students.id AS student_id,
    students.name AS student_name,
    students.date_of_birth,
    teachers.id AS teacher_id,
    users.active AS user_active
FROM
    students
JOIN
    teachers ON students.teacher_id = teachers.id
JOIN
    users ON teachers.user_id = users.id
WHERE
    teacher_id = [ID_DEL_PROFESOR]
    AND users.active = true
ORDER BY
    students.date_of_birth ASC;
```

12. Verificar total de registros en cada tabla
    Confirma que los seeders han insertado el número esperado de registros.

```sql
SELECT COUNT(*) AS total_users FROM users;

SELECT COUNT(*) AS total_teachers FROM teachers;

SELECT COUNT(*) AS total_students FROM students;
```

13. Verificar los tipos de usuario (admin y user)
    Cuenta cuántos usuarios hay de cada tipo.

```sql
SELECT
    type,
    COUNT(*) AS total
FROM
    users
GROUP BY
    type;
```

14. Comprobar el correcto borrado de registros con restricciones
    Intenta eliminar un usuario con profesor asociado.

```sql
DELETE FROM users WHERE id = [ID_DEL_USUARIO_CON_PROFESOR_ASOCIADO];
```

15. Verificar que las fechas de nacimiento son coherentes
    Revisa las fechas para detectar posibles errores.

```sql
SELECT
    id,
    name,
    last_name,
    date_of_birth
FROM
    students
ORDER BY
    date_of_birth DESC;
```

16. Consultar detalles de un usuario específico
    Obtiene información de un usuario y su profesor asociado si lo tiene.

```sql
SELECT
    users.id AS user_id,
    users.email,
    users.type,
    users.active,
    teachers.id AS teacher_id,
    teachers.name AS teacher_name
FROM
    users
LEFT JOIN
    teachers ON users.id = teachers.user_id
WHERE
    users.id = [ID_DEL_USUARIO];
```

17. Verificar que los estudiantes están asociados a profesores existentes
    Identifica estudiantes que puedan estar asociados a profesores no existentes.

```sql
SELECT
    students.id,
    students.name,
    students.teacher_id
FROM
    students
LEFT JOIN
    teachers ON students.teacher_id = teachers.id
WHERE
    teachers.id IS NULL;
```
