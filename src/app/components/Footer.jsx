import React from "react";

const Footer = () => (
  <footer className="bg-black text-white p-4">
    <div className="flex justify-between">
      <div>
        <h4 className="font-bold">Exclusive</h4>
        <p>Get 10% off your first order</p>
        <input type="email" placeholder="Enter your email" className="p-2 rounded"/>
      </div>
      <div>
        <h4 className="font-bold">Support</h4>
        <p>Dhaka, BD 1515, Bangladesh</p>
        <p>exclusive@gmail.com</p>
        <p>+88015-88888-9999</p>
      </div>
      <div>
        <h4 className="font-bold">Account</h4>
        <a href="#" className="block">My Account</a>
        <a href="#" className="block">Login / Register</a>
        <a href="#" className="block">Cart</a>
        <a href="#" className="block">Wishlist</a>
        <a href="#" className="block">Shop</a>
      </div>
    </div>
  </footer>
);

export default Footer;
