import React, { useState } from 'react';

const HomeAndLivingForm = ({ categoryDetails, setCategoryDetails }) => {
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
        <label className="block font-semibold text-sm mb-1" htmlFor="category">
          Category *
        </label>
        <select
          name="category"
          id="category"
          value={categoryDetails.category}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.category ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          required
        >
          <option value="">Select Category</option>
          <option value="Furniture">Furniture</option>
          <option value="Appliances">Appliances</option>
          <option value="Decor">Decor</option>
          <option value="Properties">Properties</option>
        </select>
        {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
      </div>

      {/* Property Type Field (Only for Properties) */}
      {categoryDetails.category === 'Properties' && (
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
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Commercial">Commercial</option>
            <option value="Land">Land</option>
          </select>
          {errors.propertyType && <p className="text-red-500 text-xs mt-1">{errors.propertyType}</p>}
        </div>
      )}

      {/* Room Size Field */}
      {categoryDetails.category === 'Properties' && (
        <div className="mb-4">
          <label className="block font-semibold text-sm mb-1" htmlFor="roomSize">
            Room Size (in sq ft) *
          </label>
          <input
            type="number"
            name="roomSize"
            id="roomSize"
            value={categoryDetails.roomSize}
            onChange={handleInputChange}
            className={`w-full p-3 border ${errors.roomSize ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
            required
          />
          {errors.roomSize && <p className="text-red-500 text-xs mt-1">{errors.roomSize}</p>}
        </div>
      )}

      {/* Number of Rooms */}
      {categoryDetails.category === 'Properties' && (
        <div className="mb-4">
          <label className="block font-semibold text-sm mb-1" htmlFor="rooms">
            Number of Rooms *
          </label>
          <input
            type="number"
            name="rooms"
            id="rooms"
            value={categoryDetails.rooms}
            onChange={handleInputChange}
            className={`w-full p-3 border ${errors.rooms ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
            required
          />
          {errors.rooms && <p className="text-red-500 text-xs mt-1">{errors.rooms}</p>}
        </div>
      )}

      {/* Material Type for Furniture or Decor */}
      {['Furniture', 'Decor'].includes(categoryDetails.category) && (
        <div className="mb-4">
          <label className="block font-semibold text-sm mb-1" htmlFor="materialType">
            Material Type *
          </label>
          <input
            type="text"
            name="materialType"
            id="materialType"
            value={categoryDetails.materialType}
            onChange={handleInputChange}
            className={`w-full p-3 border ${errors.materialType ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
            required
          />
          {errors.materialType && <p className="text-red-500 text-xs mt-1">{errors.materialType}</p>}
        </div>
      )}

      <div className="mb-4">
        <label className="block font-semibold text-sm mb-1" htmlFor="brand">
          Brand/Manufacturer
        </label>
        <input
          type="text"
          name="brand"
          id="brand"
          value={categoryDetails.brand}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.brand ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
        />
        {errors.brand && <p className="text-red-500 text-xs mt-1">{errors.brand}</p>}
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
          <option value="New">New</option>
          <option value="Used">Used</option>
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
    </form>
  );
};

export default HomeAndLivingForm;
