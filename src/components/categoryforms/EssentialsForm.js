import React, { useState } from 'react';

const EssentialsForm = ({ categoryDetails, setCategoryDetails }) => {
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
        <label className="block font-semibold text-sm mb-1" htmlFor="productType">
          Product Type *
        </label>
        <select
          name="productType"
          id="productType"
          value={categoryDetails.productType}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.productType ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          required
        >
          <option value="">Select Product Type</option>
          <option value="Groceries">Groceries</option>
          <option value="Personal Care">Personal Care</option>
          <option value="Medicine">Medicine</option>
          <option value="Household Supplies">Household Supplies</option>
        </select>
        {errors.productType && <p className="text-red-500 text-xs mt-1">{errors.productType}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-semibold text-sm mb-1" htmlFor="brand">
          Brand/Manufacturer *
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
        <label className="block font-semibold text-sm mb-1" htmlFor="expiryDate">
          Expiry Date (if applicable)
        </label>
        <input
          type="date"
          name="expiryDate"
          id="expiryDate"
          value={categoryDetails.expiryDate}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.expiryDate ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
        />
        {errors.expiryDate && <p className="text-red-500 text-xs mt-1">{errors.expiryDate}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-semibold text-sm mb-1" htmlFor="quantity">
          Quantity Available *
        </label>
        <input
          type="number"
          name="quantity"
          id="quantity"
          value={categoryDetails.quantity}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.quantity ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          required
        />
        {errors.quantity && <p className="text-red-500 text-xs mt-1">{errors.quantity}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-semibold text-sm mb-1" htmlFor="price">
          Price (per unit) *
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
          <option value="New">New</option>
          <option value="Packaged">Packaged</option>
        </select>
        {errors.condition && <p className="text-red-500 text-xs mt-1">{errors.condition}</p>}
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
        <label className="block font-semibold text-sm mb-1" htmlFor="features">
          Additional Features or Details
        </label>
        <input
          type="text"
          name="features"
          id="features"
          value={categoryDetails.features}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.features ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
        />
        {errors.features && <p className="text-red-500 text-xs mt-1">{errors.features}</p>}
      </div>
    </form>
  );
};

export default EssentialsForm;
