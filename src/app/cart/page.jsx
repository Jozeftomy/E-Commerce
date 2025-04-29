'use client';

import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="w-[72px] h-[44px] rounded-[4px] border-[1.5px] border-[#00000066] flex items-center justify-center gap-[8px] px-[12px] bg-white">
      <button onClick={decreaseQuantity} className="w-[16px] h-[32px] flex items-center justify-center text-black font-poppins font-normal text-[16px] leading-[24px]">
        -
      </button>
      <div className="w-[48px] h-[32px] flex items-center justify-center text-black font-poppins font-normal text-[16px] leading-[24px]">
        {quantity}
      </div>
      <button onClick={increaseQuantity} className="w-[16px] h-[32px] flex items-center justify-center text-black font-poppins font-normal text-[16px] leading-[24px]">
        +
      </button>
    </div>
  );
};

const Page = () => {
  return (
    <>
      <Navbar />

      {/* Breadcrumb Navigation */}
      <div className="w-full flex flex-col items-center">
        <div className="mt-[222px] flex gap-[12px] items-center self-start ml-[135px]">
          <div className="font-poppins font-normal text-[14px] leading-[21px] text-gray-400">Home</div>
          <div className="text-black text-[14px]">/</div>
          <div className="font-poppins font-normal text-[14px] leading-[21px] text-black whitespace-nowrap">Cart</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative w-[1170px] mx-auto mt-[100px] flex flex-col gap-[80px]">
        {/* Cart Header */}
        <div className="w-full h-[72px] rounded-[4px] flex items-center justify-between px-[40px]">
          <div className="w-[63px] font-poppins font-normal text-[16px] leading-[24px] text-black">Product</div>
          <div className="w-[63px] font-poppins font-normal text-[16px] leading-[24px] text-black">Price</div>
          <div className="w-[63px] font-poppins font-normal text-[16px] leading-[24px] text-black">Quantity</div>
          <div className="w-[63px] font-poppins font-normal text-[16px] leading-[24px] text-black">Subtotal</div>
        </div>

        {/* Cart Items */}
        <div className="w-full flex flex-col gap-[24px]">
          {/* First Product */}
          <div className="w-full h-[102px] rounded-[4px] flex items-center justify-between px-[40px] shadow-md rounded-md">
            <div className="w-[54px] h-[54px] flex items-center justify-center">
              <img src="/Images/computer2.png" alt="LCD Monitor" className="w-full h-full object-cover rounded-md" />
            </div>
            <div className="w-[96px] font-poppins font-normal text-[16px] leading-[24px] text-black flex items-center justify-center">LCD Monitor</div>
            <div className="w-[41px] font-poppins font-normal text-[16px] leading-[24px] text-black flex items-center justify-center">$650</div>
            <QuantitySelector />
          </div>

          {/* Second Product */}
          <div className="w-full h-[102px] rounded-[4px] flex items-center justify-between px-[40px] shadow-md ">
            <div className="w-[48.8px] h-[42px] flex items-center justify-center">
              <img src="/Images/joystick.png" alt="H1 Gamepad" className="w-full h-full object-cover rounded-md" />
            </div>
            <div className="w-[96px] font-poppins font-normal text-[16px] leading-[24px] text-black flex items-center justify-center">H1 Gamepad</div>
            <div className="w-[41px] font-poppins font-normal text-[16px] leading-[24px] text-black flex items-center justify-center">$550</div>
            <QuantitySelector />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full h-[56px] rounded-[4px] flex justify-between px-[40px]">
          <button className="w-[218px] h-[56px] rounded-[4px] border border-[#00000080] flex items-center justify-center gap-[10px] px-[48px] py-[16px] hover:cursor-pointer">
            Return To Shop
          </button>
          <button className="w-[195px] h-[56px] rounded-[4px] border border-[#00000080] flex items-center justify-center gap-[10px] px-[48px] py-[16px] hover:cursor-pointer">
            Update Cart
          </button>
        </div>

        {/* Coupon and Cart Total */}
        <div className="w-full flex justify-between">
          {/* Coupon Section */}
          <div className="w-[527px] h-[56px] flex gap-[16px]"> 
            <div className="w-[300px] h-[56px] rounded-[4px] border border-gray-400 bg-white flex items-center px-3"> 
              <input type="text" placeholder="Coupon Code" className="w-full h-full bg-transparent focus:outline-none text-gray-700" /> 
            </div> 
            <button className="w-[211px] h-[56px] rounded-[4px] flex items-center justify-center gap-[10px] px-[48px] py-[16px] bg-[#DB4444] text-white hover:cursor-pointer">Apply Coupon</button> 
          </div>

          {/* Cart Total Section */}
          <div className="w-[470px] h-[504px] rounded-[4px] border border-gray-400 bg-white p-6 flex flex-col justify-between">
            <div>
              <div className="font-poppins font-medium text-[20px] leading-[28px] text-black mb-8">Cart Total</div>
              <div className="flex flex-col gap-[16px]">
                <div className="flex justify-between">
                  <span className="font-poppins text-[16px] text-black">Subtotal:</span>
                  <span className="font-poppins text-[16px] text-black">$1750</span>
                </div>
                <div className="border-t border-black"></div>
                <div className="flex justify-between">
                  <span className="font-poppins text-[16px] text-black">Shipping:</span>
                  <span className="font-poppins text-[16px] text-black">Free</span>
                </div>
                <div className="border-t border-black"></div>
                <div className="flex justify-between">
                  <span className="font-poppins text-[16px] text-black">Total:</span>
                  <span className="font-poppins text-[16px] text-black">$1750</span>
                </div>
              </div>
            </div>
            <button className="w-[260px] h-[56px] self-center mt-8 bg-[#DB4444] text-white font-poppins font-medium text-[16px] rounded-[4px] flex items-center justify-center px-[48px] py-[16px] hover:cursor-pointer">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
      <div className="w-full mt-40">
        <Footer />
      </div>
    </>
  );
};

export default Page;
