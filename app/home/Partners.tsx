// components/Partners/Partners.tsx
"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "Apple", logo: "🍎" },
  { name: "Samsung", logo: "📱" },
  { name: "Sony", logo: "🎧" },
  { name: "Dell", logo: "💻" },
  { name: "Logitech", logo: "🖱️" },
  { name: "Bose", logo: "🔊" },
];

export default function Partners() {
  return (
    <section className="py-12 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-gray-600 text-sm uppercase tracking-wider">
            Trusted by leading brands
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 text-gray-700 hover:text-[#31694E] transition-colors group"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform">
                {partner.logo}
              </span>
              <span className="text-lg font-semibold">{partner.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}