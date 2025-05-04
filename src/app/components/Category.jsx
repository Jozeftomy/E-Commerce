'use client';

import { useState, useEffect } from 'react';

const BrowseByCategory = () => {
  const categoriesCardItems = [
    { icon: '/Images/cellphone.png', label: 'Phones' },
    { icon: '/Images/computer.png', label: 'Computers' },
    { icon: '/Images/smartwatch.png', label: 'SmartWatch' },
    { icon: '/Images/camera.png', label: 'Camera' },
    { icon: '/Images/headphone.png', label: 'HeadPhones' },
    { icon: '/Images/gamepad.png', label: 'Gaming' },
  ];

  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(6);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(2);
      }
      setStartIndex(0); 
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const handleNext = () => {
    if (startIndex + itemsPerPage < categoriesCardItems.length) {
      setStartIndex(prev => prev + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(prev => prev - itemsPerPage);
    }
  };

  const visibleItems = categoriesCardItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="w-full py-12 lg:pb-20 border-b border-gray-400 flex flex-col gap-5">
      <div className="flex gap-3 h-10 items-center">
        <p className="h-full bg-red-700 w-3 rounded-r-[4px]"></p>
        <p className="text-[20px]">Categories</p>
      </div>

      <div className="flex justify-between">
        <h1 className="text-[22px] font-bold lg:text-[35px]">
          Browse By Category
        </h1>
        <Arrow onPrev={handlePrev} onNext={handleNext} />
      </div>

      <div className="grid gap-4 w-full grid-cols-2 md:grid-cols-4 justify-items-center lg:flex lg:justify-between">
        {visibleItems.map((item, index) => (
          <CatagroyCard key={index} image={item.icon} text={item.label} />
        ))}
      </div>
    </div>
  );
};

// Category Card Subcomponent
const CatagroyCard = ({ image, text }) => {
  return (
    <div className="border border-gray-400 rounded-[5px] flex flex-col items-center justify-center py-2 px-4 m-4 hover:bg-red-600 hover:text-white lg:p-8 lg:m-0">
      <img src={image} alt="category-icon" className="w-20 h-18 lg:w-24 lg:h-22" />
      <p>{text}</p>
    </div>
  );
};

// Arrow Navigation Subcomponent
const Arrow = ({ onPrev, onNext }) => {
  return (
    <div className="flex gap-2 h-10">
      <img
        src="/Images/Left-Arrow.png"
        alt="arrow-left"
        className="hover:shadow-sm cursor-pointer"
        onClick={onPrev}
      />
      <img
        src="/Images/Right-Arrow.png"
        alt="arrow-right"
        className="hover:shadow-sm cursor-pointer"
        onClick={onNext}
      />
    </div>
  );
};

export default BrowseByCategory;
