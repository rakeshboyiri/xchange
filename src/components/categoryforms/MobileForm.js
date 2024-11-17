import React, { useState } from 'react';

const MobileForm = ({ categoryDetails, setCategoryDetails }) => {
  const [errors, setErrors] = useState({});
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCategoryDetails({ ...categoryDetails, [name]: value });
  };

  const handleValidation = () => {
    const newErrors = {};
    Object.keys(categoryDetails).forEach((key) => {
      if (!categoryDetails[key] && key !== 'negotiable') {
        newErrors[key] = 'This field is required';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e) => {
    if (handleValidation()) {
      e.preventDefault();
    } else {
      e.preventDefault();
    }
  };

  return (
    <form onSubmit={handleNext} className="w-full max-w-lg mx-auto ml-0 p-6 bg-white shadow-md rounded-lg">
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
        <label className="block font-semibold text-sm mb-1" htmlFor="adName">
          Ad Name *
        </label>
        <input
          type="text"
          name="adName"
          id="adName"
          value={categoryDetails.adName}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.adName ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          required
        />
        {errors.adName && <p className="text-red-500 text-xs mt-1">{errors.adName}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-semibold text-sm mb-1" htmlFor="model">
          Model *
        </label>
        <input
          type="text"
          name="model"
          id="model"
          value={categoryDetails.model}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.model ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          required
        />
        {errors.model && <p className="text-red-500 text-xs mt-1">{errors.model}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-semibold text-sm mb-1" htmlFor="description">
          Description *
        </label>
        <textarea
          name="description"
          id="description"
          value={categoryDetails.description}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          required
        />
        {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
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

      <div className="mb-4">
        <label className="block font-semibold text-sm mb-1" htmlFor="negotiable">
          Negotiable *
        </label>
        <select
          name="negotiable"
          id="negotiable"
          value={categoryDetails.negotiable}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.negotiable ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          required
        >
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
        {errors.negotiable && <p className="text-red-500 text-xs mt-1">{errors.negotiable}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-semibold text-sm mb-1" htmlFor="features">
          Features *
        </label>
        <input
          type="text"
          name="features"
          id="features"
          value={categoryDetails.features}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.features ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          required
        />
        {errors.features && <p className="text-red-500 text-xs mt-1">{errors.features}</p>}
      </div>
    </form>
  );
};

export default MobileForm;
