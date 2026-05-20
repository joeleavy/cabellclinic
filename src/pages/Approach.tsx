import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

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
              My Approach
            </span>
            <h1 className="font-heading text-display-lg text-navy mb-8">
              From Heart Health to Whole-Person Healing
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Why I Practice Medicine Differently */}
      <section className="section-padding bg-warm-gray/20">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="prose prose-lg max-w-none">
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              I've spent nearly 20 years as a cardiologist, trained at Vanderbilt and the University of Florida, and became board certified in Internal Medicine, Cardiovascular Disease, and Nuclear Cardiology.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              But my perspective didn't just come from textbooks or hospitals.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              It came from my own struggles with anxiety, depression, autoimmune disease, and the buried trauma that fueled them.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Conventional medicine offered me medications and protocols, but not real healing. That experience reshaped how I see health and how I practice medicine today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 3: What I Learned */}
      <section className="section-padding bg-soft-white">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            
            <h2 className="font-heading text-display text-navy mb-10">
              What I Learned
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Healing isn't just about biology. It's about story.
              </p>
              <ul className="space-y-4">
                {[
                "Unaddressed trauma affects our nervous system, immune system, and even our genes.",
                "Our environment—light, water, sleep, movement—shapes our biology every day.",
                "True health is not just about adding more pills or supplements, but removing the barriers that prevent our bodies from thriving."].
                map((item, index) =>
                <li key={index} className="flex items-start gap-4">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full mt-3 flex-shrink-0" />
                    <span className="text-lg text-muted-foreground leading-relaxed">
                      {item}
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: How I Work With Patients */}
      <section className="section-padding bg-warm-gray/20">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            
            <h2 className="font-heading text-display text-navy mb-10">
              How I Work With Patients
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              When I work with patients, I start with foundations:
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
              From there, we may integrate advanced tools like:
            </p>
            
            <ul className="space-y-3">
              {[
              "Heart rate variability testing",
              "Genetic markers for nutrition & risk",
              "Wearables & continuous monitors",
              "Hormetic stressors (sunlight, cold sauna, fasting, exercise) nutraceuticals and peptides."].
              map((item, index) =>
              <li key={index} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-navy rounded-full mt-3 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground leading-relaxed">
                    {item}
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
              My Framework for Health: The Cabell Method
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
                I use pharmaceuticals only when truly necessary—after we've addressed your foundations, story, and environment—so your body can do what it was designed to do: thrive.
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
              Why This Matters For You
            </h2>
            <div className="space-y-6 text-soft-white/80">
              <p className="text-lg leading-relaxed">
                Modern medicine is unmatched in emergencies.
              </p>
              <p className="text-lg leading-relaxed">
                But for chronic illness and long-term vitality, we can do better.
              </p>
              <p className="text-lg leading-relaxed">
                It manages symptoms instead of creating health.
              </p>
              <p className="text-lg leading-relaxed mt-10">
                I believe the future of medicine lies in:
              </p>
              <ul className="space-y-4 mt-6">
                {[
                "restoring balance to circadian and quantum biology",
                "addressing trauma and inherited patterns",
                "integrating both science and story into how we heal"].
                map((item, index) =>
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
              This is the approach I take every day—whether I'm with patients, writing, or teaching.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
              If you're looking for more than symptom management, if you want a new way of thinking about health and vitality, I'd love to share what I'm learning.
            </p>
            <Button variant="clinic-primary" size="xl" asChild>
              <Link to="/contact">
                Request an Invitation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>);

};

export default Approach;