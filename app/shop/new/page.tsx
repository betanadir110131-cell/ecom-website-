// components/NewArrivalsPage.tsx
'use client';
import { useState, useEffect } from 'react';
import { ProductCard } from '@/app/home/ProductCard';
import FilterSidebar from '@/components/FilterSidebar';
import { Product } from '@/app/types/index';
import { ProductGrid } from '@/app/home/ProductGrid';

export default function NewArrivalsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState({ category: '', priceRange: '' });
  const [sortBy, setSortBy] = useState('newest');
  const [loading, setLoading] = useState(true);

  // Mock data fetch - replace with your actual API call
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
         const mockProducts: Product[] = [
          {
            id: "1",
            name: "Wireless Bluetooth Headphones",
            price: 79.99,
            originalPrice: 99.99,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
            rating: 4.5,
            reviewCount: 128,
            category: "electronics",
            description: "High-quality wireless headphones with noise cancellation",
            tags: ["wireless", "noise-cancelling", "bluetooth"],
            stock: 25,
            unitsSold: 450,
            isBestSeller: true,
            salesRank: 1,
            createdAt: "2024-01-15"
          },
          {
            id: "2",
            name: "Smart Fitness Watch",
            price: 199.99,
            originalPrice: 249.99,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
            rating: 4.8,
            reviewCount: 89,
            category: "wearables",
            description: "Advanced fitness tracking with heart rate monitoring",
            tags: ["fitness", "smartwatch", "health"],
            stock: 15,
            unitsSold: 320,
            isNew: true,
            createdAt: "2024-03-01"
          },
          {
            id: "3",
            name: "Organic Cotton T-Shirt",
            price: 29.99,
            originalPrice: 39.99,
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
            rating: 4.3,
            reviewCount: 256,
            category: "clothing",
            description: "Comfortable organic cotton t-shirt in various colors",
            tags: ["organic", "cotton", "sustainable"],
            stock: 0,
            unitsSold: 1200,
            isBestSeller: true,
            salesRank: 2,
            createdAt: "2023-12-10"
          },
          {
            id: "4",
            name: "Stainless Steel Water Bottle",
            price: 24.99,
            image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=300&fit=crop",
            rating: 4.7,
            reviewCount: 342,
            category: "lifestyle",
            description: "Keep your drinks hot or cold for hours",
            tags: ["eco-friendly", "insulated", "bpa-free"],
            stock: 45,
            unitsSold: 890,
            isBestSeller: true,
            salesRank: 3,
            createdAt: "2024-01-20"
          },
          {
            id: "5",
            name: "Gaming Mechanical Keyboard",
            price: 129.99,
            originalPrice: 159.99,
            image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
            rating: 4.6,
            reviewCount: 167,
            category: "gaming",
            description: "RGB mechanical keyboard with customizable keys",
            tags: ["gaming", "rgb", "mechanical"],
            stock: 8,
            unitsSold: 210,
            isNew: true,
            createdAt: "2024-02-28"
          },
          {
            id: "6",
            name: "Yoga Mat Premium",
            price: 49.99,
            originalPrice: 69.99,
            image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
            rating: 4.4,
            reviewCount: 198,
            category: "fitness",
            description: "Non-slip yoga mat for all types of exercises",
            tags: ["yoga", "fitness", "non-slip"],
            stock: 32,
            unitsSold: 540,
            createdAt: "2024-01-10"
          },
        ];
        setProducts(mockProducts);
        setFilteredProducts(mockProducts);
        setLoading(false);
      }, 1000);
    };

    fetchProducts();
  }, []);

  // Apply filters and sorting
  useEffect(() => {
    let result = [...products];

    // Apply category filter
    if (filters.category) {
      result = result.filter(product => product.category === filters.category);
    }

    // Apply price range filter
    if (filters.priceRange) {
      switch (filters.priceRange) {
        case 'Under $25':
          result = result.filter(product => product.price < 25);
          break;
        case '$25 - $50':
          result = result.filter(product => product.price >= 25 && product.price <= 50);
          break;
        case '$50 - $100':
          result = result.filter(product => product.price > 50 && product.price <= 100);
          break;
        case '$100 - $200':
          result = result.filter(product => product.price > 100 && product.price <= 200);
          break;
        case 'Over $200':
          result = result.filter(product => product.price > 200);
          break;
      }
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
      default:
        // Sort by newest (assuming higher IDs are newer, or you could add a date field)
        result.sort((a, b) => parseInt(b.id) - parseInt(a.id));
        break;
    }

    setFilteredProducts(result);
  }, [products, filters, sortBy]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600 mx-auto"></div>
          <p className="mt-4 text-gray-400">Loading new arrivals...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-violet-600 to-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">New Arrivals</h1>
          <p className="text-gray-300">Discover our latest products</p>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters */}
          <aside className="lg:w-1/4">
            <FilterSidebar filters={filters} onFilterChange={setFilters} />
          </aside>

          {/* Product Grid */}
          <main className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-400">{filteredProducts.length} products found</p>
              <select 
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No products found matching your filters.</p>
                <button
                  onClick={() => setFilters({ category: '', priceRange: '' })}
                  className="mt-4 text-violet-400 hover:text-violet-300 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    index={index}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}