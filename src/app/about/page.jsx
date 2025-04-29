import React from 'react';
import Navbar from '../components/NavBar';
import TeamMemberCard from '../components/TeamMemberCard';
import FeatureCard from '../components/FeatureCard';
import Footer from '../components/Footer';

const About = () => {
    const teamMembers = [
        { img: "Images/image-person.png", title: "Tom Cruise", description: "Founder & Chairman" },
        { img: "Images/image-girl.png", title: "Emma Watson", description: "Managing Director" },
        { img: "Images/image-suit.png", title: "Will Smith", description: "Product Designer" },
    ];

    const features = [
        { img: "Images/truck.png", title: "FREE AND FAST DELIVERY", description: "Free delivery for all orders over $140" },
        { img: "Images/headphone2.png", title: "24/7 CUSTOMER SERVICE", description: "Friendly 24/7 customer support" },
        { img: "Images/shield-tick.png", title: "MONEY-BACK GUARANTEE", description: "We return money within 30 days" },
    ];

    return (
        <>
            <Navbar />

            {/* Main Container */}
            <div className="relative w-full" style={{ height: '2940px' }}> 
                
                {/* Breadcrumb */}
                <div className="absolute top-[222px] left-[135px] w-[114px] h-[21px] flex gap-[12px] items-center">
                    <div className="font-poppins font-normal text-[14px] leading-[21px] text-gray-400">
                        Home
                    </div>
                    <div className="text-black text-[14px]">/</div>
                    <div className="font-poppins font-normal text-[14px] leading-[21px] text-black">
                        About
                    </div>
                </div>

                <div className="absolute top-[422px] left-[135px] w-[525px] flex flex-col gap-[24px]">
                    <div className="font-inter font-semibold text-[54px] leading-[64px] text-black">
                        Our Story
                    </div>
                    <div className="flex flex-col gap-[16px]">
                        <div className="font-poppins font-normal text-[16px] leading-[26px] text-gray-700">
                            Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
                        </div>
                        <div className="font-poppins font-normal text-[16px] leading-[26px] text-gray-500">
                            Exclusive has more than 1 million products to offer, growing at a very fast rate. Exclusive offers a diverse assortment in categories ranging from consumer electronics to fashion.
                        </div>
                    </div>
                </div>

                <div className="absolute top-[285px] left-[735px] w-[705px] h-[609px] rounded-tl-[4px] rounded-bl-[4px] overflow-hidden">
                    <img 
                        src="Images/about-sideimage.png" 
                        alt="About Image" 
                        className="w-full h-full object-cover" 
                    />
                </div>

                <div className="absolute top-[1034px] left-[135px] w-[1170px] h-[230px] flex gap-[30px]">
                    {[
                        { img: "Images/delivery.png", title: "10.5k", text: "Sellers active on our site" },
                        { img: "Images/dollar.png", title: "33k", text: "Sales monthly product sales" },
                        { img: "Images/shoppingbag.png", title: "45.5k", text: "Customers active on our site" },
                        { img: "Images/moneybag.png", title: "25k", text: "Annual Gross sales" },
                    ].map((item, index) => (
                        <div 
                            key={index} 
                            className="w-[270px] h-[230px] rounded-[4px] border border-[#0000004D] bg-white flex flex-col items-center justify-center hover:bg-red-400 transition-colors duration-300"
                        >
                            <div className="w-[80px] h-[80px] flex items-center justify-center rounded-full bg-black hover:bg-white transition-colors duration-300">
                                <img src={item.img} alt="Icon" className="w-[40px] h-[40px] object-cover" />
                            </div>
                            <p className="mt-4 font-inter font-bold text-[28px] leading-[30px] tracking-[4%] text-black text-center">
                                {item.title}
                            </p>
                            <p className="mt-2 font-poppins font-normal text-[16px] leading-[24px] text-black text-center">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Team Members */}
                <div className="absolute top-[1404px] left-[135px] w-[1170px] h-[564px] flex gap-[32px]">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard key={index} {...member} />
                    ))}
                </div>

                {/* Features */}
                <div className="absolute top-[2100px] left-[135px] w-[1170px] h-[161px] flex justify-between">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>

                {/* Footer */}
                <div className="absolute top-[2500px] left-0 w-full h-[440px]">
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default About;