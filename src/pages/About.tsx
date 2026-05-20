import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, GraduationCap, Stethoscope, Compass, Sparkles } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/ui/SectionHeader";
import thomasCabell from "@/assets/thomas-cabell.jpeg";

const About = () => {
  return (
    <Layout>
      {/* Section 1: Introduction */}
      <section className="pt-32 pb-20 bg-soft-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-4 block">
                About
              </span>
              <h1 className="font-heading text-display-lg text-navy mb-6">
                About Dr. Cabell
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 italic">
                A Doctor Who's Walked the Same Road
              </p>
              <div className="divider-gold" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
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
          </div>
        </div>
      </section>

      {/* Section 2: Personal Story & Credentials */}
      <section className="section-padding bg-warm-gray/20">
        <div className="container-wide">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-4 block">
                My Story
              </span>
              <h2 className="font-heading text-display text-navy mb-8">
                A Doctor Who's Walked the Same Road
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-6">
                <p className="leading-relaxed">
                  For 17 years I practiced cardiology in some of the largest hospital systems 
                  in the country. I was trained at Vanderbilt and the University of Florida 
                  and board-certified in Internal Medicine, Cardiovascular Disease, and 
                  Nuclear Cardiology.
                </p>
                <p className="leading-relaxed">
                  On paper, I had everything a physician could want. But in my late 30s, 
                  my own health broke down. I faced anxiety, depression, and autoimmune 
                  disease that conventional medicine couldn't fix. The best the system 
                  could offer me was symptom management—more tests, more prescriptions. 
                  It wasn't enough.
                </p>
                <p className="leading-relaxed">
                  That season of struggle forced me to look deeper. I discovered how trauma, 
                  nervous system health, and even our daily rhythms of light, sleep, and 
                  environment shape the body as much as biology does.
                </p>
                <p className="leading-relaxed">
                  Through recovery work, trauma therapy, and circadian health practices, 
                  I experienced my own healing.
                </p>
                <p className="leading-relaxed font-medium text-navy">
                  And I knew I had to create a new way forward for my patients.
                </p>
              </div>
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
              From conventional practice to concierge care
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: GraduationCap,
                phase: "Training",
                description:
                  "Vanderbilt residency and University of Florida cardiology fellowship—rigorous preparation in world-class institutions.",
              },
              {
                icon: Stethoscope,
                phase: "Clinical Practice",
                description:
                  "17 years treating complex cardiovascular cases in major hospital systems across the country.",
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
                  "Building a practice designed to deliver the medicine patients deserve—prevention-focused and relationship-centered.",
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

      {/* Section 3: Why This Matters For You */}
      <section className="section-padding bg-navy">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-4 block">
                My Approach
              </span>
              <h2 className="font-heading text-display text-soft-white mb-6">
                Why This Matters For You
              </h2>
              <p className="text-soft-white/70 leading-relaxed mb-6">
                A lot of doctors will tell you to adjust your diet, exercise more, 
                and take medication.
              </p>
              <p className="text-soft-white/70 leading-relaxed">
                While those matter, they often miss the deeper roots of health.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-soft-white/5 border border-soft-white/10 p-10"
            >
              <p className="text-soft-white font-medium mb-6">
                That's why it's my mission to:
              </p>
              <ul className="space-y-4">
                {[
                  "Listen deeply to your story, not just your symptoms.",
                  "Evaluate your nervous system resilience, heart rate variability, and genetic markers.",
                  "Help you align your biology with circadian laws of health—light, sleep, water, movement.",
                  "Consider your environment—air, toxins, EMFs, even the fibers on your skin.",
                  "Build you a personalized roadmap to restore vitality and extend your years.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Sparkles className="w-4 h-4 text-gold mt-1 flex-shrink-0" strokeWidth={1.5} />
                    <span className="text-soft-white/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Guide Positioning */}
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
                lives in a crisis—it's about:
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
              If you're ready for a new model of medicine—one that honors both 
              your story and your biology—you've come to the right place.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="clinic-primary" size="xl" asChild>
                <Link to="/contact">
                  Request an Invitation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
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
