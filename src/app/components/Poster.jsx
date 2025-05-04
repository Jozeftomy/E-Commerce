import React from 'react';
import TimerCounter from './TimerCounter';

const Poster = () => {
  return (
    <div className="relative w-full bg-black py-12 md:py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center md:items-start gap-12">
        <div className="flex flex-col gap-6 md:w-1/2">
          <div className="text-[#00FF66] font-semibold text-sm md:text-base leading-5 font-poppins">
            Category
          </div>

          <h1 className="text-[#FAFAFA] font-semibold text-2xl md:text-5xl leading-snug tracking-wide font-inter">
            Enhance Your Music Experience
          </h1>

          <TimerCounter days={5} hours={23} minutes={59} seconds={35} />

          <button className="w-full sm:w-[171px] h-[56px] bg-[#00FF66] rounded-md text-white hover:bg-green-700 hover:cursor-pointer flex justify-center items-center">
            Click Me
          </button>
        </div>


        <div className="md:w-1/2 w-full">
          <img
            src="/Images/jbl.png"
            alt="jbl"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Poster;
