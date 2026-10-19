import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { submitInquiry } from "@/lib/submitInquiry";

type Props = {
  /** Tags the submission in the clinic inbox (and in any CRM later). */
  source: string;
  /** Where to send the visitor after a successful submission. */
  thankYouPath: string;
  idPrefix?: string;
};

const initialState = { name: "", email: "", phone: "", message: "" };

/**
 * The on-page intro-call form used by ad landing pages. Same backend and
 * validation as the Request an Invitation dialog; the only differences are
 * that it lives in the page (no dialog) and finishes on a thank-you page,
 * which is what Google Ads counts as a conversion.
 */
const IntroCallForm = ({ source, thankYouPath, idPrefix = "ic" }: Props) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const phoneDigits = form.phone.replace(/\D/g, "");
    if (phoneDigits.length !== 10) {
      toast({ title: "Please enter a valid 10-digit phone number.", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    const result = await submitInquiry({
      name: form.name,
      email: form.email,
      message: `Phone: ${form.phone}\n\n${form.message || "(no message — requested a 20 minute discovery call)"}`,
      source,
    });
    setSubmitting(false);
    if (result.ok) {
      setForm(initialState);
      navigate(thankYouPath);
    } else {
      toast({
        title: "Something went wrong sending your request.",
        description: "Please call or text us at (615) 237-8706 and we'll get right back to you.",
        variant: "destructive",
      });
    }
  };

  const field = "border-warm-gray focus:border-gold focus:ring-gold/20 h-12";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-name`} className="text-sm font-medium text-navy">Full Name</Label>
        <Input id={`${idPrefix}-name`} name="name" value={form.name} onChange={handleChange} required autoComplete="name" className={field} placeholder="Your name" />
      </div>
      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-phone`} className="text-sm font-medium text-navy">Phone</Label>
        <Input id={`${idPrefix}-phone`} name="phone" type="tel" value={form.phone} onChange={handleChange} required autoComplete="tel" className={field} placeholder="(555) 123-4567" />
      </div>
      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-email`} className="text-sm font-medium text-navy">Email</Label>
        <Input id={`${idPrefix}-email`} name="email" type="email" value={form.email} onChange={handleChange} required autoComplete="email" className={field} placeholder="your@email.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-message`} className="text-sm font-medium text-navy">
          Anything you'd like us to know? <span className="font-normal text-muted-foreground">(optional)</span>
        </Label>
        <Input id={`${idPrefix}-message`} name="message" value={form.message} onChange={handleChange} className={field} placeholder="What's bringing you to us?" />
      </div>
      <Button type="submit" variant="clinic-primary" size="xl" className="w-full" disabled={submitting}>
        {submitting ? "Sending..." : "Request a Call Back"}
      </Button>
      <p className="text-xs text-muted-foreground/70 text-center">
        Confidential. No pressure, no commitment. We'll reach out within one business day.
      </p>
    </form>
  );
};

export default IntroCallForm;
