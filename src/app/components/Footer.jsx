'use client';

import React from 'react';

const Footer = () => {
  const FooterBox = ({ title, p1, p2, p3, p4, p5 }) => (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-bold">{title}</h2>
      {p1 && <p className="text-sm cursor-pointer hover:underline">{p1}</p>}
      {p2 && <p className="text-sm cursor-pointer hover:underline">{p2}</p>}
      {p3 && <p className="text-sm cursor-pointer hover:underline">{p3}</p>}
      {p4 && <p className="text-sm cursor-pointer hover:underline">{p4}</p>}
      {p5 && <p className="text-sm cursor-pointer hover:underline">{p5}</p>}
    </div>
  );

  return (
    <footer className="w-full h-[440px] bg-black text-white py-12 mt-auto">
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12 px-8 md:px-16 max-w-[1400px]">
        
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-bold">Exclusive</h1>
          <h2 className="text-xl font-bold">Subscribe</h2>
          <p>Get 10% off your first order</p>
          <form className="flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="p-2 rounded-l-md w-full bg-black text-[#FAFAFA] border border-white" 
            />
            <button 
              type="submit" 
              className="p-2 bg-black text-white rounded-r-md border border-white flex items-center justify-center"
            >
              <img src="/images/input-icon.png" alt="Submit Icon" className="w-5 h-5" />
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold">Support</h2>
          <p className="text-sm">
            111 Bijoy Sarani, Dhaka, <br />
            DH 1515, Bangladesh.
          </p>
          <p className="text-sm cursor-pointer hover:underline">exclusive@gmail.com</p>
          <p className="text-sm cursor-pointer hover:underline">+88015-88888-9999</p>
        </div>

        <FooterBox
          title="Account"
          p1="My Account"
          p2="Login / Register"
          p3="Cart"
          p4="Wishlist"
          p5="Shop"
        />
        <FooterBox
          title="Quick Links"
          p1="Privacy Policy"
          p2="Terms Of Use"
          p3="FAQ"
          p4="Contact"
        />
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold">Download App</h2>
          <p>Save $3 with App New User Only</p>
          <div className="flex space-x-4 items-center">
            <img src="/Images/Qrcode.png" alt="QR Code" className="w-16 h-16" />
            <div className="flex flex-col justify-between">
              <img src="/Images/googleplay.png" alt="Google Play" className="w-24" />
              <img src="/Images/appstore.png" alt="App Store" className="w-24 mt-2" />
            </div>
          </div>
          <div className="flex justify-start mt-4">
            <img src="/Images/social-frame.png" alt="Social Media Icons" className="w-32 h-8" />
          </div>
        </div>

      </div>

      <div className="text-center mt-12">
        <p className="text-gray-400 text-sm">&copy; Copyright Rimel 2022. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
