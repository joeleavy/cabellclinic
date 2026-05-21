import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, ImageOff } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import DiscoveryCallDialog from "@/components/DiscoveryCallDialog";

import oliviaLesslarImg from "@/assets/experts/olivia-lesslar.jpg";
import jenniferJudgeImg from "@/assets/experts/jennifer-judge.png";
import katelynKalsteinImg from "@/assets/experts/katelyn-kalstein.png";
import stephenHusseyImg from "@/assets/experts/stephen-hussey.jpg";
import elizabethYorkImg from "@/assets/experts/elizabeth-york.png";

type ExpertLink = {
  label: string;
  href: string;
};

type Expert = {
  name: string;
  tagline?: string;
  image?: string;
  paragraphs: string[];
  links?: ExpertLink[];
};

const experts: Expert[] = [
  {
    name: "Dr. Olivia Lesslar",
    tagline:
      "Psychoneuroimmunology, longevity, and complex-condition medicine",
    image: oliviaLesslarImg,
    paragraphs: [
      "Dr Olivia Ly Lesslar is an Australian medical doctor recognised internationally for her work in psychoneuroimmunology, longevity, and complex-condition medicine. With formal training in both Medicine and International Relations, she integrates neuroscience, immunology, and behavioural science with systems-level insight drawn from diplomacy and strategic studies.",
      "Often described as a “medical Sherlock Holmes,” Dr Lesslar is known for her analytical precision and ability to solve complex, multi-systemic medical puzzles. Her investigative approach combines rigorous science with creative reasoning, making her a sought-after consultant and advisor to clinics and companies addressing chronic, multifactorial, or elusive health conditions.",
      "In 2025, she completed a seven-city speaking tour across Australia and New Zealand presenting her original framework, The Nine Ancient Survival Threats, which explores the evolutionary and neurobiological roots of modern chronic disease. This framework reflects her broader philosophy: that health and disease are best understood through an integrated lens that unites biology, behaviour, and environment.",
      "Dr Lesslar is the Director of Functional and Longevity Medicine at Cingulum Health in Sydney, where she combines neuroplastic and transcranial magnetic stimulation therapies with functional medicine for neurological and psychiatric care. Internationally, she serves in senior and advisory roles across more than thirty organisations spanning biotechnology, neurotechnology, longevity, and wellness. Her affiliations include Human Regenerator (UK), L’evive Labs (Singapore), Atlus (Australia), Sens.ai (Canada), ANI Biome (Croatia), Avea (Switzerland), Oxford Healthspan (UK), and The Naked Pharmacy (UK). She is also a Director of the British College of Functional Medicine (UK).",
      "Dr Lesslar is a Health Span XPrize Team Member with the Space Aging Research Institute (USA) and ANI Biome (Croatia), and Vice President of the Women in Defence and Space Alliance (Finland). She holds academic appointments as Adjunct Senior Lecturer at Griffith University’s National Centre for Neuroimmunology and Emerging Diseases and as Faculty Lecturer at the Geneva College of Longevity Science.",
      "Through her teaching, clinical practice, and international collaborations, Dr Lesslar continues to advance patient-centred, innovative models of medicine that challenge convention and bridge the frontiers of science, technology, and human resilience.",
    ],
    links: [
      { label: "drolivialesslar.com", href: "https://www.drolivialesslar.com" },
      {
        label: "TEDx · Take Control of Your Lifestyle-Driven Disease",
        href: "https://www.youtube.com/results?search_query=Olivia+Lesslar+TEDx+Take+Control+of+Your+Lifestyle-Driven+Disease",
      },
      { label: "Instagram", href: "https://www.instagram.com/drolivialesslar" },
    ],
  },
  {
    name: "Dr. Jennifer Judge",
    tagline:
      "Oral-systemic dentistry · Salivary diagnostics & periodontal health",
    image: jenniferJudgeImg,
    paragraphs: [
      "With nearly two decades of clinical excellence, Dr. Jennifer Judge delivers an elevated dental experience defined by precision, personalization, and comprehensive health integration. Her approach extends far beyond traditional dentistry—centering on the vital connection between oral health and total body wellness.",
      "At the core of Dr. Judge’s philosophy is the understanding that the mouth is not separate from the body. Inflammation, microbial imbalance, and periodontal disease have well-established links to cardiovascular health, metabolic disorders, and systemic inflammatory conditions. Through advanced salivary diagnostics and risk-based assessment, she designs highly individualized care strategies rooted in each patient’s unique needs. This data-driven approach allows for early detection, proactive prevention, and exceptionally predictable long-term outcomes—alongside helping patients with their emergency needs.",
      "Comprehensive treatment planning is approached with longevity, function, and aesthetics as equal priorities. By integrating state-of-the-art diagnostic technologies and minimally invasive techniques, Dr. Judge ensures the highest level of accuracy and refined clinical results. Every detail is carefully curated to provide both exceptional performance and an elevated patient experience. Personalizing this to include what is of value and importance to the patient is a top priority. When a patient and a doctor find common goals for care, ideal outcomes are achieved.",
      "A defining feature of Dr. Judge’s practice is true interdisciplinary collaboration. Complex cases are managed in partnership with leading specialists in periodontics, oral surgery, endodontics, cardiology, and primary care medicine. This coordinated model of care bridges dentistry and medicine—creating seamless communication between dental and medical providers to optimize both oral and systemic outcomes. Patients benefit from an integrated approach where their overall health is considered at every stage of treatment.",
      "In addition to clinical practice, Dr. Judge serves as a Clinical-Based Clinical Educator (CBCE) Preceptor at the Lincoln Memorial University College of Dental Medicine, mentoring future dentists in comprehensive, evidence-based, and medically integrated care.",
      "Dr. Jennifer Judge is committed to delivering dentistry at the highest standard—where advanced science, thoughtful collaboration, and personalized attention converge to support lasting oral health and whole-body wellness.",
    ],
  },
  {
    name: "Dr. Katelyn Kalstein",
    tagline:
      "Integrative psychotherapy, ketamine-assisted therapy & naturopathic medicine",
    image: katelynKalsteinImg,
    paragraphs: [
      "Dr. Katelyn Kalstein is a licensed Naturopathic Doctor, acupuncturist, and psychotherapist with a background in primary care and integrative mental health. At Simply Being Therapy in Nashville, she offers integrative psychotherapy, ketamine-assisted psychotherapy, acupuncture, and naturopathic consultations.",
      "Formerly the Clinical Director of Field Trip Health in Los Angeles, Dr. Kalstein trained in ketamine therapy under Dr. Phil Wolfson and has over six years of clinical experience using ketamine as both a prescriber and therapeutic guide for depression, anxiety, substance use, and other mental health conditions.",
      "With more than 20 years of personal experience in meditation and psychedelics, she brings a deeply informed and ethical approach to her work. She holds a Certificate in Psychedelic Therapy and Research from CIIS and is currently training to become a MAPS therapist. Her practice blends Western science and Eastern traditions, reflecting her belief in the transformative potential of psychedelic medicine to foster healing, meaning, and lasting change.",
    ],
    links: [{ label: "drkalstein.com", href: "https://drkalstein.com" }],
  },
  {
    name: "Dr. Stephen Hussey",
    tagline: "Chiropractic & functional medicine · Light & environmental health",
    image: stephenHusseyImg,
    paragraphs: [
      "Dr. Stephen Hussey, MS, DC is a chiropractor and functional medicine practitioner. He attained both his Doctorate of Chiropractic and Masters in Human Nutrition and Functional Medicine from the University of Western States in Portland, OR. His story of personally healing heart disease using light and environmental health strategies has become an inspiration to many and a calling for change in healthcare.",
      "In addition to chiropractic clinical practice, Dr. Hussey is a health consultant, international speaker, and the author of three books on health: The Health Evolution, Understanding the Heart, and Pain Sense. Dr. Hussey guides clients from around the world back to health using the latest research and health-attaining strategies.",
    ],
    links: [
      { label: "resourceyourhealth.com", href: "https://resourceyourhealth.com" },
      { label: "Instagram", href: "https://www.instagram.com/drstephenhussey/" },
    ],
  },
  {
    name: "Elizabeth York, NP",
    tagline: "Bioidentical Hormone Replacement Therapy & functional medicine",
    image: elizabethYorkImg,
    paragraphs: [
      "Beth earned her MSN as an Acute Care Nurse Practitioner from Vanderbilt University and her Post-Masters as a Family Nurse Practitioner. She has spent the past 15 years treating patients from every walk of life, and the last 11 years specializing in Bioidentical Hormone Replacement Therapy (BHRT) after earning specialty certification in Advanced BHRT through Worldlink Medical. She is also an Evexias Certified Provider, having undergone that training, and utilizes EvexiPel BHRT Pellets in patients who prefer that method.",
      "Beth believes that true wellness requires a holistic approach that encompasses mind, body, and soul, and she approaches every patient as the unique human she believes God created them to be. She has had the privilege of working with Functional Medicine providers for the past 8 years and brings that knowledge to her role at Covenant Wellness TN. She is actively working toward earning Functional Medicine Certification through the American Academy of Anti-Aging.",
      "In her free time, Beth enjoys her three children and three dogs, gardening, lifting weights, hiking, traveling, medical podcasts, conferences and webinars, reading, Broadway musicals, and documentaries. She is thankful that God created her to be a lifelong learner. She is active in her church and church choir and hopes to travel again soon on mission trips with her church. Seeing the lives of people change in the smallest and largest of ways is what fuels her, and she counts it as a gift to work with others for a living.",
    ],
  },
];

