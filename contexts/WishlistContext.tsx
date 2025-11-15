// contexts/WishlistContext.tsx
'use client';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, getProductById } from '@/components/data_products/products';

interface WishlistContextType {
  wishlist: Set<string>;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  getWishlistProducts: () => Product[];
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());

  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      setWishlist(new Set(JSON.parse(savedWishlist)));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify([...wishlist]));
  }, [wishlist]);

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => {
      const newWishlist = new Set(prev);
      if (newWishlist.has(productId)) {
        newWishlist.delete(productId);
      } else {
        newWishlist.add(productId);
      }
      return newWishlist;
    });
  };

  const isInWishlist = (productId: string) => {
    return wishlist.has(productId);
  };

  const getWishlistProducts = (): Product[] => {
    const ids = Array.from(wishlist);
    return ids
      .map(id => getProductById(id))
      .filter((p): p is Product => !!p);
  };

  return (
    <WishlistContext.Provider value={{
      wishlist,
      toggleWishlist,
      isInWishlist,
      getWishlistProducts
    }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}