'use client';
import React, { useState, useEffect } from 'react';
import { FaStar } from "react-icons/fa"; 

const products = [
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    rating: 4.5,
    reviews: 88,
    image: "/images/product1.png",
  },
  {
    name: "AK-900 Wired Keyboard",
    price: 960,
    originalPrice: 1160,
    rating: 4.0,
    reviews: 75,
    image: "/images/product2.png",
  },
  {
    name: "IPS LCD Gaming Monitor",
    price: 370,
    originalPrice: 400,
    rating: 4.5,
    reviews: 99,
    image: "/images/product3.png",
  },
  {
    name: "S-Series Comfort Chair",
    price: 375,
    originalPrice: 400,
    rating: 4.5,
    reviews: 99,
    image: "/images/product4.png",
  },
];

// Countdown Timer Component
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 5, hours: 23, minutes: 19, seconds: 56 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        const updatedSeconds = prev.seconds - 1;
        return updatedSeconds < 0
          ? { ...prev, seconds: 59, minutes: prev.minutes - 1 }
          : { ...prev, seconds: updatedSeconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex space-x-2 font-bold text-center text-black bg-white p-2 rounded-md">
      <div>{timeLeft.days} Days</div>
      <div>{timeLeft.hours} Hours</div>
      <div>{timeLeft.minutes} Min</div>
      <div>{timeLeft.seconds} Sec</div>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product }) => {
  return (
    <div className="w-[270px] h-[350px] flex flex-col gap-[16px] bg-white border rounded-lg shadow-lg p-4">
      {/* Product Image with Hover Effects */}
      <div className="relative w-[270px] h-[250px] rounded-[4px] overflow-hidden group">
  <img
    src={product.image}
    alt={product.name}
    className="w-full h-full object-cover rounded-[4px]"
  />

  {/* Add to Cart button (visible only on hover) */}
  <button className="absolute w-full bottom-0 left-[50%] transform -translate-x-1/2 bg-black text-white px-4 py-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
    Add To Cart
  </button>
</div>

      <h3 className="font-poppins font-medium text-[16px] leading-[24px] tracking-[0%] text-black mt-3">
        {product.name}
      </h3>

      {/* Price & Discount Section */}
      <div className="w-[85px] h-[24px] flex gap-[12px]">
        <span className="w-[36px] h-[24px] font-poppins font-medium text-[16px] leading-[24px] tracking-[0%] text-red-500">
          ${product.price}
        </span>
        <span className="w-[37px] h-[24px] opacity-50 font-poppins font-medium text-[16px] leading-[24px] tracking-[0%] text-black line-through">
          ${product.originalPrice}
        </span>
      </div>

      {/* Reviews Section */}
      <div className="w-[140px] h-[20px] flex items-center gap-[8px] mt-2">
        {Array.from({ length: Math.round(product.rating) }, (_, i) => (
          <FaStar key={i} className="text-yellow-500 text-lg" />
        ))}
        <span className="text-gray-600 text-sm">({product.reviews})</span>
      </div>
    </div>
  );
};

// Flash Sales Component
const FlashSales = () => {
  return (
    <div className="w-full p-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Flash Sales</h2>
        <CountdownTimer />
      </div>

      <div className="mt-4 flex space-x-4 overflow-x-auto p-2">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      <div className="mt-4 flex justify-center">
        <button className="bg-[#DB4444] text-white px-4 py-2 rounded-md hover:bg-red-700">
          View All Products
        </button>
      </div>
      <div className="absolute w-[1170px] top-[1335px] left-[1305px] rotate-[-180deg] opacity-30 border border-black border-[0.5px]" />
    </div>
  );
};

export default FlashSales;
