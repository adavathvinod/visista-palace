import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";
import { Button } from "@/components/ui/button";
import { Sparkles, TrendingUp, Gift, Check, ArrowRight } from "lucide-react";

const schemes = [
  {
    icon: Sparkles,
    name: "Visista Sukh",
    duration: "11 Months",
    benefit: "Get 1 Month Free",
    description: "Our most popular scheme! Pay for 11 months and receive gold worth 12 months.",
    features: [
      "Minimum ₹1,000/month",
      "Flexible payment dates",
      "No processing fee",
      "Bonus on completion",
    ],
    popular: true,
  },
  {
    icon: TrendingUp,
    name: "Visista Dhan",
    duration: "6 Months",
    benefit: "5% Bonus",
    description: "Perfect for those who want quick returns. Short term savings with attractive bonus.",
    features: [
      "Minimum ₹2,000/month",
      "5% extra gold value",
      "Priority booking",
      "Special discounts",
    ],
    popular: false,
  },
  {
    icon: Gift,
    name: "Visista Labh",
    duration: "15 Months",
    benefit: "2 Months Free",
    description: "Maximum benefits for patient savers. The longer you save, the more you earn.",
    features: [
      "Minimum ₹1,500/month",
      "2 months free value",
      "VIP treatment",
      "Exclusive designs access",
    ],
    popular: false,
  },
];

const Schemes = () => {
  const [selectedScheme, setSelectedScheme] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-onyx to-onyx-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gold rounded-full" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="font-sans text-gold text-sm tracking-[0.3em] uppercase mb-4">
            Invest in Gold
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            Gold Savings Schemes
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of happy customers who have built their gold savings with us. 
            Simple, transparent, and rewarding.
          </p>
          <div className="w-24 h-0.5 bg-gold-gradient mx-auto mt-6" />
        </div>
      </section>

      {/* Schemes Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {schemes.map((scheme, index) => (
              <div
                key={index}
                className={`relative bg-card rounded-xl p-8 border transition-all duration-500 hover-lift animate-fade-up ${
                  scheme.popular ? "border-gold" : "border-border hover:border-gold/50"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Popular Badge */}
                {scheme.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-onyx font-sans text-xs font-medium rounded-full">
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6">
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

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {scheme.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check size={16} className="text-gold" />
                      <span className="font-body text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={scheme.popular ? "luxury" : "outline-gold"}
                  className="w-full"
                  onClick={() => setSelectedScheme(scheme.name)}
                >
                  Join Now
                  <ArrowRight size={16} />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="font-sans text-gold text-sm tracking-[0.3em] uppercase mb-4">
              Simple Process
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Choose Scheme", desc: "Select a scheme that fits your budget" },
              { step: "02", title: "Make Payments", desc: "Pay monthly via cash, card or UPI" },
              { step: "03", title: "Track Progress", desc: "Monitor your savings online" },
              { step: "04", title: "Redeem Gold", desc: "Choose jewelry worth your savings + bonus" },
            ].map((item, index) => (
              <div key={index} className="text-center animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-xl text-gold">{item.step}</span>
                </div>
                <h4 className="font-display text-lg text-foreground mb-2">{item.title}</h4>
                <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FloatingSocial />
      <Footer />
    </div>
  );
};

export default Schemes;
