// components/WishlistPage.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingCart, Trash2, Eye, Share2 } from 'lucide-react';
import { WishlistItem, Product, getProductById, productToCartItem } from '../components/data_products/products';

interface WishlistPageProps {
  initialWishlistItems?: WishlistItem[];
}

const WishlistPage: React.FC<WishlistPageProps> = ({ initialWishlistItems = [] }) => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>(initialWishlistItems);
  const [loading, setLoading] = useState(false);
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  // Simulate loading wishlist from backend
  useEffect(() => {
    const loadWishlist = async () => {
      setLoading(true);
      try {
        // In a real app, this would be an API call
        // const response = await fetch('/api/wishlist');
        // const data = await response.json();
        // setWishlistItems(data);
        
        // For demo, using initial props or localStorage
        const storedWishlist = localStorage.getItem('wishlist');
        if (storedWishlist) {
          setWishlistItems(JSON.parse(storedWishlist));
        }
      } catch (error) {
        console.error('Failed to load wishlist:', error);
      } finally {
        setLoading(false);
      }
    };

    if (initialWishlistItems.length === 0) {
      loadWishlist();
    }
  }, [initialWishlistItems]);

  // Save to localStorage whenever wishlist changes
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const removeFromWishlist = async (itemId: string) => {
    try {
      // API call to remove from backend
      // await fetch(`/api/wishlist/${itemId}`, { method: 'DELETE' });
      
      setWishlistItems(prev => prev.filter(item => item.id !== itemId));
      setSelectedItems(prev => {
        const newSelected = new Set(prev);
        newSelected.delete(itemId);
        return newSelected;
      });
    } catch (error) {
      console.error('Failed to remove item:', error);
    }
  };

  const removeSelectedItems = async () => {
    try {
      // API call to remove multiple items
      // await fetch('/api/wishlist/bulk-delete', {
      //   method: 'DELETE',
      //   body: JSON.stringify({ ids: Array.from(selectedItems) })
      // });
      
      setWishlistItems(prev => prev.filter(item => !selectedItems.has(item.id)));
      setSelectedItems(new Set());
    } catch (error) {
      console.error('Failed to remove items:', error);
    }
  };

  const addToCart = async (product: Product) => {
    try {
      const cartItem = productToCartItem(product);
      // API call to add to cart
      // await fetch('/api/cart', {
      //   method: 'POST',
      //   body: JSON.stringify(cartItem)
      // });
      
      // For demo, just show success
      alert(`Added ${product.name} to cart!`);
    } catch (error) {
      console.error('Failed to add to cart:', error);
    }
  };

  const toggleSelectItem = (itemId: string) => {
    setSelectedItems(prev => {
      const newSelected = new Set(prev);
      if (newSelected.has(itemId)) {
        newSelected.delete(itemId);
      } else {
        newSelected.add(itemId);
      }
      return newSelected;
    });
  };

  const toggleSelectAll = () => {
    if (selectedItems.size === wishlistItems.length) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(wishlistItems.map(item => item.id)));
    }
  };

  const shareWishlist = () => {
    const itemNames = wishlistItems.map(item => item.product.name).join(', ');
    if (navigator.share) {
      navigator.share({
        title: 'My Wishlist',
        text: `Check out my wishlist: ${itemNames}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(`My Wishlist: ${itemNames}`);
      alert('Wishlist copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-violet-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
              <p className="mt-2 text-gray-600">
                {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved for later
              </p>
            </div>
            
            {wishlistItems.length > 0 && (
              <div className="mt-4 sm:mt-0 flex space-x-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={shareWishlist}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </motion.button>
                
                {selectedItems.size > 0 && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={removeSelectedItems}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Remove Selected ({selectedItems.size})
                  </motion.button>
                )}
              </div>
            )}
          </div>
        </motion.div>

        {/* Wishlist Items */}
        {wishlistItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <Heart className="mx-auto h-24 w-24 text-gray-300" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Your wishlist is empty</h3>
            <p className="mt-2 text-gray-500">Start adding items you love!</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-violet-600 hover:bg-violet-700"
            >
              Continue Shopping
            </motion.button>
          </motion.div>
        ) : (
          <div className="space-y-6">
            {/* Select All */}
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={selectedItems.size === wishlistItems.length && wishlistItems.length > 0}
                onChange={toggleSelectAll}
                className="h-4 w-4 text-violet-600 focus:ring-violet-500 border-gray-300 rounded"
              />
              <label className="ml-2 text-sm text-gray-700">
                Select all {wishlistItems.length} items
              </label>
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {wishlistItems.map((item, index) => (
                  <WishlistItemCard
                    key={item.id}
                    item={item}
                    index={index}
                    isSelected={selectedItems.has(item.id)}
                    onSelect={() => toggleSelectItem(item.id)}
                    onRemove={() => removeFromWishlist(item.id)}
                    onAddToCart={() => addToCart(item.product)}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

interface WishlistItemCardProps {
  item: WishlistItem;
  index: number;
  isSelected: boolean;
  onSelect: () => void;
  onRemove: () => void;
  onAddToCart: () => void;
}

const WishlistItemCard: React.FC<WishlistItemCardProps> = ({
  item,
  index,
  isSelected,
  onSelect,
  onRemove,
  onAddToCart,
}) => {
  const { product } = item;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        
        {/* Selection Checkbox */}
        <div className="absolute top-3 left-3">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={onSelect}
            className="h-5 w-5 text-violet-600 focus:ring-violet-500 border-gray-300 rounded"
          />
        </div>

        {/* Badges */}
        <div className="absolute top-3 right-3 space-y-1">
          {product.isNew && (
            <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
              New
            </span>
          )}
          {product.isBestSeller && (
            <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
              Bestseller
            </span>
          )}
        </div>

        {/* Action Buttons Overlay */}
        <div className="absolute bottom-3 right-3 flex space-x-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onAddToCart}
            className="p-2 bg-violet-600 text-white rounded-full shadow-lg hover:bg-violet-700"
          >
            <ShoppingCart className="h-4 w-4" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onRemove}
            className="p-2 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700"
          >
            <Trash2 className="h-4 w-4" />
          </motion.button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 line-clamp-2">{product.name}</h3>
        
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">
              ${product.price}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          {product.rating && (
            <div className="flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-sm ${
                      i < Math.floor(product.rating!) 
                        ? 'text-yellow-400' 
                        : 'text-gray-300'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="ml-1 text-sm text-gray-600">
                ({product.reviewCount})
              </span>
            </div>
          )}
        </div>

        {product.description && (
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">
            {product.description}
          </p>
        )}

        {/* Stock Status */}
        <div className="mt-3">
          {product.stock === 0 ? (
            <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-red-100 text-red-800">
              Out of Stock
            </span>
          ) : product.stock && product.stock < 10 ? (
            <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-orange-100 text-orange-800">
              Only {product.stock} left
            </span>
          ) : (
            <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
              In Stock
            </span>
          )}
        </div>

        {/* Added Date */}
        <div className="mt-3 text-xs text-gray-500">
          Added on {new Date(item.addedAt).toLocaleDateString()}
        </div>
      </div>
    </motion.div>
  );
};

export default WishlistPage;