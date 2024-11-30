import React from "react";
import { BsStarFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Rental = ({ title, image, price, onClick }) => {
  return (
  
    <div className="cursor-pointer" onClick={onClick} >
      <div className="relative">
        <div className="grad absolute w-full h-full rounded-b-[1.3rem]"></div>
        <div className="flex  ">
          {/* Background */}
          <img
            src={image}
            alt=""
            className="object-cover rounded-[1.3rem] sm:h-[17rem]  md:h-[13rem] w-full"
          />
          {/* Title */}
          <div className="absolute text-white font-bold bottom-6 left-6 text-[22px] flex items-center gap-2">
            {title}
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="pt-3 flex justify-between items-start">
        {/* Left */}
        <div className="">
          <p className="max-w-[17rem] font-semibold text-[17px]">
            {title}
          </p>
          <p className="max-w-[17rem]  text-[16px] -mt-1 text-gray-500">
            Jan 28 - Aug 9
          </p>
          <p className="max-w-[17rem] font-semibold text-[17px]">${price}</p>
        </div>
        {/* Right */}
        <div className="flex items-center space-x-1">
          <BsStarFill />
          <p className="text-[15px]">별점</p>
        </div>

      </div>
      
    </div>
  );
};

export default Rental;
