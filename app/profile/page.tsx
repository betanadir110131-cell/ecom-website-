'use client';

import { useState, useEffect } from 'react';
import { User, Edit2, Save, X, Camera, RefreshCw } from 'lucide-react';
import { apiService } from '@/lib/api';

// Use the same User type from your API or create a compatible interface
interface User {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<User>({
    name: '',
    email: '',
    phone: '',
  });

  // Mock data for fallback
  const mockProfile: User = {
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  };

  const loadProfile = async (showLoading = true) => {
    if (showLoading) {
      setIsLoading(true);
    } else {
      setIsRefreshing(true);
    }
    setError(null);
    
    try {
      const userData = await apiService.getUser();
      setProfile(userData);
      setFormData({
        name: userData.name || '',
        email: userData.email || '',
        phone: userData.phone || '',
        avatar: userData.avatar,
      });
    } catch (error) {
      console.error('Failed to load profile:', error);
      setError('Failed to load profile. Using demo data.');
      
      // Use mock data as fallback
      setProfile(mockProfile);
      setFormData(mockProfile);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    setError(null);
    
    try {
      // Ensure we're only sending the fields that the API expects
      const updateData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        avatar: formData.avatar,
      };
      
      await apiService.updateUser(updateData);
      setProfile(formData);
      setIsEditing(false);
    } catch (error: any) {
      console.error('Failed to update profile:', error);
      const errorMessage = error?.message || 'Failed to update profile. Please try again.';
      setError(errorMessage);
      
      // Show error for 5 seconds then auto-dismiss
      setTimeout(() => setError(null), 5000);
    } finally {
      setIsSaving(false);
    }
  };

  const handleAvatarUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type and size
    if (!file.type.startsWith('image/')) {
      setError('Please select a valid image file.');
      return;
    }

    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      setError('Image size must be less than 5MB.');
      return;
    }

    setError(null);
    
    try {
      const result = await apiService.uploadAvatar(file);
      const newAvatar = result.url;
      setFormData(prev => ({ ...prev, avatar: newAvatar }));
      
      // Update profile immediately if not in edit mode
      if (!isEditing) {
        setProfile(prev => prev ? { ...prev, avatar: newAvatar } : null);
      }
    } catch (error) {
      console.error('Failed to upload avatar:', error);
      setError('Failed to upload avatar. Please try again.');
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    if (profile) {
      setFormData(profile);
    }
    setError(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600"></div>
          <p className="text-gray-400">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Error Banner */}
        {error && (
          <div className="mb-6 p-4 bg-red-900/50 border border-red-700 rounded-lg flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-red-200 text-sm">{error}</span>
            </div>
            <button
              onClick={() => setError(null)}
              className="text-red-300 hover:text-red-100 transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>
          </div>
        )}

        <div className="bg-gray-800 rounded-lg shadow-2xl border border-gray-700 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-violet-700 via-purple-800 to-indigo-900 px-6 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={formData.avatar || '/default-avatar.png'}
                    alt={formData.name}
                    className="w-20 h-20 rounded-full border-4 border-white/20 bg-gray-700"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzM3NDE1MSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIjZmNzI4ZCIgZm9udC1zaXplPSI0MCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiPjx0c3BhbiBkeT0iMC4zNWVtIj7CoMKgPC90c3Bhbj5VU0VSPC90ZXh0Pjwvc3ZnPg==';
                    }}
                  />
                  <label className="absolute bottom-0 right-0 bg-gray-800 p-2 rounded-full shadow-lg cursor-pointer hover:bg-gray-700 transition-colors border border-gray-600">
                    <Camera size={16} className="text-gray-300" />
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleAvatarUpload}
                    />
                  </label>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">{formData.name}</h1>
                  <p className="text-violet-200">{formData.email}</p>
                </div>
              </div>
              
              <button
                onClick={() => loadProfile(false)}
                disabled={isRefreshing}
                className="flex items-center px-3 py-2 text-sm text-gray-300 bg-gray-700/50 rounded-lg hover:bg-gray-700 disabled:opacity-50 transition-colors duration-200 cursor-pointer border border-gray-600"
              >
                <RefreshCw size={16} className={`mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
                {isRefreshing ? 'Refreshing...' : 'Refresh'}
              </button>
            </div>
          </div>

          {/* Profile Form */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white flex items-center">
                <User size={20} className="mr-2" />
                Profile Information
              </h2>
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center px-4 py-2 text-sm font-medium text-violet-400 bg-violet-400/10 rounded-lg hover:bg-violet-400/20 transition-colors duration-200 cursor-pointer border border-violet-400/20"
                >
                  <Edit2 size={16} className="mr-2" />
                  Edit Profile
                </button>
              ) : (
                <div className="flex space-x-2">
                  <button
                    onClick={handleCancel}
                    className="flex items-center px-4 py-2 text-sm font-medium text-gray-400 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200 cursor-pointer border border-gray-600"
                  >
                    <X size={16} className="mr-2" />
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="flex items-center px-4 py-2 text-sm font-medium text-white bg-violet-600 rounded-lg hover:bg-violet-700 disabled:opacity-50 transition-colors duration-200 cursor-pointer border border-violet-500"
                  >
                    <Save size={16} className="mr-2" />
                    {isSaving ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Enter your full name"
                  />
                ) : (
                  <p className="text-white">{profile?.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Enter your email address"
                  />
                ) : (
                  <p className="text-white">{profile?.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={formData.phone || ''}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Enter your phone number"
                  />
                ) : (
                  <p className="text-white">{profile?.phone || 'Not provided'}</p>
                )}
              </div>
            </div>

            {/* Network Status */}
            <div className="mt-8 p-4 bg-gray-750 rounded-lg border border-gray-700">
              <h3 className="text-sm font-medium text-gray-300 mb-2">Network Status</h3>
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${navigator.onLine ? 'bg-green-500' : 'bg-red-500'}`}></div>
                <span className="text-sm text-gray-400">
                  {navigator.onLine ? 'Online' : 'Offline'} - {error ? 'Connection issues detected' : 'Connected to server'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}