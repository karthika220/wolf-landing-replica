import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const galleryImages = [gallery1, gallery2, gallery3];

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-section mb-4">
            See Our PPF & Ceramic Coating Results in Tirupur
          </h2>
          <p className="text-body text-lg max-w-2xl mx-auto">
            Real cars. Real results. Premium finishes delivered by our detailing experts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="aspect-[4/5] rounded-xl overflow-hidden"
            >
              <img 
                src={image} 
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4">
          <button 
            onClick={prevSlide}
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            <ChevronLeft className="w-8 h-8 text-foreground" />
          </button>
          <div className="bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium">
            1 / 1
          </div>
          <button 
            onClick={nextSlide}
            className="p-2 hover:bg-muted rounded-full transition-colors"
          >
            <ChevronRight className="w-8 h-8 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
