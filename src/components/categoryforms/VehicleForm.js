import React, { useState } from 'react';

const VehicleForm = ({ categoryDetails, setCategoryDetails }) => {
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
        <label className="block font-semibold text-sm mb-1" htmlFor="year">
          Year of Manufacture *
        </label>
        <input
          type="number"
          name="year"
          id="year"
          value={categoryDetails.year}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.year ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          required
        />
        {errors.year && <p className="text-red-500 text-xs mt-1">{errors.year}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-semibold text-sm mb-1" htmlFor="mileage">
          Mileage (km) *
        </label>
        <input
          type="number"
          name="mileage"
          id="mileage"
          value={categoryDetails.mileage}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.mileage ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          required
        />
        {errors.mileage && <p className="text-red-500 text-xs mt-1">{errors.mileage}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-semibold text-sm mb-1" htmlFor="fuelType">
          Fuel Type *
        </label>
        <select
          name="fuelType"
          id="fuelType"
          value={categoryDetails.fuelType}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.fuelType ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          required
        >
          <option value="">Select Fuel Type</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Electric</option>
          <option value="Hybrid">Hybrid</option>
        </select>
        {errors.fuelType && <p className="text-red-500 text-xs mt-1">{errors.fuelType}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-semibold text-sm mb-1" htmlFor="transmission">
          Transmission Type *
        </label>
        <select
          name="transmission"
          id="transmission"
          value={categoryDetails.transmission}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.transmission ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          required
        >
          <option value="">Select Transmission</option>
          <option value="Manual">Manual</option>
          <option value="Automatic">Automatic</option>
          <option value="Semi-Automatic">Semi-Automatic</option>
        </select>
        {errors.transmission && <p className="text-red-500 text-xs mt-1">{errors.transmission}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-semibold text-sm mb-1" htmlFor="vehicleType">
          Vehicle Type *
        </label>
        <select
          name="vehicleType"
          id="vehicleType"
          value={categoryDetails.vehicleType}
          onChange={handleInputChange}
          className={`w-full p-3 border ${errors.vehicleType ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          required
        >
          <option value="">Select Vehicle Type</option>
          <option value="Car">Car</option>
          <option value="Motorcycle">Motorcycle</option>
          <option value="Truck">Truck</option>
          <option value="SUV">SUV</option>
        </select>
        {errors.vehicleType && <p className="text-red-500 text-xs mt-1">{errors.vehicleType}</p>}
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
    </form>
  );
};

export default VehicleForm;
