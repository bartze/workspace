## 1. Creación de una VPC (Virtual Private Cloud)

- ¿Qué es una VPC? Imagina la VPC como tu propio vecindario privado en la nube de AWS. Es un espacio de red aislado donde tienes control total sobre el entorno de red virtual, incluyendo la selección de tu rango de direcciones IP, creación de subredes, configuración de rutas y gateways.

- ¿Para qué sirve? La VPC te permite diseñar y desplegar recursos de AWS en un entorno de red virtual seguro y controlado. Es la base sobre la cual construirás toda tu infraestructura en la nube.

## 2. Creación de una Subred Pública

- ¿Qué es una subred? Es como subdividir tu vecindario (VPC) en calles específicas. Una subred pública es una sección de tu VPC que tiene acceso directo a internet.

- ¿Para qué sirve? Las subredes públicas alojan recursos que necesitan comunicarse con internet, como servidores web. Al configurar una subred pública, estás definiendo dónde se ubicarán estos recursos dentro de tu VPC.

## 3. Configuración de Rutas e Internet Gateway

### Internet Gateway

- ¿Qué es? Es la puerta principal de tu vecindario que conecta con el mundo exterior. El Internet Gateway permite que el tráfico fluya entre tu VPC y el internet público.

- ¿Para qué sirve? Sin este gateway, tus recursos en la VPC no podrían comunicarse con servicios externos ni ser accesibles desde internet.

### Tabla de Rutas

- ¿Qué es? Piensa en ella como el mapa vial de tu vecindario. Define por dónde debe ir el tráfico de datos para llegar a su destino.

- ¿Para qué sirve? Al añadir reglas a la tabla de rutas que dirigen el tráfico hacia el Internet Gateway, estás estableciendo las vías necesarias para que tus recursos hablen con el mundo exterior.

## 4. Lanzamiento de una Instancia EC2 en la Subred

- ¿Qué es una instancia EC2? Es como tener una computadora (servidor) en la nube. EC2 (Elastic Compute Cloud) te permite crear y configurar máquinas virtuales según tus necesidades.

- ¿Para qué sirve? Al lanzar una instancia EC2 en tu subred pública, estás desplegando un recurso que puede alojar aplicaciones, sitios web o servicios que necesitan interactuar con internet.

## 5. Acceso a la Instancia EC2

- ¿Qué implica? Conectarte a tu instancia es como sentarte frente a tu computadora física. Te permite interactuar directamente con el sistema operativo para instalar software, configurar aplicaciones y administrar el servidor.

- ¿Para qué sirve? Es fundamental para gestionar y mantener tus aplicaciones. Por ejemplo, podrías instalar un servidor web, una base de datos o cualquier otro servicio necesario para tu proyecto.

## Propósito General de la Práctica

- Comprender los Fundamentos de Redes en AWS: Aprende cómo se estructuran las redes en la nube y cómo los diferentes componentes interactúan entre sí.

- Configurar un Entorno Seguro y Escalable: Al dominar VPCs y subredes, puedes diseñar arquitecturas que protejan tus recursos y que puedan crecer según las demandas de tus aplicaciones.

- Familiarizarte con los Servicios Clave de AWS:

  - VPC: Establecer el entorno de red básico.

  - EC2: Desplegar y gestionar instancias de cómputo.

  - Internet Gateway y Tablas de Rutas: Controlar el flujo de tráfico hacia y desde internet.

## La Importancia de Cada Paso

- Control Total sobre tu Red: Al crear tu propia VPC, evitas depender de configuraciones predeterminadas y puedes personalizar tu entorno según las necesidades específicas de tu proyecto.

- Segmentación de la Red: Las subredes te permiten organizar y aislar recursos. Por ejemplo, podrías tener subredes públicas para servidores web y subredes privadas para bases de datos.

- Seguridad Mejorada: Al gestionar tus rutas y gateways, controlas quién puede acceder a tus recursos y cómo estos se comunican con el exterior, fortaleciendo la seguridad de tu infraestructura.

## Metáforas para Entender Mejor

- VPC como una Isla Privada: Es tu propio territorio aislado en un vasto océano (la nube). Tienes control sobre quién entra y sale, y cómo se organizan las cosas dentro.

- Subredes como Barrios en tu Isla: Cada barrio tiene su propósito y características. Algunos están abiertos al turismo (subredes públicas), mientras que otros son residenciales y privados (subredes privadas).

- Internet Gateway como tu Puerto Principal: Es el punto donde tu isla se conecta con otras islas y continentes. Sin él, no habría comercio ni comunicación con el mundo exterior.

## Proyección a Futuro

- Expansión de Infraestructura: Ahora que sabes crear una VPC y lanzar instancias, puedes empezar a construir arquitecturas más complejas, incorporando balanceadores de carga, autoescalado y otros servicios.

- Implementación de Buenas Prácticas de Seguridad: Aprender sobre grupos de seguridad, listas de control de acceso y cómo proteger tus recursos de amenazas externas.

- Automatización y Administración Avanzada: Explorar herramientas como AWS CloudFormation o Terraform para automatizar la creación de infraestructuras.

## Importancia en el Mundo Real

- Demanda Laboral: Las habilidades en AWS y comprensión de la nube son altamente demandadas en el mercado laboral actual.

- Eficiencia Operativa: Las empresas buscan migrar a la nube por flexibilidad y ahorro de costos. Saber cómo configurar y optimizar recursos en AWS es invaluable.

- Innovación y Escalabilidad: La nube permite experimentar y escalar de manera ágil. Con estos conocimientos, puedes llevar proyectos desde una idea hasta una aplicación global.

## ¿Alguna Vez te Has Preguntado...?

- ¿Cómo grandes empresas manejan cantidades masivas de datos y tráfico en internet? Comprendiendo estos conceptos, estás desentrañando parte de ese misterio.

- ¿Qué sucede detrás de escena cuando accedes a una aplicación web? La instancia EC2 en una subred pública, junto con las rutas y gateways, es fundamental en ese proceso.
