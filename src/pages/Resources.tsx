import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, BookOpen, Lightbulb, Play } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SectionHeader from "@/components/ui/SectionHeader";
import { useToast } from "@/hooks/use-toast";

const Resources = () => {
  const { toast } = useToast();
  const [signupSubmitting, setSignupSubmitting] = useState(false);
  const [signupData, setSignupData] = useState({ name: "", email: "" });

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSignupSubmitting(true);
    try {
      const res = await fetch(
        "https://mjcwnkilepatdwkzjnxh.supabase.co/functions/v1/send-contact-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: signupData.name,
            email: signupData.email,
            message: "Newsletter signup — please add me to the list and reach out with new resources.",
            source: "Newsletter signup",
          }),
        }
      );
      const data = await res.json();
      if (res.ok && data.success === true) {
        toast({ title: "Thanks, you're on the list." });
        setSignupData({ name: "", email: "" });
      } else {
        toast({
          title: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSignupSubmitting(false);
    }
  };

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
                    src={`https://www.youtube.com/embed/${video.id}`}
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

      {/* Resource Categories - Coming Soon */}
      <section className="section-padding bg-warm-gray/20">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Coming Soon"
            title="More resources on the way"
            description="We're currently gathering the most helpful articles, essays, and guides to share with you. Check back soon."
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
              {
                icon: Lightbulb,
                title: "Guides",
                description:
                  "Practical frameworks for understanding and acting on health information.",
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
          </div>
        </div>
      </section>

      {/* Newsletter / Stay Updated */}
      <section className="section-padding bg-soft-white">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-4 block">
              Stay Informed
            </span>
            <h2 className="font-heading text-display text-navy mb-6">
              Receive new insights directly
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Share your name and email and we'll reach out from time to time with new resources, talks, and clinic updates. Low frequency. No noise.
            </p>

            <form
              onSubmit={handleSignupSubmit}
              className="max-w-xl mx-auto bg-white p-8 md:p-10 shadow-sm text-left"
            >
              <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <div className="space-y-2">
                  <Label htmlFor="signup-name" className="text-sm font-medium text-navy">
                    Full Name
                  </Label>
                  <Input
                    id="signup-name"
                    name="name"
                    value={signupData.name}
                    onChange={handleSignupChange}
                    required
                    className="border-warm-gray focus:border-gold focus:ring-gold/20 h-12"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email" className="text-sm font-medium text-navy">
                    Email
                  </Label>
                  <Input
                    id="signup-email"
                    name="email"
                    type="email"
                    value={signupData.email}
                    onChange={handleSignupChange}
                    required
                    className="border-warm-gray focus:border-gold focus:ring-gold/20 h-12"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <Button
                type="submit"
                variant="clinic-primary"
                size="xl"
                className="w-full"
                disabled={signupSubmitting}
              >
                {signupSubmitting ? "Signing up..." : "Sign Up"}
              </Button>
              <p className="text-xs text-muted-foreground/70 mt-4 text-center">
                We'll never share your information. Unsubscribe anytime.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
