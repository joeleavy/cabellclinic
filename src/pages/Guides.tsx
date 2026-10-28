import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, FileText } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { GUIDES } from "@/lib/guides";

// /resources/guides: the guide library. Reached from the Guides card on
// /resources. The list itself lives in src/lib/guides.ts.

const Guides = () => {
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
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-navy transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
              Resources
            </Link>
            <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-4 block">
              Guides
            </span>
            <h1 className="font-heading text-display-lg text-navy mb-8">
              Practical guides from the clinic
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Frameworks for understanding and acting on health information,
              written for the people we care for and shared here for anyone who
              finds them useful. Each one opens as a PDF you can read, save, or
              print.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guide list */}
      <section className="section-padding bg-warm-gray/20">
        <div className="container-wide">
          <div className="grid gap-8">
            {GUIDES.map((guide, index) => (
              <motion.article
                key={guide.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white shadow-sm card-elevated overflow-hidden grid md:grid-cols-[260px_1fr]"
              >
                <a
                  href={guide.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-warm-gray/30 border-b md:border-b-0 md:border-r border-gold/20"
                  aria-label={`Open ${guide.title} (PDF)`}
                >
                  <img
                    src={guide.cover}
                    alt={`First page of the ${guide.title} guide`}
                    width={695}
                    height={900}
                    loading="lazy"
                    className="w-full h-full object-cover object-top max-h-80 md:max-h-none"
                  />
                </a>
                <div className="p-8 md:p-10 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="w-4 h-4 text-gold" strokeWidth={1.5} />
                    <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                      {guide.series}
                    </span>
                  </div>
                  <h2 className="font-heading text-2xl text-navy mb-4">
                    {guide.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {guide.description}
                  </p>
                  <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3">
                    <a
                      href={guide.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-semibold text-navy accent-underline"
                    >
                      <Download className="w-4 h-4 text-gold" strokeWidth={1.5} />
                      Read the guide
                    </a>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">
                      PDF · {guide.pages} pages
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <p className="mt-12 text-sm text-muted-foreground">
            More guides will be added here over time. Questions about anything
            you read? Bring them to your next visit, or{" "}
            <Link to="/contact" className="underline hover:text-navy">
              get in touch
            </Link>
            .
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Guides;
