'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, X, Heart, ShoppingCart, Search, User, LogOut } from "lucide-react";
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';

const ResponsiveNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const searchRef = useRef<HTMLInputElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const { user, logout } = useAuth();
  const { getTotalItems } = useCart();
  const { wishlist } = useWishlist();

  // Color palette
  const colors = {
    primary: '#31694E',     // Dark green - main brand
    secondary: '#658C58',   // Medium green - secondary
    accent: '#BBC863',      // Olive green - accents
    highlight: '#F0E491',   // Light yellow - highlights
    background: '#FFFFFF',  // White background
    textDark: '#1A202C',    // Dark text
    textLight: '#4A5568',   // Light text
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleSearchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsLoading(true);
      try {
        // Navigate to shop page with search query
        router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
        setSearchQuery('');
        setIsSearchOpen(false);
        setIsMobileMenuOpen(false);
      } catch (error) {
        console.error('Search navigation error:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setIsMobileMenuOpen(false);
      router.push('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
        { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className="sticky top-0 z-50 shadow-md border-b"
      style={{ 
        backgroundColor: colors.background,
        borderColor: colors.accent
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 flex-shrink-0"
          >
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white shadow-sm"
              style={{ backgroundColor: colors.primary }}
            >
              <span className="text-lg">T</span>
            </div>
            <span 
              className="text-xl font-bold hidden sm:block"
              style={{ color: colors.primary }}
            >
              EcoStore
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1 max-w-2xl mx-8">
            <div className="flex items-center space-x-1 bg-gray-50 rounded-lg p-1 border"
              style={{ borderColor: colors.accent }}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:shadow-sm"
                  style={{ 
                    color: colors.textDark,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colors.highlight;
                    e.currentTarget.style.color = colors.primary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = colors.textDark;
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side Items */}
          <div className="flex items-center space-x-3 sm:space-x-4">

            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-lg transition-all duration-200 hover:shadow-sm"
              style={{ 
                backgroundColor: isSearchOpen ? colors.primary : colors.highlight,
                color: isSearchOpen ? colors.background : colors.primary
              }}
              title="Search products"
            >
              <Search size={20} />
            </button>

            {/* Wishlist */}
            <Link 
              href="/wishlist" 
              className="relative p-2 rounded-lg transition-all duration-200 hover:shadow-sm"
              style={{ 
                backgroundColor: colors.highlight,
                color: colors.primary
              }}
              title="Wishlist"
            >
              <Heart size={20} />
              {wishlist.size > 0 && (
                <span 
                  className="absolute -top-1 -right-1 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-semibold shadow-sm"
                  style={{ backgroundColor: colors.primary }}
                >
                  {wishlist.size}
                </span>
              )}
            </Link>

            {/* Shopping Cart */}
            <Link 
              href="/cart" 
              className="relative p-2 rounded-lg transition-all duration-200 hover:shadow-sm"
              style={{ 
                backgroundColor: colors.highlight,
                color: colors.primary
              }}
              title="Shopping Cart"
            >
              <ShoppingCart size={20} />
              {getTotalItems() > 0 && (
                <span 
                  className="absolute -top-1 -right-1 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-semibold shadow-sm"
                  style={{ backgroundColor: colors.primary }}
                >
                  {getTotalItems()}
                </span>
              )}
            </Link>

            {/* User Account */}
            {user ? (
              <div className="flex items-center space-x-2">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold shadow-sm hidden sm:flex"
                  style={{ backgroundColor: colors.secondary }}
                  title={`Logged in as ${user.name}`}
                >
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <button
                  onClick={handleLogout}
                  className="p-2 rounded-lg transition-all duration-200 hover:shadow-sm"
                  style={{ 
                    backgroundColor: colors.highlight,
                    color: colors.primary
                  }}
                  title="Logout"
                >
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <Link 
                href="/login" 
                className="p-2 rounded-lg transition-all duration-200 hover:shadow-sm"
                style={{ 
                  backgroundColor: colors.highlight,
                  color: colors.primary
                }}
                title="Login"
              >
                <User size={20} />
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg transition-all duration-200 hover:shadow-sm"
              style={{ 
                backgroundColor: colors.highlight,
                color: colors.primary
              }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Bar - Expanded */}
        {isSearchOpen && (
          <div className="pb-4 border-t pt-4"
            style={{ borderColor: colors.accent }}>
            <form onSubmit={handleSearchSubmit} className="flex space-x-2">
              <input
                ref={searchRef}
                type="text"
                placeholder="What are you looking for?..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 shadow-sm"
                style={{ 
                  borderColor: colors.accent,
                  backgroundColor: colors.background
                }}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-3 rounded-lg font-medium text-white shadow-sm transition-all duration-200 hover:shadow-md disabled:opacity-50"
                style={{ backgroundColor: colors.primary }}
              >
                {isLoading ? 'Searching...' : 'Search'}
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="lg:hidden absolute top-16 left-0 right-0 shadow-lg border-b"
          style={{ 
            backgroundColor: colors.background,
            borderColor: colors.accent
          }}
        >
          <div className="px-4 py-6 space-y-4">

            {/* Mobile Navigation Links */}
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-center rounded-lg font-medium transition-colors duration-200 border shadow-sm"
                  style={{ 
                    color: colors.textDark,
                    borderColor: colors.accent,
                    backgroundColor: colors.highlight + '40'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colors.highlight;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = colors.highlight + '40';
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile User Info */}
            <div className="pt-4 border-t"
              style={{ borderColor: colors.accent }}>
              {user ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold shadow-sm"
                      style={{ backgroundColor: colors.secondary }}
                    >
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-medium" style={{ color: colors.textDark }}>
                        {user.name}
                      </p>
                      <p className="text-sm" style={{ color: colors.textLight }}>
                        {user.email}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 rounded-lg font-medium text-white transition-all duration-200 hover:shadow-sm"
                    style={{ backgroundColor: colors.primary }}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex space-x-3">
                  <Link
                    href="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex-1 px-4 py-3 text-center rounded-lg font-medium text-white transition-all duration-200 hover:shadow-sm"
                    style={{ backgroundColor: colors.primary }}
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex-1 px-4 py-3 text-center rounded-lg font-medium transition-all duration-200 hover:shadow-sm border"
                    style={{ 
                      color: colors.primary,
                      borderColor: colors.primary
                    }}
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default ResponsiveNavbar;