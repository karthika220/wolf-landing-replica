import { Phone, MapPin } from "lucide-react";

const businessHours = [
  { day: "Sunday", hours: "09:00 AM - 08:00 PM" },
  { day: "Monday", hours: "09:00 AM - 08:00 PM" },
  { day: "Tuesday", hours: "09:00 AM - 08:00 PM" },
  { day: "Wednesday", hours: "09:00 AM - 08:00 PM" },
  { day: "Thursday", hours: "09:00 AM - 08:00 PM" },
  { day: "Friday", hours: "09:00 AM - 08:00 PM" },
  { day: "Saturday", hours: "09:00 AM - 08:00 PM" },
];

const LocationSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="mb-8 rounded-xl overflow-hidden h-[400px]">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=77.30%2C11.05%2C77.40%2C11.15&layer=mapnik&marker=11.1085%2C77.3411"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Detailing Wolves Location"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="heading-section text-2xl md:text-3xl mb-6">
              Visit Our Car Detailing Studio in Tirupur
            </h2>
            <p className="text-body mb-8">
              Drop in for professional car detailing, PPF, ceramic coating, and car 
              wash services when it's convenient for you.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-medium text-foreground">+91 99406 98326</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-background" />
                </div>
                <span className="font-medium text-foreground">Tirupur</span>
              </div>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={scrollToContact}
                className="btn-primary"
              >
                Book Your Appointment
              </button>
              <a 
                href="https://maps.google.com/?q=Tirupur"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div>
            <table className="w-full">
              <tbody>
                {businessHours.map((item, index) => (
                  <tr key={index} className="border-b border-border last:border-b-0">
                    <td className="py-3 font-medium text-foreground">{item.day}</td>
                    <td className="py-3 text-right text-foreground">{item.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
