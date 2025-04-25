'use client'
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // Using FontAwesome icon

const items = [
  { name: "Woman's Fashion", data: ["Dresses", "Shoes", "Bags", "Accessories"] },
  { name: "Men's Fashion", data: ["Shirts", "Pants", "Shoes", "Watches"] },
  { name: "Electronics", data: ["Smartphones", "Laptops", "Headphones", "Cameras"] },
  { name: "Home & Lifestyle", data: ["Furniture", "Kitchenware", "Decor", "Lighting"] },
  { name: "Medicine", data: ["Pain Relief", "Vitamins", "Skin Care", "Supplements"] },
  { name: "Sports & Outdoor", data: ["Gym Equipment", "Camping Gear", "Cycling", "Running Shoes"] },
  { name: "Baby’s & Toys", data: ["Soft Toys", "Educational Games", "Baby Care", "Strollers"] },
  { name: "Groceries & Pets", data: ["Fruits & Vegetables", "Pet Food", "Cleaning Supplies", "Snacks"] },
  { name: "Health & Beauty", data: ["Skincare", "Makeup", "Hair Care", "Fragrances"] },
];

const DropdownList = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="absolute top-[182px] left-[135px] w-[217px] flex flex-col">
      {items.map((item, index) => (
        <div key={index} className="w-full">
   
          <button
            onClick={() => toggleDropdown(index)}
            className="w-full flex items-center justify-between px-4 py-2  text-black transition duration-200"
          >
            {item.name}
            <FaChevronDown className={`transform transition-transform ${openDropdown === index ? "rotate-180" : ""}`} />
          </button>

          {openDropdown === index && (
            <div className="mt-2 bg-white ">
              {item.data.map((subItem, subIndex) => (
                <div
                  key={subIndex}
                  className="px-4 py-2 text-black cursor-pointer transition duration-200"
                >
                  {subItem}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DropdownList;
