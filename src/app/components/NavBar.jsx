'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SearchBar from './SearchBar';

const linkStyle = "text-base text-black hover:text-gray-600 font-poppins";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* Topbar */}
      <div className="bg-black text-white hidden md:flex items-center justify-between px-4 md:px-8 py-2">
        {/* Centered Banner Text & Button */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-4 text-center">
            <p className="text-sm md:text-base">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            </p>
            <button className="border-b border-white hover:border-gray-300 text-sm">
              Shop Now
            </button>
          </div>
        </div>

        {/* Language Selector */}
        <div className="ml-auto">
          <select className="bg-black text-white p-1 rounded text-sm">
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="ml">Malayalam</option>
            <option value="ar">Arabic</option>
          </select>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-sm px-4 md:px-8 py-6">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
          {/* Logo and Navigation Links */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-48 w-full md:w-auto">
            <div className="text-2xl font-bold text-black font-inter">Exclusive</div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <Link href="/" className={`${linkStyle} ${pathname === '/' ? 'font-semibold text-gray-800' : ''}`}>Home</Link>
              <Link href="/contact" className={`linkStyle$ ${pathname === '/contact' ? 'font-semibold text-gray-800' : ''}`}>Contact</Link>
              <Link href="/about" className={`${linkStyle} ${pathname === '/about' ? 'font-semibold text-gray-800' : ''}`}>About</Link>
              <Link href="/signup" className={`${linkStyle} ${pathname === '/signup' ? 'font-semibold text-gray-800' : ''}`}>SignUp</Link>
            </div>
          </div>

          {/* Search and Icons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full md:w-auto">
            <SearchBar />

            <div className="flex items-center gap-4">
              <Link href="/wishlist">
                <img src="/Images/wish-list.png" alt="Wishlist" className="w-6 md:w-8 h-6 md:h-8 object-contain" />
              </Link>
              <Link href="/cart">
                <img src="/Images/cart.png" alt="Cart" className="w-6 md:w-8 h-6 md:h-8 object-contain" />
              </Link>
              <Link href="/account">
                <div className="w-8 h-8 flex items-center justify-center rounded-md hover:cursor-pointer">
                  <img src="/Images/user.png" alt="User Icon" className="w-5 h-5 object-contain" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
