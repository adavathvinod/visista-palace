import { Link } from "react-router-dom";
import { Sparkles, TrendingUp, Gift, Calculator } from "lucide-react";
import { Button } from "./ui/button";

const schemes = [
  {
    icon: Sparkles,
    name: "Visista Sukh",
    duration: "11 Months",
    benefit: "Get 1 Month Free",
    description: "Pay monthly, receive gold worth 12 months",
  },
  {
    icon: TrendingUp,
    name: "Visista Dhan",
    duration: "6 Months",
    benefit: "5% Bonus",
    description: "Short term savings with quick rewards",
  },
  {
    icon: Gift,
    name: "Visista Labh",
    duration: "15 Months",
    benefit: "2 Months Free",
    description: "Maximum benefits for patient savers",
  },
];

const SchemesPreview = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-onyx-light to-onyx relative">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gold rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-gold rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-gold text-sm tracking-[0.3em] uppercase mb-4">
            Smart Savings
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Gold Savings Schemes
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Build your gold savings with our trusted schemes. Join thousands of 
            happy customers who have secured their future with Visista.
          </p>
          <div className="w-24 h-0.5 bg-gold-gradient mx-auto mt-6" />
        </div>

        {/* Schemes Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {schemes.map((scheme, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-xl p-8 border border-border hover:border-gold/50 transition-all duration-500 hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <scheme.icon size={28} className="text-gold" />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl text-foreground mb-2">
                {scheme.name}
              </h3>
              <p className="font-sans text-gold text-sm font-medium mb-4">
                {scheme.duration} • {scheme.benefit}
              </p>
              <p className="font-body text-muted-foreground mb-6">
                {scheme.description}
              </p>

              {/* Learn More Link */}
              <Link
                to="/schemes"
                className="font-sans text-sm text-gold hover:text-gold-light transition-colors inline-flex items-center gap-2"
              >
                Learn More
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>

              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rotate-45 translate-x-16 -translate-y-16" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Row */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/schemes">
            <Button variant="luxury" size="lg">
              Join a Scheme Today
            </Button>
          </Link>
          <Link to="/gold-loan">
            <Button variant="outline-gold" size="lg" className="group">
              <Calculator className="mr-2" size={18} />
              Calculate Gold Loan
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SchemesPreview;
