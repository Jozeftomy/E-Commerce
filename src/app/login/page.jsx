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
      <div className="w-[1305px] h-[781px] top-[200px] relative flex gap-[129px]">
        <div className="w-[805px] h-[781px] rounded-tr-[4px] rounded-br-[4px]">
          <img
            src="/Images/side-image.png"
            alt="Shopping illustration"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[371px] h-[530px] gap-[48px] flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-2">Login to Exclusive</h2>
          <p className="text-sm text-gray-600 mb-6">Enter your details below</p>
          <form className="space-y-4">
            <InputField type="text" placeholder="Email or Phone Number" />
            <InputField type="password" placeholder="Password" />
            
            <div className="flex w-full items-center">
             
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

  
</div>
          </form>
        </div>
      </div>
      <div className="w-full h-[440px] top-[350px] relative">
  <Footer/>
</div>
    </>
  );
};

export default LoginPage;
