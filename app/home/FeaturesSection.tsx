// components/Home/FeaturesSection.tsx
"use client";

import { motion } from "framer-motion";
import { Truck, Shield, Headphones, RotateCcw } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free delivery on orders over $50",
    color: "text-blue-400"
  },
  {
    icon: Shield,
    title: "2-Year Warranty",
    description: "Comprehensive protection for all products",
    color: "text-green-400"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer service",
    color: "text-purple-400"
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "30-day hassle-free return policy",
    color: "text-orange-400"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-700 group-hover:bg-gray-600 mb-4 ${feature.color}`}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5
                }}
                transition={{ duration: 0.3 }}
              >
                <feature.icon className="w-8 h-8" />
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}