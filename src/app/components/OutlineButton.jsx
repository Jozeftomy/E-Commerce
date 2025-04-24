import React from "react";

const OutlineButton = ({ children }) => {
  return (
    <button className="w-full px-4 py-2 border border-gray-300 rounded-md flex items-center justify-center gap-2 hover:bg-gray-100 transition">
      {children}
    </button>
  );
};

export default OutlineButton;