'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Heart, ShoppingCart, Search, User } from "lucide-react";

const ResponsiveNavbar = () => {
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('');
  
  const searchRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsShopDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isSearchOpen]);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => searchRef.current?.focus(), 100);
    }
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Shop', 
      href: '/shop',
      dropdown: [
        { name: 'New Arrivals', href: '/shop/new' },
        { name: 'Best Sellers', href: '/shop/best' },
        { name: 'Sale', href: '/shop/sale' },
        { name: 'Collections', href: '/shop/collections' }
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const iconButtons = [
    { icon: Heart, label: 'Wishlist', action: () => console.log('Wishlist clicked') },
    { icon: ShoppingCart, label: 'Cart', action: () => console.log('Cart clicked') },
    { icon: Search, label: 'Search', action: toggleSearch },
    { icon: User, label: 'User', action: () => console.log('User clicked') }
  ];

  const handleNavInteraction = (itemName: string) => {
    setActiveNav(itemName);
  };

  return (
    <nav className="bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent cursor-pointer"
            >
              TechHub
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation Links */}
            <div className="flex space-x-8" ref={dropdownRef}>
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => {
                          setIsShopDropdownOpen(!isShopDropdownOpen);
                          handleNavInteraction(item.name);
                        }}
                        onMouseEnter={() => handleNavInteraction(item.name)}
                        onMouseLeave={() => setActiveNav('')}
                        className="text-gray-300 hover:text-violet-400 px-3 py-2 text-sm font-semibold transition-colors duration-200 relative cursor-pointer"
                      >
                        {item.name}
                        <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-300 ${
                          activeNav === item.name || isShopDropdownOpen ? 'w-full' : 'group-hover:w-full'
                        }`}></span>
                      </button>
                      
                      {/* Dropdown Menu */}
                      {isShopDropdownOpen && (
                        <div className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50 border border-gray-700">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-gray-300 hover:text-violet-400 transition-colors duration-150 cursor-pointer"
                              onClick={() => setIsShopDropdownOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onMouseEnter={() => handleNavInteraction(item.name)}
                      onMouseLeave={() => setActiveNav('')}
                      className="text-gray-300 hover:text-violet-400 px-3 py-2 text-sm font-semibold transition-colors duration-200 relative block cursor-pointer"
                    >
                      {item.name}
                      <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-300 ${
                        activeNav === item.name ? 'w-full' : 'group-hover:w-full'
                      }`}></span>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Search Bar */}
            <div className={`flex items-center transition-all duration-300 ${
              isSearchOpen ? 'w-64 opacity-100' : 'w-0 opacity-0'
            }`}>
              <input
                ref={searchRef}
                type="text"
                placeholder="Search..."
                className={`w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400 transition-all duration-300 ${
                  isSearchOpen ? 'block' : 'hidden'
                }`}
                onBlur={() => setIsSearchOpen(false)}
              />
            </div>

            {/* Icon Buttons */}
            <div className="flex items-center space-x-2">
              {iconButtons.map((button, index) => {
                const IconComponent = button.icon;
                return (
                  <button
                    key={index}
                    onClick={button.action}
                    className="text-gray-400 hover:text-violet-400 p-2 rounded-md transition-all duration-200 transform hover:scale-105 cursor-pointer"
                    aria-label={button.label}
                  >
                    <IconComponent size={20} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-1">
            {/* Search Button for Mobile */}
            <button
              onClick={toggleSearch}
              className="text-gray-400 hover:text-violet-400 p-2 rounded-md transition-colors duration-200 cursor-pointer"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-400 hover:text-violet-400 p-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

         {/* Mobile Search */}
        {isSearchOpen && (
          <div className="md:hidden pb-4 px-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-400"
              ref={searchRef}
            />
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => setIsShopDropdownOpen(!isShopDropdownOpen)}
                        className="w-full text-left text-gray-200 hover:text-violet-400 px-3 py-2 rounded-md text-base font-semibold flex justify-between cursor-pointer"
                      >
                        {item.name}
                        <span className={`transform transition-transform duration-200 ${
                          isShopDropdownOpen ? 'rotate-180' : ''
                        }`}>
                          ▼
                        </span>
                      </button>
                      {isShopDropdownOpen && (
                        <div className="ml-4 mt-1 space-y-1 border-l border-gray-700 pl-2 cursor-pointer">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-3 py-2 text-gray-300 hover:text-violet-400 text-sm cursor-pointer"
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsShopDropdownOpen(false);
                              }}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-gray-200 hover:text-violet-400 text-base font-semibold cursor-pointer"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              
              {/* Mobile Icons */}
              <div className="flex justify-around pt-4 border-t border-gray-700">
                {iconButtons.map((button, index) => {
                  const IconComponent = button.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        button.action();
                        if (button.label !== 'Search') setIsMobileMenuOpen(false);
                      }}
                      className="text-gray-300 hover:text-violet-400 p-3 flex flex-col items-center cursor-pointer"
                      aria-label={button.label}
                    >
                      <IconComponent size={20} />
                      <span className="text-xs mt-1">{button.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default ResponsiveNavbar;