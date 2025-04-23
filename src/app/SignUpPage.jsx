import React from "react";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import ImagePlaceholder from "./components/ImagePlaceholder";

const SignUpPage = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <div className="flex flex-1 justify-center items-center bg-gray-100">
      <div className="flex space-x-8">
        <div className="w-1/2">
          <ImagePlaceholder />
        </div>
        <div className="w-1/2">
          <LoginForm />
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default SignUpPage;
