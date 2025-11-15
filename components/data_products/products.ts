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
  images?: string[];
  features?: string[];
  specifications?: Record<string, string>;
}

export interface WishlistItem {
  id: string;
  productId: string;
  addedAt: string;
  product: Product;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  products: Product[];
  filters: FilterOption[];
}

export interface SearchResult {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

export interface FilterOption {
  id: string;
  name: string;
  options: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  feedback: string;
  rating: number;
  avatar?: string;
  location?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  productCount: number;
  description?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export const allProducts: Product[] = [
   {
    id: "wireless-bluetooth-headphones",
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop"
    ],
    rating: 4.5,
    reviewCount: 128,
    category: "audio",
    description: "High-quality wireless headphones with active noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
    tags: ["wireless", "noise-cancelling", "bluetooth", "audio", "best-seller"],
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Bluetooth 5.0",
      "Quick charge support",
      "Comfortable over-ear design"
    ],
    specifications: {
      "Battery Life": "30 hours",
      "Connectivity": "Bluetooth 5.0",
      "Weight": "285g",
      "Charging Time": "2 hours",
      "Noise Cancellation": "Active Hybrid"
    },
    stock: 25,
    unitsSold: 450,
    isBestSeller: true,
    salesRank: 1,
    createdAt: "2024-01-15"
  },
  {
    id: "smart-watch-pro",
    name: "Smart Watch Pro Series 4",
    price: 299.99,
    originalPrice: 349.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1434493652601-8dabae5c1d5a?w=400&h=300&fit=crop"
    ],
    rating: 4.3,
    reviewCount: 89,
    category: "wearables",
    description: "Advanced smartwatch with health monitoring, GPS, and always-on display. Track your fitness and stay connected.",
    tags: ["smartwatch", "fitness", "health", "wearable", "gps"],
    features: [
      "Heart rate monitoring",
      "GPS tracking",
      "Water resistant (50m)",
      "7-day battery life",
      "Always-on display"
    ],
    specifications: {
      "Display": "1.4\" AMOLED",
      "Battery Life": "7 days",
      "Water Resistance": "50 meters",
      "Connectivity": "Bluetooth 5.2, Wi-Fi",
      "Sensors": "Heart rate, SpO2, GPS, Accelerometer"
    },
    stock: 42,
    unitsSold: 320,
    isBestSeller: true,
    salesRank: 2,
    createdAt: "2024-02-10"
  },
  {
    id: "gaming-laptop-rtx",
    name: "Gaming Laptop RTX 4070",
    price: 1499.99,
    originalPrice: 1699.99,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop"
    ],
    rating: 4.7,
    reviewCount: 56,
    category: "computers",
    description: "High-performance gaming laptop with RTX 4070 graphics, 16GB RAM, and 1TB SSD. Dominate every game with smooth performance.",
    tags: ["gaming", "laptop", "rtx", "gaming-pc", "high-performance"],
    features: [
      "NVIDIA RTX 4070 Graphics",
      "16GB DDR5 RAM",
      "1TB NVMe SSD",
      "144Hz IPS Display",
      "RGB Backlit Keyboard"
    ],
    specifications: {
      "Processor": "Intel Core i7-13700H",
      "Graphics": "NVIDIA RTX 4070 8GB",
      "RAM": "16GB DDR5",
      "Storage": "1TB NVMe SSD",
      "Display": "15.6\" 144Hz IPS"
    },
    stock: 15,
    unitsSold: 180,
    isBestSeller: false,
    salesRank: 5,
    createdAt: "2024-03-05"
  },
  {
    id: "wireless-earbuds-pro",
    name: "True Wireless Earbuds Pro",
    price: 129.99,
    originalPrice: 159.99,
    image: "https://images.unsplash.com/photo-1590658165737-15a047b8b5e0?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1590658165737-15a047b8b5e0?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1578319439584-104c94db07ff?w=400&h=300&fit=crop"
    ],
    rating: 4.4,
    reviewCount: 203,
    category: "audio",
    description: "Premium true wireless earbuds with spatial audio and sweat resistance. Perfect for workouts and daily commute.",
    tags: ["earbuds", "wireless", "sport", "audio", "bluetooth"],
    features: [
      "Spatial Audio",
      "Sweat & Water Resistant",
      "24-hour total battery",
      "Wireless charging case",
      "Touch controls"
    ],
    specifications: {
      "Battery Life": "8 hours (24h with case)",
      "Connectivity": "Bluetooth 5.3",
      "Water Resistance": "IPX4",
      "Charging": "Wireless & USB-C",
      "Driver Size": "11mm dynamic"
    },
    stock: 67,
    unitsSold: 520,
    isBestSeller: true,
    salesRank: 3,
    createdAt: "2024-01-28"
  },
  {
    id: "mechanical-keyboard-rgb",
    name: "Mechanical Gaming Keyboard RGB",
    price: 89.99,
    originalPrice: 119.99,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=400&h=300&fit=crop"
    ],
    rating: 4.6,
    reviewCount: 167,
    category: "accessories",
    description: "RGB mechanical keyboard with customizable lighting and responsive switches for gaming and typing.",
    tags: ["keyboard", "mechanical", "rgb", "gaming", "accessories"],
    features: [
      "Cherry MX Blue switches",
      "RGB Backlit keys",
      "N-key rollover",
      "Dedicated media controls",
      "Braided USB cable"
    ],
    specifications: {
      "Switch Type": "Cherry MX Blue",
      "Backlight": "RGB per-key",
      "Key Rollover": "N-key",
      "Connectivity": "USB-C",
      "Layout": "104-key US"
    },
    stock: 38,
    unitsSold: 290,
    isBestSeller: false,
    salesRank: 8,
    createdAt: "2024-02-22"
  },
  {
    id: "4k-ultra-hd-monitor",
    name: "27\" 4K Ultra HD Monitor",
    price: 399.99,
    originalPrice: 499.99,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1565343039-5a8d2e1e70b8?w=400&h=300&fit=crop"
    ],
    rating: 4.8,
    reviewCount: 94,
    category: "monitors",
    description: "Crystal-clear 4K monitor with HDR support and ultra-thin bezels. Perfect for creative work and entertainment.",
    tags: ["monitor", "4k", "ultra-hd", "hdr", "display"],
    features: [
      "4K UHD Resolution",
      "HDR400 Support",
      "99% sRGB Color",
      "Thin bezel design",
      "Multiple connectivity options"
    ],
    specifications: {
      "Resolution": "3840x2160 4K",
      "Panel Type": "IPS",
      "Refresh Rate": "60Hz",
      "Response Time": "4ms",
      "Ports": "2x HDMI, 1x DisplayPort, USB-C"
    },
    stock: 22,
    unitsSold: 150,
    isBestSeller: false,
    salesRank: 12,
    createdAt: "2024-03-12"
  },
  {
    id: "wireless-charging-pad",
    name: "Fast Wireless Charging Pad",
    price: 29.99,
    originalPrice: 39.99,
    image: "https://images.unsplash.com/photo-1609592810793-abeb6c64b5c6?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1609592810793-abeb6c64b5c6?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1609592810793-aeeb6c64b5c6?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1609592810793-aeeb6c64b5c7?w=400&h=300&fit=crop"
    ],
    rating: 4.2,
    reviewCount: 312,
    category: "accessories",
    description: "15W fast wireless charging pad with LED indicator and non-slip surface. Charge your devices quickly and safely.",
    tags: ["charger", "wireless", "fast-charging", "accessories", "qi"],
    features: [
      "15W Fast Charging",
      "LED charging indicator",
      "Non-slip surface",
      "Overheat protection",
      "Qi-certified"
    ],
    specifications: {
      "Output Power": "15W Max",
      "Charging Standard": "Qi",
      "Input": "5V/3A, 9V/2A",
      "Cable Length": "1.5m",
      "Compatibility": "All Qi-enabled devices"
    },
    stock: 120,
    unitsSold: 890,
    isBestSeller: true,
    salesRank: 4,
    createdAt: "2024-01-08"
  },
  {
    id: "external-ssd-1tb",
    name: "1TB Portable SSD External Drive",
    price: 129.99,
    originalPrice: 149.99,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbe?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbf?w=400&h=300&fit=crop"
    ],
    rating: 4.7,
    reviewCount: 178,
    category: "storage",
    description: "Ultra-fast portable SSD with USB-C connectivity. Transfer files at blazing speeds with this compact drive.",
    tags: ["ssd", "storage", "portable", "fast", "usb-c"],
    features: [
      "1050MB/s read speed",
      "Shock resistant",
      "Compact and lightweight",
      "USB-C connectivity",
      "Hardware encryption"
    ],
    specifications: {
      "Capacity": "1TB",
      "Interface": "USB 3.2 Gen 2",
      "Read Speed": "1050MB/s",
      "Write Speed": "1000MB/s",
      "Dimensions": "74 x 54 x 11mm"
    },
    stock: 55,
    unitsSold: 420,
    isBestSeller: false,
    salesRank: 9,
    createdAt: "2024-02-18"
  },
  {
    id: "gaming-mouse-wireless",
    name: "Wireless Gaming Mouse Pro",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?w=400&h=300&fit=crop"
    ],
    rating: 4.5,
    reviewCount: 234,
    category: "accessories",
    description: "Precision wireless gaming mouse with 25K DPI sensor and customizable RGB lighting. Dominate your games with precision.",
    tags: ["mouse", "gaming", "wireless", "rgb", "precision"],
    features: [
      "25,000 DPI optical sensor",
      "Wireless 2.4GHz & Bluetooth",
      "8 programmable buttons",
      "RGB lighting zones",
      "70-hour battery life"
    ],
    specifications: {
      "Sensor": "Optical 25K DPI",
      "Connectivity": "2.4GHz, Bluetooth 5.0",
      "Battery Life": "70 hours",
      "Buttons": "8 programmable",
      "Weight": "89g"
    },
    stock: 33,
    unitsSold: 380,
    isBestSeller: true,
    salesRank: 6,
    createdAt: "2024-01-25"
  },
  {
    id: "smartphone-gimbal",
    name: "Smartphone Gimbal Stabilizer",
    price: 119.99,
    originalPrice: 149.99,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d257?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d258?w=400&h=300&fit=crop"
    ],
    rating: 4.4,
    reviewCount: 156,
    category: "camera",
    description: "3-axis smartphone gimbal for smooth video recording and professional stabilization. Create cinematic content easily.",
    tags: ["gimbal", "stabilizer", "video", "smartphone", "camera"],
    features: [
      "3-axis stabilization",
      "Object tracking",
      "Time-lapse mode",
      "12-hour battery",
      "Compact foldable design"
    ],
    specifications: {
      "Stabilization": "3-axis (tilt, pan, roll)",
      "Battery Life": "12 hours",
      "Max Payload": "300g",
      "Charging Time": "2.5 hours",
      "Compatibility": "iOS & Android"
    },
    stock: 28,
    unitsSold: 210,
    isBestSeller: false,
    salesRank: 15,
    createdAt: "2024-03-08"
  },
  {
    id: "noise-cancelling-earbuds",
    name: "Active Noise Cancelling Earbuds",
    price: 199.99,
    originalPrice: 249.99,
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1599669454699-248893623440?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1578319439584-104c94db07ff?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=300&fit=crop"
    ],
    rating: 4.6,
    reviewCount: 189,
    category: "audio",
    description: "Premium noise cancelling earbuds with transparency mode and spatial audio. Immerse yourself in crystal-clear sound.",
    tags: ["earbuds", "noise-cancelling", "premium", "audio", "wireless"],
    features: [
      "Active Noise Cancellation",
      "Transparency mode",
      "Spatial audio",
      "30-hour battery life",
      "Wireless charging case"
    ],
    specifications: {
      "Battery Life": "8 hours (30h with case)",
      "Noise Cancellation": "Hybrid ANC",
      "Connectivity": "Bluetooth 5.2",
      "Water Resistance": "IPX4",
      "Driver Size": "10mm dynamic"
    },
    stock: 41,
    unitsSold: 270,
    isBestSeller: true,
    salesRank: 7,
    createdAt: "2024-02-14"
  },
  {
    id: "portable-power-bank",
    name: "20000mAh Power Bank PD",
    price: 49.99,
    originalPrice: 69.99,
    image: "https://images.unsplash.com/photo-1609592810793-aeeb6c64b5c6?w=400&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1609592810793-aeeb6c64b5c6?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1609592810793-aeeb6c64b5c7?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1609592810793-aeeb6c64b5c8?w=400&h=300&fit=crop"
    ],
    rating: 4.3,
    reviewCount: 445,
    category: "accessories",
    description: "High-capacity power bank with Power Delivery fast charging. Charge multiple devices simultaneously on the go.",
    tags: ["power-bank", "charger", "portable", "fast-charging", "battery"],
    features: [
      "20000mAh capacity",
      "Power Delivery 45W",
      "Dual USB-C ports",
      "LED power indicator",
      "Fast charging support"
    ],
    specifications: {
      "Capacity": "20000mAh",
      "Output": "45W PD, 18W QC",
      "Ports": "2x USB-C, 1x USB-A",
      "Input": "45W Max",
      "Weight": "380g"
    },
    stock: 85,
    unitsSold: 680,
    isBestSeller: true,
    salesRank: 10,
    createdAt: "2024-01-05"
  }
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

