#!/bin/bash

# Iniciar servicios de Docker
npm run start-services

# Esperar a que la base de datos esté lista
echo "Esperando a que la base de datos esté lista..."
sleep 10

# Ejecutar migraciones
npm run migrate

# Sembrar la base de datos
npm run seed

# Iniciar backend y frontend
concurrently "npm run start-backend" "npm run start-frontend"
