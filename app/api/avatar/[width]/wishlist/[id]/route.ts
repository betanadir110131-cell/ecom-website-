// app/api/wishlist/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';

// Mock database - replace with your actual database
let wishlistItems: any[] = [];

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    
    const initialLength = wishlistItems.length;
    wishlistItems = wishlistItems.filter(item => item.id !== id);
    
    if (wishlistItems.length === initialLength) {
      return NextResponse.json(
        { error: 'Wishlist item not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to remove from wishlist' },
      { status: 500 }
    );
  }
}