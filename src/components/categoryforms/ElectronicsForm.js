import React, { useState } from 'react';

const ElectronicsForm = ({ electronicsCategoryDetails, setElectronicsCategoryDetails }) => {
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setElectronicsCategoryDetails({ ...electronicsCategoryDetails, [name]: files });
    } else {
      setElectronicsCategoryDetails({ ...electronicsCategoryDetails, [name]: value });
    }
  };

  const handleValidation = () => {
    const newErrors = {};
    Object.keys(electronicsCategoryDetails).forEach((key) => {
      if (!electronicsCategoryDetails[key] && key !== 'negotiable' && key !== 'photos') {
        newErrors[key] = 'This field is required';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      console.log('Form data is valid:', electronicsCategoryDetails);
      // Proceed to the next step or submit the form
    } else {
      console.log('Validation errors:', errors);
    }
  };

  return (
    <form onSubmit={handleNext} className="w-full max-w-lg mx-auto p-6 bg-gray-100 shadow-md rounded-lg ml-0">
      <div className="mb-4">
        <label className="block font-semibold text-sm mb-1" htmlFor="brand">
          Brand *
        </label>
        <input
          type="text"
          name="brand"
          id="brand"
          value={electronicsCategoryDetails.brand}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.brand ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
        />
        {errors.brand && <p className="text-red-500 text-xs mt-1">{errors.brand}</p>}
      </div>

      {/* Type */}
      <div className="mb-4">
        <label className="block font-semibold text-sm mb-1" htmlFor="type">
          Type *
        </label>
        <input
          type="text"
          name="type"
          id="type"
          value={electronicsCategoryDetails.type}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.type ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
        />
        {errors.type && <p className="text-red-500 text-xs mt-1">{errors.type}</p>}
      </div>

      {/* Model */}
      <div className="mb-4">
        <label className="block font-semibold text-sm mb-1" htmlFor="model">
          Model
        </label>
        <input
          type="text"
          name="model"
          id="model"
          value={electronicsCategoryDetails.model}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.model ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
        />
        {errors.model && <p className="text-red-500 text-xs mt-1">{errors.model}</p>}
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="block font-semibold text-sm mb-1" htmlFor="description">
          Description *
        </label>
        <textarea
          name="description"
          id="description"
          value={electronicsCategoryDetails.description}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
        />
        {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
      </div>

      {/* Price */}
      <div className="mb-4">
        <label className="block font-semibold text-sm mb-1" htmlFor="price">
          Price *
        </label>
        <input
          type="number"
          name="price"
          id="price"
          value={electronicsCategoryDetails.price}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.price ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
        />
        {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price}</p>}
      </div>

      {/* Condition */}
      <div className="mb-4">
        <label className="block font-semibold text-sm mb-1" htmlFor="condition">
          Condition
        </label>
        <select
          name="condition"
          id="condition"
          value={electronicsCategoryDetails.condition}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg"
        >
          <option value="new">New</option>
          <option value="used">Used</option>
        </select>
      </div>

      {/* Negotiable */}
      <div className="mb-4">
        <label className="block font-semibold text-sm mb-1" htmlFor="negotiable">
          Negotiable
        </label>
        <select
          name="negotiable"
          id="negotiable"
          value={electronicsCategoryDetails.negotiable}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg"
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      {/* Features */}
      <div className="mb-4">
        <label className="block font-semibold text-sm mb-1" htmlFor="features">
          Features
        </label>
        <textarea
          name="features"
          id="features"
          value={electronicsCategoryDetails.features}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.features ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
        />
        {errors.features && <p className="text-red-500 text-xs mt-1">{errors.features}</p>}
      </div>

      {/* Energy Rating */}
      <div className="mb-4">
        <label className="block font-semibold text-sm mb-1" htmlFor="erating">
          Energy Rating
        </label>
        <select
          name="erating"
          id="erating"
          value={electronicsCategoryDetails.erating}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg"
        >
          <option value="No">No Rating</option>
          <option value="1 Star">1 Star</option>
          <option value="2 Star">2 Star</option>
          <option value="3 Star">3 Star</option>
          <option value="4 Star">4 Star</option>
          <option value="5 Star">5 Star</option>
        </select>
      </div>
    </form>
  );
};

export default ElectronicsForm;
