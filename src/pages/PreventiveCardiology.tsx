import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Phone, Check } from "lucide-react";
import IntroCallForm from "@/components/IntroCallForm";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import { openCookieSettings } from "@/lib/googleTag";
import { PLATFORM_LABEL, resolveSocialPlatform, stripSourceFromUrl } from "@/lib/socialSource";
import thomasCabell from "@/assets/thomas-cabell.webp";

// Google Ads landing page. Deliberately NOT wrapped in <Layout>: no site
// navigation or footer links, so a paid click has one job — the intro call.
// Marked noindex in src/seo.ts (ads traffic only; the homepage is for search).
// Copy drafted 2026-10-19 from the ads brief; bracketed items confirmed from
// existing site content (FAQ insurance answer, About bio, Approach testing).

const PHONE_DISPLAY = "(615) 237-8706";
const PHONE_HREF = "tel:+16152378706";
// Kristy's "20 Minute Discovery Call" event (slug renamed from /30min on 2026-10-19).
const CALENDLY_URL = "https://calendly.com/kristy-thecabellclinic/discovery-call";
// The same page serves two traffic sources with different attribution:
//   /preventive-cardiology -> Google Ads (conversion tracked on its thank-you page)
//   /book                  -> social bios; the platform (Instagram, Facebook,
//                             YouTube) comes from the bio link, see src/lib/socialSource.ts
export type Channel = "ads" | "social";
const CHANNELS = {
  ads: {
    thankYou: "/preventive-cardiology/thank-you",
    formSource: "Google Ads — Preventive Cardiology",
    attribution: { source: "google", medium: "cpc", campaign: "preventive-cardiology" },
  },
  social: {
    thankYou: "/book/thank-you",
    formSource: "Social — Book a Call", // used when the platform is unknown
    attribution: { source: "social", medium: "social", campaign: "book-a-call" },
  },
} as const;

const steps = [
  {
    n: "1",
    title: "Discovery call",
    body: "A short, no-pressure conversation with our team to see if the clinic is a good fit.",
  },
  {
    n: "2",
    title: "Your first visit",
    body: "An extended appointment with Dr. Cabell to go through your history, your risks, and your goals, and to decide together which testing makes sense for you.",
  },
  {
    n: "3",
    title: "Your plan",
    body: "A personalized plan focused on prevention and long-term health, with ongoing support throughout your membership year.",
  },
];

const benefits = [
  "Unhurried visits with your cardiologist",
  "Root-cause testing and assessment",
  "A personalized heart health plan",
  "Direct access to the care team between visits",
  "Care that is relationship-based and trauma-informed",
];

const faqs = [
  {
    q: "Do you take insurance?",
    a: "The Cabell Clinic is a membership practice. The practice is Medicare-participatory and in-network with major plans, so plan resources can be used where appropriate, but most of what we do falls outside what insurance covers, and membership is paid directly. We'll walk through exactly how it works on your discovery call.",
  },
  {
    q: "How much does membership cost?",
    a: "We cover pricing and what's included on your 20 minute discovery call, so you can decide with all the details in front of you.",
  },
  {
    q: "Where are you located?",
    a: "105 Continental Place, Suite 160, Brentwood, TN 37027. We serve Brentwood, Franklin, Nashville, and greater Williamson County.",
  },
];

const CallLink = ({ className = "" }: { className?: string }) => (
  <a href={PHONE_HREF} className={`inline-flex items-center gap-2 text-navy hover:text-gold transition-colors ${className}`}>
    <Phone className="w-4 h-4 text-gold" strokeWidth={1.5} />
    Or call {PHONE_DISPLAY}
  </a>
);

