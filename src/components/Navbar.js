import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link to="/">Book Finder</Link>
        </div>
        <div className="space-x-6">
          <Link to="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link to="/wishlist" className="text-white hover:text-gray-200">
            Wishlist
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
