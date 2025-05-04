const Topbar = () => {
    return (
      <div className="bg-black text-white hidden  md:flex items-center justify-center relative lg:w-full">
        <div className="w-fit flex items-center gap-2 sm:gap-8 lg:w-[600px] border">
          <p className="text-[15px] w-[70%] border border-gray-700 p-1 sm:w-[80%] md:text-[14px] md:p-1 md:w-fit lg:text-[15px] lg:gap-0 hover:border-gray-400 ">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <button className="border-b border-white lg:text-[15px] md:hover:cursor-pointer hover:border-gray-500 hover:shadow">
            ShopNow
          </button>
        </div>
  
        <div className="hidden lg:block absolute top-0 lg:right-10 xl:right-20 2xl:right-40">
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
  
  export default Topbar;