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
    isNew: true,
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
    isNew: true,
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
    isNew: false,
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
    isNew: false,
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
    isNew: true,
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
    isNew: false,
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
    isNew: false,
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
    isNew: false,
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
    isNew: true,
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
    isNew: false,
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
    isNew: false,
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
    isNew: false,
    isBestSeller: true,
    salesRank: 10,
    createdAt: "2024-01-05"
  }
];

// Fixed getRelatedProducts function
export const getRelatedProducts = (productId: string, limit: number = 4): Product[] => {
  const product = getProductById(productId);
  if (!product) return [];
  
  return allProducts
    .filter(p => 
      p.id !== productId && 
      p.category === product.category
    )
    .slice(0, limit);
};

// Fixed getProductById function
export const getProductById = (id: string): Product | undefined => {
  return allProducts.find(product => product.id === id);
};

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
  return getOnSaleProducts();
};

// Search functions
export const searchProducts = (query: string): Product[] => {
  const searchTerm = query.toLowerCase();
  return allProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm) ||
    product.category?.toLowerCase().includes(searchTerm) ||
    product.description?.toLowerCase().includes(searchTerm) ||
    product.tags?.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};

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
  
  // Remove duplicates and return limited results
  const uniqueResults = results.filter((result, index, self) => 
    index === self.findIndex(r => r.id === result.id)
  );
  
  return uniqueResults.slice(0, limit);
};

export const getFeaturedSearchResults = (limit: number = 6): SearchResult[] => {
  const featuredProducts = [
    ...getBestSellers().slice(0, 3),
    ...getNewArrivals().slice(0, 2),
    ...getTopRatedProducts(2)
  ];
  
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

// Collections data
export const collections: Collection[] = [
  {
    id: "new-arrivals",
    name: "New Arrivals",
    description: "Check out our latest tech products and innovations",
    products: getNewArrivals(),
    filters: [
      {
        id: "category",
        name: "Category",
        options: ["audio", "wearables", "accessories"]
      },
      {
        id: "price",
        name: "Price Range",
        options: ["Under $50", "$50-$100", "$100-$200", "Above $200"]
      }
    ]
  },
  {
    id: "best-sellers",
    name: "Best Sellers",
    description: "Our most popular products loved by customers",
    products: getBestSellers(),
    filters: [
      {
        id: "category",
        name: "Category",
        options: ["audio", "wearables", "computers", "accessories"]
      },
      {
        id: "rating",
        name: "Rating",
        options: ["4+ Stars", "4.5+ Stars"]
      }
    ]
  },
  {
    id: "gaming-gear",
    name: "Gaming Gear",
    description: "High-performance equipment for gamers",
    products: allProducts.filter(product => 
      product.tags?.includes("gaming") || 
      product.category === "computers"
    ),
    filters: [
      {
        id: "type",
        name: "Product Type",
        options: ["Keyboards", "Mice", "Headsets", "Laptops"]
      },
      {
        id: "price",
        name: "Price Range",
        options: ["Under $100", "$100-$300", "Above $300"]
      }
    ]
  }
];

// Categories data
export const categories: Category[] = [
  {
    id: "audio",
    name: "Audio",
    icon: "🎧",
    productCount: allProducts.filter(p => p.category === "audio").length,
    description: "Headphones, earbuds, and audio accessories"
  },
  {
    id: "wearables",
    name: "Wearables",
    icon: "⌚",
    productCount: allProducts.filter(p => p.category === "wearables").length,
    description: "Smartwatches and fitness trackers"
  },
  {
    id: "computers",
    name: "Computers",
    icon: "💻",
    productCount: allProducts.filter(p => p.category === "computers").length,
    description: "Laptops, desktops, and computer accessories"
  },
  {
    id: "accessories",
    name: "Accessories",
    icon: "🖱️",
    productCount: allProducts.filter(p => p.category === "accessories").length,
    description: "Keyboards, mice, chargers, and more"
  },
  {
    id: "storage",
    name: "Storage",
    icon: "💾",
    productCount: allProducts.filter(p => p.category === "storage").length,
    description: "SSDs, external drives, and storage solutions"
  },
  {
    id: "monitors",
    name: "Monitors",
    icon: "🖥️",
    productCount: allProducts.filter(p => p.category === "monitors").length,
    description: "Computer monitors and displays"
  },
  {
    id: "camera",
    name: "Camera",
    icon: "📷",
    productCount: allProducts.filter(p => p.category === "camera").length,
    description: "Camera equipment and accessories"
  }
];

// Testimonials data
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    feedback: "The wireless headphones are amazing! The noise cancellation works perfectly and the battery life is incredible.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    location: "New York, USA"
  },
  {
    id: "2",
    name: "Mike Chen",
    feedback: "Best gaming laptop I've ever owned. The RTX 4070 handles everything I throw at it with ease.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    location: "San Francisco, USA"
  },
  {
    id: "3",
    name: "Emily Davis",
    feedback: "The smartwatch has completely changed how I track my fitness. The health monitoring features are spot on!",
    rating: 4,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    location: "London, UK"
  }
];

// Sample user data
export const sampleUser: User = {
  id: "1",
  name: "John Doe",
  email: "john.doe@example.com",
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
  role: "customer"
};

// Cart utility functions
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

export const getCartItemsFromProducts = (productIds: string[]): CartItem[] => {
  return productIds.map(productId => {
    const product = getProductById(productId);
    if (!product) throw new Error(`Product with ID ${productId} not found`);
    return productToCartItem(product);
  });
};

// Collection helper functions
export const getCollectionById = (id: string): Collection | undefined => {
  return collections.find(collection => collection.id === id);
};

export const getAllCollections = (): Collection[] => {
  return collections;
};

// Category helper function
export const getCategories = (): string[] => {
  const categories = allProducts.map(product => product.category).filter(Boolean) as string[];
  return Array.from(new Set(categories));
};

// Get all products
export const getAllProducts = (): Product[] => {
  return allProducts;
};

// Export all functions and data
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
  getCartItemsFromProducts
};