"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Images from "../constant/images";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed w-full font-Montserrat bg-white/60 backdrop-blur-lg z-50 shadow-sm overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo + Brand */}
          <div
            className="flex items-center cursor-pointer flex-shrink-0"
            onClick={scrollToTop}
          >
            <img
              src={Images.Logo}
              alt="Pop Food Ghana Ltd"
              className="w-8 h-8"
            />
            <span className="ml-2 text-lg font-bold hover:text-green-600 text-gray-900 truncate">
              Pop Food Ghana Ltd
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <button
              onClick={scrollToTop}
              className="text-gray-600 hover:text-green-600 transition"
            >
              Home
            </button>
            <a
              href="#features"
              className="text-gray-600 hover:text-green-600 transition"
            >
              Features
            </a>
            <a
              href="#products"
              className="text-gray-600 hover:text-green-600 transition"
            >
              Products
            </a>
            <a
              href="#process"
              className="text-gray-600 hover:text-green-600 transition"
            >
              Process
            </a>
            <a
              href="#innovator"
              className="text-gray-600 hover:text-green-600 transition"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-green-600 transition"
            >
              Contact
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white w-full">
            <button
              onClick={() => {
                scrollToTop();
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-green-600"
            >
              Home
            </button>
            <a
              href="#features"
              className="block px-3 py-2 text-gray-600 hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#products"
              className="block px-3 py-2 text-gray-600 hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a
              href="#process"
              className="block px-3 py-2 text-gray-600 hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Process
            </a>
            <a
              href="#innovator"
              className="block px-3 py-2 text-gray-600 hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-600 hover:text-green-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
