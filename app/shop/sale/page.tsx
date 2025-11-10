// components/SalePage.tsx
'use client';

import { useState, useEffect } from 'react';
import { getOnSaleProducts, Product } from '@/components/data/products'; // ✅ import your shared product data

export default function SalePage() {
  const [saleProducts, setSaleProducts] = useState<Product[]>([]);
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 15, minutes: 30 });

  // Fetch sale products on mount
  useEffect(() => {
    const products = getOnSaleProducts();
    setSaleProducts(products);
  }, []);

  // Optional: live countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes } = prev;
        if (minutes > 0) minutes--;
        else if (hours > 0) {
          hours--;
          minutes = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
        }
        return { days, hours, minutes };
      });
    }, 60000); // update every minute
    return () => clearInterval(timer);
  }, []);

  const calculateDiscount = (original: number, sale: number) => {
    return Math.round(((original - sale) / original) * 100);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Sale Header */}
      <section className="bg-gradient-to-r from-blue-600 to-violet-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">End of Season Sale</h1>
          <p className="text-gray-200 mb-6">Up to 70% off selected items</p>
          
          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 mb-4">
            <div className="text-center">
              <div className="bg-gray-800 rounded-lg px-4 py-2 text-2xl font-bold">
                {timeLeft.days}
              </div>
              <span className="text-sm text-gray-300">Days</span>
            </div>
            <div className="text-center">
              <div className="bg-gray-800 rounded-lg px-4 py-2 text-2xl font-bold">
                {timeLeft.hours}
              </div>
              <span className="text-sm text-gray-300">Hours</span>
            </div>
            <div className="text-center">
              <div className="bg-gray-800 rounded-lg px-4 py-2 text-2xl font-bold">
                {timeLeft.minutes}
              </div>
              <span className="text-sm text-gray-300">Minutes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sale Products Grid */}
      <div className="container mx-auto px-4 py-8">
        {saleProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {saleProducts.map((product) => (
              <div
                key={product.id}
                className="bg-gray-800 rounded-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Discount Badge */}
                  {product.originalPrice && (
                    <div className="absolute top-3 right-3 bg-blue-500 text-white px-3 py-1 rounded-full font-bold">
                      {calculateDiscount(product.originalPrice, product.price)}% OFF
                    </div>
                  )}

                  {/* Low Stock Warning */}
                  {product.stock && product.stock < 10 && (
                    <div className="absolute bottom-3 left-3 bg-yellow-500 text-gray-900 px-2 py-1 rounded text-sm font-semibold">
                      Almost Gone!
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>

                  {/* Price Comparison */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl font-bold text-violet-400">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <>
                        <span className="text-lg text-gray-400 line-through">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                        <span className="text-sm text-blue-400 font-semibold">
                          Save ${(product.originalPrice - product.price).toFixed(2)}
                        </span>
                      </>
                    )}
                  </div>

                  <button className="w-full bg-violet-600 hover:bg-violet-700 text-white py-2 rounded-lg transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 mt-10 text-lg">
            No sale products available at the moment.
          </p>
        )}
      </div>
    </div>
  );
}
