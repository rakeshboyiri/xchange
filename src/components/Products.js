import React from 'react';

const Products = () => {
  const products = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 100, image: 'https://via.placeholder.com/300' },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 200, image: 'https://via.placeholder.com/300' },
    { id: 3, name: 'Product 3', description: 'Description 3', price: 300, image: 'https://via.placeholder.com/300' },
  ];

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded p-4 shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-green-500 font-bold mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
