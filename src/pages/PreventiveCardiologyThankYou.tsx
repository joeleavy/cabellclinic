import { useEffect } from "react";
import { Phone } from "lucide-react";
import { trackConversion } from "@/lib/googleTag";

// Conversion page for the Google Ads landing page: reached only after a
// successful form submission. Google Ads counts a visit here as a conversion.
// noindex (src/seo.ts).

const PreventiveCardiologyThankYou = () => {
  // Fires once per visit to this page. The label comes from the Google Ads
  // conversion action; until it is set the event still goes to the tag ID.
  useEffect(() => {
    trackConversion(import.meta.env.VITE_GOOGLE_ADS_CONVERSION_LABEL);
  }, []);

  return (
  <div className="min-h-screen flex flex-col bg-soft-white">
    <header className="border-b border-warm-gray/60">
      <div className="container-wide py-5">
        <span className="font-heading text-2xl text-navy">The Cabell Clinic</span>
      </div>
    </header>
    <main className="flex-1 flex items-center">
      <div className="container-narrow text-center py-20">
        <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-4 block">Request Received</span>
        <h1 className="font-heading text-display-lg text-navy mb-6">Thank you — we'll be in touch.</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto mb-10">
          If you picked a time, it's on the calendar — you'll get a confirmation email from Calendly with the details. If you asked us to reach out instead, a member of our team will contact you within one business day (check your spam folder for info@thecabellclinic.com).
        </p>
        <p className="text-muted-foreground mb-2">Prefer to talk now?</p>
        <a href="tel:+16152378706" className="inline-flex items-center gap-2 font-heading text-2xl text-navy hover:text-gold transition-colors">
          <Phone className="w-5 h-5 text-gold" strokeWidth={1.5} />
          (615) 237-8706
        </a>
        <div className="divider-gold mx-auto mt-12" />
      </div>
    </main>
  </div>
  );
};

export default PreventiveCardiologyThankYou;
