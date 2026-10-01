import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppShell } from "./App";

export { PAGE_META, NOT_FOUND_META, SITE_URL } from "./seo";

/** Render one route to an HTML string (used by scripts/prerender.mjs). */
export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <AppShell />
    </StaticRouter>
  );
}
