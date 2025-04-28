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
  <Navbar/>
</div>
<div className="w-[1305px] h-[781px] top-[200px] relative flex gap-[129px]">
<div className="w-[805px] h-[781px] rounded-tr-[4px] rounded-br-[4px]">
<img
              src="Images/sideImage.png"
              alt="Shopping illustration"
              className="w-full h-full object-cover"
            />
</div>
<div className="w-[371px] h-[530px] gap-[48px]">
<h2 className="text-3xl font-semibold mb-2">Create an account</h2>
            <p className="text-sm text-gray-600 mb-6">Enter your details below</p>
            <form className="space-y-4">
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
              Already have account?{" "}
              <Link href="/login" className="text-gray-800 underline">
              Login
            </Link>
            </p>
</div>
</div>
<div className="w-full h-[440px] top-[350px] relative">
  <Footer/>
</div>
</>
  );
};

export default SignUpPage;
