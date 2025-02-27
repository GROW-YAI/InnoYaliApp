"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Images from "../constant/images";

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: Images.Image1,
      title: "Fresh Okro Selection",
      description:
        "We carefully select the finest, freshest okro from local farmers, ensuring premium quality from the start.",
    },
    {
      image: Images.Image2,
      title: "Cleaning & Preparation",
      description:
        "Each batch undergoes thorough cleaning and preparation, meeting the highest food safety standards.",
    },
    {
      image: Images.Image3,
      title: "Processing & Drying",
      description:
        "Using our advanced technology, the okra is processed and dried to preserve its nutritional value.",
    },
    {
      image: Images.Image4,
      title: "Powder Production",
      description:
        "The dried okra is carefully ground into fine powder, perfect for various culinary applications.",
    },
    {
      image: Images.Image6,
      title: "Quality Packaging",
      description:
        "Final products are packaged in moisture-proof containers to ensure long-lasting freshness.",
    },
  ];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = useCallback(
    (newDirection) => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + newDirection;
        if (nextIndex < 0) return slides.length - 1;
        if (nextIndex >= slides.length) return 0;
        return nextIndex;
      });
    },
    [slides.length]
  );

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [paginate]);

  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    paginate(1);
  };

  const handlePrevious = () => {
    setDirection(-1);
    paginate(-1);
  };

  return (
    <div className="relative h-screen font-open-sans w-full overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              handleNext();
            } else if (swipe > swipeConfidenceThreshold) {
              handlePrevious();
            }
          }}
          className="absolute w-full h-full"
        >
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${slides[currentIndex].image})`,
            }}
          >
            <div className="absolute inset-0 bg-black/70" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center">
            <div
              className="text-center text-white max-w-4xl mx-auto px-4"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                {slides[currentIndex].title}
              </motion.h2>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl"
              >
                {slides[currentIndex].description}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full text-white transition-all"
        onClick={handlePrevious}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full text-white transition-all"
        onClick={handleNext}
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 bg-black/20 px-6 py-3 rounded-full backdrop-blur-sm z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-green-500 scale-125 ring-2 ring-white/50" // Added ring effect
                : "bg-white/80 hover:bg-green-200" // Increased opacity
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
