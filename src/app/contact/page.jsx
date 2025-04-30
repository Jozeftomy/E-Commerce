import React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

const Page = () => {
  const contactInfo = [
    {
      icon: "Images/phone-vector.png",
      title: "Call To Us",
      description: "We are available 24/7, 7 days a week.",
      contact: ["+8801611112222"],
    },
    {
      icon: "Images/email-vector.png",
      title: "Write To Us",
      description: "Fill out our form and we will contact you within 24 hours.",
      contact: ["customer@exclusive.com", "support@exclusive.com"],
    },
  ];

  return (
    <div className='bg-white text-black'>
      <Navbar />

      <div className="w-full flex gap-2 items-center text-sm text-gray-400 px-6 mt-20 sm:justify-start justify-center">
        <div>Home</div>
        <div className="text-black">/</div>
        <div className="text-black">Contact</div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 px-6 mt-40 justify-center items-start">

        {/* Contact Info Card */}
        <div className="w-full max-w-sm bg-white rounded-[4px] p-6 shadow-md flex flex-col gap-[32px]">
          {contactInfo.map((info, index) => (
            <div key={index} className="flex flex-col items-start gap-4 border-b last:border-b-0 pb-6 last:pb-0">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <img src={info.icon} alt={info.title} className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-semibold">{info.title}</h2>
              </div>
              <p className="text-sm text-gray-600">{info.description}</p>
              <div className="flex flex-col gap-1 text-sm text-gray-800">
                {info.contact.map((item, idx) => (
                  <p key={idx}>{index === 0 ? `Phone: ${item}` : `Email: ${item}`}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="w-full max-w-3xl bg-white rounded-[4px] p-6 shadow-md flex flex-col gap-[24px]">
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="flex-1 h-[40px] bg-[#F5F5F5] rounded-md px-3 focus:outline-none"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="flex-1 h-[40px] bg-[#F5F5F5] rounded-md px-3 focus:outline-none"
              required
            />
            <input 
              type="tel"
              placeholder="Your Phone" 
              className="flex-1 h-[40px] bg-[#F5F5F5] rounded-md px-3 focus:outline-none"
              required
            />
          </div>

          <div className="w-full">
            <textarea 
              placeholder="Your Message" 
              className="w-full h-[207px] bg-[#F5F5F5] rounded-md p-3 focus:outline-none resize-none"
              required
            />
          </div>

          <div className="w-full flex justify-end">
            <button className="w-[215px] h-[56px] rounded-[4px] bg-red-500 text-white font-semibold flex items-center justify-center gap-[10px] px-[48px] py-[16px] hover:cursor-pointer">
              Send Message
            </button>
          </div>
        </div>

      </div>

      
      <div className="w-full mt-40">
        <Footer />
      </div>
    </div>
  )
}

export default Page;
