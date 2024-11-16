import React, { useState } from 'react';

const ProductCategoryDropdown = ({ categories, setSelectedCategory, addCategory }) => {
    const [newCategory, setNewCategory] = useState('');
    const [isAdding, setIsAdding] = useState(false);

    const handleAddCategory = () => {
        addCategory(newCategory.trim());
        setNewCategory('');
        setIsAdding(false);
    };

    return (
        <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Select Category</h3>
            <select
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
            >
                <option value="">-- Select a Category --</option>
                {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                ))}
                <option value="add-new">Add New Category</option>
            </select>
            {isAdding && (
                <div className="space-y-2">
                    <input
                        type="text"
                        placeholder="New Category"
                        className="w-full p-2 border border-gray-300 rounded"
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                    />
                    <button
                        onClick={handleAddCategory}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
                    >
                        Add
                    </button>
                </div>
            )}
            {!isAdding && (
                <button
                    onClick={() => setIsAdding(true)}
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500"
                >
                    Add New Category
                </button>
            )}
        </div>
    );
};

export default ProductCategoryDropdown;
