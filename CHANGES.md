# Site Changes — The Cabell Clinic

A running log of edits made to the site, grouped by session date. Most recent at top.

---

## 2026-05-24

### 🚀 Site launched at thomascabellmd.com
After the May 22 launch-prep work, the site went live on Cloudflare Pages.

- **Production URL:** https://thomascabellmd.com (apex). Also reachable at the Pages-native URL https://cabellclinic.pages.dev.
- **Host:** Cloudflare Pages, project `cabellclinic`, deploying from `main` automatically on push.
- **Build settings:** framework Vite, `npm run build`, output `dist`.
- **Environment variables (Production scope):** `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are set in the CF Pages dashboard (not committed; values mirror `.env.local`). The first deploy went out with these missing, which produced a blank page and a runtime error from the env-var guard in `client.ts` — adding the vars and retrying the deploy fixed it.
- **Smoke test passed:**
  - Homepage renders, all routes load (`/approach`, `/team`, `/faq`, `/dr-cabell`) — `public/_redirects` working.
  - "Request an Invitation" submission delivered to info@ via the Supabase Edge Function.
  - Social share card (og:image) preview verified.
- **Rollback safety net:** annotated git tag `pre-launch-snapshot` at commit `c9c8af0` marks the pre-launch state. Cloudflare Pages also retains every deploy in its history for one-click rollback.

### Social share preview — swapped to sunrise/silhouette photo
The og:image was the navy/gold "The Cabell Clinic" text card I generated at launch. Replaced with a cropped version of `src/assets/vision-outdoor.jpg` (the camper-at-sunrise photo used elsewhere on the site) — matches the "vitality / open horizons" feel better than a text card.

- Cropped from 1920×1281 (3:2) to 1200×630 (the standard og:image ratio of 1.905:1). Favored the bottom crop to remove the small "MAGELLAN" tent watermark. Re-encoded as progressive JPG at quality 85, final size ~100KB.
- Renamed `public/og-image.png` → `public/og-image-v2.jpg` and updated the og:image and twitter:image meta tags in `index.html` to match. The filename change is intentional: iMessage, Slack, and LinkedIn cache link previews aggressively by image URL, sometimes for days. A new path forces those platforms to re-fetch the new image instead of serving the old card.
- Deleted the unused `og-image.png`.
- **To test the new preview without waiting on cache:** paste the URL into a brand-new conversation, or use [opengraph.xyz](https://www.opengraph.xyz/url/https%3A%2F%2Fthomascabellmd.com). Existing shared links may still show the old card until the cache expires.

### Meet Dr. Cabell — removed duplicate "Your Team" cards
The "A coordinated network, not a solo provider" section had three name+role cards (Dr. Cabell, Alex Ford, Kristy Wright) that duplicated content from the new `/team` page. Replaced them with a "Meet the team →" CTA that mirrors the existing "Meet the Experts at Large →" CTA in the broader-network callout right below it. Same conceptual framing (team-based approach), no duplicated bios. Side benefit: the awkwardness of listing Dr. Cabell alongside Alex and Kristy on Dr. Cabell's own page is gone.

### Experts at Large — Olivia Lesslar TEDx link
Removed at launch because it pointed to a YouTube search URL rather than a specific video (commit `2d09b37`). Restored same-day with the real video URL `https://youtu.be/dMw5u5VCTxU` once the client supplied it (commit `f75cee8`). Label and position in the link row are unchanged.

---

## 2026-05-22

### Approach page — team voice
Shifted first-person ("I"/"my") to team voice ("we"/"our") across the page, reflecting the clinic's team approach.

- **Section heading:** "How I Work With Patients" → **"How We Work With Patients"**
- **Lead sentence in that section:** "When I work with patients, I start with foundations" → "When we work with patients, we start with foundations"
- **Cabell Method section heading:** "My Framework for Health: The Cabell Method" → **"Our Framework for Health: The Cabell Method"**
- **Selective Medicine card:** "I use pharmaceuticals only when truly necessary…" → "We use pharmaceuticals only when truly necessary…"
- **Invitation section:** "This is the approach I take every day, whether I'm with patients…" → "the approach we take every day, whether we're with patients…" and "I'd love to share what I'm learning" → "we'd love to share what we're learning"

### Approach + FAQ — "Aligned economics" rename (legal)
Removed the "buying cooperative" framing, which the client flagged as legally problematic. Reframed as **"Aligned economics, not a margin business"** — defensible, conceptually precise, and avoids language that could trigger regulatory scrutiny.

- **Approach page section title:** "A buying cooperative, not a margin business" → **"Aligned economics, not a margin business"**
- **Approach page body (replacement copy):**
  > Where we can, testing, therapeutics, and supplements are offered very near the clinic's actual cost with minimal mark up. You'll still pay for certain diagnostics and treatments beyond the fee, but our financial interest is not in what you purchase.
  >
  > It is in your **outcome**. A practice whose income depends on patient consumption has a built-in conflict of interest. Ours is removed by design.
  - "at or near the clinic's actual cost, with minimal markup" → "very near the clinic's actual cost with minimal mark up"
  - "A physician whose income depends…" → "A practice whose income depends…" (matches the new team voice)
- **FAQ page** ("How are tests, supplements, and therapeutics priced?"): dropped the "Membership functions much like a buying cooperative" lead sentence; the rest of the answer (financial interest in outcomes, conflict of interest removed by design) is preserved with the same "very near the clinic's actual cost with minimal mark up" phrasing.

### New page: Our Team
Added a dedicated `/team` page for the clinic's core staff, separate from the existing Experts at Large network.

