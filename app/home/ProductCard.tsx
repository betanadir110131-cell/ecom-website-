// components/Product/ProductCard.tsx
'use client';
import { motion } from 'framer-motion';
import { Product } from '@/components/data_products/products';
import { Star, Heart, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  index?: number;
  animationDelay?: number;
  onAddToCart?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onToggleWishlist?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isInWishlist?: boolean;
}

export const ProductCard = ({ 
  product, 
  index = 0, 
  animationDelay = 0,
  onAddToCart,
  onToggleWishlist,
  isInWishlist = false
}: ProductCardProps) => {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasDiscount 
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0;
  const isOutOfStock = product.stock === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: animationDelay / 1000 }}
      className="bg-white rounded-lg overflow-hidden group cursor-pointer relative border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
      whileHover={{ y: -5 }}
    >
      {/* Out of Stock Overlay */}
      {isOutOfStock && (
        <div className="absolute inset-0 bg-white/90 z-10 flex items-center justify-center">
          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Out of Stock
          </span>
        </div>
      )}

      <div className="relative overflow-hidden">
        {/* Product Image */}
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Top Badges */}
        <div className="absolute top-2 left-2 flex flex-col space-y-1">
          {product.isNew && (
            <span className="bg-[#31694E] text-white px-2 py-1 text-xs rounded shadow-sm">New</span>
          )}
          {product.isBestSeller && (
            <span className="bg-[#658C58] text-white px-2 py-1 text-xs rounded shadow-sm">Bestseller</span>
          )}
          {hasDiscount && (
            <span className="bg-[#F0E491] text-gray-900 px-2 py-1 text-xs rounded shadow-sm">-{discountPercent}%</span>
          )}
        </div>
        
        {/* Rating Badge */}
        {product.rating && (
          <div className="absolute top-2 right-2 bg-white/90 text-gray-900 px-2 py-1 rounded-full text-xs flex items-center space-x-1 shadow-sm">
            <Star size={10} className="text-[#F0E491] fill-current" />
            <span>{product.rating}</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="absolute bottom-2 right-2 flex flex-col space-y-2">
          {/* Wishlist Button */}
          <button 
            onClick={onToggleWishlist}
            className={`p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm ${
              isInWishlist 
                ? 'bg-red-500 opacity-100' 
                : 'bg-white/90 hover:bg-gray-100'
            }`}
          >
            <Heart 
              size={16} 
              className={isInWishlist ? "text-white fill-current" : "text-gray-700"} 
            />
          </button>

          {/* Add to Cart Button - Only show if in stock */}
          {!isOutOfStock && onAddToCart && (
            <button 
              onClick={onAddToCart}
              className="p-2 bg-[#31694E] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#658C58] shadow-sm"
            >
              <ShoppingCart size={16} className="text-white" />
            </button>
          )}
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-3">
        {/* Category & Stock */}
        <div className="flex items-center justify-between mb-1 text-xs">
          <span className="text-[#31694E] capitalize">{product.category}</span>
          {product.stock && product.stock > 0 && (
            <span className="text-gray-500">{product.stock} left</span>
          )}
        </div>
        
        {/* Product Name */}
        <h3 className="text-gray-900 font-medium mb-2 line-clamp-2 text-sm leading-tight">
          {product.name}
        </h3>
        
        {/* Rating & Reviews */}
        {product.rating && product.reviewCount && (
          <div className="flex items-center space-x-1 mb-2">
            <div className="flex items-center space-x-1">
              <Star size={12} className="text-[#F0E491] fill-current" />
              <span className="text-xs text-gray-700">{product.rating}</span>
            </div>
            <span className="text-xs text-gray-500">({product.reviewCount})</span>
          </div>
        )}
        
        {/* Pricing */}
        <div className="flex items-center space-x-2">
          <span className="text-base font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          {hasDiscount && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice!.toFixed(2)}
            </span>
          )}
        </div>

        {/* Units Sold */}
        {product.unitsSold && product.unitsSold > 100 && (
          <div className="mt-1 text-xs text-gray-500">
            {product.unitsSold.toLocaleString()}+ sold
          </div>
        )}
      </div>
    </motion.div>
  );
};