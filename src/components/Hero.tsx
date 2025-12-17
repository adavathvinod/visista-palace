import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Clock, Star } from "lucide-react";
import Logo from "./Logo";
import { Button } from "./ui/button";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTime = hours * 60 + minutes;
      const openTime = 10 * 60 + 30; // 10:30 AM
      const closeTime = 20 * 60 + 30; // 8:30 PM
      setIsOpen(currentTime >= openTime && currentTime <= closeTime);
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-onyx via-onyx/95 to-onyx" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-burgundy/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        {/* Open Status Badge */}
        <div className="flex justify-center mb-8 animate-fade-up">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
            isOpen ? "bg-green-500/20 border border-green-500/50" : "bg-red-500/20 border border-red-500/50"
          }`}>
            <span className={`w-2 h-2 rounded-full animate-pulse ${isOpen ? "bg-green-500" : "bg-red-500"}`} />
            <span className="font-sans text-sm">
              {isOpen ? "Open Now" : "Currently Closed"}
            </span>
            <Clock size={14} className="text-muted-foreground" />
            <span className="text-muted-foreground text-xs">10:30 AM - 8:30 PM</span>
          </div>
        </div>

        {/* Main Logo */}
        <div className="mb-8 animate-scale-in" style={{ animationDelay: "0.2s" }}>
          <Logo size="lg" />
        </div>

        {/* Tagline */}
        <p className="font-body text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto mb-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          Where Tradition Meets Timeless Elegance
        </p>

        {/* Rating */}
        <div className="flex items-center justify-center gap-2 mb-8 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="fill-gold text-gold" />
            ))}
          </div>
          <span className="font-sans text-sm text-gold">4.9</span>
          <span className="text-muted-foreground text-sm">• "Welcoming & Friendly Atmosphere"</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <Link to="/collections">
            <Button variant="luxury" size="lg">
              Explore Collections
            </Button>
          </Link>
          <Link to="/booking">
            <Button variant="outline-gold" size="lg">
              Book VIP Appointment
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-16 animate-fade-up" style={{ animationDelay: "0.7s" }}>
          <div className="text-center">
            <p className="font-display text-3xl md:text-4xl text-gold font-semibold">300+</p>
            <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider">Necklace Designs</p>
          </div>
          <div className="text-center">
            <p className="font-display text-3xl md:text-4xl text-gold font-semibold">25+</p>
            <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider">Years of Trust</p>
          </div>
          <div className="text-center">
            <p className="font-display text-3xl md:text-4xl text-gold font-semibold">50K+</p>
            <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider">Happy Customers</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ChevronDown size={32} className="text-gold mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
