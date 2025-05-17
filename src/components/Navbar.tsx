import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-600">
          PureLife
        </Link>

        {/* Navigation links */}
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="text-gray-700 hover:text-green-600 transition">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-green-600 transition">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-green-600 transition">
            Contact
          </Link>
        </div>

        {/* Button */}
        <Link
          to="/nutrition-survey"
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
