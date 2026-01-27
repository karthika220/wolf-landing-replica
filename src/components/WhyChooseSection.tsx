import { CheckCircle, Crown, Shield } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Transparent pricing",
    description: "Transparent rates with premium detailing products that ensure durability and flawless results.",
  },
  {
    icon: Crown,
    title: "Experienced technicians",
    description: "Handled by experienced technicians who understand the needs of both high-end and daily-use cars.",
  },
  {
    icon: Shield,
    title: "Premium-grade products",
    description: "Customized service packages designed to meet your car exact needs for complete protection.",
  },
];

const WhyChooseSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-section mb-4">
            Why Car Owners in Tirupur Choose Detailing Wolves
          </h2>
          <p className="text-body text-lg max-w-2xl mx-auto">
            We provide car detailing services to maintain and enhance your car's 
            value and appearance for lasting shine and durability.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-6 border-r last:border-r-0 border-border"
            >
              <div className="feature-icon mx-auto mb-6">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-body">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={scrollToContact}
            className="btn-primary text-lg"
          >
            Book An Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
