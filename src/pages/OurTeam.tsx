import { motion } from "framer-motion";
import { ArrowRight, ImageOff } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import DiscoveryCallDialog from "@/components/DiscoveryCallDialog";

import alexFordImg from "@/assets/team/alex-ford.jpg";
import kristyWrightImg from "@/assets/team/kristy-wright.jpg";

type BioSection = {
  eyebrow?: string;
  heading?: string;
  paragraphs: string[];
};

type Credential = {
  title: string;
  details: string;
};

type TeamMember = {
  name: string;
  tagline?: string;
  hook?: string;
  /** Optional intro paragraphs that sit between the hook and the first section. */
  preface?: string[];
  image?: string;
  sections: BioSection[];
  credentials?: Credential[];
};

const team: TeamMember[] = [
  {
    name: "Alex Ford",
    tagline: "Co-Founder · Health Integrator",
    hook: "Health doesn't change until life does.",
    image: alexFordImg,
    sections: [
      {
        eyebrow: "My Story",
        heading: "Ten years. One question.",
        paragraphs: [
          "I came to health the way a lot of people do by needing to fix my own. As a former college athlete, I assumed I understood my body. But when my health started breaking down, I realized how little I actually knew about what was driving it, and what it would take to genuinely turn it around.",
          "That process changed everything. Once I found what worked for me, my first instinct was to help my family do the same. And then it kept spreading from there.",
          "Over the past decade, I've worked across the full spectrum of health support: as a personal trainer, a health coach, and a health advocate for families navigating complex, fragmented care. The clients and contexts changed, but the core challenge was always the same.",
          "Most people aren't lacking information. They have labs, physicians, specialists, wearables, and recommendations coming from every direction. What they're missing is someone who can take all of it, every data point, every opinion, every moving piece, and lay it against their actual life. Not a general protocol, but a plan built around this specific person, their specific circumstances, and the rhythm of life they're actually trying to live.",
          "To do that work well alongside a physician, I knew I needed more than practical experience. I pursued formal training in health coaching and completed a precision medicine curriculum that gave me the clinical fluency to work meaningfully with diagnostic data, and sit at the table with Dr. Cabell as a true partner in your care.",
          "At the end of the day, this work is about time. More of it, and better quality, with the people who matter most.",
        ],
      },
      {
        eyebrow: "What I Do Here",
        heading: "Integration, not just information.",
        paragraphs: [
          "I'm your primary point of contact between clinical visits. My job is to take Dr. Cabell's findings and translate them into a protocol that fits your actual life, then stay close as you implement it, tracking what's working and adjusting as things change.",
          "The goal isn't a perfect plan on paper. It's meaningful progress over years, and a relationship with your health that keeps getting stronger.",
        ],
      },
      {
        eyebrow: "Philosophy",
        heading: "A system builder, not just a coach.",
        paragraphs: [
          "Most health plans fail not because the science is wrong, but because they were never built around a real life. The right foods, the right exercise, the right labs. None of it holds if it doesn't fit how you actually live, what you value, and what you're trying to protect.",
          "My job is to build something that fits. To take everything we know about your body and hold it against everything I know about your life, and find the version of health that you can actually sustain. Not for ninety days. For the long run.",
        ],
      },
    ],
    credentials: [
      {
        title: "Primal Health Coach (PHC)",
        details: "Primal Health Coach Institute · Certified 2024",
      },
      {
        title: "Precision Medicine Training Program",
        details:
          "Wild Health · 85-hour curriculum in genomics, metabolic health, and personalized protocol design · 2023",
      },
    ],
  },
  {
    name: "Kristy Wright",
    tagline: "Operations Manager · Medical Assistant",
    hook: "The first face. The steady presence.",
    image: kristyWrightImg,
    preface: [
      "Most people are a little nervous the first time they come to a cardiologist. Kristy knows that. She was once on that side of it herself. Her goal from the moment you walk in is simple: make sure you never feel that way here.",
      "Patients have told her for years that coming to this office feels less like a doctor's visit and more like seeing people who actually know them. That's not by accident. It's what Kristy builds, one visit at a time.",
    ],
    sections: [
      {
        eyebrow: "Her Story",
        heading: "A caregiver from the beginning.",
        paragraphs: [
          "Kristy has been taking care of people her entire life. She started in pediatric critical care, spending nearly a decade at Vanderbilt Children's PICU, where she worked through emergency codes, supported families on the hardest days of their lives, and learned what it really means to be present for someone in a moment of fear.",
          "She came to Dr. Cabell's practice in 2012, and in the years since, she has seen his approach to medicine transform the lives of hundreds of patients. She experienced that transformation herself. When her own health was at a low point, Dr. Cabell's integrative approach gave her a path forward that conventional medicine hadn't. She recovered in ways she hadn't thought possible.",
          "That experience is why she shows up the way she does. She knows what it means to feel genuinely cared for, and she brings that into every interaction.",
        ],
      },
      {
        eyebrow: "What She Does Here",
        heading: "The person who keeps everything running.",
        paragraphs: [
          "When you come in for a visit, Kristy is your first point of contact. She handles vitals, reviews your history, goes over your medications, and makes sure Dr. Cabell has everything he needs before he walks in the room. She's also the one who follows up after, answers your calls, coordinates your labs and referrals, and stays close on anything that needs attention between visits.",
          "Some of Dr. Cabell's patients have been coming in for over a decade. Kristy knows them. She remembers what matters to them, what worries them, and what they need to hear. That continuity is something you can't manufacture, and it's one of the quiet reasons this practice feels different from the start.",
        ],
      },
    ],
    credentials: [
      {
        title: "Certified Clinical Medical Assistant (CCMA)",
        details: "Current certification · with Dr. Cabell since 2012",
      },
      {
        title: "BLS Certified",
        details: "Current certification",
      },
      {
        title: "Pediatric Advanced Life Support (PEARS)",
        details: "Vanderbilt Children's Hospital PICU · 9 years clinical experience",
      },
    ],
  },
];

