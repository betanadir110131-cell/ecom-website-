// app/api/blog/posts/route.ts
import { NextRequest, NextResponse } from 'next/server';

// Mock database - replace with actual database calls
const blogPosts = [
  {
    id: 1,
    title: "The Future of Wireless Technology in 2025",
    excerpt: "Explore the latest advancements in wireless technology and what it means for premium electronics.",
    content: "Full content about wireless technology advancements...",
    author: "Sarah Chen",
    date: "2025-01-15",
    readTime: "5 min read",
    category: "Technology",
    image: "/img/adi-goldstein-EUsVwEOsblE-unsplash.jpg"
  },
  // ... other posts
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const category = searchParams.get('category');

    let filteredPosts = blogPosts;

    // Filter by category if provided
    if (category) {
      filteredPosts = blogPosts.filter(post => 
        post.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

    return NextResponse.json({
      posts: paginatedPosts,
      totalPosts: filteredPosts.length,
      totalPages: Math.ceil(filteredPosts.length / limit),
      currentPage: page
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['title', 'excerpt', 'content', 'author', 'category'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Create new post
    const newPost = {
      id: blogPosts.length + 1,
      title: body.title,
      excerpt: body.excerpt,
      content: body.content,
      author: body.author,
      date: new Date().toISOString().split('T')[0],
      readTime: body.readTime || `${Math.ceil(body.content.split(' ').length / 200)} min read`,
      category: body.category,
      image: body.image || '/img/default-blog.jpg'
    };

    // In a real application, save to database here
    blogPosts.unshift(newPost);

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}