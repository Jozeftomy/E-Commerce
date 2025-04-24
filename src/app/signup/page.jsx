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
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen px-4 py-12 gap-12 lg:gap-24">
        
        {/* Left Side Image */}
        <div className="w-full max-w-md lg:max-w-lg hidden lg:block">
          <img
            src="/images/SideImage.png"
            alt="Shopping illustration"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Signup Form */}
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-center lg:text-left">
            Create an account
          </h2>
          <p className="text-sm text-gray-600 mb-6 text-center lg:text-left">
            Enter your details below
          </p>

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
            Already have account?{" "}
            <Link href="/login" className="text-gray-800 underline">
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12">
        <Footer />
      </div>
    </>
  );
};

export default SignUpPage;
