import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Volume2, VolumeX } from "lucide-react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { useBackgroundMusic } from "@/hooks/useAudio";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isPlaying, toggleMusic } = useBackgroundMusic();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Collections", path: "/collections" },
    { name: "Gold Schemes", path: "/schemes" },
    { name: "Gold Loan", path: "/gold-loan" },
    { name: "Book Appointment", path: "/booking" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-dark py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Logo size="sm" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-sans text-sm tracking-wider uppercase transition-all duration-300 hover:text-gold ${
                  location.pathname === link.path
                    ? "text-gold border-b border-gold pb-1"
                    : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Music Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMusic}
              className={`text-gold hover:bg-gold/10 relative ${isPlaying ? "animate-pulse" : ""}`}
              aria-label="Toggle traditional music"
              title={isPlaying ? "Pause Music" : "Play Traditional Music"}
            >
              {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
              {isPlaying && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              )}
            </Button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gold p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 glass-dark py-6 animate-fade-in">
            <div className="flex flex-col items-center gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-sans text-sm tracking-wider uppercase transition-all duration-300 hover:text-gold ${
                    location.pathname === link.path
                      ? "text-gold"
                      : "text-foreground/80"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