export const getFeaturedProducts = (): Product[] => {
  return allProducts
    .filter(product => product.rating && product.rating >= 4.5)
    .slice(0, 8);
};

export const getTopRatedProducts = (limit: number = 6): Product[] => {
  return allProducts
    .filter(product => product.rating)
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, limit);
};

export const getMostReviewedProducts = (limit: number = 6): Product[] => {
  return allProducts
    .filter(product => product.reviewCount)
    .sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0))
    .slice(0, limit);
};

export const getDiscountedProducts = (): Product[] => {
  return getOnSaleProducts(); // Alias for consistency
};

// Helper function to get product by ID
export const getProductById = (id: string): Product | undefined => {
  return allProducts.find(product => product.id === id);
};

// Helper function to get related products
export const getRelatedProducts = (currentProduct: Product, limit: number = 4): Product[] => {
  return allProducts
    .filter(product => 
      product.id !== currentProduct.id && 
      product.category === currentProduct.category
    )
    .slice(0, limit);
};

// Helper function to search products
export const searchProducts = (query: string): Product[] => {
  const searchTerm = query.toLowerCase();
  return allProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm) ||
    product.category?.toLowerCase().includes(searchTerm) ||
    product.description?.toLowerCase().includes(searchTerm) ||
    product.tags?.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};

