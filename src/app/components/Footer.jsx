import React from 'react'; 

const Footer = () => { 
  return ( 
    <footer className="w-full bg-black text-white py-8 mt-auto"> {/* Added mt-auto to push footer down */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-6"> 
        <div className="space-y-4"> 
          <h2 className="text-xl font-bold">Exclusive</h2> 
          <p>Subscribe</p> 
          <p>Get 10% off your first order</p> 
          <form className="flex"> 
            <input type="email" placeholder="Enter your email" className="p-2 rounded-l-md w-full md:w-auto bg-gray-800 text-white border"/> 
            <button type="submit" className="p-2 bg-white text-black rounded-r-md">&gt;</button> 
          </form> 
        </div> 
        <div className="space-y-4"> 
          <h2 className="text-xl font-bold">Support</h2> 
          <p>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p> 
          <p>exclusive@gmail.com</p> 
          <p>+88015-88888-9999</p> 
        </div> 
        <div className="space-y-4"> 
          <h2 className="text-xl font-bold">Account</h2> 
          <ul className="space-y-2"> 
            <li>My Account</li> 
            <li>Login / Register</li> 
            <li>Cart</li> 
            <li>Wishlist</li> 
            <li>Shop</li> 
          </ul> 
        </div> 
        {/* Quick Link Section */}
        <div className="space-y-4"> 
          <h2 className="text-xl font-bold">Quick Link</h2> 
          <ul className="space-y-2"> 
            <li>Privacy Policy</li> 
            <li>Terms Of Use</li> 
            <li>FAQ</li> 
            <li>Contact</li> 
          </ul> 
        </div> 
        <div className="space-y-6"> 
          <h2 className="text-xl font-bold">Download App</h2> 
          <p>Save $3 with App New User Only</p> 
          <div className="flex space-x-4 items-center"> 
            <img src="/images/Qrcode.png" alt="QR Code" className="w-16 h-16"/> 
            <img src="/images/googleplay.png" alt="Google Play" className="w-20 h-16"/> 
          </div> 
          <div className="flex justify-start mt-4"> 
            <img src="/images/socialFrame.png" alt="Social Media Icons" className="w-32 h-8"/> 
          </div> 
        </div> 
      </div> 
      <div className="text-center mt-8"> 
        <p className="mt-2 tex-[#FFFFFF]">© Copyright Rimel 2022. All rights reserved</p> 
      </div> 
    </footer> 
  ); 
}; 

export default Footer;
