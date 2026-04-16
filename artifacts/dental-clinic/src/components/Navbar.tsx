import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CLINIC_NAME, CLINIC_PHONE, CLINIC_PHONE_RAW } from "@/config";

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-white py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          data-testid="nav-logo"
        >
          <img src="/logo.png" alt={`${CLINIC_NAME} logo`} className="h-12 w-auto object-contain" />
          <span className="text-xl font-bold text-foreground tracking-tight">{CLINIC_NAME}</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.href ? "text-primary" : "text-muted-foreground"
              }`}
              data-testid={`nav-link-${link.name.toLowerCase()}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href={`tel:${CLINIC_PHONE_RAW}`} data-testid="nav-book-btn">
            <Button className="gap-2 rounded-full px-6">
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-border/50 py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`block px-4 py-2 text-base font-medium rounded-lg ${
                location.pathname === link.href ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-border flex flex-col gap-3">
            <a
              href={`tel:${CLINIC_PHONE_RAW}`}
              className="flex items-center justify-center gap-2 text-base font-medium p-3 rounded-lg border border-border"
            >
              <Phone className="w-4 h-4" />
              {CLINIC_PHONE}
            </a>
            <a href={`tel:${CLINIC_PHONE_RAW}`} className="w-full">
              <Button className="w-full gap-2 rounded-lg py-6 text-base">
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
