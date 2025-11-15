// components/Hero/EnhancedHero.tsx
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Play, TrendingUp, Shield, Zap, Headphones } from "lucide-react";

export default function EnhancedHero() {
  const [typedText, setTypedText] = useState("");
  const texts = ["Innovation", "Performance", "Quality", "Excellence"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentText.length) {
          setTypedText(currentText.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(currentText.slice(0, typedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentIndex]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-gray-50 to-[#F0E491]/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#31694E]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#BBC863]/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-6 shadow-lg"
            >
              <TrendingUp className="w-4 h-4 text-[#31694E]" />
              <span className="text-sm font-medium text-gray-700">
                🚀 #1 Tech Store of 2024
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Tech That
              <span className="block bg-gradient-to-r from-[#31694E] via-[#658C58] to-[#BBC863] bg-clip-text text-transparent min-h-[1.2em]">
                {typedText}|
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              Discover cutting-edge gadgets, premium electronics, and innovative tech solutions. 
              Free shipping • 2-year warranty • 24/7 support
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 bg-[#31694E] hover:bg-[#658C58] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 group"
              >
                Shop Latest Tech
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 border-2 border-[#31694E] text-[#31694E] hover:bg-[#31694E] hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 group"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </motion.button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: Shield, label: "2-Year Warranty" },
                { icon: Zap, label: "Fast Shipping" },
                { icon: Headphones, label: "24/7 Support" },
              ].map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <feature.icon className="w-4 h-4 text-[#31694E]" />
                  <span>{feature.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hero Product Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl p-8 shadow-2xl border border-gray-200">
              {/* Featured Product */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#31694E] to-[#658C58] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Latest Gaming Laptop</h3>
                <p className="text-gray-600 mb-4">RTX 4080 • 32GB RAM • 2TB SSD</p>
                <div className="flex justify-center items-center gap-2">
                  <span className="text-2xl font-bold text-[#31694E]">$2,499</span>
                  <span className="text-sm text-gray-500 line-through">$2,999</span>
                  <span className="text-sm bg-[#F0E491] text-gray-900 px-2 py-1 rounded">Save $500</span>
                </div>
              </div>
              
              {/* Product Image */}
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#31694E] to-[#658C58] rounded-lg transform rotate-12 opacity-20" />
                  <div className="absolute text-6xl">💻</div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-gray-900">4.9/5</div>
                  <div className="text-xs text-gray-500">Rating</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">2.3K</div>
                  <div className="text-xs text-gray-500">Sold</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">98%</div>
                  <div className="text-xs text-gray-500">Recommended</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}