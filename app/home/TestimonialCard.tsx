"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Testimonial } from "@/components/data/products";


const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    feedback: "The quality of the products exceeded my expectations! The premium cotton t-shirt is incredibly soft and has held up perfectly after multiple washes. Fast shipping and excellent customer service!",
    rating: 5,
    avatar: "/api/avatar/80/80?seed=sarah",
    location: "New York, NY"
  },
  {
    id: "2",
    name: "Michael Chen",
    feedback: "Great selection of modern fashion. The designer denim jacket fits perfectly and the material quality is outstanding. Will definitely be shopping here again for my wardrobe essentials!",
    rating: 4,
    avatar: "/api/avatar/80/80?seed=michael",
    location: "Los Angeles, CA"
  },
  {
    id: "3",
    name: "Emma Rodriguez",
    feedback: "Love the sustainable materials and unique designs. The wool blend sweater is my new favorite - so warm and stylish! My go-to fashion store for quality clothing that lasts.",
    rating: 5,
    avatar: "/api/avatar/80/80?seed=emma",
    location: "Chicago, IL"
  },
  {
    id: "4",
    name: "James Wilson",
    feedback: "The classic white sneakers are incredibly comfortable and versatile. I've received so many compliments! The 25% discount made it an even better deal. Highly recommended!",
    rating: 5,
    avatar: "/api/avatar/80/80?seed=james",
    location: "Miami, FL"
  },
  {
    id: "5",
    name: "Lisa Thompson",
    feedback: "As someone who's picky about fit, I was pleasantly surprised. The sizes are accurate and the fabric quality is premium. The packaging was also beautiful - felt like unwrapping a gift!",
    rating: 4,
    avatar: "/api/avatar/80/80?seed=lisa",
    location: "Seattle, WA"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [nextTestimonial, isPaused]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;
    
    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) nextTestimonial();
      else prevTestimonial();
    }
  }, [nextTestimonial, prevTestimonial]);

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex justify-center gap-1 mb-4">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating 
              ? "text-yellow-400 fill-current drop-shadow-sm" 
              : "text-gray-400"
          }`}
        />
      ))}
    </div>
  );

  return (
    <section className="py-16 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied customers who love our premium fashion collection
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div 
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-xl border border-gray-700/50"
            >
              <div className="text-center">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Rating */}
                <StarRating rating={TESTIMONIALS[currentIndex].rating} />

                {/* Content */}
                <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8 font-medium italic">
                  "{TESTIMONIALS[currentIndex].feedback}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={TESTIMONIALS[currentIndex].avatar}
                    alt={TESTIMONIALS[currentIndex].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-violet-500 shadow-lg"
                  />
                  <div className="text-left">
                    <h3 className="font-bold text-white text-lg">
                      {TESTIMONIALS[currentIndex].name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {TESTIMONIALS[currentIndex].location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 gap-3">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex 
                    ? "w-8 bg-gradient-to-r from-violet-500 to-purple-500 shadow-lg" 
                    : "w-2 bg-gray-600 hover:bg-gray-500"
                } h-2`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center mt-6 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-all duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Swipe Hint */}
          <div className="text-center mt-4">
            <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
              <span className="hidden sm:inline">Swipe or use arrows</span>
              <span className="sm:hidden">Swipe to navigate</span>
            </p>
          </div>
        </div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">10K+</div>
            <div className="text-gray-400">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-gray-400">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-gray-400">Recommend Us</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}