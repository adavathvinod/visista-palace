import { useState } from "react";
import { MessageCircle, Instagram, Youtube, X, Plus } from "lucide-react";

const socials = [
  {
    name: "WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/919876543210",
    color: "bg-green-600 hover:bg-green-500",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/visistagold",
    color: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 hover:opacity-90",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://youtube.com/@visistagold",
    color: "bg-red-600 hover:bg-red-500",
  },
];

const FloatingSocial = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Social Buttons */}
      <div
        className={`flex flex-col-reverse gap-3 mb-3 transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-12 h-12 rounded-full ${social.color} flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110`}
            aria-label={social.name}
          >
            <social.icon size={22} className="text-white" />
          </a>
        ))}
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full bg-gold-gradient flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 animate-pulse-gold ${
          isOpen ? "rotate-45" : ""
        }`}
        aria-label="Toggle social links"
      >
        {isOpen ? (
          <X size={24} className="text-onyx" />
        ) : (
          <Plus size={24} className="text-onyx" />
        )}
      </button>
    </div>
  );
};

export default FloatingSocial;
