import React, { useState } from 'react';

const FurnitureForm = ({ categoryDetails, setCategoryDetails }) => {
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCategoryDetails({ ...categoryDetails, [name]: value });
  };

  const handleValidation = () => {
    const newErrors = {};
    Object.keys(categoryDetails).forEach((key) => {
      if (!categoryDetails[key]) {
        newErrors[key] = 'This field is required';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      console.log('Form is valid. Proceed to the next step.');
    }
  };

  return (
    <form onSubmit={handleNext} className="w-full max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <label className="block font-semibold text-sm mb-1" htmlFor="furnitureType">
          Furniture Type *
        </label>
        <select
          name="furnitureType"
          id="furnitureType"
          value={categoryDetails.furnitureType}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.furnitureType ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          required
        >
          <option value="">Select Furniture Type</option>
          <option value="Chair">Chair</option>
          <option value="Table">Table</option>
          <option value="Bed">Bed</option>
          <option value="Sofa">Sofa</option>
          <option value="Cupboard">Cupboard</option>
          <option value="Other">Other</option>
        </select>
        {errors.furnitureType && <p className="text-red-500 text-xs mt-1">{errors.furnitureType}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-semibold text-sm mb-1" htmlFor="material">
          Material *
        </label>
        <input
          type="text"
          name="material"
          id="material"
          value={categoryDetails.material}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.material ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          placeholder="e.g., Wood, Metal, Plastic"
          required
        />
        {errors.material && <p className="text-red-500 text-xs mt-1">{errors.material}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-semibold text-sm mb-1" htmlFor="dimensions">
          Dimensions (L x W x H in inches) *
        </label>
        <input
          type="text"
          name="dimensions"
          id="dimensions"
          value={categoryDetails.dimensions}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.dimensions ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          placeholder="e.g., 72 x 36 x 30"
          required
        />
        {errors.dimensions && <p className="text-red-500 text-xs mt-1">{errors.dimensions}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-semibold text-sm mb-1" htmlFor="color">
          Color *
        </label>
        <input
          type="text"
          name="color"
          id="color"
          value={categoryDetails.color}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.color ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          placeholder="e.g., Brown, Black, White"
          required
        />
        {errors.color && <p className="text-red-500 text-xs mt-1">{errors.color}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-semibold text-sm mb-1" htmlFor="condition">
          Condition *
        </label>
        <select
          name="condition"
          id="condition"
          value={categoryDetails.condition}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.condition ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          required
        >
          <option value="">Select Condition</option>
          <option value="New">New</option>
          <option value="Used">Used</option>
          <option value="Refurbished">Refurbished</option>
        </select>
        {errors.condition && <p className="text-red-500 text-xs mt-1">{errors.condition}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-semibold text-sm mb-1" htmlFor="price">
          Price (in USD) *
        </label>
        <input
          type="number"
          name="price"
          id="price"
          value={categoryDetails.price}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.price ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          placeholder="e.g., 500"
          required
        />
        {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-semibold text-sm mb-1" htmlFor="furnitureDescription">
          Furniture Description *
        </label>
        <textarea
          name="furnitureDescription"
          id="furnitureDescription"
          value={categoryDetails.furnitureDescription}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.furnitureDescription ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          placeholder="Provide additional details about the furniture, its features, and condition"
          required
        />
        {errors.furnitureDescription && <p className="text-red-500 text-xs mt-1">{errors.furnitureDescription}</p>}
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600"
      >
        Next
      </button>
    </form>
  );
};

export default FurnitureForm;
