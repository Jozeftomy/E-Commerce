'use client';

import React from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';

const Navbar = () => (
  <nav className="w-full bg-white shadow-sm px-4 md:px-8 py-4 fixed top-0 left-0 z-50">
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
      
    
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 w-full md:w-auto">
        
        <Link href="/" className="text-2xl font-bold text-black font-inter">
          Exclusive
        </Link>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <Link href="/" className="text-base text-black hover:text-gray-600 font-poppins">Home</Link>
          <Link href="/contact" className="text-base text-black hover:text-gray-600 font-poppins">Contact</Link>
          <Link href="/about" className="text-base text-black hover:text-gray-600 font-poppins">About</Link>
          <Link href="/signup" className="text-base text-black hover:text-gray-600 font-poppins">SignUp</Link>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full md:w-auto">
        <SearchBar />

        <div className="flex items-center gap-4">
          <Link href="/wishlist">
            <img src="/images/Wishlist.png" alt="Wishlist" className="w-6 md:w-8 h-6 md:h-8 object-contain" />
          </Link>
          <Link href="/cart">
            <img src="/images/Cart1.png" alt="Cart" className="w-6 md:w-8 h-6 md:h-8 object-contain" />
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
