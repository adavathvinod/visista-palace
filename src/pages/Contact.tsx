import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Youtube } from "lucide-react";
import showroomImg from "@/assets/showroom-exterior.jpeg";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-onyx to-onyx-light">
        <div className="container mx-auto px-4 text-center">
          <p className="font-sans text-gold text-sm tracking-[0.3em] uppercase mb-4">
            Visit Us
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            Our Showroom
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the grandeur of Visista Gold & Diamonds at our flagship 
            showroom in Kothapet, Hyderabad.
          </p>
          <div className="w-24 h-0.5 bg-gold-gradient mx-auto mt-6" />
        </div>
      </section>

      {/* Contact Info & Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Info & Image */}
            <div className="space-y-8 animate-fade-up">
              {/* Showroom Image */}
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={showroomImg}
                  alt="Visista Gold & Diamonds Showroom"
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 border-2 border-gold/30 rounded-xl" />
              </div>

              {/* Contact Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card rounded-xl p-6 border border-border hover:border-gold/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                    <MapPin size={24} className="text-gold" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2">Address</h3>
                  <p className="font-body text-sm text-muted-foreground">
                    Pillar No. 1616, Opp. Chennai Shopping Mall,<br />
                    Kothapet, Hyderabad - 500035
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border hover:border-gold/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                    <Clock size={24} className="text-gold" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2">Hours</h3>
                  <p className="font-body text-sm text-muted-foreground">
                    Monday - Sunday<br />
                    <span className="text-gold">10:30 AM - 8:30 PM</span>
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border hover:border-gold/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                    <Phone size={24} className="text-gold" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2">Phone</h3>
                  <a
                    href="tel:+919876543210"
                    className="font-sans text-sm text-gold hover:text-gold-light transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border hover:border-gold/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                    <Mail size={24} className="text-gold" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2">Email</h3>
                  <a
                    href="mailto:info@visistagold.com"
                    className="font-sans text-sm text-gold hover:text-gold-light transition-colors"
                  >
                    info@visistagold.com
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-burgundy rounded-xl p-6">
                <h3 className="font-display text-xl text-foreground mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <MessageCircle size={22} className="text-white" />
                  </a>
                  <a
                    href="https://instagram.com/visistagold"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Instagram size={22} className="text-white" />
                  </a>
                  <a
                    href="https://youtube.com/@visistagold"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Youtube size={22} className="text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Map */}
            <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-card rounded-xl overflow-hidden border border-border h-full min-h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.4547548123!2d78.52994731487752!3d17.36858888808424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99e0b3b9b8d7%3A0x5c5b5c5c5c5c5c5c!2sKothapet%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "500px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Visista Gold & Diamonds Location"
                ></iframe>
              </div>

              {/* Directions Button */}
              <div className="mt-6">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Kothapet+Hyderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="luxury" size="lg" className="w-full">
                    <MapPin className="mr-2" size={18} />
                    Get Directions
                  </Button>
                </a>
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

export default Contact;
