import React, { useState } from 'react';

const ClothingForm = ({ categoryDetails, setCategoryDetails }) => {
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
        <label className="block font-semibold text-sm mb-1" htmlFor="brand">
          Brand *
        </label>
        <input
          type="text"
          name="brand"
          id="brand"
          value={categoryDetails.brand}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.brand ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          required
        />
        {errors.brand && <p className="text-red-500 text-xs mt-1">{errors.brand}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-semibold text-sm mb-1" htmlFor="type">
          Type *
        </label>
        <select
          name="type"
          id="type"
          value={categoryDetails.type}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.type ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          required
        >
          <option value="">Select Type</option>
          <option value="menswear">Menswear</option>
          <option value="womenswear">Womenswear</option>
          <option value="kidswear">Kidswear</option>
          <option value="accessories">Accessories</option>
        </select>
        {errors.type && <p className="text-red-500 text-xs mt-1">{errors.type}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-semibold text-sm mb-1" htmlFor="size">
          Size *
        </label>
        <input
          type="text"
          name="size"
          id="size"
          placeholder="e.g., S, M, L, XL"
          value={categoryDetails.size}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.size ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          required
        />
        {errors.size && <p className="text-red-500 text-xs mt-1">{errors.size}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-semibold text-sm mb-1" htmlFor="material">
          Material *
        </label>
        <input
          type="text"
          name="material"
          id="material"
          placeholder="e.g., Cotton, Polyester"
          value={categoryDetails.material}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.material ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          required
        />
        {errors.material && <p className="text-red-500 text-xs mt-1">{errors.material}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-semibold text-sm mb-1" htmlFor="price">
          Price *
        </label>
        <input
          type="number"
          name="price"
          id="price"
          value={categoryDetails.price}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.price ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          required
        />
        {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price}</p>}
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
          <option value="new">New</option>
          <option value="used">Used</option>
        </select>
        {errors.condition && <p className="text-red-500 text-xs mt-1">{errors.condition}</p>}
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

export default ClothingForm;
