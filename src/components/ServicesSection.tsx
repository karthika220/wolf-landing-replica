import servicePpf from "@/assets/service-ppf.jpg";
import serviceCeramic from "@/assets/service-ceramic.jpg";
import serviceCarwash from "@/assets/service-carwash.jpg";
import serviceGraphene from "@/assets/service-graphene.jpg";
import serviceDenting from "@/assets/service-denting.jpg";
import serviceInterior from "@/assets/service-interior.jpg";

const services = [
  {
    title: "Paint Protection Film (PPF)",
    description: "Protect your car's paint from scratches, stone chips, and road damage with premium PPF installation in Tirupur.",
    image: servicePpf,
  },
  {
    title: "Ceramic Coating",
    description: "Ceramic coating starts from ₹14,999 or flat 50% off. Long-lasting gloss and paint protection for your car.",
    image: serviceCeramic,
  },
  {
    title: "Car Wash",
    description: "Interior and exterior car wash services starting from ₹349. Quick, affordable, and professional cleaning.",
    image: serviceCarwash,
  },
  {
    title: "Graphene Coating",
    description: "Advanced graphene coating for superior shine, durability, and long-term paint protection.",
    image: serviceGraphene,
  },
  {
    title: "Denting & Painting",
    description: "Professional dent removal and painting services to restore your car's original finish.",
    image: serviceDenting,
  },
  {
    title: "Interior Cleaning",
    description: "Deep interior foam cleaning to remove stains, odour, and bacteria.",
    image: serviceInterior,
  },
];

const ServicesSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-section mb-4">
            Complete Car Detailing Services in Tirupur
          </h2>
          <p className="text-body text-lg max-w-2xl mx-auto">
            Professional car care services focused on protection, detailing, 
            coating, and cleaning for lasting shine and freshness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div key={index} className="card-service">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-body">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={scrollToContact}
            className="btn-secondary text-lg"
          >
            Get Your Car Service Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
