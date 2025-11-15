"use client";

import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Eye, Share2 } from "lucide-react";
import { useState } from "react";

const articles = [
  {
    id: 1,
    title: "The Future of AI in Business Transformation",
    excerpt: "Exploring how artificial intelligence is revolutionizing enterprise operations and driving unprecedented growth.",
    image: "/api/placeholder/400/250",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "5 min read",
    views: 1242,
    category: "Technology"
  },
  {
    id: 2,
    title: "Sustainable Business Practices That Drive Profit",
    excerpt: "How companies are integrating sustainability into their core business strategy while boosting bottom lines.",
    image: "/api/placeholder/400/250",
    author: "Marcus Johnson",
    date: "2024-01-12",
    readTime: "4 min read",
    views: 892,
    category: "Sustainability"
  },
  {
    id: 3,
    title: "Data-Driven Decision Making in 2024",
    excerpt: "Leveraging big data and analytics to make informed business decisions that propel growth.",
    image: "/api/placeholder/400/250",
    author: "Emily Rodriguez",
    date: "2024-01-10",
    readTime: "6 min read",
    views: 1567,
    category: "Analytics"
  }
];

export default function ArticlesSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");

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
            Insights & Articles
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, insights, and thought leadership in business and technology
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {["all", "Technology", "Business", "Sustainability", "Analytics", "Innovation"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-[#31694E] text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category === "all" ? "All Articles" : category}
            </button>
          ))}
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#31694E] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#31694E] transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{article.views}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                  <div className="flex items-center gap-3">
                    <button className="p-2 text-gray-400 hover:text-[#31694E] transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button className="flex items-center gap-2 text-[#31694E] font-semibold group">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-[#31694E] to-[#658C58] rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-white/80 mb-6 max-w-md mx-auto">
            Get the latest articles and insights delivered directly to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-6 py-3 bg-white text-[#31694E] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}