const PreventiveCardiology = ({ channel = "ads" }: { channel?: Channel }) => {
  const navigate = useNavigate();
  const config = CHANNELS[channel];
  const THANK_YOU = config.thankYou;
  // Social traffic: which platform's bio link brought them here, if known.
  const [platform] = useState(() => (channel === "social" ? resolveSocialPlatform() : null));
  useEffect(() => {
    if (channel === "social") stripSourceFromUrl();
  }, [channel]);
  const formSource = platform ? `Social — ${PLATFORM_LABEL[platform]}` : config.formSource;
  const attribution = platform ? { ...config.attribution, source: platform } : config.attribution;
  const [showForm, setShowForm] = useState(false);

  return (
  <div className="min-h-screen flex flex-col bg-soft-white">
    {/* Minimal header: wordmark + phone. No navigation on purpose. */}
    <header className="border-b border-warm-gray/60 bg-soft-white">
      <div className="container-wide flex items-center justify-between py-5">
        <span className="font-heading text-2xl text-navy">The Cabell Clinic</span>
        <a href={PHONE_HREF} className="text-sm font-medium text-navy hover:text-gold transition-colors flex items-center gap-2">
          <Phone className="w-4 h-4 text-gold" strokeWidth={1.5} />
          <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>

    <main className="flex-1">
      {/* Hero + form */}
      {/* Phones (Instagram traffic): headline, one line of context, then the
          calendar immediately — the pitch continues below it. Desktop: text
          and calendar side by side, unchanged. */}
      <section className="pt-8 pb-12 md:pt-20 md:pb-24">
        <div className="container-wide grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-16 items-start">
          <div className="max-w-xl contents lg:block">
            <div className="order-1 lg:order-none">
              <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-3 lg:mb-4 block">
                Brentwood · Nashville · Franklin
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-display-lg text-navy mb-4 lg:mb-6">
                Preventive Cardiology, Built Around You
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-4">
                Membership-based heart care in Brentwood with Dr. Thomas Cabell. More time, deeper answers, and a plan made for your health, not a 10-minute visit.
              </p>
            </div>
            <div className="order-3 lg:order-none">
              <p className="text-lg text-navy leading-relaxed mb-6 lg:mb-8">
                Most heart care starts after something goes wrong. We start earlier, looking for root causes rather than just symptoms, so you leave with a clear picture of your heart health and a plan you understand.
              </p>
              <div className="flex items-center gap-4 mb-6 lg:mb-10">
                <CallLink className="text-sm font-medium" />
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="font-heading text-3xl text-navy">241+</span>
                <span>five-star Google reviews<br className="sm:hidden" /> from patients across Middle Tennessee</span>
              </div>
            </div>
          </div>

          <div id="intro-call" className="order-2 lg:order-none bg-white shadow-sm p-4 sm:p-6 md:p-8 scroll-mt-6">
            <h2 className="font-heading text-2xl text-navy mb-1">Book a 20 Minute Discovery Call</h2>
            <p className="text-muted-foreground text-sm mb-4">Pick a time that works for you. No pressure, no commitment.</p>
            <CalendlyEmbed url={CALENDLY_URL} attribution={attribution} onScheduled={() => navigate(THANK_YOU)} />
            <div className="mt-6 pt-6 border-t border-warm-gray/60">
              {showForm ? (
                <>
                  <p className="text-sm font-medium text-navy mb-4">Leave your details and we'll reach out to schedule.</p>
                  <IntroCallForm source={formSource} thankYouPath={THANK_YOU} />
                </>
              ) : (
                <p className="text-sm text-muted-foreground text-center">
                  Prefer we reach out to you?{" "}
                  <button type="button" onClick={() => setShowForm(true)} className="underline text-navy hover:text-gold">
                    Leave your details instead
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* How membership works */}
      <section className="py-16 md:py-20">
        <div className="container-wide">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-4 block">How Membership Works</span>
          <h2 className="font-heading text-display-sm text-navy mb-12">Three steps, no pressure</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.n} className="bg-white p-8 shadow-sm">
                <span className="font-heading text-4xl text-gold block mb-4">{s.n}</span>
                <h3 className="font-heading text-xl text-navy mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What members get + Dr. Cabell */}
      <section className="py-16 md:py-20 bg-navy text-soft-white">
        <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-4 block">What Members Get</span>
            <ul className="space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-lg">
                  <Check className="w-5 h-5 text-gold mt-1 flex-shrink-0" strokeWidth={2} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-6 items-start">
            <img src={thomasCabell} alt="Dr. Thomas Cabell" className="w-32 md:w-40 flex-shrink-0 object-cover" />
            <div>
              <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-3 block">Meet Dr. Cabell</span>
              <p className="text-soft-white/85 leading-relaxed">
                Dr. Thomas Cabell is a cardiologist who built The Cabell Clinic to practice medicine the way he believes it should be practiced: with time, precision, and real relationships. Trained at Vanderbilt and the University of Florida and triple-board certified in Internal Medicine, Cardiovascular Disease, and Nuclear Cardiology, he spent eighteen years in Middle Tennessee's largest hospital systems. Today he practices exclusively at The Cabell Clinic in Brentwood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div className="container-narrow">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-4 block">Common Questions</span>
          <p className="text-muted-foreground leading-relaxed mb-10">
            For adults who want to understand their heart health and take an active role in it, whether that's a family history, answers your current care hasn't given you, or simply staying ahead of problems.
          </p>
          <div className="space-y-8">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="font-heading text-xl text-navy mb-2">{f.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>

    <footer className="py-6 border-t border-warm-gray/60">
      <div className="container-wide flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-muted-foreground/70">
        <span>© {new Date().getFullYear()} The Cabell Clinic · 105 Continental Place, Suite 160, Brentwood, TN 37027 · <a href={PHONE_HREF} className="hover:text-navy">{PHONE_DISPLAY}</a> · <a href="mailto:info@thecabellclinic.com" className="hover:text-navy">info@thecabellclinic.com</a></span>
        <span><Link to="/privacy" className="hover:text-navy">Privacy Policy</Link> · <Link to="/terms" className="hover:text-navy">Terms</Link> · <button type="button" onClick={openCookieSettings} className="hover:text-navy">Cookie settings</button></span>
      </div>
    </footer>
  </div>
  );
};

export default PreventiveCardiology;
