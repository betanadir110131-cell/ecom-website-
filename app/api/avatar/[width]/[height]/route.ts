import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ width: string; height: string }> }
) {
  // Await the params since they're now a Promise in Next.js 16
  const { width, height } = await params;
  
  const avatarWidth = parseInt(width) || 80;
  const avatarHeight = parseInt(height) || 80;
  
  // Generate a simple SVG avatar with random background color
  const colors = [
    'FF6B6B', '4ECDC4', '45B7D1', '96CEB4', 'FFEAA7', 
    'DDA0DD', '98D8C8', 'F7DC6F', 'BB8FCE', '85C1E9'
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  const svg = `
    <svg width="${avatarWidth}" height="${avatarHeight}" viewBox="0 0 ${avatarWidth} ${avatarHeight}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="${avatarWidth}" height="${avatarHeight}" fill="#${randomColor}"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="${Math.min(avatarWidth, avatarHeight) / 3}">
        ${avatarWidth}x${avatarHeight}
      </text>
    </svg>
  `;

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
    },
  });
}