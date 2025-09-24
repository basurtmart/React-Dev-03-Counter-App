# Counter App

Una sencilla aplicación de contador creada con [React Native](https://reactnative.dev/) y [Expo](https://expo.dev/).

## Características

- Muestra un contador en pantalla.
- Botón flotante para incrementar el contador (`+1`).
- Reinicia el contador a cero con un botón o manteniendo presionado el botón de incremento.
- Diseño responsivo y minimalista.

## Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/basurtmart/React-Dev-03-Counter-App.git
   cd React-Dev-03-Counter-App
   ```
2. Instala las dependencias:
   ```sh
   npm install
   ```
3. Inicia la aplicación:
   ```sh
   npm start
   ```
   Puedes abrir la app en un emulador Android/iOS o en la web.

## Estructura del proyecto

- [`App.tsx`](App.tsx): Componente principal de la aplicación.
- [`components/FAB.tsx`](components/FAB.tsx): Componente de botón flotante reutilizable.
- [`assets/`](assets): Imágenes e íconos usados en la app.

## Scripts útiles

- `npm start`: Inicia el servidor de desarrollo de Expo.
- `npm run android`: Ejecuta la app en un emulador Android.
- `npm run ios`: Ejecuta la app en un emulador iOS.
- `npm run web`: Ejecuta la app en el navegador.

## Requisitos

- Node.js
- Expo CLI (`npm install -g expo-cli`)