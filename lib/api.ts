import { User, Order, UserPreferences } from '@/components/data_component/index';
import {WishlistItem} from "@/components/data_products/products"
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

class ApiService {
  private async fetchWithAuth(endpoint: string, options: RequestInit = {}) {
    const token = localStorage.getItem('auth-token'); // In real app, use secure storage
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    return response.json();
  }

  // User API
  async getUser(): Promise<User> {
    return this.fetchWithAuth('/user');
  }

  async updateUser(userData: Partial<User>): Promise<User> {
    return this.fetchWithAuth('/user', {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  }

  async updatePreferences(preferences: Partial<UserPreferences>): Promise<User> {
    return this.fetchWithAuth('/user/preferences', {
      method: 'PATCH',
      body: JSON.stringify(preferences),
    });
  }

  // Orders API
  async getOrders(): Promise<Order[]> {
    return this.fetchWithAuth('/orders');
  }

  async getOrder(id: string): Promise<Order> {
    return this.fetchWithAuth(`/orders/${id}`);
  }

  async cancelOrder(orderId: string): Promise<Order> {
    return this.fetchWithAuth(`/orders/${orderId}/cancel`, {
      method: 'POST',
    });
  }

  // Wishlist API
  async getWishlist(): Promise<WishlistItem[]> {
    return this.fetchWithAuth('/wishlist');
  }

  async addToWishlist(productId: string): Promise<WishlistItem> {
    return this.fetchWithAuth('/wishlist', {
      method: 'POST',
      body: JSON.stringify({ productId }),
    });
  }

  async removeFromWishlist(itemId: string): Promise<void> {
    return this.fetchWithAuth(`/wishlist/${itemId}`, {
      method: 'DELETE',
    });
  }

  // Upload API
  async uploadAvatar(file: File): Promise<{ url: string }> {
    const formData = new FormData();
    formData.append('avatar', file);

    const token = localStorage.getItem('auth-token');
    const response = await fetch(`${API_BASE_URL}/user/avatar`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Upload failed');
    }

    return response.json();
  }
}

export const apiService = new ApiService();