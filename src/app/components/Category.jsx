import React from "react";

const categories = [
  { name: "Phones", image: "/Images/cellphone.png" },
  { name: "Computers", image: "/Images/computer.png" },
  { name: "SmartWatch", image: "/Images/smartwatch.png" },
  { name: "Camera", image: "/Images/camera.png" },
  { name: "HeadPhones", image: "/Images/headphone.png" },
  { name: "Gaming", image: "/Images/gamepad.png" },
];

const CategoryCard = ({ name, image }) => (
  <div className="w-[170px] h-[145px] flex flex-col items-center justify-center p-4 border border-[#0000004D] rounded-[4px] bg-gray-100 hover:bg-red-500 hover:cursor-pointer transition-colors duration-300">
    <img src={image} alt={name} className="w-10 h-10 object-cover" />
    <div className="mt-2 text-sm font-medium text-black group-hover:text-white ">{name}</div>
  </div>
);

const BrowseByCategory = () => (
  <div className="p-8">
    <div className="font-poppins font-semibold text-[16px] leading-[20px] tracking-[0%] text-red-500">
      Categories
    </div>
    <div className="flex justify-between items-center mt-2">
      <h2 className="font-inter font-semibold text-[36px] leading-[48px] tracking-[4%] text-black">
        Browse By Category
      </h2>
      <div className="flex gap-2">
        <button className="p-2 bg-gray-200 rounded-full">
          <span className="sr-only">Previous</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <button className="p-2 bg-gray-200 rounded-full">
          <span className="sr-only">Next</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>

   
    <div className="w-[1170px] h-[145px] flex gap-[30px] mt-4">
      {categories.map((category) => (
        <CategoryCard key={category.name} name={category.name} image={category.image} />
      ))}
    </div>
  </div>
);

export default BrowseByCategory;
