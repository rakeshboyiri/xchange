import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import pic from '../../assets/pic.png'; // Adjust the path if necessary
import backgroundImage1 from '../../assets/back.svg'; // First background image
import backgroundImage2 from '../../assets/back1.svg'; // Second background image

const CategoryCard = () => {
  const categories = [
    { id: 1, name: 'Mobiles', image: pic },
    { id: 2, name: 'Electronics', image: pic },
    { id: 3, name: 'Clothing', image: pic },
    { id: 4, name: 'Furniture', image: pic },
    { id: 5, name: 'Books', image: pic },
    { id: 6, name: 'Sports', image: pic },
    { id: 7, name: 'Toys', image: pic },
    { id: 8, name: 'Automotive', image: pic },
    { id: 9, name: 'Health & Beauty', image: pic },
    { id: 10, name: 'Groceries', image: pic },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 150,
        damping: 20,
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  const backgroundVariants = {
    animate: {
      x: ['0%', '20%', '-15%', '30%', '-10%', '0%'], // Random positions
      y: ['0%', '-20%', '15%', '-25%', '10%', '0%'], // Random positions
      transition: {
        duration: 20, // 20-second cycle
        repeat: Infinity, // Loop the animation
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="p-10 relative overflow-hidden">
      {/* First background image */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url(${backgroundImage1})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '150px', // Adjust size as needed
          backgroundPosition: 'center',
        }}
        variants={backgroundVariants}
        animate="animate"
      />

      {/* Second background image */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url(${backgroundImage2})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '200px', // Adjust size as needed
          backgroundPosition: 'center',
        }}
        variants={backgroundVariants}
        animate="animate"
      />

      <motion.div
        className="border border-gray-300 rounded-lg p-6 shadow-md relative"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <h2 className="text-xl font-bold mb-6 text-center">Select a Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className="relative bg-white shadow-lg rounded-md overflow-hidden cursor-pointer"
              variants={cardVariants}
              whileHover={{ scale: 1.1, rotate: 2 }}
              style={{ maxWidth: '200px', margin: 'auto' }}
            >
              <Link to={`/category/${category.id}`}>
                {/* Card Content */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-sm font-medium text-gray-700">{category.name}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CategoryCard;
