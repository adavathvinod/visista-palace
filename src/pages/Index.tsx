import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CollectionsPreview from "@/components/CollectionsPreview";
import AboutPreview from "@/components/AboutPreview";
import SchemesPreview from "@/components/SchemesPreview";
import FloatingSocial from "@/components/FloatingSocial";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navbar />
      <Hero />
      <CollectionsPreview />
      <AboutPreview />
      <SchemesPreview />
      <FloatingSocial />
      <Footer />
    </div>
  );
};

export default Index;
