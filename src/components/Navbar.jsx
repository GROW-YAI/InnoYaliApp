"use client";

import { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">
              OkroPro
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
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

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            <a
              href="#features"
              className="block px-3 py-2 text-gray-600 hover:text-green-600"
            >
              Features
            </a>
            <a
              href="#products"
              className="block px-3 py-2 text-gray-600 hover:text-green-600"
            >
              Products
            </a>
            <a
              href="#innovator"
              className="block px-3 py-2 text-gray-600 hover:text-green-600"
            >
              About
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-600 hover:text-green-600"
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
