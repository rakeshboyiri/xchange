import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Registered:', formData);
  };

  return (
    <div className="max-w-md mx-auto py-10">
      <h2 className="text-2xl font-bold mb-6">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          className="w-full border border-gray-300 px-4 py-2 rounded"
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 px-4 py-2 rounded"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 px-4 py-2 rounded"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
    