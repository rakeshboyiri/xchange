import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Products from './components/Products';
import SellForm from './pages/SellForm';
import Chatbox from './components/Chatbox';
import CategoryCard from './components/category/CategoryCard';
import CategoryDetails from './components/category/CategoryDetails';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

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
          <Route path="/chat" element={<Chatbox />} />
          <Route path="/cat" element={<CategoryCard />} />
          <Route path="/category/:id" element={<CategoryDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
