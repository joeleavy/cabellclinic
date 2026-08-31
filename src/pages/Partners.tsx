import { useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import meoLogo from "@/assets/partners/meo-health.webp";
import vibrantLogo from "@/assets/partners/vibrant-wellness.png";
import caristoLogo from "@/assets/partners/caristo.svg";
import questLogo from "@/assets/partners/quest-diagnostics.png";
import stykuLogo from "@/assets/partners/styku.png";
import kenetikLogo from "@/assets/partners/kenetik-pro.svg";

// Unlisted draft page — reachable only by direct link, for internal review.
// Shows two design options for an "Our Partners" page. Not in any nav; the
// meta tag below asks search engines not to index it.

type Partner = {
  name: string;
  category: string;
  description: string;
  logo?: string;
  logoClass?: string;
};

const partners: Partner[] = [
  {
    name: "Meo Health",
    category: "Nervous System Training",
    description:
      "HRV-guided training that strengthens the autonomic nervous system.",
    logo: meoLogo,
  },
  {
    name: "Caristo Diagnostics",
    category: "Cardiac Imaging",
    description:
      "AI-powered analysis of cardiac CT that reveals coronary inflammation conventional reads can miss.",
    logo: caristoLogo,
  },
  {
    name: "Vibrant Wellness",
    category: "Functional Lab Testing",
    description:
      "Advanced functional laboratory testing, from micronutrient status to gut health.",
    logo: vibrantLogo,
  },
  {
    name: "Quest Diagnostics",
    category: "Clinical Laboratories",
    description: "Nationwide clinical laboratory testing.",
    logo: questLogo,
    logoClass: "max-h-16",
  },
  {
    name: "Styku",
    category: "Body Composition",
    description:
      "Precision 3D body scanning to measure and track body composition over time.",
    logo: stykuLogo,
  },
  {
    name: "Kenetik Pro",
    category: "Metabolic Support",
    description:
      "Medical-grade bioidentical ketones, available through the practitioner channel.",
    logo: kenetikLogo,
    logoClass: "max-h-6",
  },
  {
    name: "Paul Gilliam Dentistry",
    category: "Dental Health",
    description:
      "Our local partner for oral health and its deep connection to cardiovascular wellness.",
  },
];

const OptionLabel = ({ children }: { children: string }) => (
  <div className="container-wide pt-16 pb-10">
    <span className="inline-block bg-navy text-soft-white text-xs uppercase tracking-widest font-semibold px-4 py-2">
      {children}
    </span>
  </div>
);

const Partners = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Our Partners (Draft) | The Cabell Clinic";
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => {
      document.title = previousTitle;
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-soft-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-4 block">
              Working Draft — Two Design Options
            </span>
            <h1 className="font-heading text-display-lg text-navy mb-8">
              Our Partners
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Advanced medicine is a team effort. We work with a carefully
              chosen network of laboratories, imaging innovators, and local
              practitioners so our members have access to diagnostics and
              therapies beyond the walls of our clinic.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============ OPTION A: logo cards ============ */}
      <section className="bg-warm-gray/20 pb-20">
        <OptionLabel>Design Option A — Logo Cards</OptionLabel>
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white shadow-sm p-8 flex flex-col"
              >
                <div className="h-16 flex items-center mb-6">
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className={`w-auto max-w-[220px] ${partner.logoClass ?? "max-h-10"}`}
                    />
                  ) : (
                    // No logo exists for this practice — reproduce how their
                    // own site typesets their name (Lora 400, ink navy).
                    <span
                      className="text-[26px]"
                      style={{ fontFamily: "'Lora', serif", color: "#001F33" }}
                    >
                      Paul Gilliam DDS
                    </span>
                  )}
                </div>
                <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-2">
                  {partner.category}
                </span>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {partner.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ OPTION B: typographic list ============ */}
      <section className="bg-soft-white pb-24">
        <OptionLabel>Design Option B — Typographic</OptionLabel>
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 max-w-5xl">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="border-t border-warm-gray pt-8"
              >
                <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-3 block">
                  {partner.category}
                </span>
                <h3 className="font-heading text-2xl md:text-3xl text-navy mb-3">
                  {partner.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {partner.description}
                </p>
              </motion.div>
            ))}
          </div>

          <p className="text-xs text-muted-foreground/60 mt-20 max-w-2xl">
            Internal draft: partner descriptions are placeholders pending Dr.
            Cabell's review. This page is unlisted and not indexed by search
            engines.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
