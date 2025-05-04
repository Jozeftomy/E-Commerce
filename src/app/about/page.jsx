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
    <div className="bg-white text-black">
      <Navbar />

      {/* Main content with top margin to avoid overlap with fixed navbar */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 mt-32 flex flex-col gap-16">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-3 text-sm text-gray-400">
          <span>Home</span>
          <span className="text-black">/</span>
          <span className="text-black">About</span>
        </div>

        {/* Our Story Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Text Block */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <h2 className="font-inter font-semibold text-3xl md:text-5xl leading-tight">Our Story</h2>
            <p className="text-gray-700 text-base leading-7">
              Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh.
              Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands
              and serves 3 million customers across the region.
            </p>
            <p className="text-gray-500 text-base leading-7">
              Exclusive has more than 1 million products to offer, growing at a very fast rate. Exclusive offers a diverse assortment
              in categories ranging from consumer electronics to fashion.
            </p>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 rounded overflow-hidden">
            <img
              src="Images/about-sideimage.png"
              alt="About"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { img: "Images/delivery.png", title: "10.5k", text: "Sellers active on our site" },
            { img: "Images/dollar.png", title: "33k", text: "Sales monthly product sales" },
            { img: "Images/shoppingbag.png", title: "45.5k", text: "Customers active on our site" },
            { img: "Images/moneybag.png", title: "25k", text: "Annual Gross sales" },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded border border-black/30 p-6 flex flex-col items-center text-center hover:bg-red-400 transition-colors"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-black hover:bg-white transition-colors">
                <img src={item.img} alt="icon" className="w-10 h-10" />
              </div>
              <p className="mt-4 font-inter font-bold text-2xl">{item.title}</p>
              <p className="mt-2 font-poppins text-base">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Team Members Section */}
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-semibold text-center">Meet the Team</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-10">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
