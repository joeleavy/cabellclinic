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
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

type Props = {
  children: ReactNode;
};

const initialState = {
  name: "",
  email: "",
  phone: "",
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
    setSubmitting(true);
    try {
      const message = [
        "=== Discovery Call Request ===",
        "",
        `Phone: ${form.phone || "(not provided)"}`,
      ].join("\n");

      const res = await fetch(
        "https://mjcwnkilepatdwkzjnxh.supabase.co/functions/v1/send-contact-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message,
            source: "Discovery call request",
          }),
        }
      );
      const data = await res.json();
      if (res.ok && data.success === true) {
        toast({
          title: "Request received.",
          description: "We'll be in touch within a few business days to schedule your call.",
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
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl text-navy">
            Book a Discovery Call
          </DialogTitle>
          <DialogDescription className="text-muted-foreground leading-relaxed pt-1">
            A fifteen-minute conversation with a member of our team. Share your details and we'll be in touch within a few business days to schedule.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div className="space-y-2">
            <Label htmlFor="dc-name" className="text-sm font-medium text-navy">
              Full Name
            </Label>
            <Input
              id="dc-name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="border-warm-gray focus:border-gold focus:ring-gold/20 h-11"
              placeholder="Your name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dc-email" className="text-sm font-medium text-navy">
              Email
            </Label>
            <Input
              id="dc-email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="border-warm-gray focus:border-gold focus:ring-gold/20 h-11"
              placeholder="your@email.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dc-phone" className="text-sm font-medium text-navy">
              Phone
            </Label>
            <Input
              id="dc-phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              required
              className="border-warm-gray focus:border-gold focus:ring-gold/20 h-11"
              placeholder="(555) 123-4567"
            />
          </div>

          <Button
            type="submit"
            variant="clinic-primary"
            size="xl"
            className="w-full"
            disabled={submitting}
          >
            {submitting ? "Sending..." : "Request Discovery Call"}
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
