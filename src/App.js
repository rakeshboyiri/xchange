import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Products from './components/Products';
import SellForm from './pages/SellForm';
import Chat from './components/Chat';
import CategoryCard from './components/category/CategoryCard';
import CategoryDetails from './components/category/CategoryDetails';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sells" element={<SellForm />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/cat" element={<CategoryCard />} />
          <Route path="/category/:id" element={<CategoryDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
