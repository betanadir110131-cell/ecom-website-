// components/BlogPage.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

// Pre-defined particle data to avoid Math.random() during render
const PARTICLE_DATA = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  width: [3, 4, 5, 6][i % 4],
  height: [3, 4, 5, 6][i % 4],
  left: [10, 20, 30, 40, 50, 60, 70, 80, 90][i % 9],
  top: [10, 20, 30, 40, 50, 60, 70, 80, 90][i % 9],
  color: i % 3 === 0 ? '#a78bfa' : i % 3 === 1 ? '#c084fc' : '#e879f9',
  opacity: [0.1, 0.15, 0.2, 0.25][i % 4],
  animationDelay: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18][i % 10] + 's',
  animationDuration: [25, 30, 35, 40][i % 4] + 's'
}));

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Sample images from Unsplash that match each blog post category
  const sampleImages = {
    technology: [
      "https://images.unsplash.com/photo-1651340765216-ba02df201308?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
      "https://images.unsplash.com/photo-1651340765216-ba02df201308?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
    ],
    audio: [
      "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=500&h=300&fit=crop",
    ],
    sustainability: [
      "https://images.unsplash.com/photo-1560165143-fa7e2d9e594c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=871"
    ],
    smartHome: [
      "https://images.unsplash.com/photo-1667855766927-9d0c8fa1965a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774",
      "https://images.unsplash.com/photo-1667855766927-9d0c8fa1965a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774",
    ],
    gaming: [
      "https://images.unsplash.com/photo-1726442167261-c55975214196?ixlib=500&h=300&fit=crop",
      "https://images.unsplash.com/photo-1726442167261-c55975214196?ixlib=500&h=300&fit=crop",
    ]
  };

  const getImageForCategory = (category: string, id: number) => {
    const categoryKey = category.toLowerCase().replace(' ', '') as keyof typeof sampleImages;
    const images = sampleImages[categoryKey] || sampleImages.technology;
    return images[id % images.length];
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockPosts: BlogPost[] = [
        {
          id: 1,
          title: "The Future of Wireless Technology in 2025",
          excerpt: "Explore the latest advancements in wireless technology and what it means for premium electronics.",
          content: "Full content about wireless technology advancements...",
          author: "Sarah Chen",
          date: "2025-01-15",
          readTime: "5 min read",
          category: "Technology",
          image: getImageForCategory("technology", 1),
        },
        {
          id: 2,
          title: "Premium Audio: What Makes High-End Headphones Worth It",
          excerpt: "Understanding the technology and craftsmanship behind premium audio equipment.",
          content: "Full content about premium audio technology...",
          author: "Marcus Johnson",
          date: "2025-01-12",
          readTime: "7 min read",
          category: "Audio",
          image: getImageForCategory("audio", 2)
        },
        {
          id: 3,
          title: "Sustainable Tech: The Future of Electronics Manufacturing",
          excerpt: "How leading brands are implementing eco-friendly practices in tech production.",
          content: "Full content about sustainable technology...",
          author: "Emily Rodriguez",
          date: "2025-01-10",
          readTime: "6 min read",
          category: "Sustainability",
          image: getImageForCategory("sustainability", 3)
        },
        {
          id: 4,
          title: "The Evolution of Smart Home Integration",
          excerpt: "From basic automation to AI-powered smart ecosystems - what's next?",
          content: "Full content about smart home evolution...",
          author: "Alex Thompson",
          date: "2025-01-08",
          readTime: "8 min read",
          category: "Smart Home",
          image:"/img/davidx-rQ7e1QwSPeY-unsplash.jpg"
        },
        {
          id: 5,
          title: "Gaming Monitors: Refresh Rates vs Resolution",
          excerpt: "Breaking down the technical specifications that matter for serious gamers.",
          content: "Full content about gaming monitors...",
          author: "Jessica Lee",
          date: "2025-01-05",
          readTime: "4 min read",
          category: "Gaming",
          image: getImageForCategory("gaming", 5)
        },
        {
          id: 6,
          title: "The Science Behind Fast Charging Technology",
          excerpt: "Understanding how modern charging solutions balance speed and battery health.",
          content: "Full content about fast charging technology...",
          author: "David Kim",
          date: "2025-01-03",
          readTime: "5 min read",
          category: "Technology",
          image: getImageForCategory("technology", 6)
        }
      ];
      
      setPosts(mockPosts);
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  // Format date consistently
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const FeaturedPost = ({ post }: { post: BlogPost }) => (
    <article className="group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden hover:border-violet-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative h-64 bg-gradient-to-br from-gray-700 to-gray-800 rounded-t-2xl overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
        <div className="absolute bottom-4 left-6">
          <span className="inline-block px-3 py-1 bg-violet-600 text-white text-sm rounded-full backdrop-blur-sm">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="relative p-6">
        <h2 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors duration-200">
          {post.title}
        </h2>
        <p className="text-gray-300 mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center space-x-2">
            <span className="font-medium text-violet-300">{post.author}</span>
            <span>•</span>
            <span>{formatDate(post.date)}</span>
          </div>
          <span className="bg-gray-700/50 px-2 py-1 rounded-md">{post.readTime}</span>
        </div>
      </div>
    </article>
  );

  const BlogCard = ({ post }: { post: BlogPost }) => (
    <article className="group bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden hover:border-violet-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="inline-block px-2 py-1 bg-violet-600 text-white text-xs rounded-full backdrop-blur-sm">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="relative p-5">
        <h3 className="font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors duration-200 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-300 text-sm mb-3 line-clamp-2">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span className="font-medium text-violet-300">{post.author}</span>
          <span className="bg-gray-700/30 px-2 py-1 rounded">{post.readTime}</span>
        </div>
      </div>
    </article>
  );

  const LoadingSkeleton = () => (
    <div className="space-y-8">
      <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden animate-pulse">
        <div className="h-64 bg-gray-700 rounded-t-2xl" />
        <div className="p-6 space-y-4">
          <div className="h-6 bg-gray-700 rounded w-3/4" />
          <div className="h-4 bg-gray-700 rounded w-full" />
          <div className="h-4 bg-gray-700 rounded w-2/3" />
          <div className="flex space-x-4">
            <div className="h-4 bg-gray-700 rounded w-1/4" />
            <div className="h-4 bg-gray-700 rounded w-1/4" />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden animate-pulse">
            <div className="h-48 bg-gray-700" />
            <div className="p-5 space-y-3">
              <div className="h-5 bg-gray-700 rounded w-4/5" />
              <div className="h-4 bg-gray-700 rounded w-full" />
              <div className="h-4 bg-gray-700 rounded w-2/3" />
              <div className="flex justify-between">
                <div className="h-3 bg-gray-700 rounded w-1/4" />
                <div className="h-3 bg-gray-700 rounded w-1/4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Animated Background Particles - Only render on client */}
      {isClient && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {PARTICLE_DATA.map((particle) => (
            <div
              key={particle.id}
              className="absolute rounded-full animate-float"
              style={{
                width: `${particle.width}px`,
                height: `${particle.height}px`,
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                backgroundColor: particle.color,
                opacity: particle.opacity,
                animationDelay: particle.animationDelay,
                animationDuration: particle.animationDuration,
              }}
            />
          ))}
        </div>
      )}

      {/* Header */}
      <header className="relative py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400 bg-clip-text text-transparent">
              Tech Insights
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover the latest in technology, innovation, and premium electronics through our expert insights and reviews.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="text-white">
              <div className="text-2xl font-bold text-violet-400">50+</div>
              <div className="text-gray-400">Articles Published</div>
            </div>
            <div className="text-white">
              <div className="text-2xl font-bold text-purple-400">10k+</div>
              <div className="text-gray-400">Monthly Readers</div>
            </div>
            <div className="text-white">
              <div className="text-2xl font-bold text-fuchsia-400">15+</div>
              <div className="text-gray-400">Expert Writers</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <LoadingSkeleton />
          ) : (
            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                  <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
                    Featured Story
                  </span>
                  <div className="ml-4 h-px flex-1 bg-gradient-to-r from-violet-500/50 to-transparent" />
                </h2>
                <FeaturedPost post={posts[0]} />
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                  <span className="bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
                    Latest Articles
                  </span>
                  <div className="ml-4 h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {posts.slice(1).map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              </section>

              <section className="relative bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-purple-600/10 rounded-2xl" />
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Stay Updated with Tech Trends
                  </h3>
                  <p className="text-gray-300 mb-6 max-w-md mx-auto">
                    Get the latest articles and product updates delivered to your inbox.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 backdrop-blur-sm"
                    />
                    <button className="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors duration-200 font-medium backdrop-blur-sm">
                      Subscribe
                    </button>
                  </div>
                </div>
              </section>
            </div>
          )}
        </div>
      </main>

      <footer className="relative border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-gray-400">
            <p>&copy; 2025 TechPremium. All rights reserved.</p>
            <p className="mt-2">Premium Technology E-Commerce</p>
          </div>
        </div>
      </footer>

      {/* Only show scroll indicator on client */}
      {isClient && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;