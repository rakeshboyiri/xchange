import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../Header";
import mobile from "../../assets/Mobile.jpeg";
import electonics from "../../assets/electronic.jpg";
import vehicles from "../../assets/vehicle.jpg";
import furniture from "../../assets/furniture.jpeg";
import homeApp from "../../assets/homeappliances.jpg";
import essential from "../../assets/Essentials.png";
import homelive from "../../assets/homeandliving.jpeg";
import properties from "../../assets/properties.jpg";
import groceries from "../../assets/groceries.webp";
import sports from "../../assets/sports.jpeg";
import books from "../../assets/books.jpg";
import health from "../../assets/health.jpeg";
import Footer from "../Footer";

const CategoryCard = () => {
  const categories = [
    { id: 1, name: "Mobiles", image: mobile },
    { id: 2, name: "Electronics", image: electonics },
    { id: 3, name: "Vehicles", image: vehicles },
    { id: 4, name: "Furniture", image: furniture },
    { id: 5, name: "Home & Appliances", image: homeApp },
    { id: 6, name: "Essentials", image: essential },
    { id: 7, name: "Home & Living", image: homelive },
    { id: 8, name: "Properties", image: properties },
    { id: 9, name: "Health & Beauty", image: health },
    { id: 10, name: "Groceries", image: groceries },
    { id: 11, name: "Sports", image: sports },
    { id: 12, name: "Books", image: books },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20,
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const backgroundVariants = {
    animate: {
      x: ["0%", "20%", "-15%", "30%", "-10%", "0%"], // Random positions
      y: ["0%", "-20%", "15%", "-25%", "10%", "0%"], // Random positions
      transition: {
        duration: 20, // 20-second cycle
        repeat: Infinity, // Loop the animation
        ease: "easeInOut",
      },
    },
  };

  return (
    <div>
      <Header />
      <div className="p-10 mt-[110px] relative bg-gray-300 min-h-screen"> {/* Ash background */}
        <motion.div
          className="border border-gray-300 rounded-lg p-6 shadow-md bg-white"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h2 className="text-xl font-bold mb-6 text-center text-gray-800">
            Select a Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <motion.div
                key={category.id}
                className="relative bg-white shadow-lg rounded-md overflow-hidden cursor-pointer"
                variants={cardVariants}
                whileHover={{ scale: 1.1, rotate: 2 }}
                style={{ maxWidth: "200px", margin: "auto" }}
              >
                <Link to={`/category/${category.id}`}>
                  {/* Card Content */}
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-sm font-medium text-gray-700">
                      {category.name}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />

    </div>
  );
};

export default CategoryCard;