// Helper function to get all products
export const getAllProducts = (): Product[] => {
  return allProducts;
};

// Helper function to get categories
export const getCategories = (): string[] => {
  const categories = allProducts.map(product => product.category).filter(Boolean) as string[];
  return Array.from(new Set(categories));
};

// Helper function to convert Product to CartItem
export const productToCartItem = (product: Product, quantity: number = 1): CartItem => {
  return {
    id: `${product.id}-${Date.now()}`,
    productId: product.id,
    name: product.name,
    price: product.price,
    quantity: quantity,
    image: product.image
  };
};

// Helper function to get cart items from product IDs
export const getCartItemsFromProducts = (productIds: string[]): CartItem[] => {
  return productIds.map(productId => {
    const product = getProductById(productId);
    if (!product) throw new Error(`Product with ID ${productId} not found`);
    return productToCartItem(product);
  });
};

// Collections data
export const collections: Collection[] = [
  // ... your existing collections data
];

// Helper function to get collection by ID
export const getCollectionById = (id: string): Collection | undefined => {
  return collections.find(collection => collection.id === id);
};

// Helper function to get all collections
export const getAllCollections = (): Collection[] => {
  return collections;
};

// Categories data
export const categories: Category[] = [
  // ... your existing categories data
];

// Testimonials data
export const testimonials: Testimonial[] = [
  // ... your existing testimonials data
];

