import { renderToStaticMarkup, renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppShell } from "./App";
import { categories as faqCategories } from "./pages/FAQ";

export { PAGE_META, NOT_FOUND_META, SITE_URL } from "./seo";

/** Render one route to an HTML string (used by scripts/prerender.mjs). */
export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <AppShell />
    </StaticRouter>
  );
}

/** FAQ questions with answers flattened to plain text (for FAQPage JSON-LD). */
export function faqEntries(): { question: string; answer: string }[] {
  return faqCategories.flatMap((c) =>
    c.items.map((item) => ({
      question: item.question,
      answer: renderToStaticMarkup(<>{item.answer}</>)
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim(),
    }))
  );
}
