import { useState, ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CONTACT_EMAIL_FUNCTION_URL } from "@/integrations/supabase/client";

type Props = {
  children: ReactNode;
};

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const DiscoveryCallDialog = ({ children }: Props) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState(initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const phoneDigits = form.phone.replace(/\D/g, "");
    if (phoneDigits.length !== 10) {
      toast({
        title: "Please enter a valid 10-digit phone number.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(
        CONTACT_EMAIL_FUNCTION_URL,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: `Phone: ${form.phone}\n\n${form.message}`,
            source: "Invitation request",
          }),
        }
      );
      const data = await res.json();
      if (res.ok && data.success === true) {
        toast({
          title: "Thanks, we received your inquiry.",
          description:
            "You'll hear from us by email (info@thecabellclinic.com) within one business day. If you don't see it, please check your spam folder.",
        });
        setForm(initialState);
        setOpen(false);
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
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl md:text-3xl text-navy">
            Request an Invitation
          </DialogTitle>
          <DialogDescription className="text-muted-foreground leading-relaxed pt-1">
            Share a bit about yourself and what you're seeking.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 pt-2">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="ri-name" className="text-sm font-medium text-navy">
                Full Name
              </Label>
              <Input
                id="ri-name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="border-warm-gray focus:border-gold focus:ring-gold/20 h-11"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ri-email" className="text-sm font-medium text-navy">
                Email
              </Label>
              <Input
                id="ri-email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="border-warm-gray focus:border-gold focus:ring-gold/20 h-11"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="ri-phone" className="text-sm font-medium text-navy">
              Phone
            </Label>
            <Input
              id="ri-phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              required
              className="border-warm-gray focus:border-gold focus:ring-gold/20 h-11"
              placeholder="(555) 123-4567"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="ri-message" className="text-sm font-medium text-navy">
              How can we help?
            </Label>
            <Textarea
              id="ri-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              required
              className="border-warm-gray focus:border-gold focus:ring-gold/20 resize-none"
              placeholder="Tell us about your health goals and what you're seeking in a physician..."
            />
          </div>

          <Button
            type="submit"
            variant="clinic-primary"
            size="xl"
            className="w-full"
            disabled={submitting}
          >
            {submitting ? "Sending..." : "Submit Inquiry"}
          </Button>

          <p className="text-xs text-muted-foreground/70 text-center pt-1">
            Confidential. We'll be in touch within a few business days.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DiscoveryCallDialog;
