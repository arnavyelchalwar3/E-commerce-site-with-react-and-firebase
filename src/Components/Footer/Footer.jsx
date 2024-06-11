import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-semibold mb-4">CATEGORIES</h3>
          <ul className="text-gray-400">
            <li>Women</li>
            <li>Men</li>
            <li>Shoes</li>
            <li>Watches</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">HELP</h3>
          <ul className="text-gray-400">
            <li>Track Order</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">GET IN TOUCH</h3>
          <p className="text-gray-400 mb-4">
            Any questions? Let us know in store at 8th floor, 379 Hudson St. New York, NY 10018 or call us on (+1) 96 716 6879
          </p>
          <div className="flex items-center space-x-4">
            <FaFacebook className="text-gray-400" />
            <FaInstagram className="text-gray-400" />
            <FaPinterest className="text-gray-400" />
          </div>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">NEWSLETTER</h3>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="email@example.com"
              className="bg-gray-800 text-gray-400 py-2 px-4 rounded-l-md focus:outline-none"
            />
            <button className="bg-purple-600 text-white py-2 px-4 rounded-r-md">SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8">
        <div className="flex items-center justify-between text-gray-400">
          <div>
            <img src="/path/to/payment-icons.png" alt="Payment Icons" className="h-6" />
          </div>
          <p>Copyright &copy;2024 All rights reserved | This template is made with &#10084; by Max Store</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;