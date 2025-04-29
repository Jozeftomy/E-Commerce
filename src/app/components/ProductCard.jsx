import React from 'react';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  return (
    <div className="w-[270px] h-[350px] flex flex-col gap-[16px] bg-white border rounded-lg shadow-lg p-4 relative">
      
      {/* Discount Badge */}
      {product.discount && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
          -{product.discount}%
        </div>
      )}

      {/* view eye */}
      <div className="absolute top-2 right-2 text-lg cursor-pointer z-10">
       
      </div>

 
      <div className="relative w-full h-[250px] rounded-[4px] overflow-hidden group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-[4px]"
        />
      <button className="absolute w-full bottom-0 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black text-white text-sm whitespace-nowrap rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
  🛒 Add To Cart
</button>

      </div>

      {/* Product Name */}
      <h3 className="font-poppins font-medium text-[16px] text-black mt-1">
        {product.name}
      </h3>

      {/* Price and Original Price */}
      <div className="flex gap-3 items-center">
        <span className="text-red-500 font-medium text-[16px]">${product.price}</span>
        {product.originalPrice && (
          <span className="text-gray-500 line-through text-[16px]">${product.originalPrice}</span>
        )}
      </div>

      {/* Ratings and Reviews */}
      {product.rating && product.reviews && (
        <div className="flex items-center gap-2 mt-1">
          {Array.from({ length: Math.round(product.rating) }, (_, i) => (
            <FaStar key={i} className="text-yellow-500 text-sm" />
          ))}
          <span className="text-gray-600 text-sm">({product.reviews})</span>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
