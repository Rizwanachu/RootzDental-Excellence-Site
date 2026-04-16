import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, MessageCircle } from "lucide-react";
import { CLINIC_NAME, CLINIC_TAGLINE, CLINIC_PHONE, CLINIC_PHONE_RAW, CLINIC_EMAIL, CLINIC_ADDRESS, CLINIC_HOURS, WHATSAPP_LINK } from "@/config";

export default function Footer() {
  const services = [
    { name: "Root Canal Treatment", href: "/services/root-canal-treatment" },
    { name: "Teeth Whitening", href: "/services/teeth-whitening" },
    { name: "Dental Implants", href: "/services/dental-implants" },
    { name: "Braces & Aligners", href: "/services/braces-aligners" },
    { name: "Teeth Cleaning", href: "/services/teeth-cleaning" },
  ];

  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "All Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-xl flex items-center justify-center text-xl font-bold">
                S
              </div>
              <span className="text-xl font-bold text-foreground tracking-tight">{CLINIC_NAME}</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {CLINIC_TAGLINE}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:opacity-90 transition-opacity" aria-label="WhatsApp" data-testid="footer-whatsapp">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{CLINIC_ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href={`tel:${CLINIC_PHONE_RAW}`} className="hover:text-primary transition-colors">
                  {CLINIC_PHONE}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href={`mailto:${CLINIC_EMAIL}`} className="hover:text-primary transition-colors">
                  {CLINIC_EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{CLINIC_HOURS}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} {CLINIC_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <span>&bull;</span>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
