# Orquestación de Contenedores con AWS Fargate, ECS y ALB

## Introducción

En el mundo actual de la computación en la nube, la orquestación de contenedores es esencial para desplegar aplicaciones de manera eficiente y escalable. Esta práctica guía el proceso de implementar una aplicación basada en contenedores utilizando AWS Fargate, Amazon Elastic Container Service (ECS) y un Application Load Balancer (ALB). Al final, tendrás un servicio funcional capaz de manejar múltiples instancias de tu aplicación, distribuyendo el tráfico de manera equilibrada.

## Objetivos

- Crear un clúster con AWS Fargate para ejecutar tareas sin gestionar servidores.

- Definir una tarea (task definition) que especifique cómo se ejecuta un contenedor.

- Implementar un balanceador de carga (ALB) para distribuir el tráfico entrante.

- Crear un servicio que integre todo y mantenga la aplicación en ejecución.

- Probar la aplicación para asegurarse de que está funcionando correctamente.

## Resumen del Proceso

1. Crear un Clúster: Establecer un entorno donde se ejecutarán las tareas de contenedores.

2. Definir una Tarea: Especificar la configuración y la imagen del contenedor que se ejecutará.

3. Configurar un Balanceador de Carga: Permitir que las solicitudes entrantes se distribuyan entre las tareas activas.

4. Crear un Servicio: Gestionar la ejecución y el escalado de las tareas en el clúster.

5. Probar el Servicio: Confirmar que la aplicación responde correctamente a las solicitudes.

## Paso a Paso Detallado

1. Crear un Clúster con AWS Fargate

   ¿Qué es un clúster? Un clúster es un conjunto de recursos de cómputo que ejecutan tareas y servicios. Al usar AWS Fargate, evitamos gestionar las instancias subyacentes, permitiendo un enfoque serverless.

### Pasos:

- Navegar a Elastic Container Service en la consola de AWS.

- Seleccionar "Create Cluster" y elegir "Networking only" (AWS Fargate).

- Configurar:

  - Nombre: alba-digi-cluster

  - Infraestructura: AWS Fargate (serverless)

  - Etiquetas (Tags): Name = alba-digi-cluster

  - Crear el clúster y verificar su estado.

2. Crear una Definición de Tarea (Task Definition)

   ¿Qué es una tarea? Es la unidad básica de ejecución en ECS que describe cómo se ejecuta un contenedor, incluyendo la imagen, recursos y variables de entorno.

### Pasos:

- En el clúster, seleccionar "Task Definitions" y crear una nueva.

- Elegir el tipo de lanzamiento Fargate.

- Configurar:

  - Nombre: alba-digi-task

  - Roles: LabRole (asignar los permisos necesarios)

  - Sistema Operativo: Linux

  - CPU: 1 vCPU

  - Memoria: 3 GB

- Agregar un contenedor:

  - Nombre del Contenedor: alba-digi-api-rest

  - Imagen: public.ecr.aws/n0h7v2z5/alba-digi-api-rest:latest (una imagen preconstruida)

  - Límites de Memoria:

    - Soft Limit: 2048 MiB (2 GB)

  - Mapeo de Puertos:

    - Puerto Host: 5050

    - Puerto Contenedor: 5050

    - Protocolo: TCP

  - Unidades de CPU: 1024 (equivalente a 1 vCPU)

- Crear la definición de tarea.

3. Configurar un Balanceador de Carga (ALB)

   ¿Por qué un ALB? Un Application Load Balancer distribuye el tráfico entrante entre múltiples instancias de la aplicación, proporcionando alta disponibilidad y escalabilidad.

### Pasos:

- Ir a EC2 y seleccionar "Load Balancers", luego "Create Load Balancer".

- Elegir "Application Load Balancer".

- Configurar:

  - Nombre: alba-digi-load-balancer

  - Esquema: Internet-facing (para ser accesible públicamente)

  - Tipo de IP: IPv4

  - Mapeo de Red: Seleccionar todas las zonas de disponibilidad y subredes por defecto.

  - Grupos de Seguridad: Usar el predeterminado o uno que permita tráfico entrante.

