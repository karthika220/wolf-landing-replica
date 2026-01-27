import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    services: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you!",
      description: "We'll contact you shortly to confirm your appointment.",
    });
    setFormData({ name: "", phone: "", email: "", services: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="heading-section mb-4">
            Book Professional Car Detailing in Minutes
          </h2>
          <p className="text-body text-lg">
            Fill in your details and our team will contact you shortly to confirm 
            your appointment.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input-field"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone No"
              value={formData.phone}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="email"
              name="email"
              placeholder="Mail"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-field"
            />
            <select
              name="services"
              value={formData.services}
              onChange={handleChange}
              required
              className="input-field appearance-none cursor-pointer"
            >
              <option value="" disabled>Services</option>
              <option value="ppf">Paint Protection Film (PPF)</option>
              <option value="ceramic">Ceramic Coating</option>
              <option value="carwash">Car Wash</option>
              <option value="graphene">Graphene Coating</option>
              <option value="denting">Denting & Painting</option>
              <option value="interior">Interior Cleaning</option>
            </select>
          </div>
          <button 
            type="submit"
            className="w-full bg-primary text-primary-foreground py-4 rounded-full font-medium text-lg hover:opacity-90 transition-opacity"
          >
            Submit Your Details
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
