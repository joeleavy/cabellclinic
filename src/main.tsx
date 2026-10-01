import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root")!;

// Production pages ship with prerendered HTML (scripts/prerender.mjs), which
// React adopts in place. The dev server serves an empty root, so render fresh.
if (root.hasChildNodes()) {
  hydrateRoot(root, <App />, {
    // Surfaces server/client markup mismatches, which production React
    // otherwise recovers from silently.
    onRecoverableError: (error) => console.warn("Hydration issue:", error),
  });
} else {
  createRoot(root).render(<App />);
}
