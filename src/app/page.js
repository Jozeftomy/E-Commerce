import Footer from './components/Footer.jsx';
import Navbar from './components/NavBar.jsx';
import List from './components/List.jsx';
import FlashSales from './components/FlashSales.jsx';
import BrowseByCategory from './components/Category.jsx';
import SellingProducts from './components/SellingProducts.jsx';
import ExploreOurProducts from './components/ExploreProducts.jsx';
import NewArrival from './components/NewArrival.jsx';
import Poster from './components/Poster.jsx';
import Topbar from './components/Topbar.jsx';
import FeatureCard from './components/FeatureCard.jsx';

export default function Home() {
  const features = [
    {
      img: "Images/truck.png",
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      img: "Images/headphone2.png",
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      img: "Images/shield-tick.png",
      title: "MONEY-BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ];

  return (
 
      <div className="bg-white text-black lg:flex lg:flex-col lg:items-center">
        <Navbar />
        <div className="min-h-screen bg-white text-black flex flex-col gap-15 mt-35 mb-10 lg:w-[90%] 2xl:w-[1200px] lg:py-4">
          {/* section 1 of the Home page (Iphone imag and product divider) */}
          <div className="flex flex-col gap-3 py-3 lg:flex-row">
            <List />
            <div className="">
              <img
                src="/Images/frame.png"
                alt="iphone image"
                className="w-full h-fit object-contain lg:px-4 "
              />
            </div>
          </div>
  
          {/* section 2 */}
  
          <FlashSales />
          {/* <h1>Flash sale</h1> */}
  
          {/* Browse By Category */}
  
          <BrowseByCategory />
  
          {/* Best Selling Products */}
  
          <SellingProducts />
  
          {/* Enhance Your Music Experience */}
  
          <div className="min-h-200">
          <Poster/>
          </div>
  
          {/* Explore Our Products */}
       
          <ExploreOurProducts />
        
         
  
          {/* New Arrival */}
  
          <NewArrival />
  
          {/*Last Section  */}
  
          
        <section className="w-full flex flex-wrap justify-between mt-10 gap-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </section>
        </div>
        <Footer />
      </div>
    );
}
