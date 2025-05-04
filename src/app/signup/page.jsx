import React from "react";
import Navbar from "../components/NavBar";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import OutlineButton from "../components/OutlineButton";
import Footer from "../components/Footer";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="bg-white text-black min-h-screen pt-24">
      
      <div className="bg-white relative z-50">
        <Navbar />
      </div>

      {/* Main Section */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-[5%] px-4">
        
        {/* Left Image */}
        <div className="w-full lg:w-[45%] max-w-[800px] h-auto rounded-tr-[4px] rounded-br-[4px]">
          <img
            src="/Images/side-image.png"
            alt="Shopping illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Sign Up Form */}
        <div className="w-full lg:w-[30%] max-w-[400px] mt-8 lg:mt-0">
          <h2 className="text-3xl font-semibold mb-2">Create an account</h2>
          <p className="text-sm text-gray-600 mb-6">Enter your details below</p>

          <form className="space-y-4 w-full">
            <InputField type="text" placeholder="Name" />
            <InputField type="text" placeholder="Email or Phone Number" />
            <InputField type="password" placeholder="Password" />
            <PrimaryButton>Create Account</PrimaryButton>
            <OutlineButton>
              <img
                src="Images/Icon-Google.png"
                alt="Google"
                className="w-5 h-5"
              />
              Sign up with Google
            </OutlineButton>
          </form>

          <p className="text-sm text-center mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-gray-800 underline hover:cursor-pointer"
            >
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default SignUpPage;
