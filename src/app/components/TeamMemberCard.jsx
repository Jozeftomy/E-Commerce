import React from 'react';

const TeamMemberCard = ({ img, title, description }) => {
  return (
    <div className="w-[370px] h-[564px] bg-white rounded-md shadow-md flex flex-col items-center transform scale-90 sm:scale-100 transition-transform duration-300">
      {/* Top Box with Centered Image */}
      <div className="w-[370px] h-[430px] rounded-[4px] bg-[#F5F5F5] flex justify-center items-center overflow-hidden">
        <img src={img} alt={title} className="w-[294px] h-[397px] object-contain" />
      </div>

      {/* Lower Split Boxes with Title and Description */}
      <div className="w-[185px] h-[102px] rounded-[4px] mt-6 flex flex-col gap-[8px] p-2 items-center justify-center">
        <p className="w-[185px] h-[30px] font-inter font-medium text-[32px] leading-[30px] tracking-[4%] text-black text-center whitespace-nowrap">
          {title}
        </p>
        <p className="w-[167px] h-[24px] font-poppins font-normal text-[16px] leading-[24px] tracking-[0%] text-gray-700 text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
