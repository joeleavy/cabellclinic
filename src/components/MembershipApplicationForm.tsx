import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { submitInquiry } from "@/lib/submitInquiry";

type RadioQuestion = {
  id: string;
  label: string;
  options: { value: string; label: string }[];
};

const radioQuestions: RadioQuestion[] = [
  {
    id: "health_state",
    label: "Which best describes where you are with your health right now?",
    options: [
      { value: "optimize_long_term", label: "I feel good overall but want to optimize for the long term." },
      { value: "feels_off", label: "My workups come back normal, but something still feels off." },
      { value: "chronic_condition", label: "I have a chronic condition I want to address more deeply." },
    ],
  },
  {
    id: "time_horizon",
    label: "What time horizon are you thinking about?",
    options: [
      { value: "years", label: "Years. I'm investing in the long view." },
      { value: "months", label: "Months. I'd like meaningful change in 3 to 6 months." },
      { value: "weeks", label: "Weeks. I'm looking for something quicker." },
    ],
  },
  {
    id: "role_in_care",
    label: "What role do you want to play in your care?",
    options: [
      { value: "active", label: "I want to actively understand my biology and participate in decisions." },
      { value: "directed", label: "I'd prefer my doctor to direct, and I'll follow the plan." },
    ],
  },
  {
    id: "investment",
    label: "Membership is a premium investment. Where are you with that?",
    options: [
      { value: "ready", label: "It's a priority and I'm prepared to invest." },
      { value: "exploring", label: "I'm exploring whether the investment makes sense for me." },
      { value: "stretch", label: "The financial commitment would be a stretch right now." },
    ],
  },
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  motivation: string;
  notes: string;
} & Record<string, string>;

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  motivation: "",
  notes: "",
  health_state: "",
  time_horizon: "",
  role_in_care: "",
  investment: "",
};

type Props = {
  /**
   * If provided, called after a successful submission. When set, the form does NOT show
   * its internal success state — the parent is responsible for any post-submit UX
   * (e.g., closing a dialog and showing a toast).
   */
  onSuccess?: () => void;
  /** Compact mode reduces padding and spacing for use inside a dialog. */
  compact?: boolean;
};

const MembershipApplicationForm = ({ onSuccess, compact = false }: Props) => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>(initialState);

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    updateField(e.target.name, e.target.value);
  };

  const formatMessage = (): string => {
    const lines: string[] = ["=== Membership Application ===", ""];
    lines.push("What's bringing you to The Cabell Clinic right now?");
    lines.push(form.motivation || "(no response)");
    lines.push("");
    for (const q of radioQuestions) {
      lines.push(q.label);
      const selected = q.options.find((o) => o.value === form[q.id]);
      lines.push(selected ? selected.label : "(no response)");
      lines.push("");
    }
    lines.push("Anything specific you'd like Dr. Cabell to know before your discovery call?");
    lines.push(form.notes || "(no additional notes)");
    lines.push("");
    lines.push(`Phone: ${form.phone || "(not provided)"}`);
    return lines.join("\n");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const result = await submitInquiry({
      name: form.name,
      email: form.email,
      message: formatMessage(),
      source: "Membership application",
    });
    setSubmitting(false);

    if (result.ok) {
      setForm(initialState);
      if (onSuccess) {
        toast({
          title: "Application received.",
          description: "We'll be in touch within a few business days.",
        });
        onSuccess();
      } else {
        setSubmitted(true);
      }
    } else {
      toast({
        title: "Something went wrong sending your application.",
        description:
          "Please email us directly at info@thecabellclinic.com and we'll get right back to you.",
        variant: "destructive",
      });
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`bg-white ${compact ? "p-6" : "p-10 md:p-12"} shadow-sm text-center`}
      >
        <h2 className="font-heading text-3xl text-navy mb-4">
          Application received.
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Thank you for taking the time to share. We'll review your application and reach out within a few business days to schedule your discovery call.
        </p>
        <p className="text-sm text-muted-foreground/70 italic">
          — The Cabell Clinic team
        </p>
      </motion.div>
    );
  }

  const sectionGap = compact ? "space-y-7" : "space-y-10";
  const formPadding = compact ? "p-6" : "p-8 md:p-12";

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white ${formPadding} shadow-sm ${sectionGap}`}
    >
      {/* Motivation */}
      <div className="space-y-3">
        <Label
          htmlFor="motivation"
          className="font-heading text-lg text-navy block"
        >
          What's bringing you to The Cabell Clinic right now?
        </Label>
        <p className="text-xs text-muted-foreground/70">A few sentences are plenty.</p>
        <Textarea
          id="motivation"
          name="motivation"
          value={form.motivation}
          onChange={handleInputChange}
          rows={4}
          required
          className="border-warm-gray focus:border-gold focus:ring-gold/20 resize-none"
          placeholder="What prompted you to look into this kind of care?"
        />
      </div>

      {/* Radio Questions */}
      {radioQuestions.map((q) => (
        <div key={q.id} className="space-y-4">
          <Label className="font-heading text-lg text-navy block">{q.label}</Label>
          <RadioGroup
            value={form[q.id]}
            onValueChange={(value) => updateField(q.id, value)}
            required
            className="space-y-3"
          >
            {q.options.map((option) => (
              <div key={option.value} className="flex items-start gap-3">
                <RadioGroupItem
                  value={option.value}
                  id={`${q.id}-${option.value}`}
                  className="mt-1 border-warm-gray text-gold"
                />
                <Label
                  htmlFor={`${q.id}-${option.value}`}
                  className="text-base font-normal text-muted-foreground leading-relaxed cursor-pointer"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      ))}

      {/* Optional notes */}
      <div className="space-y-3">
        <Label htmlFor="notes" className="font-heading text-lg text-navy block">
          Anything specific you'd like Dr. Cabell to know before your discovery call?
        </Label>
        <p className="text-xs text-muted-foreground/70">Optional.</p>
        <Textarea
          id="notes"
          name="notes"
          value={form.notes}
          onChange={handleInputChange}
          rows={3}
          className="border-warm-gray focus:border-gold focus:ring-gold/20 resize-none"
          placeholder="A note about your context, a question you're wrestling with, or anything else you'd like us to know."
        />
      </div>

      {/* Contact details */}
      <div className="pt-6 border-t border-warm-gray space-y-6">
        <h3 className="font-heading text-xl text-navy">How to reach you</h3>
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-navy">
              Full Name
            </Label>
            <Input
              id="name"
              name="name"
              value={form.name}
              onChange={handleInputChange}
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
              value={form.email}
              onChange={handleInputChange}
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
            value={form.phone}
            onChange={handleInputChange}
            required
            className="border-warm-gray focus:border-gold focus:ring-gold/20 h-12"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <Button
        type="submit"
        variant="clinic-primary"
        size="xl"
        className="w-full"
        disabled={submitting}
      >
        {submitting ? "Submitting..." : "Submit Application"}
        {!submitting && <ArrowRight className="ml-2 h-4 w-4" />}
      </Button>

      <p className="text-xs text-muted-foreground/70 text-center">
        All information is confidential and reviewed only by the Cabell Clinic team.
      </p>
    </form>
  );
};

export default MembershipApplicationForm;
