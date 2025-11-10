// components/Hero/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden bg-gray-900">
      {/* Enhanced Background with Dark Theme */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80&auto=format&fit=crop"
          alt="Modern Tech Store"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-purple-900/60 to-violet-900/70" />
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-violet-500 rounded-full"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-500 rounded-full"
            animate={{
              scale: [1, 3, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center text-white max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Premium Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-medium text-gray-200">
              Premium Tech Products
            </span>
            <TrendingUp className="w-4 h-4 text-green-400" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Tech That
            <motion.span
              className="block bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent mt-2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Powers Dreams
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Discover cutting-edge technology, premium quality gadgets, and 
            unbeatable prices. Elevate your digital lifestyle with our curated collection.
          </motion.p>

          {/* Features Grid */}
          
          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <motion.a
              href="/shop/new"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px -10px rgba(139, 92, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl transition-all duration-300 min-w-[160px] group"
            >
              <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Shop Now
            </motion.a>
            
            <motion.a
              href="/shop/collections"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-600 hover:border-gray-400 text-white px-8 py-4 rounded-xl font-semibold text-lg backdrop-blur-sm transition-all duration-300 min-w-[160px] group"
            >
              <Sparkles className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Explore
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-700/50 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            {[
              { number: "10K+", label: "Products" },
              { number: "50K+", label: "Customers" },
              { number: "4.9/5", label: "Rating" },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <motion.div
                  className="text-2xl font-bold text-white mb-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      
    </section>
  );
}