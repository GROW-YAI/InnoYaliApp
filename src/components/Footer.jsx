import { Facebook, Instagram } from "lucide-react";
import Images from "../constant/images";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20 py-20 text-center md:text-left">
          
          {/* Logo & About */}
          <div className="space-y-8 flex flex-col items-center md:items-start">
            <div className="flex items-center justify-center md:justify-start">
              <img
                src={Images.Logo}
                alt="Pop Food Ghana Ltd"
                className="w-12 h-12"
                title="Logo"
              />
              <span className="ml-4 text-2xl font-bold">
                Pop Food Ghana Ltd.
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md text-center md:text-left text-lg">
              Revolutionizing okro preservation through innovative processing
              technology.
            </p>

            <div className="space-y-4">
              <p className="text-gray-400 text-lg">Follow us on social media</p>
              <div className="flex space-x-6 justify-center md:justify-start">
                <a
                  href="https://www.instagram.com/pop_foods_ghana_limited?igsh=YzljYTk1ODg3Zg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110"
                >
                  <Facebook className="h-7 w-7" />
                </a>
                <a
                  href="https://www.instagram.com/pop_foods_ghana_limited?igsh=YzljYTk1ODg3Zg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110"
                >
                  <Instagram className="h-7 w-7" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xl font-semibold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-lg"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-lg"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-lg"
                >
                  Our Process
                </a>
              </li>
              <li>
                <a
                  href="#innovator"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-lg"
                >
                  The Innovator
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xl font-semibold mb-8">Products</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://paystack.com/buy/pop-okra-powder-zdnyve"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-lg"
                >
                  Okra Powder
                </a>
              </li>
              <li>
                <a
                  href="https://paystack.com/buy/pop-okra-chunks-wsvyvm"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-lg"
                >
                  Dried Chunks
                </a>
              </li>
              <li>
                <a
                  href="https://paystack.com/buy/pop-okra-chunks-wsvyvm"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-lg"
                >
                  Bulk Orders
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-base md:text-lg text-center">
              © {new Date().getFullYear()} Pop Food Ghana Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;