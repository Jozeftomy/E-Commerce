import React from "react";

const LoginForm = () => (
  <div className="flex flex-col items-center p-8 bg-white shadow-md">
    <h2 className="text-2xl font-bold mb-4">Create an account</h2>
    <form className="space-y-4">
      <input type="text" placeholder="Name" className="p-2 border rounded w-full"/>
      <input type="email" placeholder="Email or Phone Number" className="p-2 border rounded w-full"/>
      <input type="password" placeholder="Password" className="p-2 border rounded w-full"/>
      <button type="submit" className="bg-red-500 text-white p-2 rounded w-full">Create Account</button>
      <button type="button" className="bg-blue-500 text-white p-2 rounded w-full">Sign up with Google</button>
    </form>
    <p className="mt-4">Already have an account? <a href="#" className="text-blue-500">Log in</a></p>
  </div>
);

export default LoginForm;
