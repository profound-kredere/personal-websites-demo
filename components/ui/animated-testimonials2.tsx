"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  gender?: "male" | "female";  // Optional gender for appropriate image
  seed?: string;               // Optional seed for consistent image
};

export const AnimatedTestimonials2 = ({
  testimonials,
  autoplay = true,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 16) - 8;
  };

  // Generate professional image URL based on the testimonial
  const getImageUrl = (testimonial: Testimonial, index: number) => {
    // Use the seed if provided, otherwise use name + index for consistency
    const seed = testimonial.seed || `${testimonial.name}-${index}`;
    
    // Options for UIFaces - a professional headshot generator
    // We're using This Person Does Not Exist as a fallback
    // Both generate realistic, professional-looking headshots
    
    if (testimonial.gender === "female") {
      return `https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&h=500&auto=format&fit=crop`;
    } else if (testimonial.gender === "male") {
      return `https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&h=500&auto=format&fit=crop`;
    } else {
      // If no gender specified, use a professional-looking image based on seed
      const images = [
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=500&h=500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&h=500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&h=500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=500&h=500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&h=500&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&h=500&auto=format&fit=crop"
      ];
      
      // Use a deterministic selection based on the seed
      const seedNumber = seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      return images[seedNumber % images.length];
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Client <span className="text-emerald-400">Success</span> Stories
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. See the impact our financial solutions have made for our clients.
          </p>
        </div>

        <div className="mx-auto max-w-sm px-4 py-8 font-sans antialiased md:max-w-5xl md:px-8 lg:px-12">
          <div className="relative grid grid-cols-1 gap-16 md:grid-cols-2">
            {/* Testimonial Image */}
            <div className="relative">
              <div className="relative h-96 w-full">
                {/* Background decorative elements */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-900/30 rounded-full opacity-70 z-0"></div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-emerald-900/20 rounded-full opacity-60 z-0"></div>
                
                <div className="absolute inset-0 shadow-2xl rounded-3xl overflow-hidden z-10">
                  <AnimatePresence>
                    {testimonials.map((testimonial, index) => (
                      <motion.div
                        key={`testimonial-${index}`}
                        initial={{
                          opacity: 0,
                          scale: 0.9,
                          z: -100,
                          rotate: randomRotateY(),
                        }}
                        animate={{
                          opacity: isActive(index) ? 1 : 0.7,
                          scale: isActive(index) ? 1 : 0.95,
                          z: isActive(index) ? 0 : -100,
                          rotate: isActive(index) ? 0 : randomRotateY(),
                          zIndex: isActive(index)
                            ? 40
                            : testimonials.length + 2 - index,
                          y: isActive(index) ? [0, -40, 0] : 0,
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0.9,
                          z: 100,
                          rotate: randomRotateY(),
                        }}
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 origin-bottom"
                      >
                        <img
                          src={getImageUrl(testimonial, index)}
                          alt={testimonial.name}
                          className="h-full w-full object-cover object-center"
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
              
              {/* Navigation dots */}
              <div className="mt-6 flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActive(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      isActive(index) ? "bg-emerald-500 scale-125" : "bg-gray-600"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="flex flex-col justify-center">
              <div className="bg-gray-800 rounded-3xl shadow-lg p-8 relative border border-gray-700">
                {/* Quote icon */}
                <div className="absolute -top-5 -left-5 bg-emerald-600 text-white p-3 rounded-full shadow-md">
                  <svg 
                    className="w-6 h-6" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <motion.div
                  key={active}
                  initial={{
                    y: 20,
                    opacity: 0,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  exit={{
                    y: -20,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className="mt-6"
                >
                  <motion.p className="text-xl text-gray-200 italic leading-relaxed">
                    {testimonials[active].quote.split(" ").map((word, index) => (
                      <motion.span
                        key={index}
                        initial={{
                          filter: "blur(10px)",
                          opacity: 0,
                          y: 5,
                        }}
                        animate={{
                          filter: "blur(0px)",
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.2,
                          ease: "easeInOut",
                          delay: 0.02 * index,
                        }}
                        className="inline-block"
                      >
                        {word}&nbsp;
                      </motion.span>
                    ))}
                  </motion.p>
                  
                  <div className="mt-8 flex items-center border-t border-gray-700 pt-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">
                        {testimonials[active].name}
                      </h3>
                      <p className="text-emerald-400">
                        {testimonials[active].designation}
                      </p>
                    </div>
                    
                    <div className="flex space-x-3">
                      <button
                        onClick={handlePrev}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-white hover:bg-emerald-800 transition-colors duration-300"
                        aria-label="Previous testimonial"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={handleNext}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-white hover:bg-emerald-800 transition-colors duration-300"
                        aria-label="Next testimonial"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedTestimonials2;