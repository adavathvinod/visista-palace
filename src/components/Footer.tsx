import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-onyx border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Logo size="md" />
            <p className="font-body text-muted-foreground mt-4 text-sm leading-relaxed">
              Hyderabad's trusted jeweller since 1999. Where tradition meets 
              timeless elegance in every piece.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Collections", path: "/collections" },
                { name: "Gold Schemes", path: "/schemes" },
                { name: "Gold Loan", path: "/gold-loan" },
                { name: "Book Appointment", path: "/booking" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-1 flex-shrink-0" />
                <span className="font-body text-sm text-muted-foreground">
                  Pillar No. 1616, Opp. Chennai Shopping Mall,<br />
                  Kothapet, Hyderabad - 500035
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold flex-shrink-0" />
                <a href="tel:+919876543210" className="font-sans text-sm text-muted-foreground hover:text-gold transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <a href="mailto:info@visistagold.com" className="font-sans text-sm text-muted-foreground hover:text-gold transition-colors">
                  info@visistagold.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-gold flex-shrink-0" />
                <span className="font-sans text-sm text-muted-foreground">
                  10:30 AM - 8:30 PM (All Days)
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-6">Stay Updated</h4>
            <p className="font-body text-sm text-muted-foreground mb-4">
              Subscribe for exclusive offers and new collection updates.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 bg-secondary border border-border rounded-md text-sm font-sans focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-3 bg-gold-gradient text-onyx font-sans font-medium text-sm rounded-md hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-muted-foreground">
            © 2024 Visista Gold & Diamonds. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="font-sans text-xs text-muted-foreground hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="font-sans text-xs text-muted-foreground hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
