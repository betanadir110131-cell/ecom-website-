import { Product, Category } from '../../components/data/products.ts';

export const PRODUCTS: Product[] = [
  { id: "1", name: "Gaming Laptop Pro", price: 1299.99, originalPrice: 1499.99, image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400", category: "Laptops" },
  { id: "2", name: "Wireless Headphones", price: 89.99, originalPrice: 129.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400", category: "Audio" },
  { id: "3", name: "Smartphone X", price: 699.99, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400", category: "Phones" },
  { id: "4", name: "Smart Watch Ultra", price: 349.99, originalPrice: 399.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400", category: "Wearables" },
];

export const CATEGORIES: Category[] = [
  { id: "1", name: "Laptops", icon: "💻", productCount: 45 },
  { id: "2", name: "Audio", icon: "🎧", productCount: 32 },
  { id: "3", name: "Phones", icon: "📱", productCount: 28 },
  { id: "4", name: "Tablets", icon: "📟", productCount: 15 },
];

