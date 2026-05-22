import { motion } from "framer-motion";
import { ArrowRight, ImageOff } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import DiscoveryCallDialog from "@/components/DiscoveryCallDialog";

type TeamMember = {
  name: string;
  tagline?: string;
  image?: string;
  paragraphs: string[];
};

const team: TeamMember[] = [
  {
    name: "Alex Ford",
    tagline: "Health Integrator",
    paragraphs: [],
  },
  {
    name: "Kristy Wright",
    tagline: "Operations Manager",
    paragraphs: [],
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
                    </header>
                    {member.paragraphs.length > 0 ? (
                      <div className="space-y-5">
                        {member.paragraphs.map((p, i) => (
                          <p
                            key={i}
                            className="text-muted-foreground leading-relaxed"
                          >
                            {p}
                          </p>
                        ))}
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