// Sample user data
export const sampleUser: User = {
  id: "1",
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
  role: "customer"
};

// FIXED: Single getSearchSuggestions function (removed duplicate)
export const getSearchSuggestions = (query: string, limit: number = 5): SearchResult[] => {
  if (!query.trim()) return [];
  
  const searchTerm = query.toLowerCase();
  const results: SearchResult[] = [];
  
  // Search in product names (highest priority)
  const nameMatches = allProducts
    .filter(product => product.name.toLowerCase().includes(searchTerm))
    .map(product => ({
      id: product.id,
      name: product.name,
      category: product.category || 'Uncategorized',
      price: product.price,
      image: product.image
    }));
  
  results.push(...nameMatches);
  
  // Search in categories (medium priority)
  if (results.length < limit) {
    const categoryMatches = allProducts
      .filter(product => 
        product.category?.toLowerCase().includes(searchTerm) && 
        !results.some(r => r.id === product.id)
      )
      .map(product => ({
        id: product.id,
        name: product.name,
        category: product.category || 'Uncategorized',
        price: product.price,
        image: product.image
      }));
    
    results.push(...categoryMatches);
  }
  
  // Search in tags (lower priority)
  if (results.length < limit) {
    const tagMatches = allProducts
      .filter(product => 
        product.tags?.some(tag => tag.toLowerCase().includes(searchTerm)) && 
        !results.some(r => r.id === product.id)
      )
      .map(product => ({
        id: product.id,
        name: product.name,
        category: product.category || 'Uncategorized',
        price: product.price,
        image: product.image
      }));
    
    results.push(...tagMatches);
  }
  
  // Search in descriptions (lowest priority)
  if (results.length < limit) {
    const descriptionMatches = allProducts
      .filter(product => 
        product.description?.toLowerCase().includes(searchTerm) && 
        !results.some(r => r.id === product.id)
      )
      .map(product => ({
        id: product.id,
        name: product.name,
        category: product.category || 'Uncategorized',
        price: product.price,
        image: product.image
      }));
    
    results.push(...descriptionMatches);
  }
  
  // Remove duplicates and return limited results
  const uniqueResults = results.filter((result, index, self) => 
    index === self.findIndex(r => r.id === result.id)
  );
  
  return uniqueResults.slice(0, limit);
};

