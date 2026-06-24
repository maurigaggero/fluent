# Fluent — Landing

Landing page de **Fluent**, software factory argentina. Identidad Aurora (índigo / violeta / cyan), glassmorphism y gradientes animados.

## Stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [lucide-react](https://lucide.dev/)

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
  App.jsx
  main.jsx
  index.css
  data/site.js           # contenido editable
  components/
    AuroraBackground.jsx
    Navbar.jsx
    Hero.jsx
    IndustryMarquee.jsx
    Services.jsx
    ServiceCard.jsx
    ProcessTimeline.jsx
    Clients.jsx
    Contact.jsx
    Footer.jsx
    Counter.jsx
    ScrollToTop.jsx
    ui/Reveal.jsx
public/
  images/hero-team-argentina.png
```

## Personalización

Editá `src/data/site.js` para textos, servicios, clientes y contacto. Colores en `tailwind.config.js` (objeto `fluent`).
