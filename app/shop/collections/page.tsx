// components/CollectionPage.tsx
"use client";

import { useState, useEffect } from 'react';
import { Collection, getCollectionById } from '@/components/data/products';
import { ProductCard } from '@/app/home/ProductCard';

interface CollectionPageProps {
  collectionId?: string;
  collection?: Collection;
}

export default function CollectionPage({ collectionId, collection }: CollectionPageProps) {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string>>({});
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentCollection, setCurrentCollection] = useState<Collection | null>(null);

  // Load collection data
  useEffect(() => {
    const loadCollection = async () => {
      try {
        setLoading(true);
        
        // If collection is provided directly, use it
        if (collection) {
          setCurrentCollection(collection);
          setLoading(false);
          return;
        }
        
        // If collectionId is provided, fetch the collection
        if (collectionId) {
          const foundCollection = getCollectionById(collectionId);
          if (foundCollection) {
            setCurrentCollection(foundCollection);
          } else {
            setError(`Collection "${collectionId}" not found`);
          }
        } else {
          setError('No collection specified');
        }
        
        setLoading(false);
      } catch (err) {
        setError('Failed to load collection');
        setLoading(false);
      }
    };

    loadCollection();
  }, [collectionId, collection]);

  // Filter products based on selected filters
  const filteredProducts = currentCollection?.products.filter(product => {
    return Object.entries(selectedFilters).every(([filterId, value]) => {
      if (!value) return true;
      
      switch (filterId) {
        case 'category':
          return product.category === value;
        case 'price':
          const price = product.price;
          switch (value) {
            case 'Under $50': return price < 50;
            case '$50 - $100': return price >= 50 && price <= 100;
            case '$100 - $200': return price >= 100 && price <= 200;
            case 'Over $200': return price > 200;
            case 'Under $100': return price < 100;
            case '$100 - $200': return price >= 100 && price <= 200;
            case '$200 - $300': return price >= 200 && price <= 300;
            case 'Over $300': return price > 300;
            case 'Under $150': return price < 150;
            case '$150 - $250': return price >= 150 && price <= 250;
            case 'Over $250': return price > 250;
            default: return true;
          }
        case 'rating':
          const rating = product.rating || 0;
          switch (value) {
            case '4+ Stars': return rating >= 4;
            case '4.5+ Stars': return rating >= 4.5;
            case '5 Stars': return rating === 5;
            default: return true;
          }
        case 'discount':
          if (!product.originalPrice) return false;
          const discount = ((product.originalPrice - product.price) / product.originalPrice) * 100;
          switch (value) {
            case '10-20% Off': return discount >= 10 && discount <= 20;
            case '20-30% Off': return discount >= 20 && discount <= 30;
            case '30-40% Off': return discount >= 30 && discount <= 40;
            case '40%+ Off': return discount > 40;
            default: return true;
          }
        default:
          return true;
      }
    });
  }) || [];

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-500 mx-auto"></div>
          <p className="mt-4 text-gray-300">Loading collection...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !currentCollection) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😔</div>
          <h1 className="text-2xl font-bold mb-2">Collection Not Found</h1>
          <p className="text-gray-400 mb-6">
            {error || 'The collection you are looking for does not exist.'}
          </p>
          <button 
            onClick={() => window.history.back()}
            className="bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-lg transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = (product: any) => {
    console.log('Added to cart:', product);
    // Add your cart logic here
  };

  const handleToggleWishlist = (product: any) => {
    console.log('Toggled wishlist:', product);
    // Add your wishlist logic here
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Collection Header */}
      <section className="bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <span>Home</span>
            <span>/</span>
            <span>Collections</span>
            <span>/</span>
            <span className="text-white">{currentCollection.name}</span>
          </nav>
          
          <h1 className="text-4xl font-bold mb-4">{currentCollection.name}</h1>
          <p className="text-gray-300 max-w-2xl">{currentCollection.description}</p>
          
          {/* Collection Stats */}
          <div className="flex items-center gap-6 mt-6 text-sm text-gray-400">
            <span>{currentCollection.products.length} products</span>
            {currentCollection.filters.length > 0 && (
              <span>{currentCollection.filters.length} filter options</span>
            )}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Filters - Only show if filters exist */}
          {currentCollection.filters.length > 0 && (
            <aside className="hidden lg:block lg:w-1/4">
              <div className="sticky top-4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Filters</h2>
                  {Object.keys(selectedFilters).length > 0 && (
                    <button 
                      onClick={() => setSelectedFilters({})}
                      className="text-sm text-violet-400 hover:text-violet-300"
                    >
                      Clear all
                    </button>
                  )}
                </div>

                {currentCollection.filters.map((filter) => (
                  <div key={filter.id} className="mb-6 p-4 bg-gray-800 rounded-lg">
                    <h3 className="font-semibold mb-3 text-lg">{filter.name}</h3>
                    <div className="space-y-2">
                      {filter.options.map((option) => (
                        <label key={option} className="flex items-center gap-3 cursor-pointer group">
                          <input
                            type="radio"
                            name={filter.id}
                            className="rounded bg-gray-700 border-gray-600 text-violet-500 focus:ring-violet-500"
                            checked={selectedFilters[filter.id] === option}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedFilters(prev => ({
                                  ...prev,
                                  [filter.id]: option
                                }));
                              } else {
                                const newFilters = { ...selectedFilters };
                                delete newFilters[filter.id];
                                setSelectedFilters(newFilters);
                              }
                            }}
                          />
                          <span className="text-gray-300 group-hover:text-white transition-colors">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          )}

          {/* Mobile Filter Trigger */}
          {currentCollection.filters.length > 0 && (
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="bg-gray-800 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-700 transition-colors"
              >
                <span>Filters</span>
                {Object.keys(selectedFilters).length > 0 && (
                  <span className="bg-violet-500 text-white text-xs px-2 py-1 rounded-full">
                    {Object.keys(selectedFilters).length}
                  </span>
                )}
              </button>
            </div>
          )}

          {/* Product Grid */}
          <main className="flex-1">
            {/* Results Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                </h2>
                {Object.keys(selectedFilters).length > 0 && (
                  <p className="text-gray-400 text-sm mt-1">
                    Filtered results
                  </p>
                )}
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    showRating={true}
                    animationDelay={index * 100}
                    onAddToCart={handleAddToCart}
                    onToggleWishlist={handleToggleWishlist}
                  />
                ))}
              </div>
            ) : (
              // Empty state
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold mb-2">No products found</h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your filters or search terms.
                </p>
                {Object.keys(selectedFilters).length > 0 && (
                  <button 
                    onClick={() => setSelectedFilters({})}
                    className="bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-lg transition-colors"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Filters Modal */}
      {mobileFiltersOpen && currentCollection.filters.length > 0 && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed right-0 top-0 h-full w-80 bg-gray-800 p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Filters</h2>
              <button 
                onClick={() => setMobileFiltersOpen(false)}
                className="text-2xl hover:text-gray-300"
              >
                ✕
              </button>
            </div>
            
            {currentCollection.filters.map((filter) => (
              <div key={filter.id} className="mb-6">
                <h3 className="font-semibold mb-3 text-lg">{filter.name}</h3>
                <div className="space-y-2">
                  {filter.options.map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name={filter.id}
                        className="rounded bg-gray-700 border-gray-600 text-violet-500 focus:ring-violet-500"
                        checked={selectedFilters[filter.id] === option}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedFilters(prev => ({
                              ...prev,
                              [filter.id]: option
                            }));
                          }
                        }}
                      />
                      <span className="text-gray-300">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="sticky bottom-0 bg-gray-800 pt-4 border-t border-gray-700">
              <button 
                onClick={() => setSelectedFilters({})}
                className="w-full bg-gray-700 hover:bg-gray-600 py-3 rounded-lg mb-2 transition-colors"
              >
                Clear All
              </button>
              <button 
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-violet-600 hover:bg-violet-700 py-3 rounded-lg transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}