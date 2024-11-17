import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../../assets/pic.png'; // Adjust the path if necessary

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
    { id: 11, name: 'Home Appliances', image: pic },
    { id: 12, name: 'Jewelry', image: pic },
    { id: 13, name: 'Music', image: pic },
    { id: 14, name: 'Gaming', image: pic },
    { id: 15, name: 'Photography', image: pic },
    { id: 16, name: 'Art & Collectibles', image: pic },
    { id: 17, name: 'Pets', image: pic },
    { id: 18, name: 'Watches', image: pic },
    { id: 19, name: 'Stationery', image: pic },
    { id: 20, name: 'Shoes', image: pic },
  ];

  return (
    <div className="p-6"> {/* Added padding for spacing around grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"> {/* Ensure only 4 cards per row on larger screens */}
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            className="block bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-700">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
