import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Simulate a user object for demonstration
  const user = { name: "Rakesh", icon: "R" };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <header className="bg-green-500 text-white shadow-md fixed top-0 left-0 w-full z-50">
      {/* Top Section */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div>
          <a href="/">
            <img
              src="https://xchangehyd.com/assets/img/logo/logo.png"
              alt="XChange Logo"
              className="w-[150px] h-10 object-contain"
            />
          </a>
        </div>

        {/* Search Bar */}
        <div className="relative mx-6 w-[50%] flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-full text-black focus:outline-none"
          />
          <button
            className="absolute right-2 top-2 text-black hover:text-green-500 transition"
            aria-label="Search"
          >
            🔍
          </button>
        </div>

        {/* Chat Icon - Visible only when logged in */}
        {isLoggedIn && (
  <button
    onClick={() => navigate("/chat")}
    className="ml-6 text-3xl text-white hover:text-green-300 transition"
    aria-label="Chat"
  >
    💬
  </button>
)}


        {/* User Profile & Login/Logout */}
        <div className="flex items-center space-x-4">
          {!isLoggedIn ? (
            <button
              onClick={handleLogin}
              className="px-4 py-2 bg-white text-green-500 rounded-full hover:bg-green-600 hover:text-white transition"
            >
              Login
            </button>
          ) : (
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {/* Profile Icon */}
                <span className="bg-gray-200 text-black rounded-full h-8 w-8 flex items-center justify-center">
                  {user.icon}
                </span>
                {/* User Name */}
                <span className="hidden sm:inline-block font-medium">
                  {user.name}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-white text-red-500 rounded-full hover:bg-red-600 hover:text-white transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Country Selector */}
        <div className="flex items-center space-x-4">
          <button
            className="px-4 py-2 bg-white text-green-500 rounded-full hover:bg-green-600 hover:text-white transition"
          >
            India
          </button>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="border-t border-green-600">
        <div className="flex items-center justify-center px-6 py-3">
          <nav className="flex space-x-6 text-sm font-medium">
            {[
              "Categories",
              "Mobiles",
              "Electronics",
              "Vehicles",
              "Home & Living",
              "Essentials",
              "Furniture",
              "Properties",
              "Home Appliance",
            ].map((item) => (
              <a
                key={item}
                href={`/${item
                  .toLowerCase()
                  .replace(/ & /g, "-")
                  .replace(/ /g, "-")}`}
                className="hover:underline hover:text-green-300 transition duration-150"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
