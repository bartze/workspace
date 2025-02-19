# Docker sobre EC2 - Práctica 3

## Introducción

En esta práctica, exploramos una forma fundamental de desplegar contenedores Docker en la nube: utilizando el daemon de Docker en una instancia EC2 de AWS. Este ejercicio nos permite entender cómo los contenedores pueden ser gestionados directamente sobre máquinas virtuales en un entorno cloud, sentando las bases para arquitecturas más avanzadas y escalables.

## Objetivos

- Instalar y configurar Docker en una instancia EC2

- Descargar y ejecutar imágenes y contenedores Docker

- Construir imágenes Docker personalizadas

- Gestionar y limpiar recursos Docker

- Aplicar conocimientos previos en un entorno cloud real

## ¿Por qué hacemos esto?

Aprender a desplegar contenedores Docker sobre instancias EC2 es esencial porque:

- Comprensión de la Infraestructura Cloud: Permite entender cómo se despliegan y gestionan aplicaciones en la nube desde sus cimientos.

- Consolidación de Habilidades: Combina conocimientos de programación, sistemas operativos y redes en un escenario práctico.

- Preparación para Entornos Reales: Muchas empresas utilizan Docker en conjunto con servicios cloud para desplegar sus aplicaciones de manera eficiente.

- Flexibilidad y Escalabilidad: Te enseña a manejar aplicaciones que pueden escalar fácilmente según la demanda, aprovechando los recursos de la nube.

- Introducción a Prácticas DevOps: Familiariza con herramientas y procesos que son clave en la integración y entrega continua de software.

## ¿Para qué sirve?

- Despliegue Eficiente de Aplicaciones: Permite empaquetar aplicaciones y sus dependencias en contenedores portables y consistentes.

- Aislamiento de Entornos: Garantiza que las aplicaciones se ejecuten de la misma manera en cualquier entorno, eliminando problemas de compatibilidad.

- Optimización de Recursos: Los contenedores son ligeros y consumen menos recursos que las máquinas virtuales tradicionales.

- Facilidad de Gestión: Docker simplifica la distribución, actualización y gestión de aplicaciones.

- Base para Servicios Avanzados: Sirve como fundamento para entender servicios de orquestación y gestión de contenedores como AWS ECS, Kubernetes, etc.

## Prerrequisitos

- Cuenta activa en AWS

- Instancia EC2 en funcionamiento (idealmente de la práctica 2)

- Conocimientos básicos de Linux y terminal

- Familiaridad con conceptos de Docker

- Acceso a AWS Systems Manager o capacidad para conectarse vía SSH

## Pasos de la Práctica

1. Descargar y arrancar el servicio Docker en una instancia EC2
   Actualizar los paquetes con sudo yum update -y

- Instalar Docker usando sudo yum install -y docker

- Añadir el usuario al grupo Docker: sudo usermod -a -G docker ec2-user

- Reiniciar la sesión para aplicar cambios de grupo

- Iniciar el servicio Docker con sudo service docker start

- Verificar la instalación con docker --version

2. Descargar una imagen Docker en la instancia

- Explorar Docker Hub y elegir la imagen alpine

- Descargar la imagen usando docker pull alpine

- Listar las imágenes descargadas con docker images

3. Levantar un contenedor Docker

- Ejecutar un contenedor interactivo: docker run -it alpine

- Ejecutar comandos dentro del contenedor (ejemplo: ls, echo "Hola Mundo")

- Salir del contenedor con exit

- Listar los contenedores existentes usando docker ps -a

4. Generar nuestra propia imagen Docker

- Levantar un contenedor en segundo plano: docker run -itd alpine

- Listar contenedores para obtener el ID: docker ps -a

- Crear una nueva imagen a partir del contenedor: docker commit [container_id] nueva-imagen

- Verificar la nueva imagen con docker images

5. Limpiar la máquina

- Parar contenedores en ejecución: docker stop [container_id]

- Eliminar contenedores: docker rm [container_id]

- Verificar que no quedan contenedores con docker ps -a

## Explicación Detallada

### Paso 1: Preparación del Entorno

Actualizamos los paquetes y instalamos Docker en la instancia EC2 para preparar el entorno donde ejecutaremos nuestros contenedores. Añadir el usuario al grupo Docker nos permite ejecutar comandos de Docker sin necesidad de sudo, mejorando la fluidez en el trabajo.

### Paso 2: Descarga de la Imagen Alpine

Alpine es una distribución de Linux muy ligera, ideal para contenedores debido a su pequeño tamaño (aproximadamente 5 MB). Descargar esta imagen nos permite ahorrar espacio y tiempo al trabajar con contenedores para pruebas y despliegues simples.

### Paso 3: Ejecución de un Contenedor

Ejecutamos un contenedor basado en Alpine de forma interactiva para entender cómo es trabajar dentro de un contenedor. Podemos ejecutar comandos y modificar el entorno sin afectar al sistema anfitrión.

### Paso 4: Creación de una Imagen Personalizada

Generar una imagen a partir de un contenedor nos permite crear versiones personalizadas de imágenes con configuraciones o aplicaciones preinstaladas. Esto es útil para distribuir entornos de trabajo consistentes o preconfigurados para equipos de desarrollo.

### Paso 5: Limpieza de Recursos

Mantener el entorno limpio es una buena práctica para liberar recursos y evitar conflictos. Eliminamos contenedores que ya no necesitamos y verificamos que todo esté en orden.

## Beneficios de esta Práctica

- Familiarización con Docker en AWS: Comprender cómo interactúa Docker con la infraestructura de AWS es fundamental para desplegar aplicaciones modernas.

- Experiencia Práctica: Más allá de la teoría, esta práctica te brinda experiencia real en la gestión de contenedores en la nube.

- Preparación para Servicios Gestionados: Entender los fundamentos te prepara para utilizar servicios gestionados como AWS ECS, AWS EKS o AWS Fargate.

- Optimización de Flujos de Trabajo: Aprendes a crear imágenes y contenedores que pueden acelerar tus procesos de desarrollo y despliegue.

## Conclusión

Esta práctica es un paso crucial en tu formación como desarrollador o ingeniero de la nube. Al dominar la gestión de contenedores en instancias EC2, tendrás una base sólida para enfrentar desafíos más complejos y aprovechar al máximo las herramientas y servicios que AWS ofrece.

## Recursos Adicionales

- Documentación de Docker: https://docs.docker.com/

- Docker Hub: https://hub.docker.com/

- Introducción a AWS EC2: https://docs.aws.amazon.com/es_es/AWSEC2/latest/UserGuide/Welcome.html

- AWS Systems Manager Session Manager: https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html
