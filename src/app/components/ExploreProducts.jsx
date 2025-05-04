'use client';

import ProductCards from './ProductCards';
import Button from './Button';

const ExploreOurProducts = () => {
  const productItems = [
    {
      image: '/Images/cesar.png',
      title: 'Breed Dry Dog Food',
      price: 100,
      oldPrice: null,
      reviews: 35,
    },
    {
      image: '/Images/cam.png',
      title: 'CANON EOS DSLR Camera',
      price: 360,
      oldPrice: null,
      reviews: 95,
    },
    {
      image: '/Images/laptop.png',
      title: 'ASUS FHD Gaming Laptop',
      price: 700,
      oldPrice: null,
      reviews: 325,
    },
    {
      image: '/Images/facewash.png',
      title: 'Curology Product Set',
      price: 500,
      oldPrice: null,
      reviews: 145,
    },
    {
      image: '/Images/car.png',
      title: 'Kids Electric Car',
      price: 960,
      oldPrice: null,
      reviews: 65,
      tag: 'NEW',
    },
    {
      image: '/Images/boot.png',
      title: 'Jr. Zoom Soccer Cleats',
      price: 1160,
      oldPrice: null,
      reviews: 35,
    },
    {
      image: '/Images/black-joystick.png',
      title: 'GPII Shooter USB Gamepad',
      price: 660,
      oldPrice: null,
      reviews: 55,
      tag: 'NEW',
    },
    {
      image: '/Images/green-jacket.png',
      title: 'Quilted Satin Jacket',
      price: 660,
      oldPrice: null,
      reviews: 55,
    },
  ];

  return (
    <div className="w-full py-12 lg:pb-20 flex flex-col gap-5">
      <div className="flex gap-3 h-10 items-center">
        <p className="h-full bg-red-700 w-3 rounded-r-[4px]"></p>
        <p className="text-[20px]">Categories</p>
      </div>

      <h1 className="text-[22px] font-bold lg:text-[35px]">
        Browse By Category
      </h1>

      <div
        className="
          grid gap-4 w-full justify-items-center
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
        "
      >
        {productItems.map((item, index) => (
          <ProductCards
            key={index}
            product={{
              image: item.image,
              name: item.title,
              price: item.price,
              originalPrice: item.oldPrice,
              reviews: item.reviews,
              tag: item.tag,
            }}
          />
        ))}
      </div>

      <div className="flex items-center justify-center mt-10">
        <Button text="View All Products" />
      </div>
    </div>
  );
};

export default ExploreOurProducts;
