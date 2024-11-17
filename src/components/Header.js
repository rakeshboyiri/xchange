import React from "react";

const Header = () => {
  return (
    <header className="bg-green-500 text-white shadow-md">
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
      </div>

      {/* Navigation Section */}
      <div className="border-t border-green-600">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
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
                href={`/${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                className="hover:underline hover:text-green-300 transition duration-150"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Search & Profile Section */}
          <div className="flex items-center space-x-6">
            {/* Search Bar */}
            <div className="relative flex-grow hidden md:block">
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

            {/* User Profile & Country */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="bg-gray-200 text-black rounded-full h-8 w-8 flex items-center justify-center">
                  R
                </span>
                <span className="hidden sm:inline-block font-medium">rakesh</span>
              </div>
              <button
                className="px-4 py-2 bg-white text-green-500 rounded-full hover:bg-green-600 hover:text-white transition"
                aria-label="Country Selector"
              >
                India   
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
