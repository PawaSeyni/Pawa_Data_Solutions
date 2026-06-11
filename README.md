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

## Deploy to Netlify

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import from Git** → pick the repo.
3. Build settings are auto-read from `netlify.toml` (`npm run build` → `dist`).
4. Form submissions appear under **Forms** in the Netlify dashboard; add a
   notification to forward them to email.
