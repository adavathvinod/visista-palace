import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, Phone, Mail, MessageSquare, Video, Store } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    type: "store",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Confirmed!",
      description: "We will contact you shortly to confirm your appointment.",
    });
    setFormData({ name: "", phone: "", email: "", date: "", time: "", type: "store", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-onyx to-onyx-light">
        <div className="container mx-auto px-4 text-center">
          <p className="font-sans text-gold text-sm tracking-[0.3em] uppercase mb-4">
            VIP Experience
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            Book Your Appointment
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience personalized service with our jewelry consultants. 
            Book a private session at our showroom or online.
          </p>
          <div className="w-24 h-0.5 bg-gold-gradient mx-auto mt-6" />
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Form */}
              <div className="lg:col-span-3 bg-card rounded-xl p-8 border border-border animate-fade-up">
                <h2 className="font-display text-2xl text-foreground mb-8">
                  Schedule Your Visit
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Appointment Type */}
                  <div>
                    <label className="font-sans text-sm text-muted-foreground mb-3 block">
                      Appointment Type
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, type: "store" })}
                        className={`flex items-center justify-center gap-3 py-4 rounded-lg border transition-all ${
                          formData.type === "store"
                            ? "bg-gold/20 border-gold text-gold"
                            : "border-border text-muted-foreground hover:border-gold/50"
                        }`}
                      >
                        <Store size={20} />
                        <span className="font-sans text-sm">In-Store Visit</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, type: "video" })}
                        className={`flex items-center justify-center gap-3 py-4 rounded-lg border transition-all ${
                          formData.type === "video"
                            ? "bg-gold/20 border-gold text-gold"
                            : "border-border text-muted-foreground hover:border-gold/50"
                        }`}
                      >
                        <Video size={20} />
                        <span className="font-sans text-sm">Video Call</span>
                      </button>
                    </div>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-sans text-sm text-muted-foreground mb-2 block">
                        Full Name
                      </label>
                      <div className="relative">
                        <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
                          required
                          className="w-full pl-12 pr-4 py-3 bg-secondary border border-border rounded-md font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-sans text-sm text-muted-foreground mb-2 block">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          required
                          className="w-full pl-12 pr-4 py-3 bg-secondary border border-border rounded-md font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="font-sans text-sm text-muted-foreground mb-2 block">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full pl-12 pr-4 py-3 bg-secondary border border-border rounded-md font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold"
                      />
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-sans text-sm text-muted-foreground mb-2 block">
                        Preferred Date
                      </label>
                      <div className="relative">
                        <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          required
                          className="w-full pl-12 pr-4 py-3 bg-secondary border border-border rounded-md font-sans text-foreground focus:outline-none focus:border-gold"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-sans text-sm text-muted-foreground mb-2 block">
                        Preferred Time
                      </label>
                      <div className="relative">
                        <Clock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <select
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          required
                          className="w-full pl-12 pr-4 py-3 bg-secondary border border-border rounded-md font-sans text-foreground focus:outline-none focus:border-gold appearance-none"
                        >
                          <option value="">Select time</option>
                          <option value="10:30">10:30 AM</option>
                          <option value="11:30">11:30 AM</option>
                          <option value="12:30">12:30 PM</option>
                          <option value="14:00">2:00 PM</option>
                          <option value="15:00">3:00 PM</option>
                          <option value="16:00">4:00 PM</option>
                          <option value="17:00">5:00 PM</option>
                          <option value="18:00">6:00 PM</option>
                          <option value="19:00">7:00 PM</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="font-sans text-sm text-muted-foreground mb-2 block">
                      Special Requests (Optional)
                    </label>
                    <div className="relative">
                      <MessageSquare size={18} className="absolute left-4 top-4 text-muted-foreground" />
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Looking for bridal necklaces..."
                        rows={4}
                        className="w-full pl-12 pr-4 py-3 bg-secondary border border-border rounded-md font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold resize-none"
                      />
                    </div>
                  </div>

                  <Button type="submit" variant="luxury" size="lg" className="w-full">
                    Confirm Booking
                  </Button>
                </form>
              </div>

              {/* Info Sidebar */}
              <div className="lg:col-span-2 space-y-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <div className="bg-burgundy rounded-xl p-6">
                  <h3 className="font-display text-xl text-foreground mb-4">
                    Why Book Ahead?
                  </h3>
                  <ul className="space-y-3 font-body text-sm text-foreground/80">
                    <li>• Priority service from our experts</li>
                    <li>• Personalized recommendations</li>
                    <li>• Exclusive preview of new arrivals</li>
                    <li>• Complimentary refreshments</li>
                  </ul>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-display text-xl text-foreground mb-4">
                    Store Hours
                  </h3>
                  <div className="space-y-2 font-body text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday - Sunday</span>
                      <span className="text-gold">10:30 AM - 8:30 PM</span>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-display text-xl text-foreground mb-4">
                    Need Help?
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-4">
                    Call us directly to book
                  </p>
                  <a
                    href="tel:+919876543210"
                    className="inline-flex items-center gap-2 text-gold font-sans text-sm hover:text-gold-light transition-colors"
                  >
                    <Phone size={16} />
                    +91 98765 43210
                  </a>
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

export default Booking;
