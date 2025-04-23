import React from "react";

const Navbar = () => (
  <nav className="flex justify-between items-center p-4 bg-white shadow-md">
    <div className="text-lg font-bold">Exclusive</div>
    <div className="flex space-x-4">
      <a href="#" className="text-gray-600">Home</a>
      <a href="#" className="text-gray-600">Contact</a>
      <a href="#" className="text-gray-600">About</a>
      <a href="#" className="text-gray-600">Sign Up</a>
    </div>
  </nav>
);

export default Navbar;
