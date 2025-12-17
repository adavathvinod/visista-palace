import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, Shield, Clock } from "lucide-react";

const GoldLoan = () => {
  const [goldWeight, setGoldWeight] = useState<number>(10);
  const [goldPurity, setGoldPurity] = useState<number>(22);
  const [loanAmount, setLoanAmount] = useState<number>(0);
  const [currentGoldRate] = useState<number>(6200); // per gram for 24K

  useEffect(() => {
    // Calculate loan amount based on weight and purity
    const purityFactor = goldPurity / 24;
    const goldValue = goldWeight * currentGoldRate * purityFactor;
    const loanPercentage = 0.75; // 75% of gold value
    setLoanAmount(Math.round(goldValue * loanPercentage));
  }, [goldWeight, goldPurity, currentGoldRate]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-onyx to-onyx-light">
        <div className="container mx-auto px-4 text-center">
          <p className="font-sans text-gold text-sm tracking-[0.3em] uppercase mb-4">
            Instant Funds
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            Gold Loan Calculator
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Get instant loans against your gold at competitive interest rates. 
            Calculate your eligible loan amount now.
          </p>
          <div className="w-24 h-0.5 bg-gold-gradient mx-auto mt-6" />
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Calculator Form */}
              <div className="bg-card rounded-xl p-8 border border-border animate-fade-up">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                    <Calculator size={24} className="text-gold" />
                  </div>
                  <h2 className="font-display text-2xl text-foreground">
                    Calculate Loan
                  </h2>
                </div>

                {/* Gold Weight Input */}
                <div className="mb-8">
                  <label className="font-sans text-sm text-muted-foreground mb-2 block">
                    Gold Weight (grams)
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="1"
                      max="500"
                      value={goldWeight}
                      onChange={(e) => setGoldWeight(Number(e.target.value))}
                      className="flex-1 h-2 bg-secondary rounded-full appearance-none cursor-pointer accent-gold"
                    />
                    <input
                      type="number"
                      value={goldWeight}
                      onChange={(e) => setGoldWeight(Number(e.target.value))}
                      className="w-24 px-4 py-2 bg-secondary border border-border rounded-md text-center font-sans text-foreground focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                {/* Gold Purity Select */}
                <div className="mb-8">
                  <label className="font-sans text-sm text-muted-foreground mb-2 block">
                    Gold Purity
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    {[18, 22, 24].map((purity) => (
                      <button
                        key={purity}
                        onClick={() => setGoldPurity(purity)}
                        className={`py-3 rounded-md font-sans text-sm transition-all ${
                          goldPurity === purity
                            ? "bg-gold text-onyx"
                            : "bg-secondary text-muted-foreground hover:border-gold border border-border"
                        }`}
                      >
                        {purity}K Gold
                      </button>
                    ))}
                  </div>
                </div>

                {/* Current Rate Display */}
                <div className="p-4 bg-secondary/50 rounded-lg mb-8">
                  <p className="font-sans text-xs text-muted-foreground mb-1">
                    Today's Gold Rate (24K)
                  </p>
                  <p className="font-display text-xl text-gold">
                    ₹{currentGoldRate.toLocaleString()}/gram
                  </p>
                </div>

                <Button variant="luxury" className="w-full">
                  Apply for Loan
                </Button>
              </div>

              {/* Result Display */}
              <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <div className="bg-gradient-to-br from-burgundy to-burgundy-light rounded-xl p-8 text-center mb-8">
                  <p className="font-sans text-foreground/80 text-sm mb-2">
                    Estimated Loan Amount
                  </p>
                  <p className="font-display text-5xl md:text-6xl text-gold mb-4">
                    ₹{loanAmount.toLocaleString()}
                  </p>
                  <p className="font-body text-foreground/70 text-sm">
                    Based on {goldWeight}g of {goldPurity}K gold at 75% LTV
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  {[
                    { icon: TrendingUp, title: "Competitive Rates", desc: "Starting from 7.5% p.a." },
                    { icon: Clock, title: "Quick Disbursal", desc: "Get funds within 30 minutes" },
                    { icon: Shield, title: "Safe Storage", desc: "Your gold is fully insured" },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border"
                    >
                      <div className="p-2 rounded-full bg-gold/10">
                        <feature.icon size={20} className="text-gold" />
                      </div>
                      <div>
                        <h4 className="font-sans text-sm font-medium text-foreground">
                          {feature.title}
                        </h4>
                        <p className="font-body text-xs text-muted-foreground">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FloatingSocial />
      <Footer />
    </div>
  );
};

export default GoldLoan;
