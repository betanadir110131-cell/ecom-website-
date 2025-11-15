// components/ShopPage.tsx
'use client';

import { useState, useEffect, useMemo } from 'react';
import { getAllProducts, Product, searchProducts, getNewArrivals, getBestSellers, getDiscountedProducts } from '@/components/data_products/products';
import { ProductGrid } from '@/app/home/ProductGrid';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, X, Star, TrendingUp, Clock, Zap, 
  Shield, Truck, RefreshCw, Tag, Award, Sparkles 
} from 'lucide-react';

export default function ShopPage() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [activeSection, setActiveSection] = useState('all');
  
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { user } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get computed data
  const newArrivals = useMemo(() => getNewArrivals(), [allProducts]);
  const bestSellers = useMemo(() => getBestSellers(), [allProducts]);
  const discountedProducts = useMemo(() => getDiscountedProducts(), [allProducts]);
  const featuredProducts = useMemo(() => 
    allProducts.filter(p => p.isFeatured || p.rating >= 4.5).slice(0, 8), 
    [allProducts]
  );

  // Get search query from URL on component mount
  useEffect(() => {
    const query = searchParams.get('q');
    const category = searchParams.get('category');
    const section = searchParams.get('section');
    
    if (query) setSearchQuery(query);
    if (category) setSelectedCategory(category);
    if (section) setActiveSection(section);
  }, [searchParams]);

  // Fetch all products on mount
  useEffect(() => {
    setTimeout(() => {
      const products = getAllProducts();
      setAllProducts(products);
      setFilteredProducts(products);
      setLoading(false);
    }, 800);
  }, []);

  // Filter and sort products based on criteria
  useEffect(() => {
    let results = [...allProducts];

    // Apply section filter
    switch (activeSection) {
      case 'new-arrivals':
        results = newArrivals;
        break;
      case 'best-sellers':
        results = bestSellers;
        break;
      case 'on-sale':
        results = discountedProducts;
        break;
      case 'featured':
        results = featuredProducts;
        break;
    }

    // Apply search filter
    if (searchQuery.trim()) {
      results = searchProducts(searchQuery).filter(product => 
        results.includes(product)
      );
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      results = results.filter(product => 
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Apply price range filter
    switch (priceRange) {
      case 'under-50':
        results = results.filter(p => p.price < 50);
        break;
      case '50-100':
        results = results.filter(p => p.price >= 50 && p.price <= 100);
        break;
      case '100-200':
        results = results.filter(p => p.price >= 100 && p.price <= 200);
        break;
      case 'over-200':
        results = results.filter(p => p.price > 200);
        break;
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        results.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        results.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        results.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        results.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'newest':
        results.sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());
        break;
      case 'popular':
        results.sort((a, b) => (b.unitsSold || 0) - (a.unitsSold || 0));
        break;
    }

    setFilteredProducts(results);
  }, [allProducts, searchQuery, selectedCategory, priceRange, sortBy, activeSection, newArrivals, bestSellers, discountedProducts, featuredProducts]);

  // Get unique categories for filter
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(allProducts.map(p => p.category)));
    return ['all', ...uniqueCategories];
  }, [allProducts]);

  const handleAddToCart = (product: Product) => {
    if (!user) {
      router.push(`/login?redirect=/shop`);
      return;
    }
    addToCart(product);
  };

  const handleToggleWishlist = (product: Product) => {
    if (!user) {
      router.push(`/login?redirect=/shop`);
      return;
    }
    toggleWishlist(product.id);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setPriceRange('all');
    setSortBy('default');
    setActiveSection('all');
  };

  const sectionButtons = [
    { id: 'all', label: 'All Products', icon: '🛍️', count: allProducts.length },
    { id: 'new-arrivals', label: 'New Arrivals', icon: '🆕', count: newArrivals.length },
    { id: 'best-sellers', label: 'Best Sellers', icon: '🔥', count: bestSellers.length },
    { id: 'on-sale', label: 'On Sale', icon: '💰', count: discountedProducts.length },
    { id: 'featured', label: 'Featured', icon: '⭐', count: featuredProducts.length },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="rounded-full h-12 w-12 border-b-2 border-[#31694E] mx-auto"
          />
          <p className="mt-4 text-gray-600">Loading amazing products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Shop Header */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-[#F0E491]/20 py-16 border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Discover Our{' '}
            <span className="bg-gradient-to-r from-[#31694E] via-[#658C58] to-[#BBC863] bg-clip-text text-transparent">
              Premium Collection
            </span>
          </motion.h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Explore our carefully curated selection of high-quality products designed to enhance your lifestyle
          </p>
          
          {/* Quick Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mt-8"
          >
            {[
              { value: allProducts.length, label: 'Total Products', icon: '📦' },
              { value: categories.length - 1, label: 'Categories', icon: '🏷️' },
              { value: newArrivals.length, label: 'New Arrivals', icon: '🆕' },
              { value: discountedProducts.length, label: 'On Sale', icon: '💰' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200/50"
              >
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-xl font-bold text-[#31694E]">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section Navigation */}
      <section className="border-b border-gray-200 bg-white sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto py-4 gap-2 scrollbar-hide">
            {sectionButtons.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 ${
                  activeSection === section.id
                    ? 'bg-[#31694E] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{section.icon}</span>
                <span className="font-medium">{section.label}</span>
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  activeSection === section.id 
                    ? 'bg-white/20 text-white' 
                    : 'bg-gray-300 text-gray-700'
                }`}>
                  {section.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and Search Section */}
      <section className="border-b border-gray-200 bg-gray-50/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search Bar */}
            <div className="w-full lg:w-auto flex-1 max-w-md">
              <form onSubmit={handleSearchSubmit} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products by name, category, or feature..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#31694E] focus:border-transparent shadow-sm"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </form>
            </div>

            {/* Desktop Filter Controls */}
            <div className="hidden lg:flex flex-wrap gap-3 items-center">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2.5 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#31694E] shadow-sm min-w-[140px]"
              >
                <option value="all">All Categories</option>
                {categories.filter(cat => cat !== 'all').map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>

              {/* Price Filter */}
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-2.5 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#31694E] shadow-sm min-w-[140px]"
              >
                <option value="all">All Prices</option>
                <option value="under-50">Under $50</option>
                <option value="50-100">$50 - $100</option>
                <option value="100-200">$100 - $200</option>
                <option value="over-200">Over $200</option>
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2.5 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#31694E] shadow-sm min-w-[160px]"
              >
                <option value="default">Sort By</option>
                <option value="newest">Newest First</option>
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
                <option value="rating">Highest Rated</option>
              </select>

              {/* Clear Filters */}
              {(searchQuery || selectedCategory !== 'all' || priceRange !== 'all' || sortBy !== 'default') && (
                <button
                  onClick={clearFilters}
                  className="px-4 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-xl transition-colors flex items-center gap-2"
                >
                  <X className="w-4 h-4" />
                  Clear All
                </button>
              )}
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="lg:hidden px-4 py-2.5 bg-[#31694E] text-white rounded-xl flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>
          </div>

          {/* Mobile Filters */}
          <AnimatePresence>
            {showMobileFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-4 space-y-4 overflow-hidden"
              >
                <div className="grid grid-cols-2 gap-3">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#31694E]"
                  >
                    <option value="all">All Categories</option>
                    {categories.filter(cat => cat !== 'all').map(category => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>

                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#31694E]"
                  >
                    <option value="all">All Prices</option>
                    <option value="under-50">Under $50</option>
                    <option value="50-100">$50 - $100</option>
                    <option value="100-200">$100 - $200</option>
                    <option value="over-200">Over $200</option>
                  </select>
                </div>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#31694E]"
                >
                  <option value="default">Sort By</option>
                  <option value="newest">Newest First</option>
                  <option value="popular">Most Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                  <option value="rating">Highest Rated</option>
                </select>

                <button
                  onClick={clearFilters}
                  className="w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors"
                >
                  Clear All Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Search Results Info */}
          {(searchQuery || selectedCategory !== 'all' || priceRange !== 'all' || activeSection !== 'all') && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 flex flex-wrap items-center justify-between gap-2"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-gray-600">Active filters:</span>
                {searchQuery && (
                  <span className="px-2 py-1 bg-[#31694E] text-white text-sm rounded-full flex items-center gap-1">
                    Search: "{searchQuery}"
                    <button onClick={() => setSearchQuery('')} className="ml-1 hover:text-gray-200">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedCategory !== 'all' && (
                  <span className="px-2 py-1 bg-[#658C58] text-white text-sm rounded-full flex items-center gap-1">
                    Category: {selectedCategory}
                    <button onClick={() => setSelectedCategory('all')} className="ml-1 hover:text-gray-200">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {priceRange !== 'all' && (
                  <span className="px-2 py-1 bg-[#BBC863] text-gray-900 text-sm rounded-full flex items-center gap-1">
                    Price: {priceRange.replace('-', ' - ').replace('under', '<').replace('over', '>')}
                    <button onClick={() => setPriceRange('all')} className="ml-1 hover:text-gray-600">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {activeSection !== 'all' && (
                  <span className="px-2 py-1 bg-[#F0E491] text-gray-900 text-sm rounded-full flex items-center gap-1">
                    Section: {sectionButtons.find(s => s.id === activeSection)?.label}
                    <button onClick={() => setActiveSection('all')} className="ml-1 hover:text-gray-600">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </div>
              
              <button
                onClick={clearFilters}
                className="text-[#31694E] hover:text-[#658C58] text-sm font-medium flex items-center gap-1"
              >
                <X className="w-4 h-4" />
                Clear all
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeSection}-${searchQuery}-${selectedCategory}-${priceRange}-${sortBy}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProducts.length > 0 ? (
                <ProductGrid
                  products={filteredProducts}
                  onAddToCart={handleAddToCart}
                  onToggleWishlist={handleToggleWishlist}
                  itemsPerPage={12}
                  showFilters={false}
                />
              ) : (
                <div className="text-center py-16">
                  <div className="text-8xl mb-6">🔍</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">No products found</h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    {searchQuery 
                      ? `We couldn't find any products matching "${searchQuery}". Try different keywords or check out our popular categories.`
                      : 'No products match your current filters. Try adjusting your criteria to see more options.'
                    }
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={clearFilters}
                      className="bg-[#31694E] hover:bg-[#658C58] text-white px-6 py-3 rounded-xl transition-colors font-medium"
                    >
                      Clear All Filters
                    </button>
                    <button
                      onClick={() => setActiveSection('all')}
                      className="border-2 border-[#31694E] text-[#31694E] hover:bg-[#31694E] hover:text-white px-6 py-3 rounded-xl transition-colors font-medium"
                    >
                      View All Products
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Shop Features */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Shop With Us?</h2>
            <p className="text-gray-600 text-lg">
              We're committed to providing the best shopping experience with premium quality and exceptional service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Truck className="w-8 h-8" />,
                title: "Free Shipping",
                description: "Free delivery on orders over $50",
                color: "from-green-500 to-emerald-600"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Secure Payment",
                description: "Your payment information is safe with us",
                color: "from-blue-500 to-cyan-600"
              },
              {
                icon: <RefreshCw className="w-8 h-8" />,
                title: "Easy Returns",
                description: "30-day hassle-free return policy",
                color: "from-purple-500 to-pink-600"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Quality Guarantee",
                description: "Premium products with warranty",
                color: "from-orange-500 to-red-600"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Fast Support",
                description: "24/7 customer service",
                color: "from-yellow-500 to-amber-600"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Premium Quality",
                description: "Carefully curated products",
                color: "from-indigo-500 to-purple-600"
              },
              {
                icon: <Tag className="w-8 h-8" />,
                title: "Best Prices",
                description: "Competitive pricing guaranteed",
                color: "from-pink-500 to-rose-600"
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "New Arrivals",
                description: "Fresh products weekly",
                color: "from-teal-500 to-green-600"
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-[#31694E] to-[#658C58] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-white/80 mb-8 max-w-md mx-auto">
            Get notified about new arrivals, exclusive deals, and special promotions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white backdrop-blur-sm"
            />
            <button className="px-6 py-3 bg-white text-[#31694E] font-semibold rounded-xl hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}