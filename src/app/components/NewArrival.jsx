import React from 'react';

const NewArrival = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      <div className="mb-6">
        <p className="text-red-500 font-semibold">Featured</p>
        <h2 className="text-3xl font-bold">New Arrival</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative bg-black text-white rounded-lg overflow-hidden w-[570px] h-[600px] flex items-end p-6">
          <img
            src="/Images/playStation.png"
            alt="PlayStation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-800 opacity-60"></div>
          <div className="relative z-10">
            <h3 className="text-xl font-semibold">PlayStation 5</h3>
            <p className="text-sm mb-2">Black and White version of the PS5 coming out on sale.</p>
            <button className="underline text-white text-sm">Shop Now</button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="relative bg-black text-white rounded-lg overflow-hidden w-[570px] h-[284px] flex items-center justify-between p-6">
            <img
              src="/Images/women.png"
              alt="Women’s Collection"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-800 opacity-60"></div>
            <div className="relative z-10">
              <h3 className="text-lg font-semibold">Women’s Collections</h3>
              <p className="text-sm mb-2">Featured woman collections that give you another vibe.</p>
              <button className="underline text-white text-sm">Shop Now</button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="relative bg-black text-white rounded-lg overflow-hidden h-[284px] w-[270px] flex items-end p-6">
              <img
                src="/Images/speakers-group.png"
                alt="Speakers"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gray-800 opacity-60"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-semibold">Speakers</h3>
                <p className="text-sm mb-2">Amazon wireless speakers</p>
                <button className="underline text-white text-sm">Shop Now</button>
              </div>
            </div>
            <div className="relative bg-black text-white rounded-lg overflow-hidden h-[284px] w-[270px] flex items-end p-6">
              <img
                src="/Images/perfumes.png"
                alt="Perfume"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gray-800 opacity-60"></div>
              <div className="relative z-10">
                <h3 className="text-lg font-semibold">Perfume</h3>
                <p className="text-sm mb-2">GUCCI INTENSE OUD EDP</p>
                <button className="underline text-white text-sm">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;