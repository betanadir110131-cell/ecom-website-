// app/blog/[id]/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Clock, ArrowLeft, Share2, Bookmark, Eye, Heart, MessageCircle } from 'lucide-react';

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

// All blog posts data
const ALL_BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Wireless Technology in 2025",
    excerpt: "Explore the latest advancements in wireless technology and what it means for premium electronics.",
    content: `
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">The Evolution of Wireless Connectivity</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Wireless technology has come a long way from basic Bluetooth connectivity to today's sophisticated Wi-Fi 6E and 5G networks. In 2025, we're looking at even more revolutionary changes that will transform how we interact with our devices.</p>
      
      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">Wi-Fi 7: The Next Generation</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">Wi-Fi 7 (802.11be) promises speeds up to 46 Gbps, nearly five times faster than Wi-Fi 6. This means seamless 8K streaming, instant cloud gaming, and virtually no latency for smart home devices. The improved efficiency and reduced latency will revolutionize how we work and play.</p>
      
      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">5G Advanced and 6G Preview</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">While 5G continues to roll out globally, researchers are already testing 6G technologies that could offer terabit-per-second speeds and near-instant connectivity. Imagine downloading entire movies in milliseconds or experiencing lag-free augmented reality anywhere.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Impact on Consumer Electronics</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">These advancements mean exciting possibilities for everyday technology users:</p>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li><strong>True wireless VR and AR experiences</strong> - No more cables holding you back from immersive virtual worlds</li>
        <li><strong>Smart homes that respond instantly</strong> - Lights, security, and appliances working in perfect harmony</li>
        <li><strong>Remote work without connectivity issues</strong> - Crystal-clear video calls and instant file transfers</li>
        <li><strong>Advanced IoT ecosystems</strong> - Your devices communicating seamlessly with each other</li>
      </ul>

      <div class="bg-gradient-to-r from-[#F0E491]/20 to-[#658C58]/20 p-6 rounded-xl my-6">
        <h4 class="font-bold text-gray-900 mb-2">Key Takeaway</h4>
        <p class="text-gray-700">The future of wireless technology promises unprecedented speed and reliability, enabling new applications we can only imagine today. From smart cities to personalized healthcare, the possibilities are endless.</p>
      </div>
    `,
    author: "Sarah Chen",
    authorRole: "Senior Tech Analyst",
    authorImage: "https://ui-avatars.com/api/?name=Sarah+Chen&background=31694E&color=fff&size=100",
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
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">The Science of Superior Sound</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">High-end headphones aren't just about brand names - they're about engineering excellence and acoustic perfection. Let's dive into what separates premium audio from mainstream options and why the investment might be worth it for true audio enthusiasts.</p>
      
      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">Driver Technology: The Heart of Sound</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">Premium headphones often use planar magnetic or electrostatic drivers instead of traditional dynamic drivers. These technologies provide:</p>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li><strong>Lower distortion rates</strong> - Cleaner sound even at high volumes</li>
        <li><strong>Faster transient response</strong> - Crisp, detailed audio reproduction</li>
        <li><strong>More accurate sound reproduction</strong> - Music as the artist intended</li>
        <li><strong>Wider frequency response</strong> - Hearing details you never noticed before</li>
      </ul>
      
      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">Materials Matter: Built to Last</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">From memory foam ear cushions to magnesium alloy frames, the materials used in high-end headphones contribute significantly to comfort and sound quality. Premium materials not only feel better but also provide better acoustic isolation and durability.</p>
      
      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">Advanced Features</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">High-end headphones often include features like active noise cancellation with multiple microphones, personalized sound profiles, and advanced connectivity options that justify their premium positioning.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Is It Worth the Investment?</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">For audiophiles and professionals, absolutely. The difference in sound quality, build quality, and longevity justifies the premium price tag for those who value exceptional audio experiences. While not everyone needs $500 headphones, for those who live and breathe music or work in audio production, the investment can be transformative.</p>

      <div class="bg-gradient-to-r from-[#F0E491]/20 to-[#658C58]/20 p-6 rounded-xl my-6">
        <h4 class="font-bold text-gray-900 mb-2">Pro Tip</h4>
        <p class="text-gray-700">Always test headphones with your favorite music before buying. The best headphones are the ones that sound right to your ears, regardless of specifications or price.</p>
      </div>
    `,
    author: "Marcus Johnson",
    authorRole: "Audio Engineer",
    authorImage: "https://ui-avatars.com/api/?name=Marcus+Johnson&background=31694E&color=fff&size=100",
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
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">The Green Revolution in Tech</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Sustainability is no longer optional in electronics manufacturing. Leading companies are revolutionizing their processes to reduce environmental impact while maintaining the high quality consumers expect.</p>
      
      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">Materials Innovation: Beyond Plastic</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">Companies are exploring innovative approaches to materials:</p>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li><strong>Biodegradable plastics from plant sources</strong> - Reducing reliance on fossil fuels</li>
        <li><strong>Recycled aluminum and rare earth metals</strong> - Closing the material lifecycle loop</li>
        <li><strong>Modular designs for easier repair and upgrade</strong> - Fighting planned obsolescence</li>
        <li><strong>Ocean-bound plastics</strong> - Cleaning our oceans while creating products</li>
      </ul>
      
      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">Energy Efficiency in Manufacturing</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">Modern manufacturing facilities are implementing solar power, water recycling systems, and energy-efficient production lines to minimize their carbon footprint. Some facilities now operate on 100% renewable energy.</p>
      
      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">Circular Economy Initiatives</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">Leading brands are implementing take-back programs, refurbishment services, and proper recycling channels to ensure electronics don't end up in landfills.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Consumer Impact and Responsibility</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">As consumers, we play a crucial role in supporting sustainable tech by choosing brands with strong environmental commitments, properly recycling old devices, and considering the lifecycle impact of our purchases.</p>

      <div class="bg-gradient-to-r from-[#F0E491]/20 to-[#658C58]/20 p-6 rounded-xl my-6">
        <h4 class="font-bold text-gray-900 mb-2">Did You Know?</h4>
        <p class="text-gray-700">Some companies now offer carbon-neutral shipping and plant trees for every product sold, making it easier for consumers to make environmentally conscious choices.</p>
      </div>
    `,
    author: "Emily Rodriguez",
    authorRole: "Sustainability Expert",
    authorImage: "https://ui-avatars.com/api/?name=Emily+Rodriguez&background=31694E&color=fff&size=100",
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
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">From Simple Automation to Intelligent Ecosystems</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Smart home technology has evolved from simple remote controls to sophisticated AI-driven systems that anticipate your needs and create truly intelligent living spaces.</p>
      
      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">Current State of Smart Homes</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">Today's smart homes can do much more than just turn lights on and off:</p>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li><strong>Learn your daily routines</strong> - Automatically adjusting temperature and lighting</li>
        <li><strong>Optimize energy usage automatically</strong> - Saving money while reducing environmental impact</li>
        <li><strong>Provide security through AI monitoring</strong> - Intelligent threat detection and prevention</li>
        <li><strong>Integrate multiple ecosystems seamlessly</strong> - All your devices working together harmoniously</li>
        <li><strong>Voice control and natural language processing</strong> - Conversational interactions with your home</li>
      </ul>
      
      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">The Rise of Interoperability</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">New standards like Matter are making it easier for devices from different manufacturers to work together, breaking down the walled gardens that previously limited smart home expansion.</p>
      
      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">What's Next in Smart Home Technology?</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">The future includes exciting developments like:</p>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li><strong>Predictive maintenance</strong> - Your home anticipating when devices need service</li>
        <li><strong>Emotion-aware environments</strong> - Lighting and music that match your mood</li>
        <li><strong>Health monitoring integration</strong> - Your home helping track wellness metrics</li>
        <li><strong>Even more seamless integration</strong> - Between devices, services, and your digital life</li>
      </ul>

      <div class="bg-gradient-to-r from-[#F0E491]/20 to-[#658C58]/20 p-6 rounded-xl my-6">
        <h4 class="font-bold text-gray-900 mb-2">Getting Started</h4>
        <p class="text-gray-700">Begin with a smart speaker or hub, then gradually add devices that solve specific problems in your daily life. Focus on interoperability to avoid getting locked into a single ecosystem.</p>
      </div>
    `,
    author: "Alex Thompson",
    authorRole: "Smart Home Specialist",
    authorImage: "https://ui-avatars.com/api/?name=Alex+Thompson&background=31694E&color=fff&size=100",
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
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">The Great Gaming Monitor Debate</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">When choosing a gaming monitor, the balance between refresh rate and resolution is crucial. Understanding these specifications can mean the difference between victory and defeat in competitive gaming.</p>
      
      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">Refresh Rate: Speed Matters</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">Higher refresh rates (144Hz, 240Hz, 360Hz) provide smoother motion and reduced input lag, essential for competitive gaming. The difference between 60Hz and 144Hz is immediately noticeable, while the jump to 240Hz offers diminishing returns for most players.</p>
      
      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">Resolution: Clarity and Detail</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">4K resolution offers incredible detail but requires powerful hardware. 1440p strikes a great balance for most gamers, providing sharp visuals without overwhelming today's graphics cards. Consider your GPU's capabilities when choosing resolution.</p>
      
      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">Response Time and Panel Technology</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">Beyond refresh rate and resolution, consider:</p>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li><strong>Response time</strong> - How quickly pixels can change color (1ms is ideal for gaming)</li>
        <li><strong>Panel type</strong> - IPS for color accuracy, TN for speed, VA for contrast</li>
        <li><strong>Adaptive sync</strong> - G-Sync or FreeSync to eliminate screen tearing</li>
        <li><strong>HDR support</strong> - For more vibrant colors and better contrast</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Finding Your Perfect Balance</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Consider your gaming style and hardware:</p>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li><strong>Competitive FPS players</strong> - Prioritize refresh rate (240Hz+) and response time</li>
        <li><strong>RPG and adventure gamers</strong> - Focus on resolution and color accuracy</li>
        <li><strong>Content creators</strong> - Balance both with good color reproduction</li>
        <li><strong>Console gamers</strong> - Match your monitor to your console's capabilities</li>
      </ul>

      <div class="bg-gradient-to-r from-[#F0E491]/20 to-[#658C58]/20 p-6 rounded-xl my-6">
        <h4 class="font-bold text-gray-900 mb-2">Pro Gamer Tip</h4>
        <p class="text-gray-700">For competitive gaming, prioritize refresh rate over resolution. The smoother gameplay and reduced input lag will give you a tangible advantage over opponents using lower refresh rate displays.</p>
      </div>
    `,
    author: "Jessica Lee",
    authorRole: "Gaming Hardware Expert",
    authorImage: "https://ui-avatars.com/api/?name=Jessica+Lee&background=31694E&color=fff&size=100",
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
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Fast Charging: Speed Meets Safety</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Modern fast charging technologies have revolutionized how we power our devices, but how do they work without damaging batteries? The answer lies in sophisticated engineering and intelligent power management.</p>
      
      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">How Fast Charging Actually Works</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">Fast charging increases power delivery through higher voltages and currents, managed by sophisticated charging ICs that protect battery health. The key is intelligent communication between the charger and device to optimize charging speed while maintaining safety.</p>
      
      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">Battery Health Considerations</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">Advanced thermal management and smart charging algorithms ensure batteries maintain longevity while charging quickly. Modern systems use:</p>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li><strong>Temperature monitoring</strong> - Multiple sensors prevent overheating</li>
        <li><strong>Adaptive charging rates</strong> - Slowing down as the battery fills</li>
        <li><strong>Battery health learning</strong> - Algorithms that adapt to your usage patterns</li>
        <li><strong>Optimized charging cycles</strong> - Reducing stress on battery cells</li>
      </ul>
      
      <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">Charging Standards Explained</h3>
      <p class="text-gray-700 mb-4 leading-relaxed">Different manufacturers use various fast charging technologies:</p>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li><strong>USB Power Delivery (PD)</strong> - The universal standard for modern devices</li>
        <li><strong>Qualcomm Quick Charge</strong> - Popular in Android devices</li>
        <li><strong>Apple Fast Charging</strong> - Requires specific USB-C power adapters</li>
        <li><strong>SuperVOOC and Warp Charge</strong> - Manufacturer-specific implementations</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">The Future of Charging Technology</h2>
      <p class="text-gray-700 mb-4 leading-relaxed">Exciting developments are on the horizon:</p>
      <ul class="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li><strong>Wireless fast charging</strong> - Approaching wired speeds without cables</li>
        <li><strong>Gallium nitride technology</strong> - Smaller, more efficient chargers</li>
        <li><strong>Even faster wired solutions</strong> - Pushing beyond current limits safely</li>
        <li><strong>Universal charging standards</strong> - One charger for all your devices</li>
      </ul>

      <div class="bg-gradient-to-r from-[#F0E491]/20 to-[#658C58]/20 p-6 rounded-xl my-6">
        <h4 class="font-bold text-gray-900 mb-2">Battery Care Tips</h4>
        <p class="text-gray-700">Avoid charging to 100% regularly, keep devices at moderate temperatures, and use certified chargers. Most modern devices have built-in protection, but good habits extend battery life significantly.</p>
      </div>
    `,
    author: "David Kim",
    authorRole: "Battery Technology Researcher",
    authorImage: "https://ui-avatars.com/api/?name=David+Kim&background=31694E&color=fff&size=100",
    date: "2025-01-03",
    readTime: "6 min read",
    category: "Technology",
    image: "/img/adi-goldstein-EUsVwEOsblE-unsplash.jpg",
    tags: ["Charging", "Battery", "Technology", "Innovation"],
    views: 3245,
    likes: 189,
    featured: false
  }
];

// Custom Avatar Component for external URLs
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

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const postId = Number(params.id);
      const foundPost = ALL_BLOG_POSTS.find(p => p.id === postId);
      
      if (foundPost) {
        setPost(foundPost);
        // Get related posts (same category, excluding current post)
        const related = ALL_BLOG_POSTS
          .filter(p => p.category === foundPost.category && p.id !== foundPost.id)
          .slice(0, 2);
        setRelatedPosts(related);
      }
      
      setIsLoading(false);
    };

    fetchPost();
  }, [params.id]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    // In real app, make API call to update likes
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post?.title,
        text: post?.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/4 mb-8"></div>
            <div className="h-96 bg-gray-300 rounded mb-8"></div>
            <div className="space-y-4">
              <div className="h-6 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-2/3"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="text-[#31694E] hover:text-[#658C58] font-medium">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/blog"
            className="inline-flex items-center text-[#31694E] hover:text-[#658C58] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-[#658C58] text-white text-sm rounded-full">
              {post.category}
            </span>
            {post.featured && (
              <span className="px-3 py-1 bg-[#F0E491] text-gray-900 text-sm rounded-full">
                Featured
              </span>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author and Meta Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div className="flex items-center space-x-4">
              <Avatar src={post.authorImage} alt={post.author} size={56} />
              <div>
                <div className="font-semibold text-gray-900">{post.author}</div>
                <div className="text-gray-600">{post.authorRole}</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-gray-500">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center space-x-6 py-4 border-y border-gray-200">
            <div className="flex items-center space-x-2 text-gray-600">
              <Eye className="w-5 h-5" />
              <span>{post.views.toLocaleString()} views</span>
            </div>
            <button 
              onClick={handleLike}
              className={`flex items-center space-x-2 transition-colors ${
                isLiked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'
              }`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              <span>{post.likes + (isLiked ? 1 : 0)}</span>
            </button>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-96 mb-8 rounded-2xl overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div 
          className="mb-12 prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              #{tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between py-6 border-t border-gray-200">
          <button
            onClick={handleShare}
            className="flex items-center space-x-2 text-gray-600 hover:text-[#31694E] transition-colors"
          >
            <Share2 className="w-5 h-5" />
            <span>Share Article</span>
          </button>
          
          <button className="flex items-center space-x-2 text-gray-600 hover:text-[#31694E] transition-colors">
            <Bookmark className="w-5 h-5" />
            <span>Save for Later</span>
          </button>
        </div>

        {/* Author Bio */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Avatar src={post.authorImage} alt={post.author} size={64} />
            <div>
              <h3 className="text-xl font-bold text-gray-900">{post.author}</h3>
              <p className="text-gray-600">{post.authorRole}</p>
            </div>
          </div>
          <p className="text-gray-700">
            {post.author} is an expert in {post.category.toLowerCase()} with years of experience in the tech industry. 
            They are passionate about exploring how technology shapes our daily lives and future innovations.
          </p>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map(relatedPost => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                  <article className="bg-white rounded-xl border border-gray-200 p-6 hover:border-[#BBC863] transition-colors cursor-pointer">
                    <div className="flex items-center gap-3 mb-3">
                      <Avatar src={relatedPost.authorImage} alt={relatedPost.author} size={40} />
                      <div>
                        <div className="font-medium text-gray-900">{relatedPost.author}</div>
                        <div className="text-sm text-gray-500">{formatDate(relatedPost.date)}</div>
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-3 hover:text-[#31694E] transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="px-2 py-1 bg-gray-100 rounded text-xs">{relatedPost.category}</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      {/* Newsletter CTA */}
      <section className="bg-white border-t border-gray-200 py-16">
        <div className="max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Enjoyed this article?
          </h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for more tech insights and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#31694E] focus:ring-1 focus:ring-[#31694E]"
            />
            <button className="px-6 py-3 bg-[#31694E] text-white rounded-lg hover:bg-[#658C58] transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}