- Configurar Listeners y Routing:

  - Crear un Target Group con:

  - Tipo de Target: IP addresses

  - Nombre: alba-digi-target-group

  - Protocolo: HTTP

  - Puerto: 5050 (puerto expuesto por el contenedor)

  - VPC: La que se creó con el clúster.

  - Health Check:

    - Protocolo: HTTP

    - Path: /alive (punto de comprobación de salud)

- Asociar el Target Group al ALB y crear el balanceador.

4. Crear el Servicio

   ¿Qué es un servicio? Administra una o más tareas del mismo tipo, asegurando que el número deseado de tareas esté siempre en ejecución.

### Pasos:

- En el clúster, ir a "Services" y crear un nuevo servicio.

- Configurar:

  - Tipo de Lanzamiento: Fargate

  - Tipo de Aplicación: Service

  - Task Definition: Seleccionar alba-digi-task

  - Nombre del Servicio: alba-digi-service

  - Número de Tareas: 2 (para alta disponibilidad)

  - Opciones de Despliegue:

    - Rolling Update

    - Min. Healthy Percent: 100%

    - Max. Healthy Percent: 200%

- Configuración de Balanceo de Carga:

  - Tipo: Application Load Balancer

  - Seleccionar ALB Existente: alba-digi-load-balancer

  - Período de Gracia: 30 segundos

  - Contenedor a Balancear: alba-digi-api-rest:5050:5050

  - Listener: 80:HTTP

  - Target Group: alba-digi-target-group

- Crear el servicio y verificar que las tareas estén en estado running.

5. Probar el Servicio

   ¿Cómo asegurarse de que funciona? Accediendo al punto final de la aplicación y verificando su respuesta.

### Pasos:

- Obtener el DNS Name del ALB desde EC2 > Load Balancers.

- Ajustar las reglas de seguridad:

        - En Security Groups, editar las Inbound Rules para permitir tráfico HTTP (puerto 80) desde tu IP o desde Internet (0.0.0.0/0 para pruebas, aunque no es seguro para producción).

- Probar el endpoint:

        - En una terminal, ejecutar:

  ```bash
  curl -v http://<DNS_NAME>/alive
  ```

        - Deberías recibir una respuesta positiva indicando que el servicio está activo.

## ¿Para Qué Sirve Hacer Esto?

Este ejercicio simula un escenario real de despliegue de aplicaciones en la nube. Al completar estos pasos, aprendes a:

- Desplegar aplicaciones contenerizadas sin gestionar servidores.

- Escalar aplicaciones horizontalmente, ejecutando múltiples instancias para manejar mayores cargas.

- Distribuir tráfico de forma eficiente y segura mediante balanceadores de carga.

- Mejorar la disponibilidad y resiliencia de tus aplicaciones.

- Aplicar prácticas de DevOps, automatizando y orquestando despliegues en entornos cloud.

## Ejemplo Práctico:

Imagina que estás desarrollando una API REST para una aplicación de comercio electrónico. Esperas picos de tráfico durante eventos especiales como el Black Friday. Utilizando esta arquitectura:

- AWS Fargate te permite escalar rápidamente sin preocuparte por servidores.

- ECS gestiona tus contenedores, asegurando que siempre estén disponibles.

- Application Load Balancer distribuye el tráfico entre las instancias, evitando sobrecargas.

- Health Checks aseguran que solo las instancias saludables reciban tráfico.

- Servicios facilitan actualizaciones sin tiempo de inactividad, mejorando la experiencia del usuario.

## Conclusiones

Esta práctica no solo demuestra cómo desplegar una aplicación en AWS utilizando Fargate y ECS, sino que también resalta la importancia de la orquestación y automatización en el desarrollo moderno. Al abstraer la infraestructura, puedes centrarte en escribir código de calidad y entregar valor al usuario final más rápidamente.

## Pasos Finales y Limpieza

- Seguridad: Asegúrate de revisar y ajustar las reglas de seguridad para proteger tu aplicación en producción.

- Costos: Recuerda eliminar los recursos creados (clúster, servicios, ALB, etc.) para evitar cargos innecesarios.

- Aprendizaje Continuo: Explora temas como CI/CD, gestión de configuraciones y supervisión para completar tu comprensión del ciclo de vida de las aplicaciones cloud.

## Recursos Adicionales

- Documentación de AWS Fargate: Enlace

- Amazon ECS Deep Dive: Enlace

- Mejores Prácticas de Seguridad en AWS: Enlace
