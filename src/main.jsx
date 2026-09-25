import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'

// Production pages are prerendered snapshots (scripts/prerender.mjs). Hydrating
// adopts that markup instead of discarding it and repainting: with createRoot,
// every lazy route first rendered its empty Suspense fallback over the snapshot,
// so the footer jumped up and back down (mobile CLS ~0.32 on /solutions/* and
// /contact/). A lazy route now keeps its prerendered HTML until its chunk loads.
// The empty shell (dev server, the prerender itself) still client-renders.
// The contract this depends on is enforced by scripts/check-hydration.mjs.
const container = document.getElementById('root')
if (container.hasChildNodes()) {
    ReactDOM.hydrateRoot(container, <App />)
} else {
    ReactDOM.createRoot(container).render(<App />)
}
