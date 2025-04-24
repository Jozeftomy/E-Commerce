"use client";
import React, { useState } from 'react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-[243px] h-[38px] bg-[#F5F5F5] rounded-[4px] px-[12px] py-[7px] pl-[20px] flex items-center gap-[10px]">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="What are you looking for?" 
        className="w-[153px] h-[18px] opacity-50 text-black font-poppins font-normal text-[12px] leading-[18px] tracking-[0%] bg-transparent focus:outline-none"
      />
      <img
        src="images/search.png"
        alt="Search Icon"
        className="w-[24px] h-[24px] object-cover cursor-pointer"
      />
    </div>
  );
};

export default SearchBar;
