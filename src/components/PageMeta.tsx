import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { metaForPath, SITE_URL } from "@/seo";

// Keeps the document head in sync with the current route during client-side
// navigation. The initial HTML for each page already carries the right tags
// (see scripts/prerender.mjs), so this only matters after the first page.

const setMeta = (selector: string, attr: string, value: string) => {
  const el = document.head.querySelector<HTMLMetaElement>(selector);
  if (el) el.setAttribute(attr, value);
};

const PageMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = metaForPath(pathname);
    const url = `${SITE_URL}${pathname === "/" ? "/" : pathname.replace(/\/+$/, "")}`;

    document.title = meta.title;
    setMeta('meta[name="description"]', "content", meta.description);
    setMeta('meta[property="og:title"]', "content", meta.title);
    setMeta('meta[property="og:description"]', "content", meta.description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[name="twitter:title"]', "content", meta.title);
    setMeta('meta[name="twitter:description"]', "content", meta.description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    let robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (meta.noindex) {
      if (!robots) {
        robots = document.createElement("meta");
        robots.name = "robots";
        document.head.appendChild(robots);
      }
      robots.content = "noindex, nofollow";
    } else if (robots) {
      robots.remove();
    }
  }, [pathname]);

  return null;
};

export default PageMeta;
