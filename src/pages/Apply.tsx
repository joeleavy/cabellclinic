import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import MembershipApplicationForm from "@/components/MembershipApplicationForm";

const Apply = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-28 pb-10 bg-soft-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-4 block">
              Begin the Application
            </span>
            <h1 className="font-heading text-display-lg text-navy mb-6">
              A short, honest conversation
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We accept a limited number of new members each year. This short application helps us understand whether we'd be the right fit for you, and gives Dr. Cabell context before your discovery call.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Emergency disclaimer */}
      <section className="pb-6 bg-soft-white">
        <div className="container-wide max-w-3xl">
          <div className="flex gap-4 p-5 border-l-4 border-gold bg-warm-gray/30">
            <AlertTriangle
              className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
              strokeWidth={1.75}
            />
            <p className="text-sm text-navy/85 leading-relaxed">
              <strong className="text-navy">If you are experiencing a medical emergency,</strong> please call 911 or go to the nearest emergency room.
            </p>
          </div>
        </div>
      </section>

      {/* Right Fit Self-Assessment */}
      <section className="py-16 bg-soft-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-12"
          >
            <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-4 block">
              Honest Self-Assessment
            </span>
            <h2 className="font-heading text-display-sm md:text-display text-navy mb-5">
              Is this the right fit?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Before you fill anything out, read both columns honestly. This model works for a specific kind of person, not defined by what they've achieved, but by how they approach their health. There is no wrong answer; this is simply about fit.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Strong Fit */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-navy p-8 md:p-10 text-soft-white"
            >
              <h3 className="font-heading text-xl mb-6 text-gold uppercase tracking-widest">
                This tends to be a strong fit if…
              </h3>
              <ul className="space-y-4">
                {[
                  "You've had workups that came back \"normal\", but something still feels off, and you want a deeper level of investigation.",
                  "You want to understand your biology, not just follow instructions. You want to know why, not just what to do.",
                  "You're willing to examine all the variables, sleep, environment, movement, stress, mindset, as a connected system rather than separate problems.",
                  "You want a physician who has the time and depth to think alongside you, not just see you for ten minutes twice a year.",
                  "You take a long view. You're investing in your biology over years, not looking for a quick fix or a single answer.",
                  "You see this as one of the most important investments you can make, in time, attention, and financially, and you're ready to engage with it accordingly.",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-gold mt-1.5 flex-shrink-0">◆</span>
                    <span className="text-soft-white/85 leading-relaxed text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Not a Fit */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-warm-gray/30 p-8 md:p-10 border border-warm-gray"
            >
              <h3 className="font-heading text-xl mb-6 text-muted-foreground uppercase tracking-widest">
                This is likely not the right fit if…
              </h3>
              <ul className="space-y-4">
                {[
                  "You're looking for a physician to manage medications and check boxes. We are not a replacement for a primary care physician.",
                  "You want to hand this off and receive a plan to execute passively. Active engagement is the model. It requires your genuine participation.",
                  "You're not open to examining the psychological, environmental, or lifestyle variables that may be quietly working against you.",
                  "You're expecting measurable transformation in weeks. The foundation we build takes months, and the most powerful results compound over years.",
                  "The financial commitment of a premium membership isn't one you're positioned to make comfortably right now.",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-muted-foreground/50 mt-1.5 flex-shrink-0">·</span>
                    <span className="text-muted-foreground leading-relaxed text-sm italic">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-3xl mx-auto mt-12 text-center"
          >
            <p className="text-muted-foreground italic leading-relaxed">
              We accept a limited number of new members each year. This is intentional. <span className="text-navy not-italic">Depth of care requires time, and time is one resource we won't compromise on.</span> If the left column resonates, please continue below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="pb-24 bg-soft-white">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <MembershipApplicationForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Apply;
