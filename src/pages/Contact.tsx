import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Clock, Shield, ArrowRight } from "lucide-react";
import DiscoveryCallDialog from "@/components/DiscoveryCallDialog";
import SelfAssessmentDialog from "@/components/SelfAssessmentDialog";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { submitInquiry } from "@/lib/submitInquiry";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const result = await submitInquiry({
      name: formData.name,
      email: formData.email,
      message: formData.message,
      source: "Cabell Clinic website",
    });
    setIsSubmitting(false);

    if (result.ok) {
      toast({
        title: "Thanks, we received your message.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      toast({
        title: "Something went wrong sending your message.",
        description:
          "Please email us directly at info@thecabellclinic.com and we'll get right back to you.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Two Paths */}
      <section className="pt-32 pb-16 bg-soft-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Path 1: Ready */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-navy text-soft-white p-8 md:p-10 flex flex-col"
            >
              <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-3 block">
                If you're ready
              </span>
              <h3 className="font-heading text-2xl md:text-3xl mb-4">
                Request an Invitation
              </h3>
              <p className="text-soft-white/75 leading-relaxed mb-8 flex-grow">
                If you've read enough and feel ready to move forward, complete a short application and we'll be in touch within a few business days to schedule your fifteen-minute discovery call with Dr. Cabell.
              </p>
              <DiscoveryCallDialog>
                <Button
                  variant="clinic-gold-outline"
                  size="xl"
                  className="self-start"
                >
                  Request an Invitation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </DiscoveryCallDialog>
            </motion.div>

            {/* Path 2: Curious */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white border border-warm-gray p-8 md:p-10 flex flex-col"
            >
              <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-3 block">
                If you're still deciding
              </span>
              <h3 className="font-heading text-2xl md:text-3xl text-navy mb-4">
                See if we're a fit
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                Read our honest self-assessment and answer a short questionnaire. About five minutes. No pressure, no obligation, just a clear picture for both of us before any conversation.
              </p>
              <SelfAssessmentDialog>
                <Button
                  variant="clinic-outline"
                  size="xl"
                  className="self-start"
                >
                  Take the Self-Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </SelfAssessmentDialog>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="pt-4 pb-20 md:pb-24 bg-warm-gray/20">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-white p-10 md:p-12 shadow-sm">
                <h2 className="font-heading text-display-sm text-navy mb-2">
                  Have a question?
                </h2>
                <p className="text-muted-foreground mb-8">
                  For general inquiries that don't need a full application. We'll get back to you within a few business days.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-navy">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-warm-gray focus:border-gold focus:ring-gold/20 h-12"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-navy">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-warm-gray focus:border-gold focus:ring-gold/20 h-12"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-navy">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="border-warm-gray focus:border-gold focus:ring-gold/20 h-12"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-navy">
                      How can we help?
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="border-warm-gray focus:border-gold focus:ring-gold/20 resize-none"
                      placeholder="Tell us about your health goals and what you're seeking in a physician..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="clinic-primary"
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Submit Inquiry"}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-10"
            >
              {/* Location */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-xl text-navy">Location</h3>
                </div>
                <div className="pl-[52px]">
                  <p className="text-muted-foreground leading-relaxed">
                    105 Continental Place, Suite 160
                    <br />
                    Brentwood, TN 37027
                  </p>
                </div>
              </div>

              {/* Availability */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-xl text-navy">Availability</h3>
                </div>
                <div className="pl-[52px]">
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    By appointment only
                  </p>
                  <p className="text-sm text-muted-foreground/70">
                    We respond to all inquiries within 48 hours.
                  </p>
                </div>
              </div>

              {/* Discretion */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-xl text-navy">Discretion</h3>
                </div>
                <div className="pl-[52px]">
                  <p className="text-muted-foreground leading-relaxed">
                    Your privacy is paramount. All communications are confidential, 
                    and we maintain strict protocols to protect your information.
                  </p>
                </div>
              </div>

              {/* Additional Note */}
              <div className="bg-white p-8 shadow-sm mt-8">
                <h4 className="font-heading text-lg text-navy mb-4">
                  What to expect
                </h4>
                <ul className="space-y-3">
                  {[
                    "A brief follow-up to understand your needs",
                    "An introductory conversation with our team",
                    "Information about our approach and membership",
                    "No pressure, no obligation, just clarity",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map placeholder / closing thought */}
      <section className="section-padding bg-warm-gray/20">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-heading text-display-sm text-navy mb-6">
              We look forward to hearing from you
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Every meaningful relationship begins with a conversation. 
              We're here when you're ready.
            </p>
            <div className="divider-gold mx-auto mt-10" />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
