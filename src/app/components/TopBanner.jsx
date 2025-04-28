const TopBanner = () => {
    return (
      <div className="bg-black text-white hidden  md:flex items-center justify-center relative">
        <div className="w-fit flex items-center justify-between gap-2 sm:gap-8">
          <p className="text-[15px] w-[70%] border border-gray-700 p-1 sm:w-[80%] md:text-[14px] md:p-1 md:w-fit lg:text-[15px] lg:gap-0 hover:border-gray-400 hover:shadow-lg hover:shadow-cyan-500/50">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <button className="border p-1 border-gray-700 md:text-[14px]  lg:text-[15px] md:hover:cursor-pointer hover:border-gray-500 hover:shadow-lg hover:shadow-cyan-500/50">
            ShopNow
          </button>
        </div>
  
        <div className="hidden lg:block absolute top-0 lg:right-10">
          <select className="bg-black text-white p-1 rounded">
            <option value="volvo">English</option>
            <option value="saab">Hindi</option>
            <option value="opel">Malayalam</option>
            <option value="audi">Arabic</option>
          </select>
        </div>
      </div>
    );
  };
  
  export default TopBanner;