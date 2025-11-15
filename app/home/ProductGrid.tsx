// components/ProductGrid.tsx
"use client";

import { useState, useEffect } from "react";
import { ProductCard } from "./ProductCard";
import { Product, allProducts } from "../../components/data_products/products";
import Link from "next/link";

interface ProductGridProps {
  products?: Product[];
  itemsPerPage?: number;
  showFilters?: boolean;
  // Add the missing props
  variant?: string;
  title?: string;
  description?: string;
}

export function ProductGrid({
  products = allProducts,
  itemsPerPage = 12,
  showFilters = true,
  // New props with default values
  variant = "default",
  title,
  description,
}: ProductGridProps) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());

  // Extract unique categories
  const categories = [
    "all",
    ...new Set(products.map((product) => product.category).filter(Boolean)),
  ] as string[];

  // Filter and sort logic
  useEffect(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Sorting
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break; // Featured (no change)
    }

    setFilteredProducts(result);
    setCurrentPage(1);
  }, [products, selectedCategory, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Handlers
  const handleAddToCart = (product: Product) => {
    console.log("Added to cart:", product);
  };

  const handleToggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const newWishlist = new Set(prev);
      newWishlist.has(product.id)
        ? newWishlist.delete(product.id)
        : newWishlist.add(product.id);
      return newWishlist;
    });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header with new title and description props */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          {/* Use custom title if provided, otherwise default */}
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {title || "Our Products"}
          </h1>
          <p className="text-gray-600">
            {description || `Showing ${currentProducts.length} of ${filteredProducts.length} products`}
          </p>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white border border-gray-300 text-gray-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#658C58] shadow-sm"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === "all"
                    ? "All Categories"
                    : category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-gray-300 text-gray-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#658C58] shadow-sm"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>
        )}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {currentProducts.map((product, index) => (
          <div key={product.id} className="relative group hover:scale-[1.02] transition-transform">
            <Link
              href={`/product/${product.id}`}
              className="absolute inset-0 z-10"
              aria-label={`View ${product.name}`}
            />
            <div className="relative z-20">
              <ProductCard
                product={product}
                animationDelay={index * 100}
                onAddToCart={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  handleAddToCart(product);
                }}
                onToggleWishlist={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  handleToggleWishlist(product);
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {currentProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">😔</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No products found
          </h3>
          <p className="text-gray-600">
            Try adjusting your filters or search terms.
          </p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors shadow-sm"
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            if (
              page === 1 ||
              page === totalPages ||
              (page >= currentPage - 1 && page <= currentPage + 1)
            ) {
              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded-lg transition-colors border shadow-sm ${
                    currentPage === page
                      ? "bg-[#31694E] text-white border-[#31694E]"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {page}
                </button>
              );
            } else if (page === currentPage - 2 || page === currentPage + 2) {
              return (
                <span key={page} className="px-2 text-gray-500">
                  ...
                </span>
              );
            }
            return null;
          })}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors shadow-sm"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}