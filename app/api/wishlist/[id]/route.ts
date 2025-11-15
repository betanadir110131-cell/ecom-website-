import { NextResponse } from 'next/server';
import { removeWishlistItem, getWishlistItems } from '@/lib/mockWishlistDb';

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const ok = removeWishlistItem(params.id);
    if (!ok) {
      return NextResponse.json({ error: 'Wishlist item not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to remove wishlist item' }, { status: 500 });
  }
}

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const item = getWishlistItems().find((i) => i.id === params.id);
    if (!item) {
      return NextResponse.json({ error: 'Wishlist item not found' }, { status: 404 });
    }
    return NextResponse.json(item);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch wishlist item' }, { status: 500 });
  }
}