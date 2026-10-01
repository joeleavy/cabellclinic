// Single source of truth for per-page <title> / description / indexing.
// Used at build time by scripts/prerender.mjs (static HTML + sitemap) and at
// runtime by <PageMeta /> (updates the head on client-side navigation).

export const SITE_URL = "https://thomascabellmd.com";
export const SITE_NAME = "The Cabell Clinic";

export type PageMetaEntry = {
  title: string;
  description: string;
  /** Unlisted pages: robots noindex + left out of the sitemap. */
  noindex?: boolean;
};

export const PAGE_META: Record<string, PageMetaEntry> = {
  "/": {
    title: "The Cabell Clinic | Preventive & Integrative Cardiology | Brentwood & Nashville, TN",
    description:
      "A membership-based preventive and integrative cardiology practice in Brentwood, Tennessee, serving Nashville, Franklin, and Williamson County. Led by Dr. Thomas Cabell: root-cause diagnostics, longevity science, and unhurried, personalized care.",
  },
  "/approach": {
    title: "Our Approach & Method | The Cabell Clinic",
    description:
      "From heart health to whole-person healing: how Dr. Cabell combines advanced cardiac diagnostics, root-cause thinking, and longevity science in a membership practice near Nashville.",
  },
  "/dr-cabell": {
    title: "Meet Dr. Thomas Cabell | Preventive & Integrative Cardiologist, Nashville / Brentwood TN",
    description:
      "Dr. Thomas Cabell practiced conventional cardiology for eighteen years before founding The Cabell Clinic to practice preventive, integrative, root-cause medicine in Brentwood, Tennessee.",
  },
  "/resources": {
    title: "Resources & Talks | The Cabell Clinic",
    description:
      "Talks and insights from Dr. Thomas Cabell on circadian health, quantum biology, emotional wellbeing, and cardiovascular longevity.",
  },
  "/experts": {
    title: "Experts at Large | The Cabell Clinic",
    description:
      "The trusted colleagues across multiple disciplines who consult with The Cabell Clinic on complex cases.",
  },
  "/team": {
    title: "Our Team | The Cabell Clinic",
    description:
      "Meet the team behind The Cabell Clinic's preventive and integrative cardiology practice in Brentwood, Tennessee, serving Nashville, Franklin, and Williamson County.",
  },
  "/faq": {
    title: "Frequently Asked Questions | The Cabell Clinic",
    description:
      "Answers about The Cabell Clinic's membership model, who it is for, where we are located, and how appointments work.",
  },
  "/apply": {
    title: "Is The Cabell Clinic Right for You? | Self-Assessment",
    description:
      "A short, honest self-assessment to help you decide whether a membership-based preventive cardiology practice is the right fit for you.",
  },
  "/contact": {
    title: "Contact The Cabell Clinic | Brentwood, Tennessee",
    description:
      "Request an invitation, ask a question, or reach The Cabell Clinic directly by phone, text, or email. 105 Continental Place, Suite 160, Brentwood, TN 37027 — serving Nashville, Franklin, and Williamson County.",
  },
  "/partners": {
    title: "Our Partners | The Cabell Clinic",
    description:
      "The laboratories, imaging innovators, and local practitioners The Cabell Clinic works with, including Caristo, Vibrant Wellness, Meo Health, Quest Diagnostics, Styku, Kenetik Pro, and MYOS MD.",
  },
  "/privacy": {
    title: "Privacy Policy | The Cabell Clinic",
    description:
      "How thomascabellmd.com handles the information you share with us, what cookies are used, and the choices you have.",
  },
  "/terms": {
    title: "Terms of Service | The Cabell Clinic",
    description:
      "The terms that apply to your use of thomascabellmd.com.",
  },
  "/nuropod": {
    title: "Getting Started with Nuropod | The Cabell Clinic",
    description:
      "Short videos from The Cabell Clinic introducing the Nuropod earpiece: what it is, how to wear it, and how to use it.",
    noindex: true,
  },
};

export const NOT_FOUND_META: PageMetaEntry = {
  title: "Page Not Found | The Cabell Clinic",
  description: "The page you were looking for does not exist.",
  noindex: true,
};

export const metaForPath = (pathname: string): PageMetaEntry => {
  const clean = pathname.replace(/\/+$/, "") || "/";
  const key = Object.keys(PAGE_META).find((k) => k.toLowerCase() === clean.toLowerCase());
  return key ? PAGE_META[key] : NOT_FOUND_META;
};
