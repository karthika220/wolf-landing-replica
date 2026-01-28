import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";


const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
];


const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerView = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + imagesPerView >= galleryImages.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - imagesPerView : prev - 1
    );
  };

  const visibleImages = galleryImages.slice(
    currentIndex,
    currentIndex + imagesPerView
  );


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

        {/* Images */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {visibleImages.map((image, index) => (
            <div
              key={index}
              className="aspect-[4/5] rounded-xl overflow-hidden"
            >
              <img
                src={image}
                alt={`Gallery ${currentIndex + index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prevSlide}
            className="p-2 hover:bg-muted rounded-full transition"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={nextSlide}
            className="p-2 hover:bg-muted rounded-full transition"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
