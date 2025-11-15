// app/wishlist/page.tsx
import WishlistPage from '@/components/WishlistPage';

// This would typically fetch from your API
async function getWishlistItems() {
  // In a real app, fetch from your API
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/wishlist`, {
  //   cache: 'no-store'
  // });
  // return res.json();
  
  // For demo, return empty array
  return [];
}

export default async function Wishlist() {
  const initialWishlistItems = await getWishlistItems();
  
  return <WishlistPage initialWishlistItems={initialWishlistItems} />;
}