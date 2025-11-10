import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const width = parseInt(searchParams.get('width') || '80');
  const height = parseInt(searchParams.get('height') || '80');
  const seed = searchParams.get('seed') || Math.random().toString(36).substring(7);
  
  const avatarWidth = Math.min(width, 500);
  const avatarHeight = Math.min(height, 500);
  
  const colors = [
    'FF6B6B', '4ECDC4', '45B7D1', '96CEB4', 'FFEAA7', 
    'DDA0DD', '98D8C8', 'F7DC6F', 'BB8FCE', '85C1E9'
  ];
  const seedNumber = seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const randomColor = colors[seedNumber % colors.length];
  
  const svg = `
    <svg width="${avatarWidth}" height="${avatarHeight}" viewBox="0 0 ${avatarWidth} ${avatarHeight}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="${avatarWidth}" height="${avatarHeight}" fill="#${randomColor}"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="${Math.min(avatarWidth, avatarHeight) / 4}">
        ${avatarWidth}x${avatarHeight}
      </text>
    </svg>
  `;

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}