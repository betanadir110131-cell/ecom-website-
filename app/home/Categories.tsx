"use client";

import { motion } from "framer-motion";
import { CATEGORIES } from "../mock/data";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { memo, useRef, TouchEvent } from "react";

interface Category {
  id: string | number;
  name: string;
  icon: React.ReactNode;
  productCount: number;
}

const CategoryCard = memo(({ category }: { category: Category }) => {
  return (
    <motion.div
      className="flex-shrink-0 bg-gray-800 rounded-xl p-4 sm:p-5 md:p-6 border border-gray-700 hover:border-violet-500/50 cursor-pointer min-w-[120px] sm:min-w-[140px] md:min-w-[160px] text-center will-change-transform group"
      whileHover={{ 
        y: -5, 
        scale: 1.02,
        backgroundColor: "rgb(55, 65, 81)"
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      variants={fadeInUp}
      role="button"
      tabIndex={0}
      aria-label={`View ${category.name} category with ${category.productCount} products`}
      onKeyDown={(e) => e.key === "Enter" && console.log(`Category ${category.name} clicked`)}
      onClick={() => console.log(`Category ${category.name} clicked`)}
    >
      <motion.div
        className="mx-auto mb-3 sm:mb-4 text-2xl sm:text-3xl text-violet-400 group-hover:text-violet-300"
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3 }}
        aria-hidden="true"
      >
        {category.icon}
      </motion.div>
      <h3 className="font-semibold text-white text-sm sm:text-base mb-1 group-hover:text-violet-300 transition-colors">
        {category.name}
      </h3>
      <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
        {category.productCount} products
      </p>
    </motion.div>
  );
});

CategoryCard.displayName = 'CategoryCard';

export default function Categories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    const touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX.current - touchEndX;
    
    if (Math.abs(diff) > 50 && scrollRef.current) {
      scrollRef.current.scrollBy({
        left: diff > 0 ? 160 : -160,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 sm:py-14 md:py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium text-violet-400">
              Categories
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
            Shop by Category
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            Explore our wide range of tech products organized by category for easy browsing
          </p>
        </motion.div>

        <div 
          ref={scrollRef}
          className="overflow-x-auto pb-4 sm:pb-5 md:pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <motion.div
            className="flex justify-start sm:justify-center gap-4 sm:gap-5 md:gap-6 w-max min-w-full px-2 sm:px-0"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {CATEGORIES.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator for mobile */}
        <motion.div
          className="flex justify-center mt-6 md:hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>Swipe to explore</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}