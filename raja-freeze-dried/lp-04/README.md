# Raja Freeze Dried Food — Landing Page

Premium one-page landing site for **Raja Freeze Dried Food**, an Indonesian
producer of vacuum freeze-dried tropical fruit snacks (Apel, Pisang, Jus Bar
Mangga, Durian, Manggis, Mangga).

## Tech

Static HTML/CSS/JS — no build step, no dependencies.

- Premium gold/orange/green/purple color system with ambient glow effects,
  glassmorphism cards and floating light particles
- Scroll-reveal animations via `IntersectionObserver`
- Smooth-scroll navigation and FAQ accordion
- Mobile-first responsive layout
- `prefers-reduced-motion` support

## Project structure

```
.
├── index.html           # Main landing page (all sections, styles, scripts)
├── assets/
│   └── images/           # Product packaging photos
│       ├── apel.png
│       ├── pisang.png
│       ├── jus-bar-mangga.png
│       ├── durian.png
│       ├── manggis.png
│       └── mangga.png
├── vercel.json           # Vercel deployment config (clean URLs, asset caching)
└── .gitignore
```

## Local development

No build tools required — just open `index.html` in a browser, or serve it
locally:

```bash
npx serve .
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repo on [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Other** (static site) — no build command needed.
4. Deploy.

## Contact

- WhatsApp: +62 812-9636-1446
- Email: info@rajafreezdriedfood.com
- Location: Jakarta, Indonesia
