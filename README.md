# Fluent — Landing

Landing page de **Fluent**, empresa de software argentina. Réplica rebrandeada con identidad propia: paleta Aurora (índigo / violeta / cyan), glassmorphism intenso, degradados animados y muchas animaciones.

## Stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) (animaciones)
- [lucide-react](https://lucide.dev/) (íconos)

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
src/
  App.jsx                # ensambla las secciones
  main.jsx               # entry point
  index.css              # Tailwind + utilidades glass/gradiente
  data/site.js           # TODO el contenido editable (textos, servicios, equipo, clientes)
  components/
    AuroraBackground.jsx # blobs animados de fondo
    Navbar.jsx           # nav glass + menú mobile animado
    Hero.jsx             # hero con degradado animado + stats con contador
    Services.jsx
    ServiceCard.jsx      # card glass con spotlight que sigue al cursor
    Clients.jsx          # marquee infinito
    Team.jsx
    TeamCard.jsx
    Contact.jsx          # CTA principal
    Footer.jsx
    Counter.jsx          # contador animado
    ui/Reveal.jsx        # wrapper de scroll-reveal
```

## Personalización

Editá `src/data/site.js` para cambiar marca, contacto (WhatsApp, email), servicios, equipo y clientes. Los colores viven en `tailwind.config.js` (objeto `fluent`).
