import { WishlistItem, Product, getProductById } from '@/components/data_products/products';

// Simple in-memory wishlist DB shared across API routes
export const wishlistDB: WishlistItem[] = [];

export function addWishlistProduct(productId: string): WishlistItem | null {
  const product: Product | undefined = getProductById(productId);
  if (!product) return null;
  const newItem: WishlistItem = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    productId,
    addedAt: new Date().toISOString(),
    product,
  };
  wishlistDB.push(newItem);
  return newItem;
}

export function removeWishlistItem(itemId: string): boolean {
  const index = wishlistDB.findIndex((item) => item.id === itemId);
  if (index === -1) return false;
  wishlistDB.splice(index, 1);
  return true;
}

export function getWishlistItems(): WishlistItem[] {
  return wishlistDB;
}