const ExpertsAtLarge = () => {
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
              Our Network
            </span>
            <h1 className="font-heading text-display-lg text-navy mb-8">
              Experts at Large
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are incredibly fortunate to collaborate with a trusted network
              of exceptional healthcare professionals across multiple
              disciplines. These partners are not only leaders in their fields,
              but valued colleagues and friends who are readily available to
              consult on complex cases. Their expertise allows us to deliver
              truly comprehensive, personalized care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experts List */}
      <section className="pb-20 bg-soft-white">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto space-y-20">
            {experts.map((expert, index) => (
              <motion.article
                key={expert.name}
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
                      {expert.image ? (
                        <img
                          src={expert.image}
                          alt={expert.name}
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
                        {expert.name}
                      </h2>
                      {expert.tagline && (
                        <p className="text-sm uppercase tracking-widest text-gold font-semibold">
                          {expert.tagline}
                        </p>
                      )}
                    </header>
                    <div className="space-y-5">
                      {expert.paragraphs.map((p, i) => (
                        <p
                          key={i}
                          className="text-muted-foreground leading-relaxed"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                    {expert.links && expert.links.length > 0 && (
                      <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                        {expert.links.map((link) => (
                          <li key={link.href}>
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-gold transition-colors"
                            >
                              <span className="border-b border-navy/30 pb-0.5">
                                {link.label}
                              </span>
                              <ExternalLink
                                className="w-3.5 h-3.5"
                                strokeWidth={1.75}
                              />
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Disclosure */}
      <section className="py-12 bg-warm-gray/20 border-t border-warm-gray/40">
        <div className="container-narrow">
          <p className="text-sm text-muted-foreground/80 italic text-center leading-relaxed">
            Our collaborating professionals maintain independent practices.
            Referrals are made based on clinical judgment and patient needs,
            with no financial arrangements or obligations.
          </p>
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
              Care that draws on the right experts at the right time
            </h2>
            <DiscoveryCallDialog>
              <Button variant="clinic-primary" size="xl">
                Book a Discovery Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </DiscoveryCallDialog>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ExpertsAtLarge;
