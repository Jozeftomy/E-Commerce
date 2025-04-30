'use client';
import React from 'react';
import Navbar from '../components/NavBar';
import List from '../components/List';
import FlashSales from '../components/FlashSales';
import BrowseByCategory from '../components/Category';
import Poster from '../components/Poster';


const Home = () => {
  return (
    <div className="relative bg-white text-black"> 
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
 <FlashSales/>
</div>
<div className="absolute w-[1170px] top-[1335px] left-[170px] rotate-[-180deg] opacity-30 border border-black border-[0.5px]" />

<div className="absolute w-[1170px] h-[313px] top-[1415px] left-[135px] flex gap-[60px]">
  <BrowseByCategory/>
</div>

<div className="absolute w-[1170px] h-[500px] top-[2526px] left-[135px] bg-[url('/images/your-image.jpg')] bg-cover bg-center"></div>
<div>
  <Poster/>
</div>
</div>
    
  );
};

export default Home;
