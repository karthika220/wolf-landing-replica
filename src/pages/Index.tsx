import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import WhyChooseSection from "@/components/WhyChooseSection";
import LocationSection from "@/components/LocationSection";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <WhyChooseSection />
      <LocationSection />
      <ReviewsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
