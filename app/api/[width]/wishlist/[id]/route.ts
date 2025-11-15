import { NextRequest, NextResponse } from 'next/server';

// GET /api/avatar/[width]/wishlist/[id]
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ width: string; id: string }> }
) {
  try {
    const { width, id } = await context.params;
    
    // Validate width
    const widthNum = parseInt(width);
    if (isNaN(widthNum) || widthNum < 16 || widthNum > 512) {
      return NextResponse.json(
        { error: 'Invalid width. Must be between 16 and 512' },
        { status: 400 }
      );
    }

    // Validate id
    if (!id || id.trim() === '') {
      return NextResponse.json(
        { error: 'Invalid product ID' },
        { status: 400 }
      );
    }

    // In a real app, you would fetch the avatar from your database
    // For now, we'll return a placeholder or generate a simple avatar
    const avatarUrl = `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=${widthNum}&h=${widthNum}&fit=crop&crop=face`;
    
    // Redirect to the avatar URL or return the image data
    return NextResponse.redirect(avatarUrl);
    
  } catch (error) {
    console.error('Error in avatar API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE /api/avatar/[width]/wishlist/[id]
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ width: string; id: string }> }
) {
  try {
    const { width, id } = await context.params;
    
    // Validate parameters
    if (!id || id.trim() === '') {
      return NextResponse.json(
        { error: 'Invalid product ID' },
        { status: 400 }
      );
    }

    // In a real app, you would:
    // 1. Verify user authentication
    // 2. Remove the item from the wishlist in your database
    // 3. Return success response

    // For demo purposes, we'll simulate a successful deletion
    console.log(`Removing product ${id} from wishlist`);

    return NextResponse.json(
      { success: true, message: 'Item removed from wishlist' },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error deleting wishlist item:', error);
    return NextResponse.json(
      { error: 'Failed to remove item from wishlist' },
      { status: 500 }
    );
  }
}

// POST /api/avatar/[width]/wishlist/[id]
export async function POST(
  request: NextRequest,
  context: { params: Promise<{ width: string; id: string }> }
) {
  try {
    const { width, id } = await context.params;
    
    // Validate parameters
    if (!id || id.trim() === '') {
      return NextResponse.json(
        { error: 'Invalid product ID' },
        { status: 400 }
      );
    }

    // In a real app, you would:
    // 1. Verify user authentication
    // 2. Add the item to the wishlist in your database
    // 3. Return success response

    // For demo purposes, we'll simulate a successful addition
    console.log(`Adding product ${id} to wishlist`);

    return NextResponse.json(
      { success: true, message: 'Item added to wishlist' },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Error adding wishlist item:', error);
    return NextResponse.json(
      { error: 'Failed to add item to wishlist' },
      { status: 500 }
    );
  }
}