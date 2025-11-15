import { NextRequest, NextResponse } from 'next/server';
import { addWishlistProduct, getWishlistItems } from '@/lib/mockWishlistDb';

export async function GET() {
  try {
    return NextResponse.json(getWishlistItems());
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch wishlist' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { productId } = await request.json();
    const newItem = addWishlistProduct(productId);
    if (!newItem) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }
    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to add to wishlist' },
      { status: 500 }
    );
  }
}