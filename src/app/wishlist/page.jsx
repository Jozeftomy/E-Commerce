import React from 'react';
import Navbar from '../components/NavBar';
import ProductCards from '../components/ProductCards';
import Footer from '../components/Footer';

const Page = () => {
  const wishlist = [
    {
      name: "Gucci duffle bag",
      price: 960,
      originalPrice: 1160,
      image: "/Images/handbag.png",
      rating: 4.5,
      reviews: 120,
    },
    {
      name: "RGB liquid CPU Cooler",
      price: 1960,
      originalPrice: 2200,
      image: "/Images/bluetooth-speaker.png",
      rating: 4,
      reviews: 90,
    },
    {
      name: "GP11 Shooter USB Gamepad",
      price: 550,
      originalPrice: 700,
      image: "/Images/black-joystick.png",
      rating: 3.5,
      reviews: 60,
    },
    {
      name: "Quilted Satin Jacket",
      price: 750,
      originalPrice: 950,
      image: "/Images/green-jacket.png",
      rating: 4.8,
      reviews: 150,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow w-full px-20 mt-50">
        {/* Header Row */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-[20px] font-normal">Wishlist ({wishlist.length})</div>
          <button className="w-[223px] h-[56px] flex items-center justify-center gap-[10px] rounded-[4px] px-[48px] py-[16px] border border-[#00000080] text-black text-[16px] font-medium hover:bg-gray-200 transition">
            Move All To Bag
          </button>
        </div>

        {/* Wishlist Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {wishlist.map((item, index) => (
            <ProductCards key={index} product={item} />
          ))}
        </div>

        {/* Just For You Section */}
        <div className="mb-20">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="w-[20px] h-[40px] rounded-[4px] bg-[#DB4444]"></div>
              <div className="text-black px-4 py-2 text-[20px] font-normal">Just For You</div>
            </div>
            <button className="w-[150px] h-[56px] flex items-center justify-center gap-[10px] rounded-[4px] border border-[#00000080] text-black text-[16px] font-medium hover:bg-red-200 transition">
              See all
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
            {wishlist.map((item, index) => (
              <ProductCards key={index} product={item} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
