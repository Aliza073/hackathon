import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">
          MOR<span className="text-black">ENT</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-blue-600">
            How it works
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Featured
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Partnership
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Business Relation
          </a>
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-600">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            <i className="fab fa-twitter"></i> Twitter
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="text-gray-600 hover:text-blue-600">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;