// components/Blog/BlogSection.tsx
"use client";

import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "The Future of AI in Everyday Tech",
    excerpt: "How artificial intelligence is transforming consumer electronics and smart devices.",
    image: "🤖",
    author: "Tech Insights",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "AI & Tech"
  },
  {
    id: 2,
    title: "Sustainable Tech: Eco-Friendly Gadgets",
    excerpt: "Discover the latest environmentally conscious technology products and innovations.",
    image: "🌱",
    author: "Green Tech",
    date: "2024-01-12",
    readTime: "4 min read",
    category: "Sustainability"
  },
  {
    id: 3,
    title: "Gaming Tech Trends 2024",
    excerpt: "From VR to cloud gaming, explore what's shaping the future of gaming technology.",
    image: "🎮",
    author: "Game Tech",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Gaming"
  }
];

export default function BlogSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tech Insights & News
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, reviews, and innovations in technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-6xl">{article.image}</span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#31694E]/10 text-[#31694E] px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#31694E] transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-gray-500">
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
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Read More */}
                <Link href="/blog"><button className="w-full mt-4 flex items-center justify-center gap-2 text-[#31694E] font-semibold hover:text-[#658C58] transition-colors group pointer-coarse">
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button></Link>
                
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex pointer-coarse items-center gap-2 border-2 border-[#31694E] text-[#31694E] hover:bg-[#31694E] hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
          >
            View All
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}