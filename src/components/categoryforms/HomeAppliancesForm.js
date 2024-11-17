import React, { useState } from 'react';

const HomeAppliancesForm = ({ categoryDetails, setCategoryDetails }) => {
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
        <label className="block font-semibold text-sm mb-1" htmlFor="applianceType">
          Appliance Type *
        </label>
        <select
          name="applianceType"
          id="applianceType"
          value={categoryDetails.applianceType}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.applianceType ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          required
        >
          <option value="">Select Appliance Type</option>
          <option value="Refrigerator">Refrigerator</option>
          <option value="Washing Machine">Washing Machine</option>
          <option value="Microwave Oven">Microwave Oven</option>
          <option value="Air Conditioner">Air Conditioner</option>
          <option value="Television">Television</option>
          <option value="Other">Other</option>
        </select>
        {errors.applianceType && <p className="text-red-500 text-xs mt-1">{errors.applianceType}</p>}
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
        <label className="block font-semibold text-sm mb-1" htmlFor="features">
          Features *
        </label>
        <textarea
          name="features"
          id="features"
          value={categoryDetails.features}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.features ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          placeholder="e.g., Energy Efficient, Smart Features"
          required
        />
        {errors.features && <p className="text-red-500 text-xs mt-1">{errors.features}</p>}
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
        <label className="block font-semibold text-sm mb-1" htmlFor="energyRating">
          Energy Rating *
        </label>
        <select
          name="energyRating"
          id="energyRating"
          value={categoryDetails.energyRating}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.energyRating ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          required
        >
          <option value="">Select Energy Rating</option>
          <option value="1 Star">1 Star</option>
          <option value="2 Star">2 Star</option>
          <option value="3 Star">3 Star</option>
          <option value="4 Star">4 Star</option>
          <option value="5 Star">5 Star</option>
        </select>
        {errors.energyRating && <p className="text-red-500 text-xs mt-1">{errors.energyRating}</p>}
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

export default HomeAppliancesForm;
