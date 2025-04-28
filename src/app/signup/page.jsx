'use client';

import React from "react";
import Navbar from "../components/NavBar";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import OutlineButton from "../components/OutlineButton";
import Footer from "../components/Footer";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>

      {/* Main Section */}
      <div className="w-full max-w-[1305px] mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-[129px] px-4 md:px-0 mt-12">
        
        {/* Side Image */}
        <div className="w-full md:w-[805px] h-[400px] md:h-[781px] rounded-tr-[4px] rounded-br-[4px] overflow-hidden">
          <img
            src="/images/SideImage.png"
            alt="Shopping illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Signup Form */}
        <div className="w-full md:w-[371px] flex flex-col gap-8">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Create an account</h2>
            <p className="text-sm text-gray-600 mb-6">Enter your details below</p>
          </div>
          <form className="space-y-4">
            <InputField type="text" placeholder="Name" />
            <InputField type="text" placeholder="Email or Phone Number" />
            <InputField type="password" placeholder="Password" />
            <PrimaryButton>Create Account</PrimaryButton>
            <OutlineButton>
              <img
                src="/images/Icon-Google.png"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Sign up with Google
            </OutlineButton>
          </form>
          <p className="text-sm text-center mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-gray-800 underline">
              Login
            </Link>
          </p>
        </div>

      </div>

      {/* Footer */}
      <div className="w-full mt-20">
        <Footer />
      </div>
    </>
  );
};

export default SignUpPage;
