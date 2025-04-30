import React from 'react'
import Navbar from '../components/NavBar'

const page = () => {
  return (
    <div>
      <Navbar/>
      <div className="w-full flex flex-col items-center px-[5%]">
        <div className="mt-[15%] md:mt-[12%] flex gap-[1%] items-center self-start md:ml-[10%] text-sm flex-wrap">
          <div className="font-poppins text-gray-400">Account</div>
          <div className="text-black">/</div>
          <div className="font-poppins text-gray-400 whitespace-nowrap">My account</div>
          <div className="text-black">/</div>
          <div className="font-poppins text-gray-400 whitespace-nowrap">Product</div>
          <div className="text-black">/</div>
          <div className="font-poppins text-gray-400 whitespace-nowrap">View Cart</div>
          <div className="text-black">/</div>
          <div className="font-poppins text-black whitespace-nowrap">CheckOut</div>
        </div>
      </div>
    </div>
  )
}

export default page
