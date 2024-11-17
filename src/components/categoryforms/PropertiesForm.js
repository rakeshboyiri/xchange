import React, { useState } from 'react';

const PropertiesForm = ({ categoryDetails, setCategoryDetails }) => {
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
        <label className="block font-semibold text-sm mb-1" htmlFor="propertyType">
          Property Type *
        </label>
        <select
          name="propertyType"
          id="propertyType"
          value={categoryDetails.propertyType}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.propertyType ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          required
        >
          <option value="">Select Property Type</option>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
          <option value="Land">Land</option>
          <option value="Commercial Property">Commercial Property</option>
          <option value="Other">Other</option>
        </select>
        {errors.propertyType && <p className="text-red-500 text-xs mt-1">{errors.propertyType}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-semibold text-sm mb-1" htmlFor="location">
          Location *
        </label>
        <input
          type="text"
          name="location"
          id="location"
          value={categoryDetails.location}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.location ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          placeholder="City, State, or Address"
          required
        />
        {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-semibold text-sm mb-1" htmlFor="area">
          Area (in Sq. Ft.) *
        </label>
        <input
          type="number"
          name="area"
          id="area"
          value={categoryDetails.area}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.area ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          placeholder="e.g., 1500"
          required
        />
        {errors.area && <p className="text-red-500 text-xs mt-1">{errors.area}</p>}
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
          placeholder="e.g., 200000"
          required
        />
        {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-semibold text-sm mb-1" htmlFor="bedrooms">
          Number of Bedrooms *
        </label>
        <input
          type="number"
          name="bedrooms"
          id="bedrooms"
          value={categoryDetails.bedrooms}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.bedrooms ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          placeholder="e.g., 3"
          required
        />
        {errors.bedrooms && <p className="text-red-500 text-xs mt-1">{errors.bedrooms}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-semibold text-sm mb-1" htmlFor="bathrooms">
          Number of Bathrooms *
        </label>
        <input
          type="number"
          name="bathrooms"
          id="bathrooms"
          value={categoryDetails.bathrooms}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.bathrooms ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          placeholder="e.g., 2"
          required
        />
        {errors.bathrooms && <p className="text-red-500 text-xs mt-1">{errors.bathrooms}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-semibold text-sm mb-1" htmlFor="furnishing">
          Furnishing *
        </label>
        <select
          name="furnishing"
          id="furnishing"
          value={categoryDetails.furnishing}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.furnishing ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          required
        >
          <option value="">Select Furnishing</option>
          <option value="Furnished">Furnished</option>
          <option value="Semi-Furnished">Semi-Furnished</option>
          <option value="Unfurnished">Unfurnished</option>
        </select>
        {errors.furnishing && <p className="text-red-500 text-xs mt-1">{errors.furnishing}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-semibold text-sm mb-1" htmlFor="propertyDescription">
          Property Description *
        </label>
        <textarea
          name="propertyDescription"
          id="propertyDescription"
          value={categoryDetails.propertyDescription}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.propertyDescription ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          placeholder="Describe the property, its amenities, and nearby facilities"
          required
        />
        {errors.propertyDescription && <p className="text-red-500 text-xs mt-1">{errors.propertyDescription}</p>}
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

export default PropertiesForm;
