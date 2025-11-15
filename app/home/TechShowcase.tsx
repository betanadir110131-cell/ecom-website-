// components/Showcase/TechShowcase.tsx
"use client";

import { motion } from "framer-motion";
import { Smartphone, Laptop, Watch, Headphones, Camera, Gamepad } from "lucide-react";

const categories = [
  {
    icon: Smartphone,
    name: "Smartphones",
    products: "200+",
    description: "Latest models from top brands",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Laptop,
    name: "Laptops & PCs",
    products: "150+",
    description: "Powerful computing solutions",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Watch,
    name: "Wearables",
    products: "80+",
    description: "Smart watches & fitness trackers",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Headphones,
    name: "Audio",
    products: "120+",
    description: "Immersive sound experience",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Camera,
    name: "Photography",
    products: "90+",
    description: "Professional camera gear",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Gamepad,
    name: "Gaming",
    products: "110+",
    description: "Ultimate gaming setup",
    gradient: "from-rose-500 to-pink-500",
  },
];

export default function TechShowcase() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of tech products organized by category
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {category.name}
              </h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{category.products} products</span>
                <button className="text-[#31694E] font-semibold hover:text-[#658C58] transition-colors">
                  Explore →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}