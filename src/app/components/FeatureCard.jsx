import React from 'react';

const FeatureCard = ({ img, title, description }) => {
  return (
    <div className="w-[300px] h-[161px] bg-white flex flex-col items-center justify-center gap-[12px] transform scale-90 sm:scale-100 transition-transform duration-300">
      {/* Icon Container */}
      <div className="w-[80px] h-[80px] rounded-full bg-black flex items-center justify-center">
        <img src={img} alt={`${title} Icon`} className="w-[40px] h-[40px] object-cover" />
      </div>

      {/* Title & Description Wrapper */}
      <div className="flex flex-col items-center gap-[6px] w-full px-4">
        {/* Title */}
        <p className="w-[242px] h-[28px] font-poppins font-semibold text-[15px] leading-[28px] text-black text-center whitespace-nowrap">
          {title}
        </p>

        {/* Description */}
        <p className="w-[249px] h-[21px] font-poppins font-normal text-[12px] leading-[21px] text-gray-700 text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
