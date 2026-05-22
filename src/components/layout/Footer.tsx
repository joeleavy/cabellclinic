import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "The Approach", path: "/approach" },
    { name: "Our Method", path: "/approach" },
    { name: "Our Team", path: "/team" },
    { name: "Experts at Large", path: "/experts" },
    { name: "Meet Dr. Cabell", path: "/dr-cabell" },
    { name: "Resources", path: "/resources" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-navy text-soft-white py-16 md:py-20">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-2xl font-semibold mb-4">
              The Cabell Clinic
            </h3>
            <p className="text-soft-white/70 font-body text-sm leading-relaxed max-w-sm">
              A membership-based Preventive & Integrative Cardiology practice in Brentwood, Tennessee.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold mb-6 font-semibold">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm text-soft-white/70 hover:text-soft-white transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold mb-6 font-semibold">
              Location
            </h4>
            <address className="not-italic text-sm text-soft-white/70 leading-relaxed">
              105 Continental Place, Suite 160
              <br />
              Brentwood, TN 37027
              <br />
              <span className="text-soft-white/50 text-xs">
                By appointment only
              </span>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-soft-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-soft-white/50">
              © {currentYear} The Cabell Clinic. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/privacy"
                className="text-xs text-soft-white/50 hover:text-soft-white/70 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-xs text-soft-white/50 hover:text-soft-white/70 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
