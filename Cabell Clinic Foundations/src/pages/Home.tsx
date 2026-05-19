import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Sparkles, Sun, Waves, ChevronDown, Plus, Minus } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
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
          }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body leading-relaxed">Helping patients restore vitality since 2008 by integrating Quantum & Circadian Health, longevity science, trauma-informed care, and performance optimization.</motion.p>

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
              <Button variant="clinic-primary" size="xl" asChild>
                <Link to="/contact">
                  Request an Invitation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="clinic-outline" size="xl" asChild>
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
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
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
          }}>
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-4 block">
                The Challenge
              </span>
              <h2 className="font-heading text-display-sm text-navy mb-6">Modern medicine often treats symptoms, not the person</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">Most healthcare is designed to intervene once something has already gone wrong.</p>
              <ul className="text-muted-foreground leading-relaxed mb-4 list-disc list-inside space-y-1 pl-2">
                <li>Appointments are short and solutions are fragmented.</li>
                <li>The focus is often limited to managing symptoms rather than understanding why the body lost resilience in the first place.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">For many high-performing individuals, this leaves an unsettling gap:
You're doing "everything right," yet energy, clarity, or confidence in your long-term health can feel elusive.</p>
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
          }} className="bg-white p-10 md:p-12 shadow-lg">
              <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-4 block">A New Approach</span>
              <h3 className="font-heading text-display-sm text-navy mb-6">A different way of approaching health </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">Medicine grounded in time, precision, and relationship. Where your physician knows your story, not just your chart.</p>
              <p className="text-muted-foreground leading-relaxed mb-6">Dr. Thomas Cabell, a board-certified cardiologist, for nearly two decades has practiced inside large healthcare systems—until his own health challenges forced him to ask deeper questions.</p>
              <Button variant="clinic-outline" asChild>
                <Link to="/approach">
                  Learn What We Do
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <div className="divider-gold mt-8" />
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
              <h2 className="font-heading text-display text-navy mb-6">
                Dr. Thomas Cabell
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">For nearly two decades, I practiced conventional cardiology in some of the largest healthcare systems in the country. I loved my work, but I kept seeing the same thing: people getting treated, not truly healed.</p>
              <p className="text-muted-foreground leading-relaxed mb-8">That search led me to the science of trauma, psychoneuroimmunology, and the emerging field of circadian and quantum biology. 




I discovered how profoundly our environment, story, and nervous system shape every aspect of health  and how healing requires integration of all three.Years of unprocessed trauma showed up as anxiety, depression, and autoimmune disease. 




The way I was doing things wasn't working, so I went looking for a different way</p>
              
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
                      <span>Triple-board certified in Internal Medicine, Cardiovascular Disease, and Nuclear Cardiology, and practiced for 17 years within large healthcare systems.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                      <span>Serving on the board of The Refuge Center for Counseling, one of the nation's leading nonprofit therapy centers.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                      <span>Advising multiple health-tech startups—including: Psycheceutical Biosciences, Thaddeus Medical Systems, Zealacare, Corrective Skin.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                      <span>Lectures widely on trauma, mind-body medicine, and the future of decentralized healthcare.</span>
                    </li>
                  </ul>
                </CollapsibleContent>
              </Collapsible>

              <Button variant="clinic-outline" asChild>
                <Link to="/about">
                  Learn More About Dr. Cabell
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Patient Reviews Section */}
      <PatientReviewsSection />

      {/* Pillars / How We Think */}
      <section className="section-padding bg-navy">
        <div className="container-wide">
          <SectionHeader 
            eyebrow="Our Foundations" 
            title="How We Approach Your Health" 
            className="text-soft-white [&_h2]:text-soft-white mb-16" 
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {[{
              icon: Heart,
              title: "Cardiovascular Integrity",
              description: "Your heart and vascular system tell a much deeper story than standard labs alone—one that reveals resilience, risk, and long-term vitality."
            }, {
              icon: Sparkles,
              title: "Nervous System & Story",
              description: "Stress, trauma, and lived experience shape how your body functions; understanding your story helps explain patterns your labs can't."
            }, {
              icon: Sun,
              title: "Circadian & Mitochondrial Health",
              description: "Energy, metabolism, and aging are governed by timing, light, and cellular signaling—often long before symptoms appear."
            }, {
              icon: Waves,
              title: "Environment & Daily Signals",
              description: "From air and water to movement and electromagnetic exposure, the signals you encounter every day quietly influence your biology."
            }].map((pillar, index) => (
              <motion.div 
                key={pillar.title} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5, delay: index * 0.1 }} 
                className="text-center p-6 lg:p-8"
              >
                <div className="w-14 h-14 mx-auto mb-6 border border-gold/40 rounded-full flex items-center justify-center">
                  <pillar.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-lg text-soft-white mb-4">
                  {pillar.title}
                </h3>
                <p className="text-soft-white/60 text-sm leading-relaxed">
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
            className="text-center mt-12"
          >
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
              Begin the Conversation
            </span>
            <h2 className="font-heading text-display text-navy mb-6">
              Is The Cabell Clinic right for you?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              We work with a limited number of clients each year to ensure 
              the depth and attention our approach requires. If this resonates, 
              we invite you to reach out.
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

      {/* FAQ Section */}
      <section className="section-padding bg-soft-white">
        <div className="container-narrow">
          <SectionHeader
            eyebrow="Common Questions"
            title="Frequently Asked Questions"
            className="mb-12"
          />

          <div className="space-y-4">
            {[
              {
                question: "What do members receive?",
                answer: "Members enjoy ongoing routine exams that, instead of reacting to disease, are focused on ongoing health optimization and supported by year-long extraordinary communication connection. This is an over 100-year old recipe in the US for effectively preserving and enhancing the health of important people: your health deserves this, too. Because I focus my time and energies on a small panel of patients determined to enhance their health by investing in services entirely outside plan coverages, my patients enjoy easy and convenient scheduling and quick communication connectivity. And because this style of healthcare is not controlled or limited by insurance/plan restrictions, the time and scope of our interactions are no longer restricted by plan terms. My focus is solely on how to optimize your health on an ongoing basis."
              },
              {
                question: "Are you in-network and will you use my healthcare insurance plan (either private, or Medicare)?",
                answer: "My practice is Medicare participatory and in-network with major plans, so your plan resources can be utilized if or when useful. That said, the vast majority of our interactions will not trigger plan terms/conditions/reimbursement. If a situation arises where I believe utilizing plan resources makes sense, I will do so and collect the co-payments/deductibles as required by plan terms and applicable laws. But that will be rare, as my intent is to provide a healthcare program very different from how insurance packages (and restricts) healthcare services."
              },
              {
                question: "Can I utilize pre-tax or employer funding options for your membership fees? Is your program fundable in a manner similar to executive health programs?",
                answer: "Many members use HSA (Health Savings Account) or FSA (Flexible Spending Account) funds to cover membership fees. Some employers also offer executive health benefits that can be applied toward personalized healthcare programs like ours. We recommend consulting with your benefits administrator or tax advisor to understand what options are available to you."
              }
            ].map((faq, index) => (
              <Collapsible key={index} className="border border-warm-gray rounded-sm">
                <CollapsibleTrigger className="flex items-center justify-between w-full p-6 text-left hover:bg-warm-gray/20 transition-colors group">
                  <span className="font-heading text-lg text-navy pr-4">{faq.question}</span>
                  <div className="flex-shrink-0">
                    <Plus className="h-5 w-5 text-gold group-data-[state=open]:hidden" />
                    <Minus className="h-5 w-5 text-gold hidden group-data-[state=open]:block" />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>
    </Layout>;
};
export default Home;
