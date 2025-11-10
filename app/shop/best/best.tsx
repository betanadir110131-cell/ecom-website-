// components/BestSellersPage.tsx
"use client";

import { useState, useEffect } from "react";
import { ProductGrid } from "@/app/home/ProductGrid";
import { TrophyIcon, SparklesIcon } from "@heroicons/react/24/solid";
import { getBestSellers, Product } from "@/components/data/products"; // ✅ import your shared data

export default function BestSellersPage() {
  const [bestSellers, setBestSellers] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate async load (like an API call)
    setTimeout(() => {
      const data = getBestSellers();
      setBestSellers(data);
      setLoading(false);
    }, 800);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto"></div>
          <p className="mt-4 text-gray-300">Loading best sellers...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 to-orange-600/10"></div>
        <div className="absolute top-10 left-10 opacity-20">
          <TrophyIcon className="w-24 h-24 text-yellow-400" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-20">
          <SparklesIcon className="w-24 h-24 text-orange-400" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <TrophyIcon className="w-16 h-16 text-yellow-400 animate-bounce" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Best Sellers
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-6">
            Discover our most loved and highest-rated products that customers can’t stop buying.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mt-8">
            <div className="bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold text-yellow-400">{bestSellers.length}+</div>
              <div className="text-gray-400 text-sm">Top Products</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold text-orange-400">
                {(
                  bestSellers.reduce((sum, p) => sum + (p.rating || 0), 0) /
                  (bestSellers.length || 1)
                ).toFixed(1)}★
              </div>
              <div className="text-gray-400 text-sm">Average Rating</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold text-green-400">
                {bestSellers.reduce((sum, p) => sum + (p.unitsSold || 0), 0).toLocaleString()}+
              </div>
              <div className="text-gray-400 text-sm">Units Sold</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <ProductGrid
            products={bestSellers}
            variant="bestsellers"
            title="All Best Sellers"
            description="Our most popular products based on customer purchases and ratings"
            itemsPerPage={12}
            showFilters={true}
            showSort={true}
          />
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why Our Best Sellers?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrophyIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Customer Favorites</h3>
                <p className="text-gray-400 text-sm">
                  Products loved by thousands of satisfied customers.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SparklesIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Top Quality</h3>
                <p className="text-gray-400 text-sm">
                  Highest quality standards and excellent performance.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">✓</span>
                </div>
                <h3 className="font-semibold mb-2">Verified Reviews</h3>
                <p className="text-gray-400 text-sm">
                  Real reviews from verified purchasers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
