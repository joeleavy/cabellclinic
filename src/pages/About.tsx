import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, GraduationCap, Stethoscope, Compass } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/ui/SectionHeader";
import DiscoveryCallDialog from "@/components/DiscoveryCallDialog";
import thomasCabell from "@/assets/thomas-cabell.jpeg";

const About = () => {
  return (
    <Layout>
      {/* Section 1: Hero */}
      <section className="pt-32 pb-16 bg-soft-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <h1 className="font-heading text-display-lg text-navy mb-3">
              Dr. Thomas Cabell
            </h1>
            <p className="text-sm uppercase tracking-widest text-gold font-semibold mb-6">
              Founder · Preventive & Integrative Cardiologist
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 italic">
              A Doctor Who's Walked the Same Road
            </p>
            <div className="divider-gold" />
          </motion.div>
        </div>
      </section>

      {/* Section 2: Photo + Personal Story */}
      <section className="pb-20 bg-soft-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[420px_1fr] gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-sm overflow-hidden">
                <img
                  src={thomasCabell}
                  alt="Dr. Thomas Cabell"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gold/10 blur-2xl rounded-full -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="prose prose-lg text-muted-foreground space-y-6"
            >
              <p className="leading-relaxed">
                For eighteen years I practiced cardiology in some of the largest hospital systems in the country. I was trained at Vanderbilt and the University of Florida and board-certified in Internal Medicine, Cardiovascular Disease, and Nuclear Cardiology.
              </p>
              <p className="leading-relaxed">
                On paper, I had everything a physician could want. But in my late 30s, my own health broke down. I faced anxiety, depression, and autoimmune disease that conventional medicine couldn't fix. The best the system could offer me was symptom management, more tests, more prescriptions. It wasn't enough.
              </p>
              <p className="leading-relaxed">
                That season of struggle forced me to look deeper. I discovered how trauma, nervous system health, and even our daily rhythms of light, sleep, and environment shape the body as much as biology does.
              </p>
              <p className="leading-relaxed">
                Through recovery work, trauma therapy, and circadian health practices, I experienced my own healing.
              </p>
              <p className="leading-relaxed font-medium text-navy">
                And I knew I had to create a new way forward for my patients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding bg-soft-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mb-16"
          >
            <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-4 block">
              The Journey
            </span>
            <h2 className="font-heading text-display text-navy">
              From conventional practice to membership-based medicine
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: GraduationCap,
                phase: "Training",
                description:
                  "Vanderbilt residency and University of Florida cardiology fellowship, rigorous preparation in world-class institutions.",
              },
              {
                icon: Stethoscope,
                phase: "Clinical Practice",
                description:
                  "Eighteen years treating complex cardiovascular cases in major hospital systems across the country.",
              },
              {
                icon: Heart,
                phase: "Personal Healing",
                description:
                  "A health crisis that conventional medicine couldn't solve led to deep discovery in trauma, nervous system, and circadian health.",
              },
              {
                icon: Compass,
                phase: "The Cabell Clinic",
                description:
                  "Building a practice designed to deliver the medicine patients deserve, prevention-focused and relationship-centered.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="w-12 h-12 border border-gold/30 rounded-full flex items-center justify-center mb-6">
                  <item.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-xl text-navy mb-3">
                  {item.phase}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-border -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Guide Positioning */}
      <section className="section-padding bg-soft-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-4 block">
                Philosophy
              </span>
              <h2 className="font-heading text-display text-navy mb-8">
                A Guide, Not Just a Doctor
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="prose prose-lg text-muted-foreground space-y-6"
            >
              <p className="leading-relaxed">
                I come from a family of physicians, and I've always had the instinct 
                to step in when lives were on the line.
              </p>
              <p className="leading-relaxed">
                But what I've learned is that true health isn't just about saving 
                lives in a crisis, it's about:
              </p>
              <ul className="list-none space-y-3 pl-0">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <span>Preventing disease</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <span>Restoring energy</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <span>Giving people their lives back before crisis ever comes</span>
                </li>
              </ul>
              <p className="leading-relaxed font-medium text-navy">
                That's what I want for you. To keep you out of the medical system, 
                thriving in your everyday life, with energy and clarity for the 
                moments that matter most.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-10"
            >
              <div className="divider-gold mx-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Your Team */}
      <section className="section-padding bg-soft-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-12"
          >
            <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-4 block">
              Your Team
            </span>
            <h2 className="font-heading text-display text-navy mb-6">
              A coordinated network, not a solo provider
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Membership is built around a small, dedicated core team, and access to a vetted network of specialists who share our philosophy. These aren't conventional referrals. They're partners chosen deliberately, integrated into your care plan, and coordinated on your behalf.
            </p>
            <Button variant="clinic-outline" asChild>
              <Link to="/team">
                Meet the team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-warm-gray/20 p-8 md:p-10"
          >
            <h3 className="font-heading text-2xl text-navy mb-4">
              Our broader clinical network
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Beyond the core team, members benefit from coordinated access to specialists in oral-systemic dentistry, integrative psychotherapy, hormone optimization, EMF and indoor environment, functional movement, and more, selected for their philosophical alignment and integrated into your care plan when their expertise is relevant.
            </p>
            <Button variant="clinic-outline" asChild>
              <Link to="/experts">
                Meet the Experts at Large
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Invitation */}
      <section className="section-padding bg-warm-gray/20">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-4 block">
              The Invitation
            </span>
            <h2 className="font-heading text-display text-navy mb-6">
              Education is the mission.<br />
              Vitality is the goal.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              If you're ready for a new model of medicine, one that honors both 
              your story and your biology, you've come to the right place.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <DiscoveryCallDialog>
                <Button variant="clinic-primary" size="xl">
                  Request an Invitation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </DiscoveryCallDialog>
              <Button variant="clinic-outline" size="xl" asChild>
                <Link to="/approach">Learn About Our Approach</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
