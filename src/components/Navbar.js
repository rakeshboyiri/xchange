import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white py-4 px-6 flex justify-between">
      <div>
        <Link to="/" className="font-bold text-xl">MERN Listing App</Link>
      </div>
      <div>
        <Link to="/products" className="px-4">Products</Link>
        <Link to="/login" className="px-4">Login</Link>
        <Link to="/register" className="px-4">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
