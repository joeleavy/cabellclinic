// Downloadable guides shown on /resources/guides. Files live in public/guides/
// and are served as-is. To add one: drop the PDF and a cover image (first page,
// roughly 695x900) into public/guides/ and add an entry here.

export type Guide = {
  title: string;
  series: string;
  description: string;
  pages: number;
  href: string;
  cover: string;
};

export const GUIDES: Guide[] = [
  {
    title: "Metabolic Winter",
    series: "Structure Series · Seasonal Guide",
    description:
      "Why your body is built for a real winter, and how your plan shifts as the days get shorter. Covers the signals that tell your body the season, what changes in light, sleep, eating window, and temperature, how carbs follow the light, setting up a dark evening and bedroom, the November 1 clock change, and a sample December day.",
    pages: 9,
    href: "/guides/metabolic-winter.pdf",
    cover: "/guides/metabolic-winter-cover.jpg",
  },
];