// Get featured search results (popular searches, trending products)
export const getFeaturedSearchResults = (limit: number = 6): SearchResult[] => {
  // Combine best sellers, new arrivals, and top rated products
  const featuredProducts = [
    ...getBestSellers().slice(0, 3),
    ...getNewArrivals().slice(0, 2),
    ...getTopRatedProducts(2)
  ];
  
  // Remove duplicates
  const uniqueProducts = featuredProducts.filter((product, index, self) => 
    index === self.findIndex(p => p.id === product.id)
  );
  
  return uniqueProducts.slice(0, limit).map(product => ({
    id: product.id,
    name: product.name,
    category: product.category || 'Uncategorized',
    price: product.price,
    image: product.image
  }));
};

// Get popular search terms
export const getPopularSearchTerms = (): string[] => {
  return [
    "wireless headphones",
    "smart watch",
    "gaming keyboard",
    "yoga mat",
    "water bottle",
    "fitness tracker",
    "bluetooth earbuds",
    "laptop backpack"
  ];
};

// Get search results with categories and filters
export const getAdvancedSearchResults = (query: string, filters?: {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
}): Product[] => {
  let results = searchProducts(query);
  
  // Apply category filter
  if (filters?.category) {
    results = results.filter(product => product.category === filters.category);
  }
  
  // Apply price range filter
  if (filters?.minPrice !== undefined) {
    results = results.filter(product => product.price >= filters.minPrice!);
  }
  
  if (filters?.maxPrice !== undefined) {
    results = results.filter(product => product.price <= filters.maxPrice!);
  }
  
  // Apply rating filter
  if (filters?.minRating !== undefined) {
    results = results.filter(product => (product.rating || 0) >= filters.minRating!);
  }
  
  return results;
};

