import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className="w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition hover:cursor-pointer">
      {children}
    </button>
  );
};

export default PrimaryButton;
