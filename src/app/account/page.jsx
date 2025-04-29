import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

const page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow w-full px-4 md:px-16 mt-[120px]">
        {/* Navigation */}
        <div className="flex gap-3 items-center mb-6 text-sm font-poppins text-gray-400">
          <span>Home</span>
          <span className="text-black">/</span>
          <span className="text-black">Account</span>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-[280px] bg-white rounded-md p-6 font-poppins flex flex-col gap-2 shadow-md">
            <div className="font-semibold text-black mb-1">Manage My Account</div>
            <button className="text-gray-500 font-medium text-left px-4 hover:text-red-600 transition">My Profile</button>
            <button className="text-gray-400 text-left px-4 hover:text-red-500 transition">Address Book</button>
            <button className="text-gray-400 text-left px-4 mb-4 hover:text-red-500 transition">My Payment Options</button>

            <div className="font-semibold text-black mb-1">My Orders</div>
            <button className="text-gray-400 text-left px-4 hover:text-red-500 transition">My Returns</button>
            <button className="text-gray-400 text-left px-4 mb-4 hover:text-red-500 transition">My Cancellations</button>

            <div className="font-semibold text-black">My WishList</div>
          </div>

          {/* Form */}
          <div className="w-full max-w-4xl bg-white shadow-md rounded-md p-6 flex flex-col gap-6 font-poppins mx-auto">
            <h2 className="text-2xl font-medium text-[#DB4444]">Edit Profile</h2>

            {/* Name Fields */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col flex-1">
                <label className="text-gray-600 text-sm">First Name</label>
                <input type="text" placeholder="Md" className="h-10 border border-gray-300 rounded-md px-3 bg-[#F5F5F5]" />
              </div>
              <div className="flex flex-col flex-1">
                <label className="text-gray-600 text-sm">Last Name</label>
                <input type="text" placeholder="Rimel" className="h-10 border border-gray-300 rounded-md px-3 bg-[#F5F5F5]" />
              </div>
            </div>

            {/* Email & Address */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col flex-1">
                <label className="text-gray-600 text-sm">Email</label>
                <input type="email" placeholder="rimel1111@gmail.com" className="h-10 border border-gray-300 rounded-md px-3 bg-[#F5F5F5]" />
              </div>
              <div className="flex flex-col flex-1">
                <label className="text-gray-600 text-sm">Address</label>
                <input type="text" placeholder="Kingston, 5236, United States" className="h-10 border border-gray-300 rounded-md px-3 bg-[#F5F5F5]" />
              </div>
            </div>

            {/* Password Fields */}
            <div className="flex flex-col gap-4 mt-4">
              <label className="text-gray-600 text-sm">Current Password</label>
              <input type="password" placeholder="Current Password" className="h-10 border border-gray-300 rounded-md px-3 bg-[#F5F5F5]" />

              <label className="text-gray-600 text-sm">New Password</label>
              <input type="password" placeholder="New Password" className="h-10 border border-gray-300 rounded-md px-3 bg-[#F5F5F5]" />

              <label className="text-gray-600 text-sm">Confirm New Password</label>
              <input type="password" placeholder="Confirm New Password" className="h-10 border border-gray-300 rounded-md px-3 bg-[#F5F5F5]" />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-end">
              <button className="h-[56px] px-6 text-black font-normal">Cancel</button>
              <button className="h-[56px] px-12 bg-[#DB4444] text-white font-medium rounded-md hover:bg-red-600 transition">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
