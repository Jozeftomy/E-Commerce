import React from 'react'
import Navbar from './NavBar'
import Footer from './Footer'

const Error = () => {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center">
        <div className="mt-[222px] flex gap-[12px] items-center self-start ml-[135px]">
          <div className="font-poppins font-normal text-[14px] leading-[21px] text-gray-400">
            Home
          </div>
          <div className="text-black text-[14px]">/</div>
          <div className="font-poppins font-normal text-[14px] leading-[21px] text-black whitespace-nowrap">
            404 Error
          </div>
        </div>

        {/* Error Message */}
        <div className="mt-[160px] flex flex-col items-center gap-[40px]">
          <div className="w-[829px] h-[115px] font-inter font-medium text-[110px] leading-[115px] tracking-[0.03em] text-black text-center">
            404 Not Found
          </div>
          <div className="w-[425px] h-[24px] font-poppins font-normal text-[16px] leading-[24px] text-black text-center">
            Your visited page not found. You may go home page.
          </div>
        </div>

        {/* Button */}
        <button className="mt-[100px] w-[254px] h-[56px] flex items-center justify-center gap-[10px] rounded-[4px] px-[48px] py-[16px] bg-[#DB4444] text-white hover:cursor-pointer">
          Back to home page
        </button>

        {/* Footer */}
        <div className=" w-full mt-[200px]">
          <Footer />
        </div>
        
      </div>
    </>
  )
}

export default Error
