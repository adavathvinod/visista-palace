import { useEffect, useState } from "react";
import { useWelcomeGreeting } from "@/hooks/useAudio";
import { Sparkles, X } from "lucide-react";

const WelcomeGreeting = () => {
  const { playGreeting, hasGreeted } = useWelcomeGreeting();
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Show the prompt after a short delay
    const timer = setTimeout(() => {
      if (!hasGreeted) {
        setShowPrompt(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [hasGreeted]);

  const handlePlayGreeting = () => {
    playGreeting();
    setShowPrompt(false);
  };

  if (!showPrompt || hasGreeted) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-onyx/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-card border border-gold/30 rounded-xl p-8 max-w-md mx-4 text-center relative animate-scale-in">
        {/* Close button */}
        <button
          onClick={() => setShowPrompt(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Decorative icon */}
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center animate-pulse-gold">
          <Sparkles size={36} className="text-gold" />
        </div>

        {/* Content */}
        <h2 className="font-display text-2xl text-gold mb-3">
          🙏 Namaste
        </h2>
        <p className="font-body text-muted-foreground mb-6">
          Welcome to Visista Gold & Diamonds. Would you like to hear our greeting?
        </p>

        {/* Action buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={handlePlayGreeting}
            className="px-6 py-3 bg-gold-gradient text-onyx font-sans text-sm font-medium rounded-md hover:shadow-lg hover:shadow-gold/30 transition-all"
          >
            Play Welcome
          </button>
          <button
            onClick={() => setShowPrompt(false)}
            className="px-6 py-3 border border-border text-muted-foreground font-sans text-sm rounded-md hover:border-gold/50 transition-colors"
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeGreeting;
