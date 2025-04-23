import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import LoginForm from "./component/LoginForm";
import ImagePlaceholder from "./component/ImagePlaceholder";

const LoginPage = () => (
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

export default LoginPage;