// Get search history (mock function - in real app this would come from localStorage/DB)
export const getSearchHistory = (): string[] => {
  // This would typically come from user's local storage or database
  return [
    "wireless headphones",
    "gaming keyboard",
    "smart watch"
  ];
};

// Add search result to history (mock function)
export const addToSearchHistory = (query: string): void => {
  // In a real app, this would save to localStorage or send to backend
  console.log(`Added to search history: ${query}`);
};

// Clear search history (mock function)
export const clearSearchHistory = (): void => {
  // In a real app, this would clear from localStorage or backend
  console.log('Search history cleared');
};

// Get search results with highlighting information
export const getSearchResultsWithHighlights = (query: string): Array<Product & { highlights: string[] }> => {
  const results = searchProducts(query);
  
  return results.map(product => {
    const highlights: string[] = [];
    const searchTerm = query.toLowerCase();
    
    // Check name for matches
    if (product.name.toLowerCase().includes(searchTerm)) {
      highlights.push(`Name: ${product.name}`);
    }
    
    // Check category for matches
    if (product.category?.toLowerCase().includes(searchTerm)) {
      highlights.push(`Category: ${product.category}`);
    }
    
    // Check description for matches
    if (product.description?.toLowerCase().includes(searchTerm)) {
      // Extract the sentence containing the search term
      const sentences = product.description.split('. ');
      const matchingSentence = sentences.find(sentence => 
        sentence.toLowerCase().includes(searchTerm)
      );
      if (matchingSentence) {
        highlights.push(`Description: ${matchingSentence}`);
      }
    }
    
    // Check tags for matches
    const matchingTags = product.tags?.filter(tag => 
      tag.toLowerCase().includes(searchTerm)
    ) || [];
    
    if (matchingTags.length > 0) {
      highlights.push(`Tags: ${matchingTags.join(', ')}`);
    }
    
    return {
      ...product,
      highlights: highlights.slice(0, 3) // Limit to 3 highlights
    };
  });
};

// Get search analytics (popular categories for search)
export const getSearchAnalytics = (): Array<{ category: string; count: number }> => {
  const categoryCounts: Record<string, number> = {};
  
  allProducts.forEach(product => {
    if (product.category) {
      categoryCounts[product.category] = (categoryCounts[product.category] || 0) + 1;
    }
  });
  
  return Object.entries(categoryCounts)
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count);
};

