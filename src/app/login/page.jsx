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
      <div>
        <Navbar />
      </div>

      <div className="w-full max-w-[1305px] mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-[129px] px-4 md:px-0 mt-12">
        
        <div className="w-full md:w-[805px] h-[400px] md:h-[781px] rounded-tr-[4px] rounded-br-[4px] overflow-hidden">
          <img
            src="/images/sideimage.png"
            alt="Shopping illustration"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-[371px] flex flex-col gap-8 justify-center">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Login to Exclusive</h2>
            <p className="text-sm text-gray-600 mb-6">Enter your details below</p>
          </div>
          <form className="space-y-4">
            <InputField type="text" placeholder="Email or Phone Number" />
            <InputField type="password" placeholder="Password" />
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="w-full md:w-[40%]">
                <PrimaryButton className="w-full">Login</PrimaryButton>
              </div>
              <div className="w-full md:w-[60%] flex justify-end">
                <Link href="/forgot-password" className="text-red-500 text-sm text-end">
                  Forgot Password?
                </Link>
              </div>
            </div>

          </form>
        </div>

      </div>

      <div className="w-full mt-20">
        <Footer />
      </div>
    </>
  );
};

export default LoginPage;
