'use client';

import React from "react";
import Navbar from "../components/NavBar";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import Footer from "../components/Footer";
import Link from "next/link";

const LoginPage = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen px-4 py-12 gap-12 lg:gap-24">
        
        {/* Left side image */}
        <div className="w-full max-w-md lg:max-w-lg hidden lg:block">
          <img
            src="/images/SideImage.png"
            alt="Shopping illustration"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Login form */}
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-center lg:text-left">
            Login to Exclusive
          </h2>
          <p className="text-sm text-gray-600 mb-6 text-center lg:text-left">
            Enter your details below
          </p>

          <form className="space-y-4">
            <InputField type="text" placeholder="Email or Phone Number" />
            <InputField type="password" placeholder="Password" />

            <div className="flex w-full items-center justify-between">
  
  <div className="w-[40%]">
    <PrimaryButton className="w-auto">Login</PrimaryButton>
  </div>
  <div className="w-[60%] flex justify-end">
    <Link href="/login" className="text-red-500 text-sm">
      Forgot Password?
    </Link>
  </div>
</div>
          </form>
        </div>
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </>
  );
};

export default LoginPage;
