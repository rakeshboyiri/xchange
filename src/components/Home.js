import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import Header from './Header';
import Footer from './Footer';

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleSellClick = () => {
    navigate('/categories'); // Navigate to /category on click
  };

  return (
    <div className="text-center">
      <Header />
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Xchange</h1>
        <p className="text-gray-600 mb-6">Your one-stop platform for finding amazing deals!</p>
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
            Buy
          </button>
          <button
            onClick={handleSellClick} // Attach click handler
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600"
          >
            Sell
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
