'use client';

import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const items = [
  { name: "Woman's Fashion", data: ['Dresses', 'Shoes', 'Bags', 'Accessories'] },
  { name: "Men's Fashion", data: ['Shirts', 'Pants', 'Shoes', 'Watches'] },
  { name: 'Electronics', data: ['Smartphones', 'Laptops', 'Headphones', 'Cameras'] },
  { name: 'Home & Lifestyle', data: ['Furniture', 'Kitchenware', 'Decor', 'Lighting'] },
  { name: 'Medicine', data: ['Pain Relief', 'Vitamins', 'Skin Care', 'Supplements'] },
  { name: 'Sports & Outdoor', data: ['Gym Equipment', 'Camping Gear', 'Cycling', 'Running Shoes'] },
  { name: 'Baby’s & Toys', data: ['Soft Toys', 'Educational Games', 'Baby Care', 'Strollers'] },
  { name: 'Groceries & Pets', data: ['Fruits & Vegetables', 'Pet Food', 'Cleaning Supplies', 'Snacks'] },
  { name: 'Health & Beauty', data: ['Skincare', 'Makeup', 'Hair Care', 'Fragrances'] },
];

const DropdownList = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="relative lg:px-2 lg:border-r lg:pr-4 lg:border-gray-200">
      <ul
        className="flex justify-between lg:flex-col lg:gap-2 lg:w-50"
        onMouseLeave={() => setOpenDropdown(null)}
      >
        {items.map((item, index) => (
          <li key={index} className="relative w-full" onClick={() => toggleDropdown(index)}>
            <button className="flex items-center justify-center p-2 gap-2 text-[13px] lg:w-full lg:justify-between hover:border border-gray-200 cursor-pointer w-full">
              {item.name}
              <FaChevronDown
                className={`transform transition-transform ${
                  openDropdown === index ? 'rotate-180' : ''
                }`}
              />
            </button>

            {openDropdown === index && (
              <div className="absolute z-10 bg-white text-black p-3 shadow lg:w-[85%] grid grid-cols-1 gap-2">
                {item.data.map((subItem, subIndex) => (
                  <div
                    key={subIndex}
                    className="text-sm text-gray-700 px-2 py-1 hover:bg-gray-100 cursor-pointer"
                  >
                    {subItem}
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownList;
