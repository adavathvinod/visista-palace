import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";
import necklaceImg from "@/assets/jewelry-necklace-1.jpeg";
import pendantImg from "@/assets/jewelry-pendant-1.jpeg";
import banglesImg from "@/assets/jewelry-bangles-1.jpeg";
import deityImg from "@/assets/jewelry-deity-1.jpeg";
import showroomImg from "@/assets/showroom-display.jpeg";
import modernImg from "@/assets/showroom-modern.jpeg";

const categories = [
  "All",
  "Necklaces",
  "Bangles",
  "Pendants",
  "Temple Jewelry",
  "Diamonds",
  "Bridal Sets",
];

const products = [
  { id: 1, name: "Royal Temple Necklace", category: "Necklaces", image: necklaceImg, weight: "45g" },
  { id: 2, name: "Lakshmi Narayan Pendant", category: "Pendants", image: pendantImg, weight: "28g" },
  { id: 3, name: "Antique Nakshi Bangles", category: "Bangles", image: banglesImg, weight: "35g" },
  { id: 4, name: "Tirupati Balaji Pendant", category: "Temple Jewelry", image: deityImg, weight: "32g" },
  { id: 5, name: "Traditional Choker Set", category: "Bridal Sets", image: showroomImg, weight: "52g" },
  { id: 6, name: "Diamond Studded Haar", category: "Diamonds", image: modernImg, weight: "60g" },
  { id: 7, name: "Peacock Design Necklace", category: "Necklaces", image: necklaceImg, weight: "48g" },
  { id: 8, name: "Kundan Pearl Bangles", category: "Bangles", image: banglesImg, weight: "30g" },
];

const Collections = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-onyx to-onyx-light">
        <div className="container mx-auto px-4 text-center">
          <p className="font-sans text-gold text-sm tracking-[0.3em] uppercase mb-4">
            Discover Beauty
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            Our Collections
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore over 300+ handcrafted designs, each piece telling a story of 
            tradition and timeless elegance.
          </p>
          <div className="w-24 h-0.5 bg-gold-gradient mx-auto mt-6" />
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-border sticky top-0 z-40 glass-dark">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-sans text-sm whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gold text-onyx"
                    : "bg-secondary text-muted-foreground hover:text-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group relative overflow-hidden rounded-lg bg-card border border-border hover:border-gold/50 transition-all duration-500 hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Image */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="p-4">
                  <p className="font-sans text-gold text-xs tracking-wider mb-1">
                    {product.category}
                  </p>
                  <h3 className="font-display text-lg text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Gold Weight: {product.weight}
                  </p>
                </div>

                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-onyx/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="px-6 py-3 bg-gold text-onyx font-sans text-sm font-medium rounded-md hover:bg-gold-light transition-colors">
                    Quick View
                  </button>
                </div>
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

export default Collections;
