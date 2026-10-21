# Fluent — Landing

Landing page de **Fluent**, software factory argentina. HTML, CSS y JavaScript sin frameworks; Vite se usa solo para el servidor de desarrollo y el build (minificado y hashing de assets).

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build de producción

```bash
npm run build    # genera dist/
npm run preview  # sirve el build localmente
```

## Estructura

```
index.html        # contenido y estructura de toda la landing
src/
  style.css       # estilos (paleta en las variables de :root)
  main.js         # menú, animaciones de entrada, contadores, tarjetas apiladas y carrusel de proceso
public/
  favicon.svg
  images/hero-team-argentina.webp
```

## Personalización

Los textos, servicios, clientes y datos de contacto se editan directamente en `index.html`. Los colores, tipografías y espaciados están en las variables de `:root` al inicio de `src/style.css`.
