import { useEffect } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Layout from "@/components/layout/Layout";

// Unlisted page — reachable only by direct link. Not in any nav menu, and
// the meta tag below asks search engines not to index it.

const videos = [
  {
    id: "IfTgyqwC9UA",
    title: "What is Nuropod",
    description:
      "An introduction to the Nuropod earpiece and the thinking behind it.",
  },
  {
    id: "v9KZFnP4Bu4",
    title: "How To Wear the Nuropod Earpiece",
    description:
      "Correct placement of the earpiece, so each session works the way it should.",
  },
  {
    id: "VJn5jzUNatM",
    title: "How To Use Nuropod",
    description:
      "A step-by-step walkthrough of using the device day to day.",
  },
];

const Nuropod = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Nuropod | The Cabell Clinic";
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => {
      document.title = previousTitle;
      document.head.removeChild(meta);
    };
  }, []);

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
              For Our Members
            </span>
            <h1 className="font-heading text-display-lg text-navy mb-8">
              Getting started with Nuropod
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Dr. Cabell has gathered these short videos to introduce the
              Nuropod earpiece — what it is, how to wear it, and how to use it.
              If you have any questions, we're always happy to talk them
              through.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Videos */}
      <section className="pb-20 md:pb-24 bg-soft-white">
        <div className="container-wide">
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

          <p className="text-sm text-muted-foreground/70 mt-12 max-w-2xl">
            Questions about Nuropod or whether it's right for you? Call or text
            us at{" "}
            <a href="tel:+16152378706" className="underline hover:text-navy">
              (615) 237-8706
            </a>{" "}
            or email{" "}
            <a
              href="mailto:info@thecabellclinic.com"
              className="underline hover:text-navy"
            >
              info@thecabellclinic.com
            </a>
            .
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Nuropod;