const OurTeam = () => {
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
              The Core Team
            </span>
            <h1 className="font-heading text-display-lg text-navy mb-8">
              Our Team
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Alongside Dr. Cabell, a small core team works directly with every
              member, translating protocol into practice and keeping the clinic
              running with the same care we bring to the medicine.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team List */}
      <section className="pb-20 bg-soft-white">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto space-y-20">
            {team.map((member, index) => (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.05 }}
              >
                {index > 0 && (
                  <div className="w-16 h-[2px] bg-accent mb-20 -mt-12 mx-auto" />
                )}
                <div className="grid md:grid-cols-[260px_1fr] gap-8 md:gap-12">
                  {/* Photo column */}
                  <div className="flex-shrink-0">
                    <div className="aspect-[4/5] w-full max-w-[260px] overflow-hidden bg-warm-gray/30 rounded-sm">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground/60 p-6 text-center">
                          <ImageOff
                            className="w-8 h-8 mb-3 text-muted-foreground/40"
                            strokeWidth={1.25}
                          />
                          <span className="text-xs uppercase tracking-widest font-semibold">
                            Image
                          </span>
                          <span className="text-xs uppercase tracking-widest font-semibold">
                            coming soon
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content column */}
                  <div>
                    <header className="mb-6">
                      <h2 className="font-heading text-3xl md:text-4xl text-navy mb-3">
                        {member.name}
                      </h2>
                      {member.tagline && (
                        <p className="text-sm uppercase tracking-widest text-gold font-semibold">
                          {member.tagline}
                        </p>
                      )}
                      {member.hook && (
                        <p className="mt-5 font-heading text-xl md:text-2xl text-navy italic leading-snug">
                          {member.hook}
                        </p>
                      )}
                    </header>

                    {member.sections.length > 0 ? (
                      <div className="space-y-10">
                        {member.preface && member.preface.length > 0 && (
                          <div className="space-y-5">
                            {member.preface.map((p, pi) => (
                              <p
                                key={pi}
                                className="text-muted-foreground leading-relaxed"
                              >
                                {p}
                              </p>
                            ))}
                          </div>
                        )}
                        {member.sections.map((section, si) => (
                          <div key={si}>
                            {section.eyebrow && (
                              <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-2 block">
                                {section.eyebrow}
                              </span>
                            )}
                            {section.heading && (
                              <h3 className="font-heading text-xl md:text-2xl text-navy mb-4 leading-snug">
                                {section.heading}
                              </h3>
                            )}
                            <div className="space-y-5">
                              {section.paragraphs.map((p, pi) => (
                                <p
                                  key={pi}
                                  className="text-muted-foreground leading-relaxed"
                                >
                                  {p}
                                </p>
                              ))}
                            </div>
                          </div>
                        ))}

                        {member.credentials && member.credentials.length > 0 && (
                          <div className="pt-8 border-t border-warm-gray/60">
                            <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-5 block">
                              Training & Credentials
                            </span>
                            <ul className="space-y-4">
                              {member.credentials.map((c, ci) => (
                                <li key={ci}>
                                  <p className="font-heading text-lg text-navy">
                                    {c.title}
                                  </p>
                                  <p className="text-sm text-muted-foreground leading-relaxed">
                                    {c.details}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ) : (
                      <p className="text-sm uppercase tracking-widest text-muted-foreground/60 font-semibold">
                        Bio coming soon
                      </p>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-soft-white">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-4 block">
              Begin the Conversation
            </span>
            <h2 className="font-heading text-display text-navy mb-6">
              A team approach to your care
            </h2>
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

export default OurTeam;
