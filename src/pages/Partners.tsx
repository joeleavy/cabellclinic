import { useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import meoLogo from "@/assets/partners/meo-health.png";
import vibrantLogo from "@/assets/partners/vibrant-wellness.png";
import caristoLogo from "@/assets/partners/caristo.svg";
import questLogo from "@/assets/partners/quest-diagnostics.png";
import stykuLogo from "@/assets/partners/styku.png";
import kenetikLogo from "@/assets/partners/kenetik-pro.svg";
import coolSpringsLogo from "@/assets/partners/cool-springs-modern-dentistry.png";

// Unlisted draft page — reachable only by direct link, for internal review.
// Shows two design options for an "Our Partners" page. Not in any nav; the
// meta tag below asks search engines not to index it.

type Partner = {
  name: string;
  category: string;
  description: string;
  url: string;
  logo: string;
  logoClass?: string;
};

const partners: Partner[] = [
  {
    name: "Meo Health",
    url: "https://www.meohealth.com",
    category: "Nervous System Training",
    description:
      "HRV-guided training that strengthens the autonomic nervous system.",
    logo: meoLogo,
  },
  {
    name: "Caristo Diagnostics",
    url: "https://www.caristo.com",
    category: "Cardiac Imaging",
    description:
      "AI-powered analysis of cardiac CT that reveals coronary inflammation conventional reads can miss.",
    logo: caristoLogo,
  },
  {
    name: "Vibrant Wellness",
    url: "https://vibrant-wellness.com",
    category: "Functional Lab Testing",
    description:
      "Advanced functional laboratory testing, from micronutrient status to gut health.",
    logo: vibrantLogo,
  },
  {
    name: "Quest Diagnostics",
    url: "https://www.questdiagnostics.com",
    category: "Clinical Laboratories",
    description: "Nationwide clinical laboratory testing.",
    logo: questLogo,
    logoClass: "max-h-12",
  },
  {
    name: "Styku",
    url: "https://www.styku.com",
    category: "Body Composition",
    description:
      "Precision 3D body scanning to measure and track body composition over time.",
    logo: stykuLogo,
    logoClass: "max-h-12",
  },
  {
    name: "Kenetik Pro",
    url: "https://kenetikpro.com",
    category: "Metabolic Support",
    description:
      "Medical-grade bioidentical ketones, available through the practitioner channel.",
    logo: kenetikLogo,
    logoClass: "max-h-6",
  },
  {
    name: "Cool Springs Modern Dentistry",
    url: "https://www.coolspringsmoderndentistry.com",
    category: "Dental Health",
    description:
      "Our local partner for oral health and its deep connection to cardiovascular wellness.",
    logo: coolSpringsLogo,
  },
];

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

      {/* Partner logo cards */}
      <section className="bg-warm-gray/20 py-20">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white shadow-sm p-8 flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="h-16 flex items-center mb-6">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className={`w-auto max-w-[220px] ${partner.logoClass ?? "max-h-10"}`}
                  />
                </div>
                <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-2">
                  {partner.category}
                </span>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {partner.description}
                </p>
              </a>
            ))}
          </div>

          <p className="text-xs text-muted-foreground/60 mt-16 max-w-2xl">
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
