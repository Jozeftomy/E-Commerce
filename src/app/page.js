'use client';
import React from 'react';
import Navbar from './components/NavBar';
import List from './components/List';
import FlashSales from './components/FlashSales';
import BrowseByCategory from './components/Category';
import Poster from './components/Poster';
import FeatureCard from './components/FeatureCard';
import NewArrival from './components/NewArrival';
import ProductCard from './components/ProductCard';

const products = [
  {
    name: "Gucci duffle bag",
    price: 960,
    originalPrice: 1160,
    discount: 35,
    image: "/images/gucci-bag.jpg",
    rating: 4.5,
    reviews: 120,
  },
  {
    name: "RGB liquid CPU Cooler",
    price: 1960,
    image: "/images/cooler.jpg",
    rating: 4,
    reviews: 90,
  },
  {
    name: "GP11 Shooter USB Gamepad",
    price: 550,
    image: "/images/gamepad.jpg",
    rating: 3.5,
    reviews: 60,
  },
  {
    name: "Quilted Satin Jacket",
    price: 750,
    image: "/images/jacket.jpg",
    rating: 4.8,
    reviews: 150,
  },
];

const Home = () => {
  const features = [
    { img: "Images/truck.png", title: "FREE AND FAST DELIVERY", description: "Free delivery for all orders over $140" },
    { img: "Images/headphone2.png", title: "24/7 CUSTOMER SERVICE", description: "Friendly 24/7 customer support" },
    { img: "Images/shield-tick.png", title: "MONEY-BACK GUARANTEE", description: "We return money within 30 days" },
  ];

  return (
    <div className='bg-white text-black w'>
      <div className="relative">
        <Navbar />
        <div className="w-[1305px] h-[344px] top-[182px] flex">
          <List />
        </div>
        <img
          src="/Images/frame.png"
          alt="Custom"
          className="absolute w-[892px] h-[344px] top-[182px] left-[413px] object-cover"
        />
        <div className="absolute w-[1308px] h-[493px] top-[666px] left-[135px] flex gap-[40px]">
          <FlashSales />
        </div>
        <div className="absolute w-[1170px] top-[1335px] left-[170px] rotate-[-180deg] opacity-30 border border-black border-[0.5px]" />
        <div className="absolute w-[1170px] h-[313px] top-[1415px] left-[135px] flex gap-[60px]">
          <BrowseByCategory />
        </div>
        <div>
          <Poster />
        </div>

        {/* Product Grid Section */}
        <div className="w-[1170px] h-[1016px] absolute top-[3097px] left-[135px] flex flex-col gap-[60px] items-center justify-center">
          <div className="w-[1170px] h-[732px] flex flex-col gap-[30px] items-center justify-center">
            <div className="w-[1170px] h-[322px] flex items-center justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
                {products.map((item, index) => (
                  <ProductCard key={index} product={item} />
                ))}
              </div>
            </div>

            <div className="w-[1170px] h-[350px] flex items-center justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
                {products.map((item, index) => (
                  <ProductCard key={index} product={item} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute w-[1170px] h-[768px] top-[4500px] left-[135px] flex gap-[60px]">
          <NewArrival />
        </div>

        <div className="absolute top-[5500px] left-[135px] w-[1170px] h-[161px] flex justify-between">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
