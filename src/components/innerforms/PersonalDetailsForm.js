import React from 'react';

const PersonalDetailsForm = ({ formData, setFormData }) => {
    return (
        <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Personal Details</h3>
            <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border border-gray-300 rounded"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input
                type="text"
                placeholder="Contact Number"
                className="w-full p-2 border border-gray-300 rounded"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            />
        </div>
    );
};

export default PersonalDetailsForm;
