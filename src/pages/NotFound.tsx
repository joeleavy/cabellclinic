import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

// Served as dist/404.html with a real 404 status for any unknown URL.

const NotFound = () => (
  <Layout>
    <section className="pt-32 pb-24 bg-soft-white">
      <div className="container-narrow text-center">
        <span className="text-xs uppercase tracking-widest text-gold font-semibold mb-4 block">
          Page Not Found
        </span>
        <h1 className="font-heading text-display-lg text-navy mb-6">
          We couldn't find that page
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto mb-10">
          The link may be out of date, or the address may have been typed
          incorrectly. You can head back to the homepage, or reach us directly
          and we'll point you in the right direction.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="clinic-primary" size="xl">
            <Link to="/">
              Back to Home
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="clinic-outline" size="xl">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default NotFound;
