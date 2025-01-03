import React, { useState } from 'react';

const VehicleForm = ({ vehicleCategoryDetails, setVehicleCategoryDetails }) => {
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVehicleCategoryDetails({ ...vehicleCategoryDetails, [name]: value });
  };

  const handleValidation = () => {
    const newErrors = {};
    Object.keys(vehicleCategoryDetails).forEach((key) => {
      if (!vehicleCategoryDetails[key] && key !== 'negotiable') {
        newErrors[key] = 'This field is required';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      console.log('Form is valid');
    } else {
      console.log('Form has errors');
    }
  };

  return (
    <form onSubmit={handleNext} className="w-full max-w-lg mx-auto p-6 bg-gray-100  shadow-md rounded-lg">
      {[
        { label: 'Vehicle Type', name: 'type', type: 'select', options: ['Two-wheeler', 'Four-Wheeler','six-wheeler'] },
        { label: 'Brand', name: 'brand', type: 'text' },
        { label: 'Ad Name', name: 'adName', type: 'text' },
        { label: 'Model', name: 'model', type: 'text' },
        { label: 'Description', name: 'description', type: 'textarea' },
        { label: 'Price', name: 'price', type: 'number' },
        { label: 'Type', name: 'type', type: 'select', options: ['New', 'Used'] },
        { label: 'Condition', name: 'condition', type: 'select', options: ['New', 'Used'] },
        { label: 'Negotiable', name: 'negotiable', type: 'select', options: ['Yes', 'No'] },
        { label: 'Features', name: 'features', type: 'textarea' },
        { label: 'Mode of Fuel (MOF)', name: 'mof', type: 'text' },
        { label: 'Mileage', name: 'mileage', type: 'number' },
        { label: 'Fuel Type', name: 'FuelType', type: 'text' },
        { label: 'Transmission', name: 'transmission', type: 'text' },
        { label: 'Engine Type', name: 'engine', type: 'text' },
        { label: 'Color', name: 'color', type: 'text' },
        { label: 'Year', name: 'Year', type: 'number' },
      ].map((field, index) => (
        <div className="mb-4" key={index}>
          <label className="block font-semibold text-sm mb-1" htmlFor={field.name}>
            {field.label} *
          </label>
          {field.type === 'textarea' ? (
            <textarea
              name={field.name}
              id={field.name}
              value={vehicleCategoryDetails[field.name]}
              onChange={handleInputChange}
              className={`w-full p-3 border ${errors[field.name] ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
              required
            ></textarea>
          ) : field.type === 'select' ? (
            <select
              name={field.name}
              id={field.name}
              value={vehicleCategoryDetails[field.name]}
              onChange={handleInputChange}
              className={`w-full p-3 border ${errors[field.name] ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
              required
            >
              <option value="">Select {field.label}</option>
              {field.options.map((option, i) => (
                <option value={option} key={i}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              name={field.name}
              id={field.name}
              value={vehicleCategoryDetails[field.name]}
              onChange={handleInputChange}
              className={`w-full p-3 border ${errors[field.name] ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
              required
            />
          )}
          {errors[field.name] && <p className="text-red-500 text-xs mt-1">{errors[field.name]}</p>}
        </div>
      ))}

    </form>
  );
};

export default VehicleForm;
