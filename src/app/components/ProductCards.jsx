'use client';
import { FaStar } from 'react-icons/fa6';
import { FaRegEye, FaRegHeart } from 'react-icons/fa6';

const ProductCards = ({ product = {} }) => {
  const {
    name = 'No Name',
    price = 'Not added',
    originalPrice = '1000',
    image = '/Images/no-image.jpg',
    reviews = '66',
    rating = 4
  } = product;

  return (
    <div className="group h-75 sm:w-54 flex flex-col justify-center gap-2 mb-2 px-2 hover:shadow-md hover:cursor-pointer hover:bg-gray-100 ">
      {/* Image and icons */}
      <div
        className="h-40 bg-contain bg-no-repeat bg-center relative bg-gray-200 min-w-50"
        style={{ backgroundImage: `url(${image})` }}
      >
        <p className="absolute top-2 right-2 bg-white size-6 flex items-center justify-center rounded-[10px]">
        
  <FaRegHeart />

        </p>
        <p className="absolute top-10 right-2 bg-white size-6 flex items-center justify-center rounded-[10px]">

  <FaRegEye />


        </p>

        <button className="absolute bottom-0 left-0 w-full bg-black text-white text-sm px-2 py-1 hidden group-hover:block cursor-pointer rounded-[2px]">
          Add to Cart
        </button>
      </div>

      {/* Product details */}
      <h1 className="text-[15px] font-medium sm:text-[20px]">{name}</h1>

      <div className="flex gap-1">
        <p className="text-red-500">${price}</p>
        <p className="text-gray-400 line-through">${originalPrice}</p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        {[...Array(Math.floor(rating))].map((_, index) => (
          <FaStar key={index} color="gold" />
        ))}
        <p>{reviews}</p>
      </div>
    </div>
  );
};

export default ProductCards;
