'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from './CartContext';
import Logo from './Logo';

export default function Header() {
  const { cart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
    // For now, just log. In a real app, you'd filter products or navigate to search results
  };

  return (
    <header className="sticky top-0 z-40 bg-black shadow-lg border-b-2 border-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Logo />
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-md mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-800 text-white border border-gray-600 rounded-full px-4 py-2 pl-10 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
              />
              <button
                type="submit"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-400"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </form>

          <nav className="flex space-x-6">
            <Link href="/" className="text-white hover:text-orange-400 font-semibold transition-colors">
              Home
            </Link>
            <Link href="/women" className="text-white hover:text-orange-400 font-semibold transition-colors">
              Women
            </Link>
            <Link href="/men" className="text-white hover:text-orange-400 font-semibold transition-colors">
              Men
            </Link>
            <Link href="/products" className="text-white hover:text-orange-400 font-semibold transition-colors">
              All Products
            </Link>
            <Link href="/cart" className="text-white hover:text-orange-400 font-semibold transition-colors relative">
              Cart
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-black text-xs font-bold rounded-full px-2 py-1">
                  {itemCount}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}