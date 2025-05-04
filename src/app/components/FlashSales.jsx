'use client';
import React, { useState, useEffect } from 'react';
import { FaStar } from "react-icons/fa";
import ProductCards from './ProductCards';

const products = [
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    rating: 4.5,
    reviews: 88,
    image: "/images/red-joystick.png",
  },
  {
    name: "AK-900 Wired Keyboard",
    price: 960,
    originalPrice: 1160,
    rating: 4.0,
    reviews: 75,
    image: "/Images/computer-keyboard.png",
  },
  {
    name: "IPS LCD Gaming Monitor",
    price: 370,
    originalPrice: 400,
    rating: 4.5,
    reviews: 99,
    image: "/Images/monitor.png",
  },
  {
    name: "S-Series Comfort Chair",
    price: 375,
    originalPrice: 400,
    rating: 4.5,
    reviews: 99,
    image: "/Images/chair.png",
  },
];

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

const FlashSales = () => {
  return (
    <div className="w-full pt-6 lg:pb-20 flex flex-col gap-5">
      <div className="flex gap-3 h-10 items-center">
        <p className="h-full bg-red-700 w-3 rounded-r-[4px]"></p>
        <p className="text-[20px]">Today's</p>
      </div>

      <div className="flex justify-between w-full">
        <div className="flex gap-10 items-center">
          <h1 className="text-[22px] font-bold lg:text-[35px]">Flash Sales</h1>
          <span className="hidden sm:block">
            <CountdownTimer />
          </span>
        </div>
      </div>

      <span className="sm:hidden border">
        <CountdownTimer />
      </span>

      <div className="w-full grid grid-cols-2 gap-3 p-3 py-8 sm:grid-cols-3 lg:flex justify-between lg:p-0 lg:py-5">
        {products.map((product, index) => (
          <ProductCards key={index} product={product} />  
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button className="bg-[#DB4444] text-white px-4 py-2 rounded-md hover:bg-red-700">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default FlashSales;
