'use client';

import React from 'react';
import Link from 'next/link';
import SearchBar from './SearchBar';

const Navbar = () => (
  <nav className="w-full bg-white shadow-sm px-4 md:px-8 py-4 fixed top-0 left-0 z-50">
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">

      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-48 w-full md:w-auto"> 
        <div className="text-2xl font-bold text-black font-inter "> 
          Exclusive
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <Link href="/home" className="text-base text-black hover:text-gray-600 font-poppins">Home</Link>
          <span className="text-base text-black font-poppins">Contact</span>
          <span className="text-base text-black font-poppins">About</span>
          
          <Link href="/signup" className="text-base text-black hover:text-gray-600 font-poppins">
            SignUp
          </Link>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full md:w-auto">
        <SearchBar />

        <div className="flex items-center gap-4">
          <img src="/images/wishlist.png" alt="Wishlist" className="w-6 md:w-8 h-6 md:h-8 object-contain" />
          <img src="/images/cart.png" alt="Cart" className="w-6 md:w-8 h-6 md:h-8 object-contain" />
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
