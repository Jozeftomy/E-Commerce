import React from 'react'
import TimerCounter from './TimerCounter'


const Poster = () => {
  return (
    <div className="absolute w-[1170px] h-[500px] top-[2526px] left-[135px] bg-black ">
        <div className="absolute w-[90px] h-[20px] top-[69px] left-[56px] text-[#00FF66] font-semibold text-[16px] leading-[20px] tracking-[0%] font-poppins">
            Category
        </div>
        <div className="absolute w-[443px] h-[120px] top-[121px] left-[56px] text-[#FAFAFA] font-semibold text-[48px] leading-[60px] tracking-[4%] font-inter">
          Enhance Your Music Experience
        </div>
        <div className="absolute w-[320px] h-[62px] top-[273px] left-[56px] flex gap-[24px]">
        <TimerCounter days={5} hours={23} minutes={59} seconds={35} />
</div>

       
        <button
  className="absolute w-[171px] h-[56px] top-[375px] left-[56px] gap-[10px] rounded-[4px] pt-[16px] pr-[48px] pb-[16px] pl-[48px] bg-[#00FF66]">
    Click Me
  </button>
  <div
  className="absolute w-[568px] h-[330px] top-[45px] left-[584px]"
>
  <img src="/images/jbl.png" alt="jbl" className="w-full h-full object-cover" />
</div>


  </div>
  )
}

export default Poster