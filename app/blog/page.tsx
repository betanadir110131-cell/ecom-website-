// components/BlogPage.tsx (Updated avatar handling)
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark, Eye } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  authorImage: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
  views: number;
  likes: number;
  featured: boolean;
}

// Pre-defined particle data
const PARTICLE_DATA = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  width: [3, 4, 5, 6][i % 4],
  height: [3, 4, 5, 6][i % 4],
  left: [10, 20, 30, 40, 50, 60, 70, 80, 90][i % 9],
  top: [10, 20, 30, 40, 50, 60, 70, 80, 90][i % 9],
  color: i % 3 === 0 ? '#F0E491' : i % 3 === 1 ? '#BBC863' : '#658C58',
  opacity: [0.05, 0.08, 0.1, 0.12][i % 4],
  animationDelay: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18][i % 10] + 's',
  animationDuration: [25, 30, 35, 40][i % 4] + 's'
}));

// Avatar placeholder function using a reliable service
const getAvatarUrl = (name: string) => {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=31694E&color=fff&size=100`;
};

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Sample detailed blog posts with fixed avatar URLs
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockPosts: BlogPost[] = [
        {
          id: 1,
          title: "The Future of Wireless Technology in 2025",
          excerpt: "Explore the latest advancements in wireless technology and what it means for premium electronics.",
          content: `
            <h2>The Evolution of Wireless Connectivity</h2>
            <p>Wireless technology has come a long way from basic Bluetooth connectivity to today's sophisticated Wi-Fi 6E and 5G networks. In 2025, we're looking at even more revolutionary changes that will transform how we interact with our devices.</p>
            
            <h3>Wi-Fi 7: The Next Generation</h3>
            <p>Wi-Fi 7 (802.11be) promises speeds up to 46 Gbps, nearly five times faster than Wi-Fi 6. This means seamless 8K streaming, instant cloud gaming, and virtually no latency for smart home devices.</p>
            
            <h3>5G Advanced and 6G Preview</h3>
            <p>While 5G continues to roll out globally, researchers are already testing 6G technologies that could offer terabit-per-second speeds and near-instant connectivity.</p>
            
            <h2>Impact on Consumer Electronics</h2>
            <p>These advancements mean:</p>
            <ul>
              <li>True wireless VR and AR experiences</li>
              <li>Smart homes that respond instantly</li>
              <li>Remote work without connectivity issues</li>
              <li>Advanced IoT ecosystems</li>
            </ul>
          `,
          author: "Sarah Chen",
          authorRole: "Senior Tech Analyst",
          authorImage: getAvatarUrl("Sarah Chen"),
          date: "2025-01-15",
          readTime: "8 min read",
          category: "Technology",
          image: "/img/adi-goldstein-EUsVwEOsblE-unsplash.jpg",
          tags: ["Wireless", "5G", "Wi-Fi7", "Innovation"],
          views: 2847,
          likes: 156,
          featured: true
        },
        {
          id: 2,
          title: "Premium Audio: What Makes High-End Headphones Worth It",
          excerpt: "Understanding the technology and craftsmanship behind premium audio equipment.",
          content: `
            <h2>The Science of Superior Sound</h2>
            <p>High-end headphones aren't just about brand names - they're about engineering excellence and acoustic perfection. Let's dive into what separates premium audio from mainstream options.</p>
            
            <h3>Driver Technology</h3>
            <p>Premium headphones often use planar magnetic or electrostatic drivers instead of traditional dynamic drivers. These technologies provide:</p>
            <ul>
              <li>Lower distortion rates</li>
              <li>Faster transient response</li>
              <li>More accurate sound reproduction</li>
            </ul>
            
            <h3>Materials Matter</h3>
            <p>From memory foam ear cushions to magnesium alloy frames, the materials used in high-end headphones contribute significantly to comfort and sound quality.</p>
            
            <h2>Is It Worth the Investment?</h2>
            <p>For audiophiles and professionals, absolutely. The difference in sound quality, build quality, and longevity justifies the premium price tag for those who value exceptional audio experiences.</p>
          `,
          author: "Marcus Johnson",
          authorRole: "Audio Engineer",
          authorImage: getAvatarUrl("Marcus Johnson"),
          date: "2025-01-12",
          readTime: "6 min read",
          category: "Audio",
          image: "/img/ian-powell-IZq4N_ObNv4-unsplash.jpg",
          tags: ["Audio", "Headphones", "Hi-Fi", "Technology"],
          views: 1892,
          likes: 203,
          featured: true
        },
        {
          id: 3,
          title: "Sustainable Tech: The Future of Electronics Manufacturing",
          excerpt: "How leading brands are implementing eco-friendly practices in tech production.",
          content: `
            <h2>The Green Revolution in Tech</h2>
            <p>Sustainability is no longer optional in electronics manufacturing. Leading companies are revolutionizing their processes to reduce environmental impact while maintaining quality.</p>
            
            <h3>Materials Innovation</h3>
            <p>Companies are exploring:</p>
            <ul>
              <li>Biodegradable plastics from plant sources</li>
              <li>Recycled aluminum and rare earth metals</li>
              <li>Modular designs for easier repair and upgrade</li>
            </ul>
            
            <h3>Energy Efficiency</h3>
            <p>Modern manufacturing facilities are implementing solar power, water recycling systems, and energy-efficient production lines to minimize their carbon footprint.</p>
          `,
          author: "Emily Rodriguez",
          authorRole: "Sustainability Expert",
          authorImage: getAvatarUrl("Emily Rodriguez"),
          date: "2025-01-10",
          readTime: "7 min read",
          category: "Sustainability",
          image: "/img/view-vacuum-cleaner-robot-flat-surface-floor.jpg",
          tags: ["Sustainability", "Eco-Friendly", "Manufacturing"],
          views: 2156,
          likes: 178,
          featured: false
        },
        {
          id: 4,
          title: "The Evolution of Smart Home Integration",
          excerpt: "From basic automation to AI-powered smart ecosystems - what's next?",
          content: `
            <h2>From Simple Automation to Intelligent Ecosystems</h2>
            <p>Smart home technology has evolved from simple remote controls to sophisticated AI-driven systems that anticipate your needs.</p>
            
            <h3>Current State of Smart Homes</h3>
            <p>Today's smart homes can:</p>
            <ul>
              <li>Learn your daily routines</li>
              <li>Optimize energy usage automatically</li>
              <li>Provide security through AI monitoring</li>
              <li>Integrate multiple ecosystems seamlessly</li>
            </ul>
            
            <h3>What's Next?</h3>
            <p>The future includes predictive maintenance, emotion-aware environments, and even more seamless integration between devices and services.</p>
          `,
          author: "Alex Thompson",
          authorRole: "Smart Home Specialist",
          authorImage: getAvatarUrl("Alex Thompson"),
          date: "2025-01-08",
          readTime: "5 min read",
          category: "Smart Home",
          image: "/img/davidx-rQ7e1QwSPeY-unsplash.jpg",
          tags: ["Smart Home", "AI", "Automation", "IoT"],
          views: 1678,
          likes: 145,
          featured: false
        },
        {
          id: 5,
          title: "Gaming Monitors: Refresh Rates vs Resolution",
          excerpt: "Breaking down the technical specifications that matter for serious gamers.",
          content: `
            <h2>The Great Gaming Monitor Debate</h2>
            <p>When choosing a gaming monitor, the balance between refresh rate and resolution is crucial. Here's what you need to know.</p>
            
            <h3>Refresh Rate: Speed Matters</h3>
            <p>Higher refresh rates (144Hz, 240Hz, 360Hz) provide smoother motion and reduced input lag, essential for competitive gaming.</p>
            
            <h3>Resolution: Clarity and Detail</h3>
            <p>4K resolution offers incredible detail but requires powerful hardware. 1440p strikes a great balance for most gamers.</p>
            
            <h3>Finding Your Perfect Balance</h3>
            <p>Consider your gaming style: competitive FPS players prioritize refresh rate, while RPG enthusiasts might prefer higher resolution.</p>
          `,
          author: "Jessica Lee",
          authorRole: "Gaming Hardware Expert",
          authorImage: getAvatarUrl("Jessica Lee"),
          date: "2025-01-05",
          readTime: "4 min read",
          category: "Gaming",
          image: "/img/davidx-rQ7e1QwSPeY-unsplash.jpg",
          tags: ["Gaming", "Monitors", "Hardware", "Performance"],
          views: 2987,
          likes: 267,
          featured: false
        },
        {
          id: 6,
          title: "The Science Behind Fast Charging Technology",
          excerpt: "Understanding how modern charging solutions balance speed and battery health.",
          content: `
            <h2>Fast Charging: Speed Meets Safety</h2>
            <p>Modern fast charging technologies have revolutionized how we power our devices, but how do they work without damaging batteries?</p>
            
            <h3>How Fast Charging Works</h3>
            <p>Fast charging increases power delivery through higher voltages and currents, managed by sophisticated charging ICs that protect battery health.</p>
            
            <h3>Battery Health Considerations</h3>
            <p>Advanced thermal management and smart charging algorithms ensure batteries maintain longevity while charging quickly.</p>
            
            <h3>The Future of Charging</h3>
            <p>Wireless fast charging, gallium nitride technology, and even faster wired solutions are on the horizon.</p>
          `,
          author: "David Kim",
          authorRole: "Battery Technology Researcher",
          authorImage: getAvatarUrl("David Kim"),
          date: "2025-01-03",
          readTime: "6 min read",
          category: "Technology",
          image: "/img/adi-goldstein-EUsVwEOsblE-unsplash.jpg",
          tags: ["Charging", "Battery", "Technology", "Innovation"],
          views: 3245,
          likes: 189,
          featured: false
        }
        // ... other posts (same as before)
      ];
      
      setPosts(mockPosts);
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  const categories = ['all', ...new Set(posts.map(post => post.category))];
  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const themeStyles = {
    background: 'bg-gray-50',
    text: {
      primary: 'text-gray-900',
      secondary: 'text-gray-600',
      muted: 'text-gray-500'
    },
    card: {
      background: 'bg-white/80',
      border: 'border-gray-200',
      hover: 'hover:border-[#BBC863]'
    },
    gradient: {
      from: 'from-[#F0E491]/20',
      to: 'to-[#658C58]/20',
      text: {
        from: 'from-[#F0E491]',
        via: 'via-[#BBC863]',
        to: 'to-[#658C58]'
      }
    }
  };

  // Custom Avatar Component that uses regular img tag for external URLs
  const Avatar = ({ src, alt, size = 40 }: { src: string; alt: string; size?: number }) => (
    <img
      src={src}
      alt={alt}
      className="rounded-full"
      style={{ width: size, height: size }}
      onError={(e) => {
        // Fallback if image fails to load
        const target = e.target as HTMLImageElement;
        target.src = `https://via.placeholder.com/${size}?text=${alt.charAt(0)}`;
      }}
    />
  );

  const FeaturedPost = ({ post }: { post: BlogPost }) => (
    <Link href={`/blog/${post.id}`}>
      <article className={`group relative ${themeStyles.card.background} backdrop-blur-sm rounded-2xl border ${themeStyles.card.border} overflow-hidden ${themeStyles.card.hover} transition-all duration-300 hover:transform hover:scale-[1.02] cursor-pointer`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${themeStyles.gradient.from} ${themeStyles.gradient.to} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
        
        <div className={`relative h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-2xl overflow-hidden`}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            priority
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-white/60 via-white/20 to-transparent`} />
          <div className="absolute bottom-4 left-6 flex gap-2">
            <span className={`inline-block px-3 py-1 bg-[#658C58] text-white text-sm rounded-full backdrop-blur-sm`}>
              {post.category}
            </span>
            {post.featured && (
              <span className={`inline-block px-3 py-1 bg-[#F0E491] text-gray-900 text-sm rounded-full backdrop-blur-sm`}>
                Featured
              </span>
            )}
          </div>
        </div>
        
        <div className="relative p-8">
          <h2 className={`text-2xl font-bold ${themeStyles.text.primary} mb-4 group-hover:text-[#31694E] transition-colors duration-200`}>
            {post.title}
          </h2>
          <p className={`${themeStyles.text.secondary} mb-6 text-lg leading-relaxed`}>
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Avatar src={post.authorImage} alt={post.author} size={40} />
                <div>
                  <div className={`font-semibold ${themeStyles.text.primary}`}>{post.author}</div>
                  <div className={`text-sm ${themeStyles.text.muted}`}>{post.authorRole}</div>
                </div>
              </div>
            </div>
            
            <div className={`flex items-center space-x-4 text-sm ${themeStyles.text.muted}`}>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center space-x-6 mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center space-x-1 text-sm text-gray-500">
              <Eye className="w-4 h-4" />
              <span>{post.views.toLocaleString()} views</span>
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-500">
              <span>❤️ {post.likes} likes</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map(tag => (
              <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );

  const BlogCard = ({ post }: { post: BlogPost }) => (
    <Link href={`/blog/${post.id}`}>
      <article className={`group ${themeStyles.card.background} backdrop-blur-sm rounded-xl border ${themeStyles.card.border} overflow-hidden ${themeStyles.card.hover} transition-all duration-300 hover:transform hover:scale-[1.02] cursor-pointer h-full flex flex-col`}>
        <div className={`absolute inset-0 bg-gradient-to-br from-[#F0E491]/20 to-[#BBC863]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
        
        <div className={`relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden flex-shrink-0`}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-white/50 to-transparent`} />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className={`inline-block px-2 py-1 bg-[#658C58] text-white text-xs rounded-full backdrop-blur-sm`}>
              {post.category}
            </span>
          </div>
        </div>
        
        <div className="relative p-6 flex flex-col flex-grow">
          <h3 className={`font-bold text-lg ${themeStyles.text.primary} mb-3 group-hover:text-[#31694E] transition-colors duration-200 line-clamp-2`}>
            {post.title}
          </h3>
          <p className={`${themeStyles.text.secondary} text-sm mb-4 line-clamp-3 flex-grow`}>
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center space-x-3">
              <Avatar src={post.authorImage} alt={post.author} size={32} />
              <div>
                <div className={`text-sm font-medium ${themeStyles.text.primary}`}>{post.author}</div>
                <div className={`text-xs ${themeStyles.text.muted}`}>{formatDate(post.date)}</div>
              </div>
            </div>
            
            <div className={`flex items-center space-x-2 text-xs ${themeStyles.text.muted}`}>
              <Clock className="w-3 h-3" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200">
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span>{post.views.toLocaleString()} views</span>
              <span>❤️ {post.likes}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );

  const LoadingSkeleton = () => (
    <div className="space-y-8">
      <div className={`${themeStyles.card.background} backdrop-blur-sm rounded-2xl border ${themeStyles.card.border} overflow-hidden animate-pulse`}>
        <div className={`h-96 bg-gray-300 rounded-t-2xl`} />
        <div className="p-8 space-y-4">
          <div className={`h-8 bg-gray-300 rounded w-3/4`} />
          <div className={`h-4 bg-gray-300 rounded w-full`} />
          <div className={`h-4 bg-gray-300 rounded w-2/3`} />
          <div className="flex space-x-4">
            <div className={`h-4 bg-gray-300 rounded w-1/4`} />
            <div className={`h-4 bg-gray-300 rounded w-1/4`} />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`${themeStyles.card.background} backdrop-blur-sm rounded-xl border ${themeStyles.card.border} overflow-hidden animate-pulse h-full flex flex-col`}>
            <div className={`h-48 bg-gray-300`} />
            <div className="p-6 space-y-3 flex flex-col flex-grow">
              <div className={`h-6 bg-gray-300 rounded w-4/5`} />
              <div className={`h-4 bg-gray-300 rounded w-full`} />
              <div className={`h-4 bg-gray-300 rounded w-2/3`} />
              <div className="flex justify-between mt-auto">
                <div className={`h-3 bg-gray-300 rounded w-1/4`} />
                <div className={`h-3 bg-gray-300 rounded w-1/4`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen ${themeStyles.background}`}>
      {/* Animated Background Particles */}
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
                opacity: particle.opacity * 0.3,
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
          <Link href="/" className="inline-flex items-center text-[#31694E] hover:text-[#658C58] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className={`bg-gradient-to-r ${themeStyles.gradient.text.from} ${themeStyles.gradient.text.via} ${themeStyles.gradient.text.to} bg-clip-text text-transparent`}>
              Tech Insights Blog
            </span>
          </h1>
          <p className={`text-xl ${themeStyles.text.secondary} mb-8 max-w-2xl mx-auto`}>
            Discover the latest in technology, innovation, and premium electronics through our expert insights and reviews.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 text-center mb-8">
            <div className={themeStyles.text.primary}>
              <div className={`text-2xl font-bold text-[#F0E491]`}>{posts.length}+</div>
              <div className={themeStyles.text.muted}>Articles Published</div>
            </div>
            <div className={themeStyles.text.primary}>
              <div className={`text-2xl font-bold text-[#BBC863]`}>10k+</div>
              <div className={themeStyles.text.muted}>Monthly Readers</div>
            </div>
            <div className={themeStyles.text.primary}>
              <div className={`text-2xl font-bold text-[#658C58]`}>{new Set(posts.map(p => p.author)).size}+</div>
              <div className={themeStyles.text.muted}>Expert Writers</div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-[#31694E] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
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
              {/* Featured Posts */}
              <section>
                <h2 className={`text-2xl font-bold ${themeStyles.text.primary} mb-8 flex items-center`}>
                  <span className={`bg-gradient-to-r ${themeStyles.gradient.text.from} ${themeStyles.gradient.text.to} bg-clip-text text-transparent`}>
                    Featured Stories
                  </span>
                  <div className={`ml-4 h-px flex-1 bg-gradient-to-r from-[#F0E491]/50 to-transparent`} />
                </h2>
                <div className="grid gap-8">
                  {filteredPosts.filter(post => post.featured).map(post => (
                    <FeaturedPost key={post.id} post={post} />
                  ))}
                </div>
              </section>

              {/* Latest Articles */}
              <section>
                <h2 className={`text-2xl font-bold ${themeStyles.text.primary} mb-8 flex items-center`}>
                  <span className={`bg-gradient-to-r from-[#F0E491] to-[#658C58] bg-clip-text text-transparent`}>
                    Latest Articles
                  </span>
                  <div className={`ml-4 h-px flex-1 bg-gradient-to-r from-[#F0E491]/50 to-transparent`} />
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPosts.filter(post => !post.featured).map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              </section>

              {/* Newsletter CTA */}
              <section className={`relative ${themeStyles.card.background} backdrop-blur-sm rounded-2xl border ${themeStyles.card.border} p-8 text-center`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${themeStyles.gradient.from} ${themeStyles.gradient.to} rounded-2xl`} />
                <div className="relative">
                  <h3 className={`text-2xl font-bold ${themeStyles.text.primary} mb-4`}>
                    Stay Updated with Tech Trends
                  </h3>
                  <p className={`${themeStyles.text.secondary} mb-6 max-w-md mx-auto`}>
                    Get the latest articles and product updates delivered to your inbox.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className={`flex-1 px-4 py-3 bg-white/50 border border-gray-300 rounded-lg ${themeStyles.text.primary} placeholder-gray-400 focus:outline-none focus:border-[#F0E491] focus:ring-1 focus:ring-[#F0E491] backdrop-blur-sm`}
                    />
                    <button className="px-6 py-3 bg-[#31694E] text-white rounded-lg hover:bg-[#658C58] transition-colors duration-200 font-medium backdrop-blur-sm">
                      Subscribe
                    </button>
                  </div>
                </div>
              </section>
            </div>
          )}
        </div>
      </main>

      <footer className={`relative border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-7xl mx-auto text-center">
          <div className={themeStyles.text.muted}>
            <p>&copy; 2025 TechPremium. All rights reserved.</p>
            <p className="mt-2">Premium Technology E-Commerce</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPage;