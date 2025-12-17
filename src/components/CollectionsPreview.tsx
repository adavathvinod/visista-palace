import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import necklaceImg from "@/assets/jewelry-necklace-1.jpeg";
import pendantImg from "@/assets/jewelry-pendant-1.jpeg";
import banglesImg from "@/assets/jewelry-bangles-1.jpeg";
import deityImg from "@/assets/jewelry-deity-1.jpeg";

const collections = [
  {
    id: 1,
    name: "Bridal Necklaces",
    description: "Exquisite wedding collection",
    image: necklaceImg,
    count: "120+ Designs",
  },
  {
    id: 2,
    name: "Temple Jewelry",
    description: "Divine craftsmanship",
    image: deityImg,
    count: "80+ Designs",
  },
  {
    id: 3,
    name: "Antique Bangles",
    description: "Heritage pieces",
    image: banglesImg,
    count: "60+ Designs",
  },
  {
    id: 4,
    name: "Diamond Pendants",
    description: "Sparkling elegance",
    image: pendantImg,
    count: "50+ Designs",
  },
];

const CollectionsPreview = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-onyx to-onyx-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-sans text-gold text-sm tracking-[0.3em] uppercase mb-4">
            Our Treasures
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Exquisite Collections
          </h2>
          <div className="w-24 h-0.5 bg-gold-gradient mx-auto" />
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <Link
              key={collection.id}
              to="/collections"
              className="group relative overflow-hidden rounded-lg aspect-[3/4] animate-fade-up hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <img
                src={collection.image}
                alt={collection.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent" />
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-sans text-gold text-xs tracking-wider mb-1">
                  {collection.count}
                </p>
                <h3 className="font-display text-xl text-foreground mb-1">
                  {collection.name}
                </h3>
                <p className="font-body text-muted-foreground text-sm">
                  {collection.description}
                </p>
              </div>

              {/* Gold border on hover */}
              <div className="absolute inset-0 border-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/collections">
            <Button variant="outline-gold" size="lg" className="group">
              View All Collections
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CollectionsPreview;
