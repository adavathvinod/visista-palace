import { Link } from "react-router-dom";
import { Award, Shield, Heart, Gem } from "lucide-react";
import { Button } from "./ui/button";
import showroomImg from "@/assets/showroom-interior.jpeg";

const features = [
  {
    icon: Award,
    title: "BIS Hallmarked",
    description: "100% certified pure gold",
  },
  {
    icon: Shield,
    title: "Lifetime Exchange",
    description: "Hassle-free exchange policy",
  },
  {
    icon: Heart,
    title: "Trusted Since 1999",
    description: "25+ years of excellence",
  },
  {
    icon: Gem,
    title: "Certified Diamonds",
    description: "IGI & GIA certified stones",
  },
];

const AboutPreview = () => {
  return (
    <section className="py-24 bg-onyx relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute inset-0 bg-gradient-to-l from-gold to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative animate-fade-up">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={showroomImg}
                alt="Visista Gold & Diamonds Showroom"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 border-2 border-gold/30 rounded-lg" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-8 -right-8 bg-burgundy p-6 rounded-lg shadow-2xl hidden md:block">
              <p className="font-display text-3xl text-gold font-semibold">25+</p>
              <p className="font-sans text-sm text-foreground/80">Years of Trust</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <p className="font-sans text-gold text-sm tracking-[0.3em] uppercase mb-4">
              About Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              Hyderabad's Most Trusted
              <span className="text-gold"> Jewellers</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
              At Visista Gold and Diamonds, we blend traditional Hyderabadi craftsmanship 
              with contemporary designs. Our legacy spans over two decades, serving 
              generations of families with exquisite jewelry that tells their stories.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                >
                  <div className="p-2 rounded-full bg-gold/20">
                    <feature.icon size={20} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-medium text-foreground">
                      {feature.title}
                    </h4>
                    <p className="font-body text-xs text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/contact">
              <Button variant="luxury" size="lg">
                Visit Our Showroom
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
