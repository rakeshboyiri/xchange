import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Register</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Sign In</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" className="hover:underline">Explore Ads</a></li>
            </ul>
          </div>

          {/* Help & Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Contact us</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">About us</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <p className="mb-4">
              Be the first one to know about discounts, offers, and events. Unsubscribe whenever you like.
            </p>
            <div className="flex items-center mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-black rounded-l-md focus:outline-none"
              />
              <button className="px-4 py-2 bg-white text-green-600 rounded-r-md hover:bg-gray-100">
                Subscribe Now
              </button>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-gray-300"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-2xl hover:text-gray-300"><i className="fab fa-youtube"></i></a>
              <a href="#" className="text-2xl hover:text-gray-300"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-2xl hover:text-gray-300"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center text-sm">
          <p>Copyright © Xchange, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
