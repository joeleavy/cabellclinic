import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Plus, Minus } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import DiscoveryCallDialog from "@/components/DiscoveryCallDialog";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

type FAQ = {
  question: string;
  answer: React.ReactNode;
};

type Category = {
  eyebrow: string;
  title: string;
  items: FAQ[];
};

const categories: Category[] = [
  {
    eyebrow: "Section One",
    title: "About The Cabell Clinic",
    items: [
      {
        question: "What is The Cabell Clinic?",
        answer:
          "The Cabell Clinic is a membership-based preventive and integrative cardiology practice in Brentwood, Tennessee. We keep our membership intentionally small so we have the time to detect imbalances early, address root causes across body, mind, and environment, and build the kind of long-term biological resilience conventional medicine rarely has the room for.",
      },
      {
        question: "Who is Dr. Thomas Cabell?",
        answer:
          "Dr. Cabell is a board-certified cardiologist (Internal Medicine, Cardiovascular Disease, and Nuclear Cardiology) with eighteen years of clinical experience inside large hospital systems. He trained at Vanderbilt and the University of Florida, and founded The Cabell Clinic to practice the kind of preventive, in-depth medicine he believes most people deserve.",
      },
      {
        question: "What is 'preventive and integrative cardiology'?",
        answer:
          "Preventive cardiology focuses on detecting and correcting cardiovascular and metabolic imbalances years before they become disease. Integrative cardiology adds the layers that traditional care often leaves out, the nervous system, environment, story, hormonal health, and lifestyle inputs, so the strategy is built around the whole person, not just one organ.",
      },
      {
        question: "How is your model different from a typical cardiology practice?",
        answer:
          "Conventional cardiology is organized around a single question: is something wrong? We are organized around a different one, what is this biology capable of, and what is standing in the way? That means unhurried appointments, more advanced diagnostics, longitudinal tracking, and time to think alongside you, instead of ten-minute visits twice a year.",
      },
      {
        question: "What is the 'Story, Structure, Signals, Sovereignty' framework?",
        answer: (
          <>
            <p className="mb-3">
              It's the simplest way to describe what we work on and why.
            </p>
            <ul className="space-y-2 pl-4 list-disc marker:text-gold">
              <li>
                <strong className="text-navy">Story</strong>, the lived
                experiences, patterns, and nervous-system architecture that
                shape your biology daily.
              </li>
              <li>
                <strong className="text-navy">Structure</strong>, the
                biomechanical, cardiovascular, and environmental foundations
                that determine how your body functions.
              </li>
              <li>
                <strong className="text-navy">Signals</strong>, what your
                chemistry, imaging, and biomarkers are telling us long before
                something becomes a diagnosis.
              </li>
              <li>
                <strong className="text-navy">Sovereignty</strong>, the
                destination: knowing your own biology well enough to trust it
                and lead it.
              </li>
            </ul>
          </>
        ),
      },
    ],
  },
  {
    eyebrow: "Section Two",
    title: "Is This Right for Me?",
    items: [
      {
        question: "Who is this practice for?",
        answer:
          "You've likely had standard workups come back 'normal,' but something still feels off, and you want a deeper level of investigation. You want to understand the why of your biology, not just follow instructions. You're taking the long view, investing in your health over years rather than weeks. And you're ready to engage actively, examine all the variables (sleep, environment, movement, stress), and partner with a physician who has the time and depth to think with you.",
      },
      {
        question: "Do you replace my primary care physician?",
        answer:
          "No. We are a specialty preventive and integrative practice. Most members keep an existing primary care doctor for routine acute care, prescriptions, and standard well visits. We coordinate with that physician where useful.",
      },
      {
        question: "What if I'm in an acute medical crisis?",
        answer:
          "Please call 911 or go to your nearest emergency room. We aren't equipped for urgent or emergent care, and acute situations need immediate attention from the appropriate provider. Once you're stable, we may be a strong fit for the work that comes next.",
      },
    ],
  },
  {
    eyebrow: "Section Three",
    title: "How Membership Works",
    items: [
      {
        question: "What is the discovery call?",
        answer:
          "A 15-minute phone or video conversation, no obligation. It's a chance for us to understand your starting point, for you to ask questions about the model, and for both sides to decide whether this is the right fit before any commitment.",
      },
      {
        question: "What is included in the membership?",
        answer:
          "Direct access to Dr. Cabell as a clinical partner (not through a portal or nurse line); ongoing care from your Health Integrator, who is your day-to-day point of contact; a multi-year diagnostic and longevity strategy built around your specific biology; coordinated access to a vetted network of specialists; and pricing transparency on labs, therapeutics, and supplements.",
      },
      {
        question: "What does the first year look like?",
        answer:
          "Year One is about understanding your biology and establishing a foundation. We complete advanced cardiovascular imaging and a comprehensive biological baseline, then work on the structural, environmental, and behavioral factors most medicine never assesses. By the end of year one, the data exists and the trajectory has changed. Years two and three deepen, refine, and personalize what we've built.",
      },
      {
        question: "How much time will I need to commit?",
        answer:
          "Roughly 2-4 hours per month of active engagement, appointments, coaching sessions, and your own daily practice. The model only works if you participate; passive delivery isn't what we do.",
      },
      {
        question:
          "How are tests, supplements, and therapeutics priced?",
        answer:
          "Where we can, testing, therapeutics, and supplements are offered very near the clinic's actual cost with minimal mark up. Some diagnostics and treatments are billed beyond the membership fee, but our financial interest is in your outcome, not in what you buy. In most practices, more prescriptions and procedures mean more revenue, a conflict of interest built into the model. Ours is built without it.",
      },
      {
        question: "Who else is on my care team?",
        answer:
          "Your core team includes Dr. Cabell, your Health Integrator (Alex Ford), and our Operations Manager (Kristy Wright). Around that core sits a vetted clinical network, partners in oral-systemic dentistry, integrative psychotherapy, hormone optimization, environmental medicine, and functional movement, coordinated by Dr. Cabell when their expertise is relevant.",
      },
    ],
  },
  {
    eyebrow: "Section Four",
    title: "Insurance, Payments & Logistics",
    items: [
      {
        question: "Are you in-network with insurance or Medicare?",
        answer:
          "The practice is Medicare-participatory and in-network with major plans, so plan resources can be used where appropriate. That said, most of what we do falls outside what insurance covers, and your membership is paid directly. When a situation makes plan resources useful, we'll utilize them and collect the required copays per plan terms.",
      },
      {
        question: "Can I use HSA or FSA funds?",
        answer:
          "Many members do. HSA, FSA, and certain employer executive-health benefits can often be applied toward membership and clinical services. We recommend confirming with your benefits administrator or tax advisor for your specific situation.",
      },
      {
        question: "Where are you located?",
        answer:
          "105 Continental Place, Suite 160, Brentwood, TN 37027. Members travel to us from across the greater Nashville area and the Southeast.",
      },
      {
        question: "How are appointments scheduled and conducted?",
        answer:
          "Coordination happens through secure channels with our team. Appointments can be scheduled directly, and visits take place in person or by secure video when appropriate. You have direct access to your physician, not a portal or a nurse line.",
      },
      {
        question: "Are all communications HIPAA-compliant?",
        answer:
          "Yes. All email, messaging, video calls, and document delivery happen through HIPAA-compliant platforms designed for medical practices.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-soft-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-4 block">
              Knowledge Is Power
            </span>
            <h1 className="font-heading text-display-lg text-navy mb-8">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Honest answers to the questions we hear most often, about the
              model, the membership, and whether we might be the right fit for
              you. If you don't see your question here, the{" "}
              <Link
                to="/contact"
                className="text-navy underline decoration-gold/40 underline-offset-4 hover:decoration-gold transition-colors"
              >
                discovery call
              </Link>{" "}
              is the right place to ask it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="pb-20 bg-soft-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto space-y-16">
            {categories.map((category, ci) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <header className="mb-8 pb-4 border-b border-warm-gray">
                  <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-2 block">
                    {category.eyebrow}
                  </span>
                  <h2 className="font-heading text-display-sm text-navy">
                    {category.title}
                  </h2>
                </header>

                <div className="space-y-3">
                  {category.items.map((item, idx) => (
                    <Collapsible
                      key={`${ci}-${idx}`}
                      className="border border-warm-gray rounded-sm"
                    >
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-5 md:p-6 text-left hover:bg-warm-gray/20 transition-colors group">
                        <span className="font-heading text-lg text-navy pr-4">
                          {item.question}
                        </span>
                        <div className="flex-shrink-0">
                          <Plus className="h-5 w-5 text-gold group-data-[state=open]:hidden" />
                          <Minus className="h-5 w-5 text-gold hidden group-data-[state=open]:block" />
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-5 md:px-6 pb-6">
                        <div className="text-muted-foreground leading-relaxed">
                          {typeof item.answer === "string" ? (
                            <p>{item.answer}</p>
                          ) : (
                            item.answer
                          )}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-warm-gray/20 border-t border-warm-gray/40">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-4 block">
              Still Have Questions?
            </span>
            <h2 className="font-heading text-display text-navy mb-6">
              The discovery call is the right place to ask
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              A brief conversation to understand your starting point and answer
              anything not covered here. No pressure, no obligation, just an
              honest exchange.
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
    </Layout>
  );
};

export default FAQ;
