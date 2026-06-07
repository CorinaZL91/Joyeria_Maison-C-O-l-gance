# Pruebas de rendimiento, estrés y concurrencia con k6

Este proyecto incorpora scripts de k6 para complementar las pruebas unitarias automatizadas con Jest. Mientras Jest valida la lógica interna de servicios, utilidades y middlewares, k6 permite evaluar el comportamiento de la API bajo carga, estrés y accesos simultáneos.

## Requisito previo

Instalar k6 en el equipo. En Windows se puede instalar con Chocolatey:

```bash
choco install k6
```

También es necesario tener el backend ejecutándose:

```bash
npm run dev
```

La API se ejecuta por defecto en:

```bash
http://localhost:3000
```

## Scripts disponibles

| Script | Objetivo | Carga configurada |
|---|---|---|
| `k6/smoke.js` | Validar que la API responde correctamente antes de pruebas mayores. | 1 usuario virtual durante 20 s |
| `k6/load.js` | Simular carga normal sobre catálogo, productos y categorías. | Hasta 10 usuarios virtuales |
| `k6/stress.js` | Evaluar el comportamiento del sistema bajo carga elevada. | Hasta 50 usuarios virtuales |
| `k6/authenticated-flow.js` | Validar flujo autenticado: login, perfil, carrito y agregar producto. | 5 usuarios virtuales durante 45 s |
| `k6/concurrency-last-product.js` | Simular concurrencia al agregar producto y generar pedido. | 10 usuarios concurrentes |

## Comandos de ejecución

```bash
npm run k6:smoke
npm run k6:load
npm run k6:stress
npm run k6:auth
npm run k6:concurrency
```

También pueden ejecutarse directamente:

```bash
k6 run k6/smoke.js
k6 run k6/load.js
k6 run k6/stress.js
k6 run k6/authenticated-flow.js
k6 run k6/concurrency-last-product.js
```

## Variables de entorno opcionales

Los scripts permiten cambiar la URL base, usuario de prueba y producto sin modificar el código:

```bash
BASE_URL=http://localhost:3000 \
TEST_USER_EMAIL=maria@correo.com \
TEST_USER_PASSWORD=12345 \
PRODUCT_ID=1 \
k6 run k6/authenticated-flow.js
```

En Windows PowerShell:

```powershell
$env:BASE_URL="http://localhost:3000"
$env:TEST_USER_EMAIL="maria@correo.com"
$env:TEST_USER_PASSWORD="12345"
$env:PRODUCT_ID="1"
k6 run k6/authenticated-flow.js
```

## Criterios de aceptación sugeridos

| Prueba | Criterio |
|---|---|
| Smoke | Error rate menor a 1% y p95 menor a 1200 ms |
| Load | Error rate menor a 2%, checks mayores a 95% y p95 menor a 1200 ms |
| Stress | Error rate menor a 5%, checks mayores a 90% y p95 menor a 2000 ms |
| Authenticated flow | Error rate menor a 5%, checks mayores a 90% y p95 menor a 1500 ms |
| Concurrency | Las respuestas deben ser exitosas o rechazos controlados por stock/validación, sin caídas del servidor |

## Texto sugerido para el reporte

Para las pruebas de rendimiento, estrés y concurrencia se utilizó la herramienta k6, con la finalidad de simular múltiples usuarios virtuales realizando solicitudes a la API. Se ejecutaron pruebas Smoke, Load y Stress sobre endpoints públicos del catálogo y categorías, además de un flujo autenticado que valida inicio de sesión, consulta de perfil, consulta de carrito y agregado de producto. Asimismo, se definió una prueba de concurrencia para evaluar el comportamiento del sistema ante solicitudes simultáneas de compra.

Estas pruebas permitieron observar el comportamiento del backend bajo diferentes niveles de carga, identificando oportunidades de mejora relacionadas con tiempos de respuesta y control de operaciones concurrentes, sin comprometer la operación general de los módulos principales.
