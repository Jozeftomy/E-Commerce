'use client';
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="w-[600px] h-auto mx-auto bg-white shadow-lg rounded-md p-6">
      {/* Title */}
      <h2 className="text-2xl font-poppins font-semibold text-black text-center mb-4">
        Contact Us
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name Field */}
        <div className="flex flex-col">
          <label className="font-poppins text-[16px] text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full h-[45px] border border-gray-300 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Email Field */}
        <div className="flex flex-col">
          <label className="font-poppins text-[16px] text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full h-[45px] border border-gray-300 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Message Field */}
        <div className="flex flex-col">
          <label className="font-poppins text-[16px] text-gray-700 mb-1">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            rows="4"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full h-[45px] bg-blue-500 text-white font-poppins font-semibold rounded-md hover:bg-blue-600 transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