// Get trending searches (based on product popularity and recency)
export const getTrendingSearches = (): Array<{ term: string; score: number }> => {
  const trendingProducts = [
    ...getBestSellers(),
    ...getNewArrivals(),
    ...getTopRatedProducts()
  ];
  
  const searchTerms: Record<string, number> = {};
  
  trendingProducts.forEach(product => {
    // Use product name as a search term
    const term = product.name.toLowerCase();
    searchTerms[term] = (searchTerms[term] || 0) + 1;
    
    // Also add category as a search term
    if (product.category) {
      searchTerms[product.category] = (searchTerms[product.category] || 0) + 1;
    }
    
    // Add tags as search terms
    product.tags?.forEach(tag => {
      searchTerms[tag] = (searchTerms[tag] || 0) + 1;
    });
  });
  
  return Object.entries(searchTerms)
    .map(([term, score]) => ({ term, score }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);
};

// Enhanced search with ranking by relevance
export const getRankedSearchResults = (query: string): Array<Product & { relevanceScore: number }> => {
  if (!query.trim()) return [];
  
  const searchTerm = query.toLowerCase();
  const scoredResults: Array<Product & { relevanceScore: number }> = [];
  
  allProducts.forEach(product => {
    let score = 0;
    
    // Name matches (highest weight)
    const nameMatch = product.name.toLowerCase().includes(searchTerm);
    if (nameMatch) {
      score += 100;
      // Exact name match bonus
      if (product.name.toLowerCase() === searchTerm) {
        score += 50;
      }
    }
    
    // Category matches
    if (product.category?.toLowerCase().includes(searchTerm)) {
      score += 75;
    }
    
    // Tag matches
    const tagMatches = product.tags?.filter(tag => 
      tag.toLowerCase().includes(searchTerm)
    ).length || 0;
    score += tagMatches * 25;
    
    // Description matches
    if (product.description?.toLowerCase().includes(searchTerm)) {
      score += 10;
    }
    
    // Boost popular products
    if (product.isBestSeller) score += 20;
    if (product.isNew) score += 15;
    if (product.rating && product.rating >= 4.5) score += 10;
    
    if (score > 0) {
      scoredResults.push({
        ...product,
        relevanceScore: score
      });
    }
  });
  
  return scoredResults.sort((a, b) => b.relevanceScore - a.relevanceScore);
};

// Quick search suggestions (just product names and categories)
export const getQuickSearchSuggestions = (query: string): string[] => {
  if (!query.trim()) return [];
  
  const searchTerm = query.toLowerCase();
  const suggestions = new Set<string>();
  
  // Add product names
  allProducts.forEach(product => {
    if (product.name.toLowerCase().includes(searchTerm)) {
      suggestions.add(product.name);
    }
  });
  
  // Add categories
  allProducts.forEach(product => {
    if (product.category?.toLowerCase().includes(searchTerm)) {
      suggestions.add(product.category);
    }
  });
  
  // Add tags
  allProducts.forEach(product => {
    product.tags?.forEach(tag => {
      if (tag.toLowerCase().includes(searchTerm)) {
        suggestions.add(tag);
      }
    });
  });
  
  return Array.from(suggestions).slice(0, 8);
};

// Test function to verify search functions work
export const testSearchFunctions = () => {
  console.log('=== Testing Search Functions ===');
  
  // Test getSearchSuggestions
  const testQueries = ['wireless', 'gaming', 'smart', 'watch'];
  testQueries.forEach(query => {
    console.log(`\nSearch suggestions for "${query}":`);
    const suggestions = getSearchSuggestions(query);
    suggestions.forEach(suggestion => {
      console.log(`- ${suggestion.name} (${suggestion.category}) - $${suggestion.price}`);
    });
  });
  
  // Test getFeaturedSearchResults
  console.log('\n=== Featured Search Results ===');
  const featured = getFeaturedSearchResults();
  featured.forEach(result => {
    console.log(`- ${result.name} - $${result.price}`);
  });
  
  // Test getPopularSearchTerms
  console.log('\n=== Popular Search Terms ===');
  const popularTerms = getPopularSearchTerms();
  popularTerms.forEach(term => console.log(`- ${term}`));
};

// Export all functions
export default {
  // Products
  allProducts,
  getAllProducts,
  getProductById,
  getBestSellers,
  getNewArrivals,
  getProductsByCategory,
  getOnSaleProducts,
  getFeaturedProducts,
  getTopRatedProducts,
  getMostReviewedProducts,
  getDiscountedProducts,
  getRelatedProducts,
  
  // Search
  searchProducts,
  getSearchSuggestions,
  getFeaturedSearchResults,
  getPopularSearchTerms,
  getAdvancedSearchResults,
  getSearchHistory,
  addToSearchHistory,
  clearSearchHistory,
  getSearchResultsWithHighlights,
  getSearchAnalytics,
  getTrendingSearches,
  getRankedSearchResults,
  getQuickSearchSuggestions,
  
  // Collections
  collections,
  getCollectionById,
  getAllCollections,
  
  // Categories
  categories,
  getCategories,
  
  // Testimonials
  testimonials,
  
  // User
  sampleUser,
  
  // Cart
  productToCartItem,
  getCartItemsFromProducts,
  
  // Testing
  testSearchFunctions
};