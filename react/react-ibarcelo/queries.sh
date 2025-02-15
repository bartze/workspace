#!/bin/bash

# Obtener todos los estudiantes
curl -X GET http://localhost:3000/api/students

# Obtener un estudiante por id
curl -X GET http://localhost:3000/api/students/1

# Obtener un usuario que no existe
curl -X GET http://localhost:3000/api/users/999

# Crear un usuario con contraseña encriptada
curl -X POST http://localhost:3000/api/users \
     -H "Content-Type: application/json" \
     -d '{
           "email": "secureuser@example.com",
           "password": "securepassword",
           "type": "admin"
         }'

# Crear un usuario con email duplicado
curl -X POST http://localhost:3000/api/users \
     -H "Content-Type: application/json" \
     -d '{
           "email": "duplicate@example.com",
           "password": "password123",
           "type": "user"
         }'

# Crear un estudiante
curl -X POST http://localhost:3000/api/students \
     -H "Content-Type: application/json" \
     -d '{
           "dni": "11223355E",
           "name": "Jon",
           "last_name": "Moncayola",
           "date_of_birth": "20-07-2000",
           "teacher_id": 2
         }'

# Intentar borrar un usuario con un profesor asociado
curl -X DELETE http://localhost:3000/api/users/1

# Crear un profesor sin estudiantes
curl -X POST http://localhost:3000/api/teachers \
     -H "Content-Type: application/json" \
     -d '{
           "dni": "12345678A",
           "name": "Luis",
           "last_name": "García",
           "date_of_birth": "10-05-1980",
           "user_id": 3
         }'

# Crear un profesor sin nombre
curl -X POST http://localhost:3000/api/teachers \
     -H "Content-Type: application/json" \
     -d '{
           "dni": "22334455F",
           "last_name": "Martinez",
           "date_of_birth": "15-03-1975",
           "user_id": 2
         }'

# Intentar borrar un profesor sin estudiantes asociados
curl -X DELETE http://localhost:3000/api/teachers/3

# Crear un usuario sin profesor asociado
curl -X POST http://localhost:3000/api/users \
     -H "Content-Type: application/json" \
     -d '{
           "email": "example@example.com",
           "password": "password1234",
           "type": "user"
         }'

# Intentar borrar un usuario sin profesor asociado
curl -X DELETE http://localhost:3000/api/users/4

# Obtener un usuario con su profesor asociado
curl -X GET http://localhost:3000/api/users/2

# Crear un usuario con profesor asociado
curl -X POST http://localhost:3000/api/users \
     -H "Content-Type: application/json" \
     -d '{
           "email": "associateduser@example.com",
           "password": "associatedpassword",
           "type": "user",
           "teacher_id": 1
         }'

# Obtener todos sus estudiantes ordenados por fecha de nacimiento de un profesor
curl -X GET http://localhost:3000/api/teachers/1/students

# Obtener el estado activo de un usuario
curl -X GET http://localhost:3000/api/users/1/active

# Activar un usuario
curl -X POST http://localhost:3000/api/users/1/active \
     -H "Content-Type: application/json"
