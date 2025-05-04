const FooterBox = ({ title, p1, p2, p3, p4, p5 }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-[25px] font-bold">{title}</h1>
      <p className="text-[15px] cursor-pointer">{p1}</p>
      <p className="text-[15px] cursor-pointer">{p2}</p>
      <p className="text-[15px] cursor-pointer">{p3}</p>
      <p className="text-[15px] cursor-pointer">{p4}</p>
      <p className="text-[15px] cursor-pointer">{p5}</p>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="bg-black text-white relative bottom-0 w-full flex flex-col items-start justify-center py-2 lg:items-center">
      <div className="grid grid-cols-1 gap-8 py-4 px-4 sm:grid-cols-3 sm:px-5 sm:gap-10 md:grid md:grid-cols-4 lg:grid-cols-6 lg:w-[1000px] lg:flex lg:justify-center xl:w-[1100px] xl:gap-35">
        <div className="flex flex-col gap-2">
          <h1 className="text-[28px] font-bold">Exclusive</h1>
          <h2 className="text-[25px] font-bold">Subscribe</h2>
          <p>Get 10% off your first order</p>
          <form className="flex w-full">
  <input 
    type="email" 
    placeholder="Enter your email" 
    className="py-1.5 px-3 rounded-l-md w-46 sm:w-54 bg-black text-[#FAFAFA] border border-white" 
  />
  <button 
    type="submit" 
    className="px-3 py-1.5 bg-black text-white rounded-r-md border border-white flex items-center justify-center"
  >
    <img src="/Images/input-icon.png" alt="Submit Icon" className="w-4 h-4" />
  </button>
</form>


        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-[25px] font-bold">Support</h2>
          <p className="text-[15px]">
            111 Bijoy sarani, Dhaka, <br />
            DH 1515, Bangladesh.
          </p>
          <p className="text-[15px] cursor-pointer ">exclusive@gmail.com</p>
          <p className="text-[15px] cursor-pointer">+88015-88888-9999</p>
        </div>

        <FooterBox
          title="Account"
          p1="My Account"
          p2="Login / Register"
          p3="Cart"
          p4="Wishlist"
          p5="Shop"
        />

        <FooterBox
          title="Quick Links"
          p1="Privacy Policy"
          p2="Terms of Use"
          p3="FAQ"
          p4="Contact"
          p5=""
        />

        <div className="flex flex-col gap-2">
          <h2 className="text-[25px] font-bold">Download App</h2>
          <div>
            <p>Save $3 with App New User Only</p>
            <div className="flex">
              <div>
                <img src="/Images/Qrcode.png" alt="QR Code" />
              </div>
              <div className="flex flex-col justify-between ml-2">
                <img src="/Images/googleplay.png" alt="Google Play" />
                <img src="/Images/appstore.png" alt="App Store" />
              </div>
            </div>
            <div className="flex justify-start mt-4">
            <img src="/Images/social-frame.png" alt="Social Media Icons" className="w-32 h-8" />
          </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center h-10 mt-10 border border-gray-900 text-gray-900 lg:px-20">
        <p>Copyright Rimel 2022. All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
