'use client';
import React from "react";
import CountUp from "react-countup";

const TimerCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="p-4 rounded-md shadow-md w-fit">
      <div className="flex gap-4 text-center text-lg font-medium">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex items-center justify-center bg-white text-black rounded-full shadow-md">
            <CountUp start={0} end={days} duration={3} />
          </div>
          <p className="text-[10px] text-black mt-1 uppercase">Days</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex items-center justify-center bg-white text-black rounded-full shadow-md">
            <CountUp start={0} end={hours} duration={3} />
          </div>
          <p className="text-[10px] text-black mt-1 uppercase">Hours</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex items-center justify-center bg-white text-black rounded-full shadow-md">
            <CountUp start={0} end={minutes} duration={3} />
          </div>
          <p className="text-[10px] text-black mt-1 uppercase">Mins</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex items-center justify-center bg-white text-black rounded-full shadow-md">
            <CountUp start={0} end={seconds} duration={3} />
          </div>
          <p className="text-[10px] text-black mt-1 uppercase">Secs</p>
        </div>
      </div>
    </div>
  );
};

export default TimerCounter;
