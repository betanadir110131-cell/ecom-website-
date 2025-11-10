// data/products.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating?: number;
  reviewCount?: number;
  category?: string;
  description?: string;
  tags?: string[];
  unitsSold?: number;
  stock?: number;
  salesRank?: number;
  isNew?: boolean;
  isBestSeller?: boolean;
  createdAt?: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  products: Product[];
  filters: FilterOption[];
}

export interface FilterOption {
  id: string;
  name: string;
  options: string[];
}
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
  date?: string;
}
export interface Category {
  id: string;
  name: string;
  icon: string;
  productCount: number;
  description?: string;
}
export const allProducts: Product[] = [
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

// Utility functions to get specific product lists
export const getBestSellers = (): Product[] => {
  return allProducts
    .filter(product => product.isBestSeller)
    .sort((a, b) => (a.salesRank || 0) - (b.salesRank || 0));
};

export const getNewArrivals = (): Product[] => {
  return allProducts
    .filter(product => product.isNew)
    .sort((a, b) => new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime());
};

export const getProductsByCategory = (category: string): Product[] => {
  return allProducts.filter(product => product.category === category);
};

export const getOnSaleProducts = (): Product[] => {
  return allProducts
    .filter(product => product.originalPrice && product.originalPrice > product.price)
    .sort((a, b) => {
      const discountA = ((a.originalPrice! - a.price) / a.originalPrice!) * 100;
      const discountB = ((b.originalPrice! - b.price) / b.originalPrice!) * 100;
      return discountB - discountA;
    });
};

// Collections data
export const collections: Collection[] = [
  {
    id: "bestsellers",
    name: "Best Sellers",
    description: "Our most popular products loved by customers worldwide. These items are flying off the shelves!",
    products: getBestSellers(),
    filters: [
      {
        id: "category",
        name: "Category",
        options: ["electronics", "wearables", "clothing", "lifestyle", "gaming", "fitness"]
      },
      {
        id: "price",
        name: "Price Range",
        options: ["Under $50", "$50 - $100", "$100 - $200", "Over $200"]
      },
      {
        id: "rating",
        name: "Rating",
        options: ["4+ Stars", "4.5+ Stars"]
      }
    ]
  },
  {
    id: "new-arrivals",
    name: "New Arrivals",
    description: "Brand new products just added to our store. Be the first to get your hands on these latest items!",
    products: getNewArrivals(),
    filters: [
      {
        id: "category",
        name: "Category",
        options: ["electronics", "wearables", "gaming", "fitness"]
      },
      {
        id: "price",
        name: "Price Range",
        options: ["Under $100", "$100 - $200", "$200 - $300", "Over $300"]
      }
    ]
  },
  {
    id: "on-sale",
    name: "On Sale",
    description: "Great deals and discounts on quality products. Limited time offers you don't want to miss!",
    products: getOnSaleProducts(),
    filters: [
      {
        id: "category",
        name: "Category",
        options: ["electronics", "wearables", "clothing", "lifestyle", "gaming", "fitness"]
      },
      {
        id: "discount",
        name: "Discount Range",
        options: ["10-20% Off", "20-30% Off", "30-40% Off", "40%+ Off"]
      },
      {
        id: "price",
        name: "Price Range",
        options: ["Under $50", "$50 - $100", "$100 - $150", "Over $150"]
      }
    ]
  },
  {
    id: "electronics",
    name: "Electronics",
    description: "Latest gadgets and tech accessories. From headphones to smart devices and everything in between.",
    products: getProductsByCategory("electronics"),
    filters: [
      {
        id: "type",
        name: "Product Type",
        options: ["headphones", "gaming", "audio"]
      },
      {
        id: "price",
        name: "Price Range",
        options: ["Under $50", "$50 - $100", "$100 - $200", "Over $200"]
      },
      {
        id: "rating",
        name: "Rating",
        options: ["4+ Stars", "4.5+ Stars", "5 Stars"]
      }
    ]
  },
  {
    id: "fitness",
    name: "Fitness & Sports",
    description: "Gear up for your fitness journey with our premium sports equipment and accessories.",
    products: allProducts.filter(product => 
      product.category === "fitness" || 
      product.category === "wearables" ||
      product.tags?.includes("fitness")
    ),
    filters: [
      {
        id: "category",
        name: "Product Type",
        options: ["wearables", "fitness", "yoga"]
      },
      {
        id: "price",
        name: "Price Range",
        options: ["Under $50", "$50 - $100", "$100 - $250", "Over $250"]
      },
      {
        id: "rating",
        name: "Rating",
        options: ["4+ Stars", "4.5+ Stars"]
      }
    ]
  }
];

// Helper function to get collection by ID
export const getCollectionById = (id: string): Collection | undefined => {
  return collections.find(collection => collection.id === id);
};

// Helper function to get all collections
export const getAllCollections = (): Collection[] => {
  return collections;
};
