// Post-build prerender: renders every route to static HTML (full text, per-page
// title/description/OG tags, canonical, robots) and writes a sitemap.
// Runs after `vite build` + the SSR build (see package.json "build").
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const DIST = path.resolve(process.env.PRERENDER_DIST || "dist");
const SSR_ENTRY = path.resolve(process.env.PRERENDER_SSR || "dist-ssr", "entry-server.js");

const { render, PAGE_META, SITE_URL } = await import(pathToFileURL(SSR_ENTRY).href);
const template = fs.readFileSync(path.join(DIST, "index.html"), "utf8");

const esc = (s) =>
  s.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

const setTag = (html, regex, replacement) => {
  if (!regex.test(html)) throw new Error(`Template is missing expected tag: ${regex}`);
  return html.replace(regex, replacement);
};

// Without JavaScript, framer-motion's entrance animations would leave text
// transparent. This only applies when scripts are off; normal visitors still
// get the animations.
const NOSCRIPT_STYLE =
  '<noscript><style>[style*="opacity:0"],[style*="opacity: 0"]{opacity:1!important;transform:none!important}</style></noscript>';

const buildPage = (route, meta) => {
  const url = route === "/" ? `${SITE_URL}/` : `${SITE_URL}${route}`;
  const body = render(route);
  let html = template;
  html = setTag(html, /<title>[^<]*<\/title>/, `<title>${esc(meta.title)}</title>`);
  html = setTag(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${esc(meta.description)}" />`);
  html = setTag(html, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`);
  html = setTag(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${esc(meta.title)}" />`);
  html = setTag(html, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${esc(meta.description)}" />`);
  html = setTag(html, /<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${esc(meta.title)}" />`);
  html = setTag(html, /<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${esc(meta.description)}" />`);
  const extraHead = [
    `<link rel="canonical" href="${url}" />`,
    meta.noindex ? '<meta name="robots" content="noindex, nofollow" />' : "",
    NOSCRIPT_STYLE,
  ].filter(Boolean).join("\n    ");
  html = html.replace("</head>", `    ${extraHead}\n  </head>`);
  html = setTag(html, /<div id="root"><\/div>/, `<div id="root">${body}</div>`);
  return html;
};

const routes = Object.keys(PAGE_META);
for (const route of routes) {
  const html = buildPage(route, PAGE_META[route]);
  const file = route === "/" ? "index.html" : `${route.slice(1)}.html`;
  fs.writeFileSync(path.join(DIST, file), html);
  const words = html.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  console.log(`prerendered ${route.padEnd(12)} -> ${file.padEnd(16)} (${words} words)`);
}

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .filter((r) => !PAGE_META[r].noindex)
  .map((r) => `  <url><loc>${r === "/" ? `${SITE_URL}/` : `${SITE_URL}${r}`}</loc><lastmod>${today}</lastmod></url>`)
  .join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(DIST, "sitemap.xml"), sitemap);
console.log(`sitemap.xml: ${routes.filter((r) => !PAGE_META[r].noindex).length} urls`);
