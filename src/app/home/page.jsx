'use client';
import React from 'react';
import Navbar from '../components/NavBar';
import List from '../components/List';
import FlashSales from '../components/FlashSales';
import BrowseByCategory from '../components/Category';
import Poster from '../components/Poster';

const Home = () => {
  return (
    <div className="relative flex flex-col items-center overflow-x-hidden">
      <Navbar />
      <div className="flex flex-col md:flex-row items-center w-full max-w-[1300px] px-4 mt-8 gap-4">
        <div className="w-full md:w-[400px]">
          <List />
        </div>
        <div className="w-full md:w-[900px]">
          <img
            src="/images/frame.png"
            alt="Custom"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
      </div>
      <div className="w-full max-w-[1300px] px-4 mt-16">
        <FlashSales />
      </div>
      <div className="w-full max-w-[1170px] h-[1px] bg-black opacity-30 my-12" />
      <div className="w-full max-w-[1300px] px-4 mt-8">
        <BrowseByCategory />
      </div>
      <div className="w-full max-w-[1300px] px-4 mt-16">
        <div className="w-full h-[300px] md:h-[500px] bg-[url('/images/your-image.jpg')] bg-cover bg-center rounded-md"></div>
      </div>
      <div className="w-full max-w-[1300px] px-4 mt-16">
        <Poster />
      </div>
    </div>
  );
};

export default Home;
