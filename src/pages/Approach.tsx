import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import DiscoveryCallDialog from "@/components/DiscoveryCallDialog";

const Approach = () => {
  return (
    <Layout>
      {/* Section 1: Page Intro */}
      <section className="pt-32 pb-20 bg-soft-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl">
            
            <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-4 block">
              The Approach
            </span>
            <h1 className="font-heading text-display-lg text-navy mb-8">
              From Heart Health to Whole-Person Healing
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Section: How I Work With Patients */}
      <section className="section-padding bg-warm-gray/20">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            
            <h2 className="font-heading text-display text-navy mb-10">
              How We Work With Patients
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              When we work with patients, we start with foundations:
            </p>
            
            <ul className="space-y-3 mb-12">
              {[
              "Circadian rhythm & restorative sleep",
              "Nutrition tailored to biology",
              "Movement & biomechanics",
              "Emotional and mental health"].
              map((item, index) =>
              <li key={index} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full mt-3 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              )}
            </ul>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              From there, we layer in the advanced diagnostics that conventional cardiology rarely uses, including:
            </p>

            <ul className="space-y-3">
              {[
                { title: "AI-QCA Plaque Scans", description: "advanced coronary CTA analysis with quantitative and qualitative plaque assessment" },
                { title: "CIMT (Carotid Intima-Media Thickness)", description: "longitudinal tracking of vascular change" },
                { title: "Endothelial Function (GlycoCheck)", description: "microvascular health and vascular resilience" },
                { title: "Max Pulse Wave Velocity", description: "arterial stiffness and central aortic pressure" },
                { title: "CGM Evaluations + DEXA + Resting Metabolic Rate", description: "metabolic flexibility and body composition" },
                { title: "GlycanAge & SNP Genetic Testing", description: "biological-age and personalization markers" },
                { title: "HRV-guided recovery protocols", description: "resonant breathing and vagus nerve training" },
              ].map((item, index) =>
                <li key={index} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-navy rounded-full mt-3 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground leading-relaxed">
                    <strong className="text-navy font-medium">{item.title}</strong> · {item.description}
                  </span>
                </li>
              )}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Section 5: The Cabell Method */}
      <section className="section-padding bg-soft-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16">
            
            <h2 className="font-heading text-display text-navy">
              Our Framework for Health: The Cabell Method
            </h2>
          </motion.div>

          {/* The Cabell Method Diagram - Layered Pyramid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-20">
            
            <div className="relative">
              {/* Pyramid Layers */}
              <div className="flex flex-col items-center gap-0">
                {/* Layer 4: Selective Medicine (Top) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="w-full max-w-[280px] bg-navy text-soft-white px-6 py-5 text-center relative z-10"
                  style={{ clipPath: "polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)" }}>
                  
                  <span className="text-xs uppercase tracking-widest font-semibold block mb-1 text-secondary">
                    Layer 4
                  </span>
                  <h3 className="font-heading text-lg">Selective Medicine</h3>
                </motion.div>

                {/* Layer 3: Advanced Tools */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="w-full max-w-[420px] bg-navy/80 text-soft-white px-6 py-5 text-center -mt-1"
                  style={{ clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)" }}>
                  
                  <span className="text-xs uppercase tracking-widest font-semibold block mb-1 text-secondary">
                    Layer 3
                  </span>
                  <h3 className="font-heading text-lg">Advanced Tools</h3>
                </motion.div>

                {/* Layer 2: Story Work */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-full max-w-[560px] bg-navy/60 text-soft-white px-6 py-5 text-center -mt-1"
                  style={{ clipPath: "polygon(7% 0%, 93% 0%, 100% 100%, 0% 100%)" }}>
                  
                  <span className="text-xs uppercase tracking-widest font-semibold block mb-1 text-secondary">
                    Layer 2
                  </span>
                  <h3 className="font-heading text-lg">Story Work</h3>
                </motion.div>

                {/* Layer 1: Foundations First (Base) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="w-full max-w-[700px] bg-navy/40 text-navy px-6 py-5 text-center -mt-1"
                  style={{ clipPath: "polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)" }}>
                  
                  <span className="text-xs uppercase tracking-widest font-semibold block mb-1 text-primary-foreground">
                    Layer 1
                  </span>
                  <h3 className="font-heading text-lg text-primary-foreground">Foundations First</h3>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Method Details Grid */}
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-16 max-w-5xl mx-auto">
            {/* 1. Foundations First */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="w-10 h-10 border-2 border-gold text-gold font-heading text-lg flex items-center justify-center">
                  1
                </span>
                <h3 className="font-heading text-2xl text-navy">Foundations First</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Health begins with the important basics:
              </p>
              <ul className="space-y-2 mb-6">
                {["sleep", "circadian rhythm", "nutrition", "movement", "emotional well-being"].map((item, index) =>
                <li key={index} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-gold rounded-full" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                )}
              </ul>
              <p className="text-muted-foreground leading-relaxed text-sm italic">
                When these foundations are aligned with how your body was designed to function, everything else becomes easier.
              </p>
            </motion.div>

            {/* 2. Story Work */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="w-10 h-10 border-2 border-gold text-gold font-heading text-lg flex items-center justify-center">
                  2
                </span>
                <h3 className="font-heading text-2xl text-navy">Story Work</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Your story matters.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                "Past trauma",
                "Stress",
                "Inherited family patterns (addictions, coping strategies, epigenetics, etc.)"].
                map((item, index) =>
                <li key={index} className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-gold rounded-full mt-2" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                )}
              </ul>
              <p className="text-muted-foreground leading-relaxed text-sm italic">
                These shape your nervous system and immune health. By bringing awareness and healing to your story, we unlock powerful pathways for physical and emotional recovery.
              </p>
            </motion.div>

            {/* 3. Advanced Tools */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="w-10 h-10 border-2 border-gold text-gold font-heading text-lg flex items-center justify-center">
                  3
                </span>
                <h3 className="font-heading text-2xl text-navy">Advanced Tools</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Once your foundations are strong, we can use advanced technologies like:
              </p>
              <ul className="space-y-2 mb-6">
                {["Cardiovascular imaging", "Genetic testing", "Wearables", "Peptides"].map((item, index) =>
                <li key={index} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-gold rounded-full" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                )}
              </ul>
              <p className="text-muted-foreground leading-relaxed text-sm italic">
                These tools give us deeper insights and help fine-tune your plan for optimal vitality.
              </p>
            </motion.div>

            {/* 4. Selective Medicine */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="w-10 h-10 border-2 border-gold text-gold font-heading text-lg flex items-center justify-center">
                  4
                </span>
                <h3 className="font-heading text-2xl text-navy">Selective Medicine</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Medications still have a place, but they're not the first reflex.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm italic">
                We use pharmaceuticals only when truly necessary, after we've addressed your foundations, story, and environment, so your body can do what it was designed to do: thrive.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 6: Why This Matters */}
      <section className="section-padding bg-navy">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            
            <h2 className="font-heading text-display text-soft-white mb-10">
              Why This Matters
            </h2>
            <div className="space-y-6 text-soft-white/80">
              <p className="text-lg leading-relaxed">
                Conventional medicine is organized around a single question: <em className="text-soft-white">is something wrong?</em> When the answer is no, the conversation ends.
              </p>
              <p className="text-lg leading-relaxed">
                We are organized around a different question entirely: <em className="text-soft-white">what is this biology capable of, and what is standing in the way?</em>
              </p>
              <p className="text-lg leading-relaxed">
                That distinction, between waiting for the threshold of disease and working upstream of it, is the difference between management and Sovereignty.
              </p>
              <p className="text-lg leading-relaxed mt-10 text-soft-white">
                The future of medicine lies in:
              </p>
              <ul className="space-y-4 mt-6">
                {[
                "restoring coherence to circadian and environmental biology",
                "addressing trauma, story, and inherited patterns",
                "integrating both science and story into how we heal",
                ].map((item, index) =>
                <li key={index} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mt-3 flex-shrink-0" />
                    <span className="text-lg leading-relaxed">{item}</span>
                  </li>
                )}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What to Expect, 3-Year Arc */}
      <section className="section-padding bg-soft-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-16"
          >
            <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-4 block">
              What to Expect
            </span>
            <h2 className="font-heading text-display text-navy mb-6">
              The first three years
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Understanding the arc before committing is what allows members to engage fully, rather than just taking the first step. Here is what the work looks like over time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {[
              {
                year: "Year One",
                title: "Understand & Establish Foundation",
                description:
                  "We complete advanced cardiovascular imaging and a comprehensive biological baseline built around your specific biology, not population averages. In parallel, we address the structural and environmental factors most medicine never assesses: movement mechanics, nervous system regulation, circadian biology, oral-systemic health, and environmental toxin load. By the end of year one, the data exists. The trajectory has changed.",
              },
              {
                year: "Year Two",
                title: "Optimize Against Your Own Baseline",
                description:
                  "Year two is where the investment compounds. Every marker from year one becomes a benchmark, body composition, biological age, cardiovascular function, hormonal balance, and metabolic efficiency, all measured against where you started. We deepen what's working, refine what isn't, and unlock more advanced diagnostics as the full picture comes into focus.",
              },
              {
                year: "Year Three",
                title: "Individualize & Push the Frontier",
                description:
                  "With two years of your specific biology as the foundation, we introduce the most advanced modalities, regenerative protocols, targeted peptide therapies where appropriate, and a three-year coronary imaging comparison that is one of the most powerful longitudinal data sets in preventive medicine. This is care that cannot be replicated in a single visit, or a single year.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="bg-warm-gray/20 p-8 border-t-2 border-gold"
              >
                <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-2 block">
                  {step.year}
                </span>
                <h3 className="font-heading text-xl text-navy mb-4 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Membership Works */}
      <section className="section-padding bg-warm-gray/20">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-4 block">
                How Membership Works
              </span>
              <h2 className="font-heading text-display text-navy mb-6">
                A relationship, not a transaction
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Your membership fee secures direct access to Dr. Cabell as a genuine clinical partner, not through a portal or a nurse line, but as a physician who knows your biology in depth. It also includes Alex Ford, your Health Integrator, who works with you and alongside Dr. Cabell between appointments to translate protocol into practice. The fee reflects the depth of engagement involved.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="bg-white p-8 md:p-10 border-l-2 border-gold"
            >
              <h3 className="font-heading text-2xl text-navy mb-4">
                Aligned economics, not a margin business
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Where we can, testing, therapeutics, and supplements are offered very near the clinic's actual cost with minimal mark up. You'll still pay for certain diagnostics and treatments beyond the fee, but our financial interest is in your <strong className="text-navy">outcome</strong>, not in what you buy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In most practices, more prescriptions and procedures mean more revenue, a conflict of interest built into the model. Ours is built without it.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 7: Invitation */}
      <section className="section-padding bg-soft-white">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            
            <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-4 block">
              The Invitation
            </span>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              This is the approach we take every day, whether we're with patients, writing, or teaching.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
              If you're looking for more than symptom management, if you want a new way of thinking about health and vitality, we'd love to share what we're learning.
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
    </Layout>);

};

export default Approach;