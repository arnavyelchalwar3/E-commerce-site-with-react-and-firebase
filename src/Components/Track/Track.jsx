import React from 'react';
import { FaTruck } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import { BiSupport } from 'react-icons/bi';
import { RiSecurePaymentFill } from 'react-icons/ri';


const Track = () => {
  return (
    <div className="flex flex-wrap justify-center items-center space-x-8 md:space-x-16 mt-10 lg:space-x-24">
      <div className="flex flex-col items-center text-center p-4">
        <FaTruck className="text-gray-800  h-20 w-20 mb-2" />
        <div>
          <h3 className="font-semibold text-gray-700">Free Delivery</h3>
          <p className="text-gray-500 text-sm">Free Shipping on all orders</p>
        </div>
      </div>
      <div className="flex flex-col items-center text-center p-4">
        <FaArrowsRotate className="text-gray-800  h-20 w-20 mb-2" />
        <div>
          <h3 className="font-semibold text-gray-700">Return Policy</h3>
          <p className="text-gray-500 text-sm">Free Shipping on all orders</p>
        </div>
      </div>
      <div className="flex flex-col items-center text-center p-4">
        <BiSupport className="text-gray-800  h-20 w-20 mb-2" />
        <div>
          <h3 className="font-semibold text-gray-800">24/7 Support</h3>
          <p className="text-gray-500 text-sm">Free Shipping on all orders</p>
        </div>
      </div>
      <div className="flex flex-col items-center text-center p-4">
        <RiSecurePaymentFill className="text-gray-800 h-20 w-20  mb-2" />
        <div>
          <h3 className="font-semibold text-gray-700">Secure Payment</h3>
          <p className="text-gray-500 text-sm">Free Shipping on all orders</p>
        </div>
      </div>
    </div>
  );
};

export default Track;