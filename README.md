--------------------
Maison C&O l’Égance
--------------------
Aplicación web desarrollada para la gestión y comercialización de productos de joyería. El sistema permite administrar usuarios, productos, categorías, inventario, pedidos y procesos relacionados con las ventas.

-------------------------
Estructura del Proyecto
-------------------------
docs/
Contiene toda la documentación generada durante el desarrollo del proyecto:

- arquitectura/: documentación de la arquitectura final del sistema.
- pruebas/: documentación relacionada con el proceso de aseguramiento de la calidad, incluyendo el plan de pruebas, casos de prueba, registro de defectos y reporte final de resultados obtenidos mediante pruebas automatizadas con Jest y k6.
- manuales/: manual de instalación, despliegue y usuario.
- evidencias/: capturas de pantalla que documentan la ejecución de las pruebas automatizadas realizadas. Debido a limitaciones de almacenamiento, no fue posible adjuntar un video demostrativo; sin embargo, se incluyen evidencias gráficas que complementan los resultados presentados en el reporte de pruebas.

backend/
Contiene el código fuente del servidor, la lógica de negocio, acceso a base de datos, autenticación y servicios de la aplicación.

frontend/
Contiene la interfaz de usuario y todos los componentes visuales del sistema.

test/
Contiene las pruebas automatizadas desarrolladas durante el proyecto:
- Pruebas unitarias con Jest.
- Pruebas de rendimiento con k6 (Smoke, Load y Stress).
Las pruebas fueron aplicadas únicamente a los módulos y funcionalidades consideradas más críticas para el correcto funcionamiento del sistema, priorizando aquellos componentes con mayor impacto en la operación de la aplicación.

scripts/
Contiene scripts de apoyo para la configuración inicial del sistema:
- setup.ts: creación y configuración del usuario administrador inicial.
- seed.ts: carga de datos semilla necesarios para el funcionamiento básico del sistema.

.env.example
Archivo de ejemplo con la estructura de variables de entorno necesarias para ejecutar el proyecto, sin exponer información sensible.

Tecnologías Utilizadas
- Node.js
- Express
- TypeScript
- React
- PostgreSQL
- Prisma ORM
- Jest
- k6
- Git y GitHub

Autoras
- Gretna Odeth Cuellar Acosta
- Laura Corina Zapata Longoria
