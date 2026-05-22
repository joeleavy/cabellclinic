import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import DiscoveryCallDialog from "@/components/DiscoveryCallDialog";

type NavChild = { name: string; path: string };
type NavLink = { name: string; path: string; children?: NavChild[] };

const navLinks: NavLink[] = [
  { name: "Home", path: "/" },
  {
    name: "The Approach",
    path: "/approach",
    children: [
      { name: "Our Method", path: "/approach" },
      { name: "Our Team", path: "/team" },
      { name: "Experts at Large", path: "/experts" },
    ],
  },
  { name: "Meet Dr. Cabell", path: "/dr-cabell" },
  { name: "Resources", path: "/resources" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (link: NavLink) => {
    if (location.pathname === link.path) return true;
    if (link.children?.some((c) => c.path === location.pathname)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-soft-white/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-heading text-2xl md:text-3xl font-semibold text-navy tracking-tight">
              The Cabell Clinic
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={link.children ? "relative group" : ""}
            >
              {link.children ? (
                <>
                  <Link
                    to={link.path}
                    className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-300 ${
                      isActive(link)
                        ? "text-gold"
                        : "text-navy/80 hover:text-navy"
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
                      strokeWidth={2}
                    />
                  </Link>
                  {/* Dropdown */}
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible translate-y-1
                               group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                               group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0
                               transition-all duration-200 z-50"
                  >
                    <div className="bg-soft-white shadow-lg border border-warm-gray/60 rounded-sm overflow-hidden min-w-[200px] py-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block px-5 py-2.5 text-sm whitespace-nowrap transition-colors ${
                            location.pathname === child.path
                              ? "text-gold bg-warm-gray/30"
                              : "text-navy/80 hover:text-navy hover:bg-warm-gray/20"
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  to={link.path}
                  className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                    isActive(link)
                      ? "text-gold"
                      : "text-navy/80 hover:text-navy"
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <DiscoveryCallDialog>
              <Button variant="clinic-primary" size="lg">Request an Invitation</Button>
            </DiscoveryCallDialog>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden relative z-10 p-2 text-navy"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 top-0 bg-soft-white z-40 lg:hidden overflow-y-auto"
          >
            <nav className="flex flex-col items-center justify-center min-h-full gap-6 py-24">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  className="text-center"
                >
                  <Link
                    to={link.path}
                    className={`font-heading text-2xl transition-colors ${
                      isActive(link) ? "text-gold" : "text-navy"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.children && (
                    <div className="mt-3 flex flex-col gap-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`text-sm transition-colors ${
                            location.pathname === child.path
                              ? "text-gold"
                              : "text-navy/60 hover:text-navy"
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <DiscoveryCallDialog>
                  <Button variant="clinic-primary" size="xl">Request an Invitation</Button>
                </DiscoveryCallDialog>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
