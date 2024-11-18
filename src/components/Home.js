import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
  return (
    
    <div className="text-center">
      <Header />
      <div className="h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Xchange</h1> <br/>
      <p className="text-gray-600">Your one-stop platform for finding amazing deals!</p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
