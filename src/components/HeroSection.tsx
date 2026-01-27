import heroVideo from "@/assets/hero-video.mp4";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 hero-overlay" />
      
      <div className="container relative z-10 pt-20">
        <div className="max-w-2xl">
          <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6 leading-tight">
            Professional Car<br/>
            Detailing in Tirupur
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl">
            Premium PPF, ceramic coating, graphene coating, and car wash 
            services by trained professionals in Tirupur.
          </p>
          <button 
            onClick={scrollToContact}
            className="btn-primary text-lg"
          >
            Book Your Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
