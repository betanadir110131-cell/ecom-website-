import { NextRequest, NextResponse } from 'next/server';
import { removeWishlistItem, getWishlistItems } from '@/lib/mockWishlistDb';

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ width: string; id: string }> }
) {
  try {
    const { id } = await context.params;
    const ok = removeWishlistItem(id);
    if (!ok) {
      return NextResponse.json({ error: 'Wishlist item not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to remove wishlist item' }, { status: 500 });
  }
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ width: string; id: string }> }
) {
  try {
    const { id } = await context.params;
    const item = getWishlistItems().find((i) => i.id === id);
    if (!item) {
      return NextResponse.json({ error: 'Wishlist item not found' }, { status: 404 });
    }
    return NextResponse.json(item);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch wishlist item' }, { status: 500 });
  }
}