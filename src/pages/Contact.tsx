import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Shield } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

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

    try {
      const res = await fetch(
        "https://mjcwnkilepatdwkzjnxh.supabase.co/functions/v1/send-contact-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            source: "Cabell Clinic website",
          }),
        }
      );

      const data = await res.json();

      if (res.ok && data.success === true) {
        toast({
          title: "Thanks — we received your message.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
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
      setIsSubmitting(false);
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
              Contact
            </span>
            <h1 className="font-heading text-display-lg text-navy mb-8">
              Begin the conversation
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We welcome inquiries from those seeking a more thoughtful approach 
              to their health. All communications are treated with discretion 
              and respect for your privacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-warm-gray/20">
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
                  Request an Invitation
                </h2>
                <p className="text-muted-foreground mb-8">
                  Share a bit about yourself and what you're seeking.
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
                      Phone (Optional)
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
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
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    Brentwood, Tennessee
                  </p>
                  <p className="text-sm text-muted-foreground/70">
                    Precise address provided upon scheduling.
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
                    "An introductory conversation with Dr. Cabell",
                    "Information about our approach and membership",
                    "No pressure, no obligation—just clarity",
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
      <section className="section-padding bg-soft-white">
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
