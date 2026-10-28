import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, BookOpen, Lightbulb, Play, Download, ChevronDown } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/ui/SectionHeader";

// The newsletter signup section that used to live at the bottom of this page
// was removed 2026-09-10 — there is no newsletter yet. The submission piping
// (submitInquiry -> contact-email Worker) is untouched and still serves the
// other forms. To turn the signup back on, restore this file's form section,
// handler, and imports from commit 701de54:
//   git show 701de54:src/pages/Resources.tsx

const Resources = () => {
  const videos = [
    {
      id: "XnG-uUqgms4",
      title: "Quantum Biology & Circadian Health",
      description:
        "Dr. Cabell shares how light, circadian rhythm, and cold therapy transformed his understanding of health optimization and helped heal his own autoimmune condition.",
    },
    {
      id: "XW5SgXjZhEU",
      title: "Healing Through Connection",
      description:
        "A conversation exploring how the body and soul are intertwined, and why true health includes emotional honesty, rest, and meaningful relationship.",
    },
    {
      id: "1aZdRKP83wQ",
      title: "Epigenetics, Heart Health & Emotional Wellbeing",
      description:
        "A conference talk on overcoming trauma, toxic stress, and disease through understanding the deep connection between emotional and cardiovascular health.",
    },
  ];

  // Downloadable guides. Files live in public/guides/ and are served as-is.
  const guides = [
    {
      title: "Metabolic Winter",
      series: "Structure Series · Seasonal Guide",
      description:
        "Why your body is built for a real winter, and how your plan shifts as the days get shorter. Covers the signals that tell your body the season, what changes in light, sleep, eating window, and temperature, how carbs follow the light, setting up a dark evening and bedroom, the November 1 clock change, and a sample December day.",
      pages: 9,
      href: "/guides/metabolic-winter.pdf",
      cover: "/guides/metabolic-winter-cover.jpg",
    },
  ];

  // The Guides card at the bottom opens the guide list in place. /resources#guides
  // opens it on arrival so the list can be linked to directly.
  const [guidesOpen, setGuidesOpen] = useState(
    () => typeof window !== "undefined" && window.location.hash === "#guides",
  );

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-soft-white">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-4 block">
              Resources
            </span>
            <h1 className="font-heading text-display-lg text-navy mb-8">
              Insights & education
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Thoughtful perspectives on cardiovascular health, longevity science, 
              and the art of practicing medicine. Dr. Cabell shares his thinking 
              for those seeking deeper understanding.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 bg-warm-gray/20">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12"
          >
            <div className="w-16 h-16 border border-gold/30 rounded-full flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-7 h-7 text-gold" strokeWidth={1.5} />
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-2xl">
              This space is dedicated to education, not marketing. Here you'll find 
              talks, articles, essays, and guides that reflect Dr. Cabell's approach to 
              understanding health: evidence-based, nuanced, and designed to 
              empower informed decision-making.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding bg-soft-white">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Featured Talks"
            title="Dr. Cabell on health & healing"
            description="Watch Dr. Cabell discuss his approach to medicine, longevity, and the mind-body connection."
            className="mb-12"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white shadow-sm card-elevated overflow-hidden"
              >
                <div className="aspect-video relative">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Play className="w-4 h-4 text-gold" strokeWidth={1.5} />
                    <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                      Video
                    </span>
                  </div>
                  <h3 className="font-heading text-lg text-navy mb-3">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section id="guides" className="section-padding bg-warm-gray/20 scroll-mt-24">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Library"
            title="Articles, essays & guides"
            description="Guides are available now. We're still gathering the most helpful articles and essays to share with you."
            className="mb-12"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Articles",
                description:
                  "In-depth explorations of specific health topics, research findings, and clinical insights.",
                status: "Coming Soon",
              },
              {
                icon: BookOpen,
                title: "Essays",
                description:
                  "Reflections on medicine, patient care, and the philosophy behind our approach.",
                status: "Coming Soon",
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/60 p-8 shadow-sm card-elevated text-center"
              >
                <div className="w-14 h-14 border border-gold/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <category.icon className="w-6 h-6 text-gold/60" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-xl text-navy/70 mb-3">
                  {category.title}
                </h3>
                <p className="text-muted-foreground/80 text-sm leading-relaxed mb-4">
                  {category.description}
                </p>
                <span className="text-xs uppercase tracking-widest text-gold/60 font-medium">
                  {category.status}
                </span>
              </motion.div>
            ))}

            {/* Guides: live, click to open the list below */}
            <motion.button
              type="button"
              onClick={() => setGuidesOpen((open) => !open)}
              aria-expanded={guidesOpen}
              aria-controls="guide-list"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`bg-white p-8 shadow-sm card-elevated text-center border transition-colors ${
                guidesOpen ? "border-gold" : "border-transparent hover:border-gold/40"
              }`}
            >
              <div className="w-14 h-14 border border-gold/60 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-6 h-6 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-xl text-navy mb-3">Guides</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Practical frameworks for understanding and acting on health information.
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-gold font-semibold">
                {guidesOpen ? "Hide guides" : `View ${guides.length === 1 ? "guide" : "guides"}`}
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${guidesOpen ? "rotate-180" : ""}`}
                  strokeWidth={1.5}
                />
              </span>
            </motion.button>
          </div>

          <AnimatePresence initial={false}>
            {guidesOpen && (
              <motion.div
                id="guide-list"
                key="guide-list"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="pt-12 grid gap-8">
                  {guides.map((guide) => (
                    <article
                      key={guide.href}
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
                        <h3 className="font-heading text-2xl text-navy mb-4">
                          {guide.title}
                        </h3>
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
                    </article>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

    </Layout>
  );
};

export default Resources;
