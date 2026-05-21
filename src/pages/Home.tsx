import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import DiscoveryCallDialog from "@/components/DiscoveryCallDialog";
import SectionHeader from "@/components/ui/SectionHeader";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import PatientReviewsSection from "@/components/home/PatientReviewsSection";
import visionImage from "@/assets/vision-outdoor.jpg";
import thomasCabellImage from "@/assets/thomas-cabell.jpeg";
const Home = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-soft-white via-soft-white to-warm-gray/30" />
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-sage/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />

        <div className="container-wide relative z-10 pt-24 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }}>
              <span className="inline-block text-lg md:text-xl uppercase tracking-[0.25em] text-gold font-semibold mb-6">
                Brentwood, Tennessee
              </span>
            </motion.div>

            <motion.h1 initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.3
          }} className="font-heading text-display-lg text-navy mb-8">
              Make the Most of Your Health &amp; Aging with <span className="font-bold italic">Personalized Healthcare</span>
            </motion.h1>

            <motion.p initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.4
          }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body leading-relaxed">Preventive & Integrative Cardiology since 2008, integrating root-cause diagnostics, longevity science, trauma-informed care, and the environmental signals that shape your biology.</motion.p>

            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.5
          }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <DiscoveryCallDialog>
                <Button variant="clinic-primary" size="xl" className="w-full sm:w-64">
                  Request an Invitation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </DiscoveryCallDialog>
              <Button variant="clinic-outline" size="xl" asChild className="w-full sm:w-64">
                <Link to="/approach">Explore Our Approach</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1.2,
        duration: 0.8
      }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-navy/30 rounded-full flex items-start justify-center p-2">
            <motion.div animate={{
            y: [0, 12, 0]
          }} transition={{
            duration: 1.5,
            repeat: Infinity
          }} className="w-1.5 h-1.5 bg-navy/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Philosophy Contrast Section */}
      <section className="section-padding bg-soft-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-stretch">
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.7
          }} className="bg-white p-10 md:p-12 shadow-lg h-full flex flex-col">
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-4 block">
                The Challenge
              </span>
              <h2 className="font-heading text-display-sm text-navy mb-6">Modern medicine often treats symptoms, not the person</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Most healthcare is built to react, not prevent. Appointments are short, solutions are fragmented, and symptoms get managed while the deeper loss of resilience goes unaddressed.</p>
              <p className="text-muted-foreground leading-relaxed">For high-performing patients, doing "everything right" often isn't enough, energy, clarity, and long-term confidence still feel out of reach.</p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.7,
            delay: 0.2
          }} className="bg-white p-10 md:p-12 shadow-lg h-full flex flex-col">
              <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-4 block">A New Approach</span>
              <h3 className="font-heading text-display-sm text-navy mb-6">Medicine designed around you</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">Medicine grounded in time, precision, and relationship. Where your physician knows your story, not just your chart.</p>
              <p className="text-muted-foreground leading-relaxed mb-6">We work in the space between detection and disease, using advanced diagnostics and root-cause thinking to build a strategy around your specific biology, not population averages.</p>
              <Button variant="clinic-outline" asChild className="self-start mt-auto">
                <Link to="/approach">
                  Learn What We Do
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section className="section-padding bg-warm-gray/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.7
          }} className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] bg-gradient-to-br from-navy/5 to-sage/10 rounded-sm overflow-hidden">
                <img src={thomasCabellImage} alt="Dr. Thomas Cabell" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold/10 blur-2xl rounded-full -z-10" />
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.7
          }} className="order-1 lg:order-2">
              <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-4 block">
                Your Guide
              </span>
              <h2 className="font-heading text-display text-navy mb-2">
                Dr. Thomas Cabell
              </h2>
              <p className="text-sm uppercase tracking-widest text-gold font-semibold mb-6">
                Founder · Preventive & Integrative Cardiologist
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">For eighteen years, I practiced conventional cardiology in some of the largest healthcare systems in the country. I loved my work, but I kept seeing the same thing: people getting treated, not truly healed. The journey to find a better answer became personal, and ultimately, the foundation of The Cabell Clinic.</p>
              
              <Collapsible className="mb-8">
                <CollapsibleTrigger className="flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold transition-colors group">
                  <span className="uppercase tracking-widest">Credentials</span>
                  <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 pl-4 border-l-2 border-gold/30">
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                      <span>B.S. in Biological Engineering from Mississippi State University and an M.D. from the University of Mississippi, Internal Medicine residency at Vanderbilt University and a Cardiology fellowship at the University of Florida's Shands Hospital.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                      <span>Triple-board certified in Internal Medicine, Cardiovascular Disease, and Nuclear Cardiology, with eighteen years of practice within large healthcare systems.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                      <span>Serving on the board of The Refuge Center for Counseling, one of the nation's leading nonprofit therapy centers.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                      <span>Advising multiple health-tech startups, including: Psycheceutical Biosciences, Thaddeus Medical Systems, Zealacare, Corrective Skin.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                      <span>Lectures widely on trauma, mind-body medicine, and the future of decentralized healthcare.</span>
                    </li>
                  </ul>
                </CollapsibleContent>
              </Collapsible>

              <Button variant="clinic-outline" asChild>
                <Link to="/dr-cabell">
                  Meet Dr. Cabell
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Patient Reviews Section */}
      <PatientReviewsSection />

      {/* Story · Structure · Signals · Sovereignty Framework */}
      <section className="section-padding bg-navy">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block text-xs uppercase tracking-widest text-gold font-semibold mb-4">
              How We Work
            </span>
            <h2 className="font-heading text-soft-white whitespace-nowrap text-2xl md:text-3xl lg:text-4xl">
              Story · Structure · Signals · Sovereignty
            </h2>
          </motion.div>

          {/* The Destination: Sovereignty */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center mb-16 px-8 py-10 border border-gold/30"
          >
            <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-3 block">
              The Destination
            </span>
            <h3 className="font-heading text-4xl md:text-5xl text-soft-white italic mb-5">
              Sovereignty
            </h3>
            <p className="text-soft-white/70 leading-relaxed">
              The capacity to know your own biology well enough to trust it, and lead it. Not the absence of disease, but the presence of genuine biological resilience: understood, built, and owned by you.
            </p>
          </motion.div>

          {/* Three Pillars: Story / Structure / Signals */}
          <div className="grid md:grid-cols-3 gap-10 lg:gap-12 max-w-6xl mx-auto">
            {[
              {
                label: "Story",
                heading: "Every body carries a history.",
                description:
                  "The patterns of stress you've carried, the experiences that shaped you, and the way your nervous system orients daily, these are not soft variables at the margins of health. They are your health, upstream of the chemistry we find when we look.",
              },
              {
                label: "Structure",
                heading: "The body is not a collection of parts.",
                description:
                  "How you move, breathe, and are held in space translates physical organization into biological signal. The same is true of the light, water, and electromagnetic fields in the spaces you inhabit, inputs your biology is responding to around the clock.",
              },
              {
                label: "Signals",
                heading: "The body seeks signal coherence.",
                description:
                  "Your cardiovascular function, metabolic efficiency, hormonal patterns, and biological-age markers are generating actionable information at every moment. We read it earlier, in more detail, and with a longer view, long before signals become diagnoses.",
              },
            ].map((pillar, index) => (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="border-t border-gold/40 pt-6"
              >
                <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-3 block">
                  {pillar.label}
                </span>
                <h4 className="font-heading text-xl text-soft-white mb-4 leading-snug">
                  {pillar.heading}
                </h4>
                <p className="text-soft-white/70 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-16"
          >
            <p className="text-soft-white/60 italic text-sm md:text-base mb-8">
              "We work in Story, Structure, and Signals, so that you arrive at Sovereignty."
            </p>
            <Button variant="clinic-gold-outline" size="lg" asChild>
              <Link to="/approach">
                Explore the approach
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Outcomes Vision */}
      <section className="section-padding bg-soft-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.7
          }}>
              <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-4 block">
                The Vision
              </span>
              <h2 className="font-heading text-display text-navy mb-6">A Life of Sustained Vitality</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">Imagine knowing your body deeply. Understanding its signals, anticipating its needs, and making decisions grounded in precise, personalized data.</p>
              <p className="text-muted-foreground leading-relaxed mb-6">We're not about chasing trends or merely optimizing for metrics. We're about helping you build the foundation for decades of meaningful, energetic living.</p>
              <ul className="space-y-4">
                {["Clarity about your cardiovascular risk and trajectory", "Personalized strategies for energy and performance", "A trusted physician who knows your full story", "Proactive, preventive care before problems arise"].map((item, index) => <motion.li key={index} initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5,
                delay: index * 0.1
              }} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.li>)}
              </ul>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.7
          }} className="relative">
              <div className="aspect-square rounded-sm overflow-hidden">
                <img src={visionImage} alt="Person enjoying the outdoors at sunrise" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-sage/20 blur-2xl rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-warm-gray/30">
        <div className="container-narrow text-center">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7
        }}>
            <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-4 block">
              Toward Sovereignty
            </span>
            <h2 className="font-heading text-display text-navy mb-6">
              Sovereignty starts with a conversation
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              We accept a limited number of new members each year so the depth of care we offer stays intact. If the path we've described resonates, the discovery call is the right place to begin.
            </p>
            <DiscoveryCallDialog>
              <Button variant="clinic-primary" size="xl">
                Request an Invitation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </DiscoveryCallDialog>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-soft-white">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-4 block">
              Knowledge Is Power
            </span>
            <h2 className="font-heading text-display text-navy mb-6">
              Questions, answered honestly
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              From how membership works to what your first year looks like, the FAQ covers the questions we hear most often, including the ones about whether this model is right for you.
            </p>
            <Button variant="clinic-primary" size="lg" asChild>
              <Link to="/faq">
                View the full FAQ
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Home;
