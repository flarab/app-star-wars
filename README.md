# Star Wars Explorer

Star Wars Explorer es una aplicación móvil desarrollada con React Native y Expo, diseñada como parte de una prueba técnica. Permite a los usuarios explorar información sobre las películas de Star Wars, actores, planetas y más, todo consumido desde la [Star Wars API (SWAPI)](https://swapi.dev/api).

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- Node.js (recomendado: la última versión LTS)
- Yarn para la gestión de paquetes: `npm install -g yarn`
- Expo CLI: `npm install -g expo-cli`
- Un editor de texto o IDE (recomendado: Visual Studio Code)

## Instalación

Sigue estos pasos para instalar y configurar el proyecto:

1. Clona este repositorio en tu máquina local usando:
2. 2. Navega hasta el directorio del proyecto clonado.
3. Ejecuta `yarn install` para instalar todas las dependencias requeridas por el proyecto.

## Ejecutando el Proyecto

Para iniciar la aplicación en modo de desarrollo:

1. Ejecuta `yarn start` en la raíz del proyecto. Esto abrirá el Metro Bundler de Expo en tu navegador.
2. Puedes ejecutar la aplicación en un emulador o directamente en tu dispositivo móvil usando la app de Expo:
- **Emulador/Simulador**: Haz clic en "Run on iOS simulator" o "Run on Android emulator" desde la interfaz del Metro Bundler.
- **Dispositivo Móvil**: Escanea el código QR con la cámara de tu dispositivo (iOS) o la app de Expo (Android).

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- `api/`: Contiene `SwapiServices.ts` para interactuar con la SWAPI.
- `components/`: Componentes reutilizables de UI, como `BottomBar`, `Container`, `ListItem`, etc.
- `features/`: Cada característica (como autenticación, personajes, películas, planetas) tiene su propia carpeta con páginas y slices de Redux para el manejo del estado.
- `hooks/`: Hooks personalizados para encapsular la lógica de negocio y las llamadas a la API.
- `navigation/`: Configuración de la navegación de la app, incluyendo `AppNavigator.tsx`.
- `state/`: Configuración global del estado de la aplicación, incluyendo la creación del store de Redux en `store.ts`.
- `types/`: Tipos y interfaces para TypeScript, organizando los tipos comunes como `character.ts`, `movie.ts`, `planet.ts`, etc.
- `utils/`: Funciones de utilidad, como `prepareData.ts` para procesar datos antes de su visualización.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, considera seguir estos pasos:

1. Haz fork y clona el repositorio.
2. Crea una nueva rama para tus cambios.
3. Realiza tus cambios y haz commit.
4. Envía tus cambios como una Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---