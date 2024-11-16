import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const CategoryDetails = () => {
  const { id } = useParams();  // Get the category ID from the URL
  const [productDetails, setProductDetails] = useState({});
  const [images, setImages] = useState([]);

  // Handle the change of form fields
  const handleInputChange = (e) => {
    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value,
    });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  // Define the form based on category ID
  const renderCategoryForm = () => {
    switch (id) {
      case '1': // Mobiles
        return (
          <>
            <input
              type="text"
              name="brand"
              placeholder="Brand"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="model"
              placeholder="Model"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={handleInputChange}
            />
          </>
        );
      case '2': // Electronics
        return (
          <>
            <input
              type="text"
              name="brand"
              placeholder="Brand"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="warranty"
              placeholder="Warranty"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={handleInputChange}
            />
          </>
        );
      case '3': // Clothing
        return (
          <>
            <input
              type="text"
              name="size"
              placeholder="Size"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="material"
              placeholder="Material"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={handleInputChange}
            />
          </>
        );
      default:
        return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Product Details:', productDetails);
    console.log('Uploaded Images:', images);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800">Add Product for {id === '1' ? 'Mobiles' : id === '2' ? 'Electronics' : 'Clothing'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {renderCategoryForm()}
        <div>
          <input
            type="file"
            multiple
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <p className="text-sm text-gray-500">You can upload multiple images</p>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CategoryDetails;
