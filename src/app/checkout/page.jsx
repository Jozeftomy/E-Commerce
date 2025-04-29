import React from 'react'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'

const page = () => {
  return (
   <>
   <Navbar/>
    {/*  Navigation */}
    <div className="w-full flex flex-col items-center px-4 md:px-0">
        <div className="mt-[120px] md:mt-[222px] flex gap-[12px] items-center self-start md:ml-[135px] text-sm flex-wrap">
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

      <div className="text-[28px] md:text-[36px] font-medium tracking-wide text-black mt-8 md:ml-[135px] ml-4">Billing Details</div>

    <div className="w-full flex flex-col lg:flex-row items-start gap-8 px-4 md:px-0 mt-6">
      {/* Billing Form */}
      <div className="w-full lg:w-[470px] bg-white rounded-md shadow-md p-6 ml-0 md:ml-[135px]">


        {/* Name */}
        <div className="flex flex-col gap-2 mb-4">
          <label className="text-gray-600 font-poppins text-sm">First Name*</label>
          <input type="text" className="w-full h-10 border border-gray-300 bg-[#F5F5F5] rounded-md px-3 focus:outline-none" placeholder="Your First Name" />

          <label className="text-gray-600 font-poppins text-sm">Company Name</label>
          <input type="text" className="w-full h-10 border border-gray-300 bg-[#F5F5F5] rounded-md px-3 focus:outline-none" placeholder="Company Name (Optional)" />
        </div>

        {/* Address */}
        <div className="flex flex-col gap-2 mb-4">
          <label className="text-gray-600 font-poppins text-sm">Street Address*</label>
          <input type="text" className="w-full h-10 border border-gray-300 bg-[#F5F5F5] rounded-md px-3 focus:outline-none" placeholder="House number and street name" />

          <label className="text-gray-600 font-poppins text-sm">Apartment, floor, etc. (Optional)</label>
          <input type="text" className="w-full h-10 border border-gray-300 bg-[#F5F5F5] rounded-md px-3 focus:outline-none" placeholder="Apartment, suite, unit, etc." />
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2 mb-4">
          <label className="text-gray-600 font-poppins text-sm">Town/City*</label>
          <input type="text" className="w-full h-10 border border-gray-300 bg-[#F5F5F5] rounded-md px-3 focus:outline-none" placeholder="Your City" />

          <label className="text-gray-600 font-poppins text-sm">Phone Number*</label>
          <input type="tel" className="w-full h-10 border border-gray-300 bg-[#F5F5F5] rounded-md px-3 focus:outline-none" placeholder="Your Phone Number" />

          <label className="text-gray-600 font-poppins text-sm">Email Address*</label>
          <input type="email" className="w-full h-10 border border-gray-300 bg-[#F5F5F5] rounded-md px-3 focus:outline-none" placeholder="Your Email Address" />
        </div>

        {/* Checkbox */}
        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4 accent-red-600" />
          <label className="text-gray-600 font-poppins text-sm">Save this information for faster checkout next time</label>
        </div>
      </div>

      {/* Order Summary */}
      <div className="w-full lg:w-[527px] bg-white rounded-md shadow-md p-6 font-poppins">
        {/* Product Items */}
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-3">
            <img src="/Images/computer2.png" alt="Monitor" className="w-12 h-12 object-contain" />
            <span className="text-sm text-black">LCD Monitor</span>
          </div>
          <span className="text-sm font-medium">$1100</span>
        </div>

        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-3">
            <img src="/Images/joystick.png" alt="Gamepad" className="w-12 h-12 object-contain" />
            <span className="text-sm text-black">H1 Gamepad</span>
          </div>
          <span className="text-sm font-medium">$650</span>
        </div>

        {/* Totals */}
        <div className="mt-4 text-sm">
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>$1750</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between font-medium border-t pt-2">
            <span>Total:</span>
            <span>$1750</span>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-4 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" className="accent-black" />
              <span>Bank</span>
            </label>

            <div className="flex items-center gap-2">
              <img src="/Images/payment-logo1.png" alt="Bkash" className="w-8 h-5 object-contain" />
              <img src="/Images/visa.png" alt="Visa" className="w-8 h-5 object-contain" />
              <img src="/Images/mastercard.png" alt="MasterCard" className="w-8 h-5 object-contain" />
              <img src="/Images/payment-logo3.png" alt="Nagad" className="w-8 h-5 object-contain" />
            </div>
          </div>

          <label className="flex items-center gap-2">
            <input type="radio" name="payment" defaultChecked className="accent-black" />
            <span>Cash on delivery</span>
          </label>
        </div>

        {/* Coupon Code */}
        <div className="mt-4 flex flex-col sm:flex-row gap-2">
          <input type="text" placeholder="Coupon Code" className="w-full sm:w-[300px] h-[56px] border border-black rounded-[4px] px-3" />
          <button className="w-full sm:w-[211px] h-[56px] bg-[#DB4444] text-white rounded-[4px] px-[48px] py-[16px] font-poppins font-medium hover:bg-red-600 transition whitespace-nowrap">
            Apply Coupon
          </button>
        </div>

        {/* Place Order Button */}
        <button className="mt-4 w-full sm:w-[190px] h-[56px] bg-[#DB4444] text-white rounded-[4px] px-[48px] py-[16px] font-poppins font-medium hover:bg-red-600 transition whitespace-nowrap">
          Place Order
        </button>
      </div>
    </div>

    {/* Footer */}
    <div className="w-full mt-20">
      <Footer />
    </div>
   </>
  )
}

export default page