- **Route:** `/team`
- **Navigation:** added "Our Team" to the "The Approach" dropdown in the main nav (between "Our Method" and "Experts at Large") and to the footer nav.
- **Structure:** mirrors Experts at Large.
  - Hero: eyebrow "THE CORE TEAM", heading **"Our Team"**, intro paragraph ("Alongside Dr. Cabell, a small core team works directly with every member, translating protocol into practice and keeping the clinic running with the same care we bring to the medicine.")
  - Profile slots: **Alex Ford** (Health Integrator) on top, **Kristy Wright** (Operations Manager) below — both with "Image coming soon" and "Bio coming soon" placeholders.
  - Closing CTA: "A team approach to your care" → Request an Invitation
- **Pending from client:** headshots and bios for both Alex and Kristy.

### Experts at Large — Dr. Olivia Lesslar bio trimmed
Replaced the six-paragraph bio with a tighter four-paragraph version supplied by the client.

- **Kept:** the lead (psychoneuroimmunology + complex-condition medicine), the 2025 Australia/NZ speaking tour and *The Nine Ancient Survival Threats* framework, the Cingulum Health Director role, the BCFM directorship, and the Griffith + Geneva College of Longevity Science academic appointments.
- **Removed:** the "medical Sherlock Holmes" descriptor and the analytical-precision paragraph, the long international affiliations list (Human Regenerator, L'evive Labs, Atlus, Sens.ai, ANI Biome, Avea, Oxford Healthspan, Naked Pharmacy), the Health Span XPrize / Women in Defence and Space Alliance section, and the closing "patient-centred, innovative models" paragraph.

### Footer — duplicate React key warning fixed
The footer nav `.map()` used `key={link.path}`, which produced a React duplicate-key console warning because two entries ("The Approach" and "Our Method") intentionally point to the same path (`/approach`). Switched the key to `link.name` (names are unique). No visual change; just clears the console noise.

### Launch lockdown — SPA redirects, Supabase env vars, og:image
Pre-deploy housekeeping before pointing `thomascabellmd.com` at the site via Cloudflare Pages.

- **SPA routing.** New `public/_redirects` file with `/*    /index.html   200`. Required so deep links (`/approach`, `/team`, `/faq`) work after a hard page load on a static host. Without this, Cloudflare Pages returns a 404 on first hit.
- **Supabase config moved to env vars.**
  - Real values now live in `.env.local` (gitignored). `.env.example` is committed so the next person knows what's required: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`.
  - `src/integrations/supabase/client.ts` reads from `import.meta.env`, throws a clear error if the vars are missing, and exports a single `CONTACT_EMAIL_FUNCTION_URL` constant.
  - All four form components (`DiscoveryCallDialog`, `MembershipApplicationForm`, `Contact`, `Resources`) now import the constant instead of hardcoding the Edge Function URL.
  - The Lovable "automatically generated, do not edit directly" comment has been removed; this file is now hand-maintained.
  - The anon key is safe to expose in the browser bundle by design — moving it to an env var is hygiene, not security, but it means the Cloudflare Pages production env can hold different values from local dev if we ever need that.
- **Social share card.** Generated `public/og-image.png` (1200×630): deep navy background, Big Caslon "The Cabell Clinic" in soft white, faded gold "C" monogram, gold accent line, Baskerville subtitle "Preventive & Integrative Cardiology · Brentwood, Tennessee". Added `og:url`, `og:image` (+ width/height/alt), and `twitter:image` meta tags in `index.html` pointing at `https://thomascabellmd.com/og-image.png`. Link previews in iMessage/Slack/Twitter/LinkedIn will now render the card instead of plain text.

### Our Team — Alex Ford bio + headshot
Filled in Alex's content; Kristy still placeholdered.

- **Headshot:** new file at `src/assets/team/alex-ford.jpg` (860x865), shown in the photo column.
- **Tagline:** "Health Integrator" → **"Co-Founder · Health Integrator"** (matches the PDF the client sent).
- **Hook (italic pull-quote under the tagline):** "Health doesn't change until life does."
- **Bio body** rendered as three structured sections (each with a gold uppercase eyebrow + serif heading + paragraphs):
  - **My Story — Ten years. One question.** Personal origin story, decade of cross-discipline health work, the integration insight, formal training.
  - **What I Do Here — Integration, not just information.** Primary point of contact between visits; translates Dr. Cabell's findings into a livable protocol.
  - **Philosophy — A system builder, not just a coach.** Plans fail when they aren't built around a real life; long-term sustainable health, not a 90-day reset.
- **Training & Credentials** block at the bottom (separated by a thin border):
  - Primal Health Coach (PHC) · Primal Health Coach Institute · Certified 2024
  - Precision Medicine Training Program · Wild Health · 85-hour curriculum · 2023
- **Code:** extended the `TeamMember` type in `OurTeam.tsx` with optional `hook`, `sections` (eyebrow + heading + paragraphs), and `credentials`. The render falls back to "Bio coming soon" when `sections` is empty, so Kristy's slot is unchanged.
- **Pending:** Kristy Wright headshot + bio.

### "Aligned economics" body — rewritten on Approach + FAQ
Rewrote the two paragraphs that close the "Aligned economics, not a margin business" section. Same point, less abstract phrasing, no em-dash.

- **New copy:**
  > Where we can, testing, therapeutics, and supplements are offered very near the clinic's actual cost with minimal mark up. You'll still pay for certain diagnostics and treatments beyond the fee, but our financial interest is in your **outcome**, not in what you buy.
  >
  > In most practices, more prescriptions and procedures mean more revenue, a conflict of interest built into the model. Ours is built without it.
- **What changed and why:**
  - "Not in what you purchase" → "not in what you buy" — simpler register, matches the rest of the page.
  - "A practice whose income depends on patient consumption" → "In most practices, more prescriptions and procedures mean more revenue" — names the actual mechanism rather than the abstract category. "Patient consumption" read as clinical and commodifying.
  - "Ours is removed by design" → "Ours is built without it" — the antecedent now clearly refers to the *model* (which is built), not the *conflict* (which was being awkwardly "removed").
  - Bolded **outcome** moved into the first paragraph so the contrast lands immediately.
- **Applied to both** the Approach page section card and the parallel FAQ answer ("How are tests, supplements, and therapeutics priced?"), to keep the two passages in sync.

---

## 2026-05-20

### Address listings updated
The clinic address is now shown in full wherever location appears.

- **Footer (every page):** changed from "Brentwood, Tennessee" to the full street address:
  > 105 Continental Place, Suite 160
  > Brentwood, TN 37027
- **Contact page → Location card:** same full address as above. Removed the line "Precise address provided upon scheduling" since the address is now publicly listed.
- **Not changed:** the "BRENTWOOD, TENNESSEE" label above the homepage hero headline, the "in Brentwood, Tennessee" sentence in the footer description, and the "Middle Tennessee" reviews headline — these read as location references, not address listings.

### Homepage — "The Challenge" vs "A New Approach" section
Two-column section that contrasts modern medicine with the clinic's philosophy.

- **Layout:** both columns are now styled as equally-sized white cards with matching padding and drop shadows. Previously only the right column was a card while the left was plain text on the page background, which made the eyebrow labels sit at different heights and the right side feel visually smaller. Now the labels ("THE CHALLENGE" / "A NEW APPROACH") align at the same height and the cards have identical footprints.
- **Heading on the right column:** changed from "A different way of approaching health" to **"Medicine designed around you"** — avoids repeating "approach" (already used in the eyebrow above it) and contrasts cleanly with the left-side heading.
- **Left column copy ("The Challenge") tightened:** removed the bullet list and rewrote as two flowing paragraphs so the section mirrors the prose style of the right column. Cut ~30 words. New copy:
  > Most healthcare is built to react, not prevent. Appointments are short, solutions are fragmented, and symptoms get managed while the deeper loss of resilience goes unaddressed.
  >
  > For high-performing patients, doing "everything right" often isn't enough — energy, clarity, and long-term confidence still feel out of reach.
- **Right column ("A New Approach" card):** removed the small gold accent line that was sitting below the "Learn What We Do" button — it looked orphaned under a button.

### New page: "Experts at Large"
Added a new top-level page introducing the clinic's network of collaborating specialists.

- **Navigation:** new "Experts at Large" tab added to the main nav (between Resources and Contact) and to the footer nav. Route is `/experts`.
- **Page structure:**
  - Hero with the intro paragraph ("We are incredibly fortunate to collaborate with a trusted network…")
  - Six expert profiles in order: Dr. Olivia Lesslar, Dr. Kelsey Dexter, Dr. Jennifer Judge, Dr. Katelyn Kalstein, Dr. Stephen Hussey, Elizabeth York NP
  - Each profile: portrait photo on the left + name + one-line gold specialty tagline + full bio + external links (where provided — website, TEDx, Instagram). On mobile, the photo stacks above the bio.
  - Compliance disclosure footer: "Our collaborating professionals maintain independent practices. Referrals are made based on clinical judgment and patient needs, with no financial arrangements or obligations."
  - Closing CTA: "Care that draws on the right experts at the right time" → Request an Invitation
- **Notes for the client to review:**
  - Dr. Kelsey Dexter has a "Bio coming soon" placeholder + an "Image coming soon" placeholder — needs both copy and a photo.
  - Dr. Olivia Lesslar's TEDx link points to a YouTube search; if you have a direct video URL, replace it.
  - Three of the six (Dr. Judge, Dr. Kalstein, Dr. Dexter) also appear in the welcome letter's "Clinical Network." If/when we reconcile the site to match the letter, decide whether to merge or keep separate (Experts at Large could read as outside collaborators; Clinical Network as in-membership team).

### New page: FAQ
Added a dedicated `/faq` page modeled on the McCollum Healthcare FAQ format the client referenced.

- **Route:** `/faq`
- **Navigation:** linked from the footer nav and from the home page FAQ section (new "View all FAQs" button)
- **Structure:** four thematic categories with accordion items underneath each, plus a closing CTA
  1. **About The Cabell Clinic** (5 questions) — what the practice is, who Dr. Cabell is, preventive/integrative cardiology explained, how the model differs, the Story · Structure · Signals · Sovereignty framework
  2. **Is This Right for Me?** (4 questions) — who it's for, who it isn't for, PCP coordination, acute medical crises
  3. **How Membership Works** (6 questions) — the discovery call, what's included, the first year, time commitment, buying-cooperative pricing, care team
  4. **Insurance, Payments & Logistics** (5 questions) — Medicare/in-network, HSA/FSA, location, appointment logistics, HIPAA-compliant communications
- **Answers** drawn from the welcome letter's positioning so the voice is consistent with the letter (preventive & integrative cardiology, Maryland Farms address, buying cooperative model, Story/Structure/Signals/Sovereignty, eighteen years experience, 2–4 hrs/month engagement, etc.).
- **Home-page FAQ reconciled then converted to a CTA section:**
  - First pass: the 3 home-page FAQ questions and answers were rewritten to match the new dedicated FAQ page exactly — old verbose "100-year-old recipe" / insurance-heavy phrasing removed.
  - Second pass (per client direction): the inline FAQ accordion was replaced with a cleaner CTA section. Now shows an eyebrow ("KNOWLEDGE IS POWER"), heading ("Questions, answered honestly"), short intro paragraph, a list of five sample question titles (each clickable, linking to `/faq`), and a primary "View the full FAQ" button. No accordion on the home page anymore — the full FAQ page is the destination.

### Top navigation restructured (now 6 items)
- **Added FAQ to the top nav** (between Experts at Large and Contact).
- **Built a "The Approach" dropdown** to position the experts network as part of the care model (which is how the welcome letter frames it: "A coordinated network, not a solo provider"). The "The Approach" tab now reveals a dropdown on hover containing:
  - Our Method (→ /approach)
  - Experts at Large (→ /experts)
- **About** is a flat link to Dr. Cabell's bio page (no dropdown).
- **Final top nav:** Home · The Approach ▾ · About · Resources · FAQ · Contact (6 items)
- **Mobile menu** mirrors the structure: tapping "The Approach" shows the parent label with the two sub-items listed below it.
- **Footer:** continues to show every page as a flat list (Home, The Approach, About, Resources, Experts at Large, FAQ, Contact) — footer is for "find anything," top nav is for the primary journey.

### Home page voice sweep
Reconciled the home page to a consistent voice convention modeled on the welcome letter: **Dr. Cabell speaks personally in "I"**, **the clinic speaks institutionally in "we"**, and **third person is reserved for talking about specific other people** (Experts at Large, credentials lists). Three targeted changes:

1. **Hero subtitle** — switched from voiceless to "we." Was: *"Helping patients restore vitality since 2008 by integrating…"* Now: *"Since 2008, we've helped patients restore vitality by integrating Quantum & Circadian Health, longevity science, trauma-informed care, and performance optimization."*
2. **"A New Approach" card** — removed the third-person Dr. Cabell paragraph that was sitting between two we-voice sections. Replaced with a we-voice continuation of the philosophy (drawn from the welcome letter's language). Was: *"Dr. Thomas Cabell, a board-certified cardiologist, for nearly two decades has practiced inside large healthcare systems—until his own health challenges forced him to ask deeper questions."* Now: *"We work in the space between detection and disease — using advanced diagnostics and root-cause thinking to build a strategy around your specific biology, not population averages."* The personal version of this story still appears more fully in the very next section ("Your Guide"), so nothing is lost.
3. **"Your Guide" section** — kept first-person ("I practiced cardiology…") and cleaned up the formatting in the second paragraph: removed stray blank-line breaks, fixed a missing space ("all three.Years" → "all three. Years"), changed a comma-join to an em-dash for readability, and added the missing period at the end.

The rest of the home page was already on-voice and was not touched (the Challenge card, Patient Reviews, Our Foundations pillars, The Vision section, Final CTA, and the FAQ teaser all use "we" / institutional voice correctly).

### Welcome-letter alignment pass (multiple pages)
A comprehensive reconciliation of the site to the welcome letter's positioning. The Cabell Method pyramid on the Approach page was deliberately preserved for now per client direction.

**Hero & top-of-Home positioning**
- **New hero subtitle:** *"Preventive & Integrative Cardiology since 2008 — integrating root-cause diagnostics, longevity science, trauma-informed care, and the environmental signals that shape your biology."* Replaces the "Quantum & Circadian Health" framing.
- **New Sovereignty callout** added below the subtitle: *"Story · Structure · Signals — so you arrive at Sovereignty."* — sets up the framework before the CTAs.
- **Dr. Cabell's title** added under his name in the "Your Guide" section on Home and in the About-page hero: *"Founder · Preventive & Integrative Cardiologist."*

**Years reconciled to "eighteen years" everywhere Dr. Cabell is described**
- Home "Your Guide" paragraph: "For nearly two decades" → "For eighteen years"
- Home credentials list: "practiced for 17 years" → "with eighteen years of practice"
- About hero paragraph: "For 17 years I practiced" → "For eighteen years I practiced"
- About Journey timeline: "17 years treating complex cardiovascular cases" → "Eighteen years…"
- Approach page: "I've spent nearly 20 years as a cardiologist" → "I've spent eighteen years as a cardiologist"

**Primary CTA verb switched to "Book a Discovery Call"** in all 9 instances across Home, Header (desktop + mobile), About, Approach, Contact, FAQ, and Experts at Large. Calendly URL not yet wired up (per direction).

**"Concierge care" → "membership-based medicine"** on the About page Journey-timeline heading.

**Home page four-pillar section → three-pillar Story / Structure / Signals framework with Sovereignty as destination**
- Removed the previous four icon-card pillars (Cardiovascular Integrity, Nervous System & Story, Circadian & Mitochondrial Health, Environment & Daily Signals).
- New section structure mirrors page 2 of the welcome letter: section header "How We Work" → "Story · Structure · Signals · Sovereignty," then a prominent "The Destination: Sovereignty" card with the letter's definition, then three columns (Story / Structure / Signals) with the letter's exact headings ("Every body carries a history" / "The body is not a collection of parts" / "The body seeks signal coherence") and concise descriptions adapted from the letter. Closes with the pull quote: *"We work in Story, Structure, and Signals — so that you arrive at Sovereignty."*
- Unused icon imports (Heart, Sparkles, Sun, Waves) cleaned out of Home.tsx.

**Final Home CTA rewritten with Sovereignty as the north-star**
- Eyebrow: "Begin the Conversation" → "Toward Sovereignty"
- Heading: "Is The Cabell Clinic right for you?" → "Sovereignty starts with a conversation"
- Body adapted from welcome letter: *"We accept a limited number of new members each year so the depth of care we offer stays intact…"*

**Approach page: voice + content upgrades**
- **"Why This Matters" rewritten in letter voice.** Old: "Modern medicine is unmatched in emergencies. But for chronic illness..." → New, pulled directly from the letter: *"Conventional medicine is organized around a single question: is something wrong? When the answer is no, the conversation ends. We are organized around a different question entirely: what is this biology capable of, and what is standing in the way?"* Then ties to Sovereignty.
- **Generic diagnostics list replaced with specific tests** from the welcome letter's clinical pillars: AI-QCA Plaque Scans, CIMT, GlycoCheck endothelial function, Max Pulse Wave Velocity, CGM/DEXA/RMR, GlycanAge, SNP genetic testing, HRV-guided protocols.
- **New section: "What to Expect — The first three years."** Three cards covering the welcome letter's 3-year arc: Year One (Understand & Establish Foundation), Year Two (Optimize Against Your Own Baseline), Year Three (Individualize & Push the Frontier).
- **New section: "How Membership Works."** Two-column layout explaining the membership model in letter language: direct access to Dr. Cabell + Alex Ford framing, plus the buying-cooperative philosophy ("Our financial interest is in your outcome. A physician whose income depends on patient consumption has a built-in conflict of interest. Ours is removed by design.").
- **The Cabell Method pyramid was preserved** per client direction. Both frameworks coexist on the Approach page for now.

**About page: new "Your Team" section**
- New section between "A Guide, Not Just a Doctor" and the Invitation CTA.
- Eyebrow: "Your Team" → heading "A coordinated network, not a solo provider" (letter language exactly).
- Three core team cards: Dr. Cabell (Founder · Preventive & Integrative Cardiologist · Clinical Director), Alex Ford (Health Integrator), Kristy Wright (Operations Manager).
- Below: a "broader clinical network" callout with a link to the Experts at Large page.

**Contact page: new "Right Fit" two-column self-assessment**
- Inserted between the contact form/info and the closing thought.
- Header: "Honest Self-Assessment" → "Is this the right fit?"
- Left column (navy background): "This tends to be a strong fit if…" — 6 bullets adapted directly from the letter.
- Right column (light background, italic): "This is likely not the right fit if…" — 6 bullets adapted directly from the letter.
- Below the columns: the letter's "Depth of care requires time, and time is one resource we won't compromise on" line.

**Items intentionally not touched (flagged for follow-up):**
- The Cabell Method pyramid on the Approach page (per direction)
- "Maryland Farms" not yet added everywhere (footer + Contact location card now have the full street address, but the home hero eyebrow still says "BRENTWOOD, TENNESSEE" only)
- Calendly link not wired into the new "Book a Discovery Call" buttons (per direction, they all still route to /contact)
- The Resources page (largely placeholder content) was not touched in this pass

### Em dash / en dash cleanup (site-wide)
Per client direction, removed the stylistic em dashes ("—") and en dashes ("–") that had been used as parenthetical punctuation throughout the site, replacing them with commas, colons, periods, or other contextually appropriate marks. Hyphens in compound words (like "root-cause," "trauma-informed," "high-performing," "membership-based") were preserved since they're grammatically necessary.

- **67 em/en dashes removed** across Home, About, Approach, Contact, FAQ, and Resources pages (the Expert bios on /experts were left alone since that content was supplied by the client verbatim).
- **Approach page diagnostics list restructured.** The "Term, description" pattern (previously "Term, description" via em dash) is now rendered as **Term** · description, with the term bolded — visually clearer and avoids the comma-as-separator awkwardness.
- **Right Fit section bullet character.** The right-hand "not a fit" column had used an em dash glyph as the bullet marker. Changed to a middle dot (·) to match the site's other separator usage.
- Verified all pages render with no errors and zero remaining em or en dashes.

### Home page tightening + footer fix
Quick round of cleanup based on client feedback:

- **Removed the Sovereignty callout from the hero** ("Story · Structure · Signals, so you arrive at Sovereignty."). The hero is now: eyebrow → headline → subtitle → two CTAs. The Story · Structure · Signals · Sovereignty framework still lives in its dedicated section lower on the page; the hero just doesn't preview it anymore.
- **Hero CTAs are now equal width.** Both "Book a Discovery Call" and "Explore Our Approach" rendered at different sizes due to text length. Both buttons are now fixed at the same width (w-64) on desktop, stacking full-width on mobile.
- **"Story · Structure · Signals · Sovereignty" now fits on one line** under the "How We Work" eyebrow. The previous SectionHeader was forcing it to wrap; replaced with inline markup using whitespace-nowrap and a responsive font size (2xl → 3xl → 4xl across breakpoints) so the whole framework reads as one line.
- **Home page FAQ teaser simplified.** Removed the list of 5 sample questions. The section is now just eyebrow + heading + intro paragraph + "View the full FAQ" button — cleaner, less to scan, the FAQ page does the work.
- **Footer nav now includes "Our Method".** The dropdown sub-items from the top nav (Our Method, Experts at Large) weren't surfaced in the flat footer; "Our Method" is now listed right after "The Approach" so it's discoverable from the footer too.
- **Footer brand tagline rewritten** to match the new positioning. Was: *"A physician-led practice dedicated to cardiovascular health, longevity, and human performance in Brentwood, Tennessee."* (generic boilerplate). Now: *"A membership-based Preventive & Integrative Cardiology practice in Brentwood, Tennessee."* (mirrors the hero subtitle).

### About page restructured
The About page had two issues: the hero title competed with the photo in a 2-column layout, and the tagline "A Doctor Who's Walked the Same Road" appeared twice (in the hero, then again as the section heading "My Story" below). Reorganized:

- **Hero is now header-only and full-width:** eyebrow → "Dr. Thomas Cabell" → "Founder · Preventive & Integrative Cardiologist" → italic tagline → gold divider. No photo competing for space at the top.
- **Photo + story now sit together below in a 2-column layout** (photo on the left, story paragraphs on the right).
- **Removed redundancy:** the duplicate "MY STORY" eyebrow and the repeated "A Doctor Who's Walked the Same Road" h2 are gone. The story now flows directly from the hero header.
- **Story copy** uses the exact text the client provided (lightly edited from the previous slightly different wording).

### Resources page — newsletter signup form
The Resources page had a placeholder bracket text where the newsletter signup was supposed to be. Built the actual form.

- **Removed** the bracketed placeholder text and the "Get in Touch" button that linked to the Contact page.
- **Added a simple signup form** with Full Name + Email fields and a "Sign Up" button.
- **Intro copy** (replaces the bracket): *"Share your name and email and we'll reach out from time to time with new resources, talks, and clinic updates. Low frequency. No noise."*
- **Privacy note below the form:** *"We'll never share your information. Unsubscribe anytime."*
- **Backend wiring:** the form posts to the same Supabase endpoint as the Contact form, but with `source: "Newsletter signup"` so Kristy can distinguish signup submissions from contact inquiries in the inbox. Success/failure shows a toast notification.

### Contact page tightening + Approach eyebrow fix

- **Contact page:** removed the "We welcome inquiries from those seeking a more thoughtful approach to their health. All communications are treated with discretion and respect for your privacy." subtitle under the hero (the discretion / privacy messaging is already reinforced in the "Discretion" card further down the page). Tightened the hero padding (`pt-32` → `pt-28`, `pb-20` → `pb-10`) and reduced the next section's top padding from full `section-padding` to `pt-12`, eliminating the dead space the client flagged between "Begin the conversation" and the form.
- **Approach page:** the eyebrow above the h1 said "My Approach" — changed to "The Approach" so it matches the nav label. (Left the About page section "My Approach" eyebrow alone — that one is appropriate in its first-person context.)

### New page: Membership application questionnaire (`/apply`)
Built a fit-questionnaire as a separate page so the Contact form can stay as a quick "general inquiries" entry point while serious prospects go through a more substantial intake.

- **New route:** `/apply`
- **Hero:** Eyebrow "Begin the Application" → H1 "A short, honest conversation" → intro explaining why the questionnaire exists ("we accept a limited number of new members each year")
- **Emergency disclaimer** at the top of the form: warning to call 911 / go to the ER if experiencing a medical emergency. The Cabell Clinic is not equipped for urgent care. (Per client direction, we *removed* the "active medical crisis" option from the questionnaire entirely so no one in crisis routes through a form with delayed response.)
- **6 questions, single page, all visible:**
  1. What's bringing you to The Cabell Clinic right now? *(free text)*
  2. Which best describes where you are with your health? *(radio — 3 options)*
  3. What time horizon are you thinking about? *(radio — 3 options)*
  4. What role do you want to play in your care? *(radio — 2 options)*
  5. Membership is a premium investment. Where are you with that? *(radio — 3 options)*
  6. Anything specific you'd like Dr. Cabell to know? *(optional free text)*
- **Contact details:** Name, Email, Phone (optional) at the bottom of the form.
- **Submit behavior:** Shows a "Submitting..." state, then a success message replacing the form ("Application received. We'll be in touch within a few business days.").
- **Backend:** Posts to the same Supabase endpoint as the other forms, with `source: "Membership application"`. The message body is formatted as a structured readable email — each question + answer pair on its own line — so Kristy/Alex see the full picture in their inbox.
- **CTA on the Contact page:** Added a prominent navy callout block above the existing contact form titled "Begin the Application" with a gold-outline button linking to `/apply`. The existing Contact form below remains for casual / general inquiries.

### About → Our Story rename + cross-page deduplication
The About and Approach pages were telling Dr. Cabell's personal story twice. Restructured so each page has a clean job:

- **Renamed "About" to "Our Story"** — warmer, more inviting, fits a relationship-based boutique clinic better than the generic "About."
  - Route changed from `/about` to `/our-story` (safe — pre-launch)
  - Updated in top nav, footer nav, page eyebrow, and the home page's "Read Our Story" button (which was "Learn More About Dr. Cabell")
- **Cut from the Approach page:** the two sections that retold Dr. Cabell's personal story ("Why I Practice Medicine Differently" and "What I Learned"). Both duplicated content already on Our Story. The Approach page now flows: Hero → How I Work With Patients → The Cabell Method → Why This Matters → What to Expect → How Membership Works → Invitation.
- **Cut from Our Story:** the "Why This Matters For You" navy section ("A lot of doctors will tell you to adjust your diet..."). The Approach page has a stronger version of this (pulled from the welcome letter), so this was redundant. Our Story now flows: Hero → Photo + Personal Story → Journey Timeline → A Guide, Not Just a Doctor → Your Team → Invitation.
- **Resulting mental model:**
  - **Our Story** = *Who* (Dr. Cabell's journey, the team) — first-person voice
  - **The Approach** = *What* and *How* (philosophy, method, clinical work, membership) — institutional voice

### /apply emergency disclaimer trimmed
Per client direction, removed the second sentence ("The Cabell Clinic is not equipped for urgent or emergent care.") from the emergency disclaimer on the Apply form. The disclaimer now reads simply: *"If you are experiencing a medical emergency, please call 911 or go to the nearest emergency room."* The redirect to 911/ER is the action; the additional sentence about clinic capabilities was unnecessary.

### Home page "Your Guide" section tightened
Now that the full personal story lives on the dedicated /our-story page, the home-page intro to Dr. Cabell was telling too much. Trimmed to a single hook paragraph:

- **Was:** Two long paragraphs — credibility (eighteen years, healthcare systems) + a deep personal section about anxiety, depression, autoimmune disease, trauma, and the search for a different way.
- **Now:** One paragraph: *"For eighteen years, I practiced conventional cardiology in some of the largest healthcare systems in the country. I loved my work, but I kept seeing the same thing: people getting treated, not truly healed. The journey to find a better answer became personal, and ultimately, the foundation of The Cabell Clinic."*
- Photo, name, "Founder · Preventive & Integrative Cardiologist" title, collapsed Credentials accordion, and "Read Our Story" button all remain. Anyone who wants the full bio clicks through.

### Our Story → Meet Dr. Cabell (second rename)
On reflection, "Our Story" promised a collective clinic narrative, but the page is overwhelmingly Dr. Cabell's first-person personal story. Renamed to match what's actually on the page.

- **Nav label:** "Our Story" → "Meet Dr. Cabell" (in top nav and footer)
- **URL:** `/our-story` → `/dr-cabell` (shorter, cleaner)
- **Page eyebrow:** the "Our Story" eyebrow on the page header was removed entirely — the h1 "Dr. Thomas Cabell" plus the "Founder · Preventive & Integrative Cardiologist" subtitle make the page's purpose obvious without it.
- **Home page button:** "Read Our Story" → "Meet Dr. Cabell" (and points to the new URL).

### "Is this the right fit?" section moved from Contact to Apply
The two-column self-assessment didn't really belong on the Contact page — it made Contact long and tangential to its core job (get in touch). Moved it to the Apply page where it functions as orientation right before the questionnaire.

- **Removed from /contact:** the entire "Honest Self-Assessment / Is this the right fit?" two-column section, along with its closing pull-quote about accepting a limited number of members. The Contact page is now leaner — Hero → "Begin the Application" callout → form + info → closing thought.
- **Added to /apply:** the same two-column self-assessment now sits between the emergency disclaimer and the questionnaire. The closing line was updated from *"…we'd welcome the conversation."* to *"…please continue below."* so it bridges naturally into the form.
- **One bullet trimmed:** removed the "acute medical crisis requiring immediate specialist intervention. Please get that care first." bullet from the "not a fit" column on the new /apply placement, since the emergency disclaimer right above already handles that case more directly.

### Contact page now has two clearly framed paths
The single "Begin the Application" callout was replaced with a two-card layout that addresses prospects in different decision states.

- **New section: "Two ways to begin"** — intro: *"Wherever you are in your decision, there's a path that fits."*
- **Path 1 — "If you're ready" (navy card):** heading *"Begin the application"* + copy explaining the path is intentionally short + button "Begin the Application" → /apply.
- **Path 2 — "If you're still deciding" (light card):** heading *"See if we're a fit"* + copy about the five-minute self-assessment + button "Take the Self-Assessment" → /apply.
- **The general inquiry form was reframed:** the form below the two paths used to be headed "Book a Discovery Call" / "Share a bit about yourself and what you're seeking" which conflicted with the new paths. Now headed *"Have a question?"* / *"For general inquiries that don't need a full application. We'll get back to you within a few business days."* — clearly positioned as the catch-all for questions that don't require the application flow.
- Both path buttons converge on /apply (same destination, different framing for different mindsets).
- **Contact hero stripped to just the h1.** Removed the "CONTACT" eyebrow so the page opens cleanly with just *"Begin the conversation"* before going into the two paths.
- **Removed the "Two ways to begin" intro block** above the cards. The two cards (Ready / Curious) now sit directly under the "Begin the conversation" h1 with no preamble.
- **Removed the "Begin the conversation" h1 entirely.** The Contact page now opens directly into the two path cards under the navbar, no hero block at all.
- **Top-left card reframed as "Book a Discovery Call"** (was "Begin the application"). The card now leads with the actual goal ("Book a Discovery Call") rather than the mechanism ("application"). Copy was updated to mention the fifteen-minute discovery call with Dr. Cabell directly. The button label and the route are unchanged in destination (still goes to /apply since the application is how the call gets booked), but everything reads as the booking-a-call path.

### "Book a Discovery Call" buttons now open a modal (no page navigation)
Built a reusable `DiscoveryCallDialog` component. Every "Book a Discovery Call" button across the site now opens a centered modal with a short booking form instead of navigating to the Contact page.

- **Modal contents:** eyebrow "DISCOVERY CALL" → title "Request your call" → short description (mentions the fifteen-minute call with Dr. Cabell) → form fields: Full Name (required), Email (required), Phone (optional), "Anything we should know?" textarea (optional) → "Request Discovery Call" submit button → small confidentiality note.
- **Submission** lands in the same Supabase inbox as the other forms, tagged with `source: "Discovery call request"`. Success closes the modal and shows a toast: "Request received. We'll be in touch within a few business days to schedule your call."
- **Wired up at 9 locations:**
  1. Header desktop nav (top-right "Book a Discovery Call" button)
  2. Header mobile menu
  3. Home page hero CTA
  4. Home page final CTA (Sovereignty starts with a conversation)
  5. Approach page final CTA
  6. About page (Meet Dr. Cabell) final CTA
  7. FAQ page final CTA
  8. Experts at Large final CTA
  9. Contact page top-left "Book a Discovery Call" card
- **The "Take the Self-Assessment" button** on the Contact page still routes to `/apply` (the thoughtful, longer path with the questionnaire). The modal is the fast path; the application is the deliberate path.

### Discovery Call modal tightened
Three quick changes to the modal based on client feedback:

- **Title changed** from eyebrow "DISCOVERY CALL" + "Request your call" to a single title: **"Book a Discovery Call"** — cleaner, matches what the buttons say.
- **Description changed** to: *"A fifteen-minute conversation with a member of our team. Share your details and we'll be in touch within a few business days to schedule."* Previously said "with Dr. Cabell" — generalizing to "a member of our team" since the discovery call may go through Alex or Kristy first, not Dr. Cabell directly.
- **"Anything we should know?" textarea removed.** It was a potential liability invitation — visitors could share health information in an unprotected free-text field. The form now collects only Name, Email, and Phone — minimum needed to get back to them.
- **Phone number now required** (was optional). The "(optional)" tag was removed from the label and `required` was added to the input — so the form won't submit without a phone number.

### "Take the Self-Assessment" now opens a modal too
For consistency with the Discovery Call modal pattern, the "Take the Self-Assessment" button on the Contact page now opens the full questionnaire in a centered modal instead of routing to /apply.

- **Refactor:** extracted the questionnaire form into a reusable `MembershipApplicationForm` component so the same form code powers both the modal and the /apply page. Single source of truth.
- **New component:** `SelfAssessmentDialog` — wraps the form in a Dialog with title "See if we're a fit," brief description, the emergency disclaimer, and the full 6-question form. Wider than the Discovery Call modal (sm:max-w-2xl) to accommodate the longer form. Scrollable within the viewport.
- **The /apply page still exists** for direct URL access (bookmarks, search results) and now uses the same shared form component — no duplicate code.
- **In the modal:** successful submission shows a toast and closes the modal. On the /apply page: shows the inline success message replacing the form. (Single component, parent decides behavior.)

### Phone number now required in the "Have a question?" form too
Same change as the Discovery Call modal — "Phone (Optional)" → "Phone," with `required` added to the input. The form can't submit without a phone number.

### FAQ page copy pass
Several wording fixes based on client review:

- **"What is The Cabell Clinic?"** — removed "Maryland Farms" reference and reworded "We work with a small panel of members" to *"We keep our membership intentionally small so we have the time to…"*
- **"Who is Dr. Thomas Cabell?"** — fixed the awkward hanging-hyphen *"depth- and prevention-focused"* construction; now reads *"the kind of preventive, in-depth medicine he believes most people deserve."*
- **"How is your model different?"** — *"longer appointments"* changed to *"unhurried appointments"* (per client direction not to use "longer").
- **"Who is this practice for?"** — rewrote in second-person to eliminate the four repetitions of "People." Now opens with *"You've likely had standard workups come back 'normal,'…"* and continues addressing the reader directly.
- **"Who is this practice NOT a good fit for?"** — removed entirely. The Right Fit two-column section on /apply (and now in the Self-Assessment modal) already covers "not a fit" content visually. As an FAQ item it read defensively and wasn't really a question people ask.
- **"What if I'm in an acute medical crisis?"** — now leads with *"Please call 911 or go to your nearest emergency room."* (previously buried the call-911 advice).
- **"Where are you located?"** — removed "Maryland Farms in Brentwood, Tennessee" preamble; now just the street address + members travel sentence.
- **"How are appointments scheduled and conducted?"** — first sentence reworded to *"Coordination happens through secure channels with our team."* Second sentence reworded so it doesn't repeat "our team."

### Contact page "What to expect" card
Changed *"An introductory conversation with Dr. Cabell"* to *"An introductory conversation with our team"* — consistent with the Discovery Call modal's language (since the call may go through Alex/Kristy first rather than Dr. Cabell directly).

### Removed Dr. Kelsey Dexter from Experts at Large
Removed the Dr. Kelsey Dexter card entirely from the /experts page until we have her actual headshot and bio. Was showing as a "Bio coming soon" + "Image coming soon" placeholder. The Experts at Large page now has 5 experts: Dr. Olivia Lesslar, Dr. Jennifer Judge, Dr. Katelyn Kalstein, Dr. Stephen Hussey, and Elizabeth York NP.

### "Request an Invitation" restored as the primary CTA (popup rewritten)
Reverted the CTA wording from "Book a Discovery Call" back to "Request an Invitation" and reworked the popup to match the existing Contact form layout exactly.

- **All 11 CTA instances swapped** back to "Request an Invitation" (Header desktop + mobile, Home hero + final CTA, Approach final CTA, About final CTA, FAQ final CTA, Experts at Large final CTA, Contact page top-left card heading + button).
- **Popup rewrite** (was Name/Email/Phone; now matches the Contact form's fuller layout):
  - **Title:** Request an Invitation
  - **Subtitle:** *"Share a bit about yourself and what you're seeking."*
  - **Fields:** Full Name + Email (side-by-side) → Phone → "How can we help?" (required textarea)
  - **Button:** Submit Inquiry
- **Submission source tag:** `"Invitation request"` (was `"Discovery call request"`), so Kristy can distinguish these from the Contact form's "Cabell Clinic website" submissions and the Self-Assessment's "Membership application" submissions.
- Phone is still required everywhere — preserving the earlier client direction not to make phone optional.

### Favicon + meta cleanup
Replaced the default Lovable.dev heart-shape favicon with a branded one, and cleaned up the Lovable references in `index.html`.

- **New favicon:** Big Caslon serif "C" in champagne gold on deep navy. Brand colors pulled directly from the HSL custom properties in `src/index.css`.
- **Generated assets** (in `public/`): multi-resolution `favicon.ico` (16/32/48), modern PNG variants (16×16, 32×32), Apple touch icon (180×180 for iOS home screen), and a 512×512 master.
- **`index.html` cleanup:**
  - Removed "Lovable Generated Project" description
  - Removed `<meta name="author" content="Lovable" />`
  - Removed `<meta name="twitter:site" content="@Lovable" />`
  - Removed two `og:image` / `twitter:image` URLs that pointed to Lovable's Google Cloud storage
  - Added proper favicon link tags (ico + PNG sizes + apple-touch-icon)
  - Real meta description: *"A membership-based Preventive & Integrative Cardiology practice in Brentwood, Tennessee."*
  - Open Graph + Twitter card titles and descriptions now use the real positioning
- **Follow-up flagged:** social-share images (1200×630) were removed. Right now social shares show the title + description but no preview image. Need a designed social card eventually.
