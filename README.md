# Abdoulaye Diagne — Personal Portfolio

Professional, bilingual (English & French) portfolio with instant language switching.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **next-intl** — i18n with locale-based routing (`/en`, `/fr`)
- **Tailwind CSS** — styling with CSS variables
- **Fonts:** Fraunces (display), IBM Plex Sans (body)

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000); you’ll be redirected to `/en`. Use the **FR** / **EN** switcher in the header to change language (client-side navigation, no full reload).

## Content

All content is driven by `src/data/portfolio.ts`. Edit that file to update profile, experience, education, skills, and contact. Bilingual strings use `en` and `fr` keys.

## Build

```bash
npm run build
npm start
```

If the build fails with an SWC binary error, try:

- `rm -rf node_modules .next && npm install && npm run build`
- Or use Node 18+ and ensure the correct `@next/swc-*` binary for your OS is installed.
