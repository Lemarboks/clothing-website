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
    <header className="sticky top-0 z-40 border-b border-[#f3efe5]/15 bg-[#080808]/90 shadow-2xl backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Logo />
          </Link>

          <form onSubmit={handleSearch} className="w-full max-w-full lg:max-w-md mx-auto lg:mx-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search the archive..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-[#f3efe5]/20 bg-[#121212] px-4 py-2 pl-10 text-sm font-bold uppercase tracking-[0.08em] text-[#f3efe5] placeholder:text-[#f3efe5]/45 focus:border-[#d8ff3f] focus:outline-none"
              />
              <button
                type="submit"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#f3efe5]/55 hover:text-[#d8ff3f]"
                aria-label="Search"
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

          <nav className="flex flex-wrap justify-center gap-4 text-[0.74rem] font-black uppercase tracking-[0.12em] lg:justify-end">
            <Link href="/" className="text-[#f3efe5]/80 transition-colors hover:text-[#d8ff3f]">
              Home
            </Link>
            <Link href="/women" className="text-[#f3efe5]/80 transition-colors hover:text-[#d8ff3f]">
              Women
            </Link>
            <Link href="/men" className="text-[#f3efe5]/80 transition-colors hover:text-[#d8ff3f]">
              Men
            </Link>
            <Link href="/products" className="text-[#f3efe5]/80 transition-colors hover:text-[#d8ff3f]">
              Archive
            </Link>
            <Link href="/cart" className="relative text-[#f3efe5]/80 transition-colors hover:text-[#d8ff3f]">
              Cart
              {itemCount > 0 && (
                <span className="absolute -right-3 -top-3 bg-[#d8ff3f] px-2 py-1 text-xs font-black text-[#080808]">
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
