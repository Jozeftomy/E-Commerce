import React from "react";
import Navbar from "../components/NavBar";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import Footer from "../components/Footer";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="bg-white text-black w-full">
      <Navbar />

      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-[5%] mt-[150px] relative px-4">
        {/* Left Image */}
        <div className="w-full lg:w-[45%] max-w-[800px] h-auto rounded-tr-[4px] rounded-br-[4px]">
          <img
            src="/Images/side-image.png"
            alt="Shopping illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Login Form */}
        <div className="w-full lg:w-[30%] max-w-[400px] mt-8 lg:mt-0">
          <h2 className="text-3xl font-semibold mb-2">Login to Exclusive</h2>
          <p className="text-sm text-gray-600 mb-6">Enter your details below</p>
          <form className="space-y-4">
            <InputField type="text" placeholder="Email or Phone Number" />
            <InputField type="password" placeholder="Password" />
            
            <div className="flex flex-col lg:flex-row w-full items-center justify-between gap-4">
              {/* Login Button */}
              <div className="w-full lg:w-[40%]">
                <PrimaryButton className="w-full">Login</PrimaryButton>
              </div>
              
              {/* Forgot Password Link */}
              <div className="w-full lg:w-[60%] flex justify-center lg:justify-end">
                <Link href="/login" className="text-red-500 text-sm hover:cursor-pointer">
                  Forgot Password?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full h-[440px] mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default LoginPage;
