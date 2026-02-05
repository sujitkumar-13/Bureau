"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine, RiCloseLine } from "react-icons/ri";

const images = [
  { id: 1, src: "/images/1.jpeg", alt: "Image 1", orientation: "landscape" },
  { id: 3, src: "/images/3.jpeg", alt: "Image 3", orientation: "landscape" },
  { id: 4, src: "/images/4.jpeg", alt: "Image 4", orientation: "portrait" },
  { id: 5, src: "/images/5.jpeg", alt: "Image 5", orientation: "landscape" },
  { id: 6, src: "/images/6.jpeg", alt: "Image 6", orientation: "portrait" },
];

const ImageSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const showPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const showNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (e.key === "ArrowLeft") {
        setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
      } else if (e.key === "ArrowRight") {
        setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
      } else if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 font-montserrat">
          Our Gallery
        </h2>

        <div className="relative group">
          {/* Left Arrow - Horizontal Scroll */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110"
            aria-label="Scroll left"
          >
            <RiArrowLeftSLine className="text-2xl text-gray-800" />
          </button>

          {/* Right Arrow - Horizontal Scroll */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110"
            aria-label="Scroll right"
          >
            <RiArrowRightSLine className="text-2xl text-gray-800" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4 px-2"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {images.map((img, index) => (
              <div
                key={img.id}
                onClick={() => openModal(index)}
                className={`flex-shrink-0 relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                  img.orientation === "portrait"
                    ? "w-64 h-96"
                    : "w-96 h-64"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <p className="text-center text-gray-500 text-sm mt-6">
          ← Swipe or use arrows to view more →
        </p>
      </div>

      {/* Modal/Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 md:top-8 md:right-8 bg-white/10 hover:bg-white/20 rounded-full p-2 md:p-3 transition-colors z-50"
            aria-label="Close"
          >
            <RiCloseLine className="text-white text-2xl md:text-3xl" />
          </button>

          {/* Previous Button */}
          <button
            onClick={showPrevImage}
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 md:p-3 transition-colors z-50"
            aria-label="Previous image"
          >
            <RiArrowLeftSLine className="text-white text-2xl md:text-4xl" />
          </button>

          {/* Next Button */}
          <button
            onClick={showNextImage}
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 md:p-3 transition-colors z-50"
            aria-label="Next image"
          >
            <RiArrowRightSLine className="text-white text-2xl md:text-4xl" />
          </button>

          {/* Image Display */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full h-full flex items-center justify-center p-4 md:p-16"
          >
            <div className="relative w-full h-full max-w-6xl max-h-[85vh]">
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full z-50">
            <p className="text-white text-sm md:text-base font-medium">
              {selectedImage + 1} / {images.length}
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ImageSection;
