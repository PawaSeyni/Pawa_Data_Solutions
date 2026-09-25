# PaWa Data Solutions — Static Site

Marketing website for PaWa Data Solutions, a data consultancy. Originally built
on [Base44](https://base44.com); **decoupled into a fully static, backend-free
Vite + React SPA** that deploys to Netlify.

## Stack ("five ones")

- **Vite + React 18** — build tool & UI
- **Tailwind CSS + shadcn/ui** — styling & components
- **react-router-dom** — client-side routing (12 pages)
- **framer-motion / lucide-react / recharts** — motion, icons, charts
- **Netlify Forms** — contact + job-application capture (replaces Base44 backend)

No Base44, no Supabase, no database, no server functions.

## What was decoupled

| Original (Base44) | Replacement |
| --- | --- |
| `Contact.create()` | Netlify Form `contact` (AJAX url-encoded POST) |
| `JobApplication.create()` + `UploadFile()` | Netlify Form `job-application` (multipart POST with résumé attached) |
| `requiresAuth: true` client | removed — site is fully public |

Form schemas are declared as hidden static `<form>` tags in `index.html` so
Netlify's build-time bot detects them; the live React forms submit via the
helpers in `src/lib/netlifyForms.js`.

## Pages

Home, Workshop, Careers, Privacy Policy, Do Not Sell or Share, and six service
pages: Data Integration, Pipeline Architecture, Data Governance, AI Readiness,
Analytics Enablement, Process Automation. UI supports EN / FR / ES / PT.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Hydration contract

Every route is prerendered to static HTML (`scripts/prerender.mjs`) and
`src/main.jsx` **hydrates** it rather than repainting. That is what keeps lazy
routes from dropping to their empty Suspense fallback on load (mobile CLS was
0.32 on `/solutions/*` and `/contact/` before). It only works while the first
client render matches the snapshot, which is taken *after* effects run:

- No `Math.random()`, `Date` or `window`/`localStorage` reads in render.
- Nothing that changes visible output in a mount effect. Radix `SelectValue`
  is the known trap: with a preselected value and no children it renders empty,
  then portals the label in after mount. Pass the label as children.
- `prerender.mjs` adds what React's own SSR would: `<!--$-->…<!--/$-->` around
  `<main data-suspense-outlet>`, `<!-- -->` between adjacent text nodes, and it
  strips the `<option>`s Radix adds to its hidden native `<select>` after mount.

`npm run check:hydration`, the last step of `npm run build` (and so of every
Netlify deploy), loads all 92 routes plus the 404 page and fails the build on
React errors #418/#422/#423/#425. To see *which* element mismatched, build with
`NODE_ENV=development npx vite build --mode development` and pass
`onRecoverableError: (e, info) => console.error(info.componentStack)` to
`hydrateRoot` temporarily.

## Deploy to Netlify

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import from Git** → pick the repo.
3. Build settings are auto-read from `netlify.toml` (`npm run build` → `dist`).
4. Form submissions appear under **Forms** in the Netlify dashboard; add a
   notification to forward them to email.
